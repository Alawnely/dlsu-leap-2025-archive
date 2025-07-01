const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 46635;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the login page
app.get('/login', (req, res) => {
  res.status(401).sendFile(path.join(__dirname, 'login.html'));
});

// Route for the timeout error page
app.get('/timeout-error', (req, res) => {
  res.status(408).sendFile(path.join(__dirname, 'timeout-error.html'));
});

// Redirect /_next/image URLs to the actual image URL
app.get('/_next/image', (req, res) => {
  const imageUrl = req.query.url;
  if (imageUrl) {
    res.redirect(imageUrl);
  } else {
    res.status(400).send('Missing url parameter');
  }
});

// Health status
app.get('/health/ready', (req, res) => {
  res.status(200).send('Ready');
});

// Health status
app.get('/health/live', (req, res) => {
  res.status(200).send('Alive');
});

// API route root
app.get('/api', (req, res) => {
  res.status(200).json({
    "status": "ok",
    "message": "Leap25 API is running, use /health/ready and /health/live endpoints for proper healthchecks."
  });
});

// API route for auth session
app.get('/api/auth/session', (req, res) => {
  res.status(200).json({
    "user": {
      "name": "no reply",
      "email": "noreply@dlsu.edu.ph",
      "image": "https://lh3.googleusercontent.com/a/ACg8ocKln08vTammJuYq33YmTq7JwK96rCc1BACR3kGnUAtD8Dkxgw=s96-c"
    },
    "expires": "9999-12-31T23:59:59.999Z"
  });
});

// API route for events search
app.get('/api/events/search', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  try {
    const eventsPath = path.join(__dirname, 'api', 'events.json');
    const eventsData = fs.readFileSync(eventsPath, 'utf8');
    const events = JSON.parse(eventsData);

    const filteredEvents = events.filter(event =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase())
    );

    res.status(200).json(filteredEvents);
  } catch (error) {
    console.error('Error reading events file:', error);
    res.status(500).json({ error: 'Failed to search events' });
  }
});

// API route for individual event by ID
app.get('/api/events/:id', (req, res) => {
  const eventId = req.params.id;

  if (!/^\d+$/.test(eventId)) {
    return res.status(400).json({ error: 'Event ID must be a number' });
  }

  try {
    const eventsPath = path.join(__dirname, 'api', 'events.json');
    const eventsData = fs.readFileSync(eventsPath, 'utf8');
    const events = JSON.parse(eventsData);

    const event = events.find(event => event.id === parseInt(eventId));

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    console.error('Error reading events file:', error);
    res.status(500).json({ error: 'Failed to load event' });
  }
});

// API route for event media
app.get('/api/events/:id/media', (req, res) => {
  const eventId = req.params.id;

  if (!/^\d+$/.test(eventId)) {
    return res.status(400).json({ error: 'Event ID must be a number' });
  }

  try {
    const mediaPath = path.join(__dirname, 'api', 'media.json');
    const mediaData = fs.readFileSync(mediaPath, 'utf8');
    const media = JSON.parse(mediaData);

    let medium = media.find(medium => medium.event_id === parseInt(eventId));

    if (!medium) {
      const eventsPath = path.join(__dirname, 'api', 'events.json');
      const eventsData = fs.readFileSync(eventsPath, 'utf8');
      const events = JSON.parse(eventsData);

      const event = events.find(event => event.id === parseInt(eventId));

      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }

      events.filter(similar => similar.title === event.title).some(slugJson => {
        medium = media.find(medium => medium.event_id === slugJson.id);
        return medium;
      });
      if (!medium) {
        return res.status(404).json({ error: 'Media not found' });
      }
    }

    res.status(200).json(medium);
  } catch (error) {
    console.error('Error reading media file:', error);
    res.status(500).json({ error: 'Failed to load media' });
  }
});

// API route for individual subtheme by ID
app.get('/api/subthemes/:id', (req, res) => {
  const subthemeId = req.params.id;

  if (!/^\d+$/.test(subthemeId)) {
    return res.status(400).json({ error: 'Subtheme ID must be a number' });
  }

  try {
    const subthemesPath = path.join(__dirname, 'api', 'subthemes.json');
    const subthemesData = fs.readFileSync(subthemesPath, 'utf8');
    const subthemes = JSON.parse(subthemesData);

    const subtheme = subthemes.find(subtheme => subtheme.id === parseInt(subthemeId));

    if (!subtheme) {
      return res.status(404).json({ error: 'Subtheme not found' });
    }

    res.status(200).json(subtheme);
  } catch (error) {
    console.error('Error reading subthemes file:', error);
    res.status(500).json({ error: 'Failed to load subtheme' });
  }
});

// API route for users
app.get('/api/users/', (req, res) => {
  res.json({});
});

// Can't find API endpoint for this lolz
/*[
  { id: 16, path: 'coral-lagoon'},
  { id: 17, path: 'pirates-cove'},
  { id: 18, path: 'northern-star-stop'},
  { id: 19, path: 'hollow-tree-hideaway'},
  { id: 20, path: 'fairy-nook'}
].forEach(subthemeParam => {
  // Route for dynamic subtheme
  app.get('/' + subthemeParam.path, (req, res) => {
    const htmlPath = path.join(__dirname, '[subtheme].html');

    // Check if the HTML file exists
    if (!fs.existsSync(htmlPath)) {
      return handle500(res, new Error('[subtheme].html not found'));
    }

    try {
      let subthemeJson;

      try {
        const subthemesPath = path.join(__dirname, 'api', 'subthemes.json');
        const subthemesData = fs.readFileSync(subthemesPath, 'utf8');
        const subthemes = JSON.parse(subthemesData);

        const subtheme = subthemes.find(subtheme => subtheme.id === subthemeParam.id);

        if (!subtheme) {
          return handle404(res, new Error(`subtheme not found: /${subtheme}/${slug}`));
        }

        subthemeJson = subtheme;
      } catch (error) {
        return handle500(res, error);
      }

      // Read the HTML file
      let htmlContent = fs.readFileSync(htmlPath, 'utf8');

      const safeReplace = (regex, str) => htmlContent = htmlContent.replace(regex, String(str).replaceAll("'", "\\'").replaceAll('"', '\\"'))

      // Replace all instances of placeholders with actual values
      safeReplace(/\$subtheme\$/g, subthemeParam.path);
      safeReplace(/\$logo_pub_url\$/g, subthemeJson.logo_pub_url);
      safeReplace(/\$background_pub_url\$/g, subthemeJson.background_pub_url);
      safeReplace(/\$title\$/g, subthemeJson.title);
      safeReplace(/\$short_desc\$/g, subthemeJson.short_desc);
      safeReplace(/\$asset\$/g, subthemeJson.title.replaceAll("'", '').replaceAll(' ', ''));

      // Send the modified HTML
      res.status(200).send(htmlContent);
    } catch (error) {
      return handle500(res, error);
    }
  });
})*/

// Route for dynamic slug
app.get('/:subtheme/:slug', (req, res) => {
  const subtheme = req.params.subtheme;
  const slug = req.params.slug;
  const htmlPath = path.join(__dirname, '[slug].html');

  // Check if the HTML file exists
  if (!fs.existsSync(htmlPath)) {
    return handle500(res, new Error('[slug].html not found'));
  }

  try {
    let slugJson, orgJson, subthemeJson, mediaJson;
    let similarSlugs;

    try {
      const eventsPath = path.join(__dirname, 'api', 'events.json');
      const eventsData = fs.readFileSync(eventsPath, 'utf8');
      const events = JSON.parse(eventsData);

      const event = events.find(event => event.slug === slug);

      if (!event) {
        return handle404(res, new Error(`event not found: /${subtheme}/${slug}`));
      }

      slugJson = event;
      similarSlugs = events.filter(similar => similar.title === event.title);
    } catch (error) {
      return handle500(res, error);
    }

    try {
      const orgsPath = path.join(__dirname, 'api', 'orgs.json');
      const orgsData = fs.readFileSync(orgsPath, 'utf8');
      const orgs = JSON.parse(orgsData);

      const org = orgs.find(org => org.id === slugJson.org_id);

      if (!org) {
        return handle404(res, new Error(`org not found: /${subtheme}/${slug}`));
      }

      orgJson = org;
    } catch (error) {
      return handle500(res, error);
    }

    try {
      const subthemesPath = path.join(__dirname, 'api', 'subthemes.json');
      const subthemesData = fs.readFileSync(subthemesPath, 'utf8');
      const subthemes = JSON.parse(subthemesData);

      const subtheme = subthemes.find(subtheme => subtheme.id === slugJson.subtheme_id);

      if (!subtheme) {
        return handle404(res, new Error(`subtheme not found: /${subtheme}/${slug}`));
      }

      subthemeJson = subtheme;
    } catch (error) {
      return handle500(res, error);
    }

    try {
      const mediaPath = path.join(__dirname, 'api', 'media.json');
      const mediaData = fs.readFileSync(mediaPath, 'utf8');
      const media = JSON.parse(mediaData);

      let medium = media.find(medium => medium.event_id === slugJson.id);

      if (!medium) {
        similarSlugs.some(slugJson => {
          medium = media.find(medium => medium.event_id === slugJson.id);
          return medium;
        });
        if (!medium) {
          //return handle404(res, new Error(`media not found: /${subtheme}/${slug}`));
          medium = { pub_url: '/api/imgur/Rjo6F4G.png' }
        }
      }

      mediaJson = medium;
    } catch (error) {
      return handle500(res, error);
    }

    // Read the HTML file
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    const safeReplace = (regex, str) => htmlContent = htmlContent.replace(regex, String(str).replaceAll('\\', '\\\\').replaceAll("'", "\\'").replaceAll('"', '\\"'))

    // Replace all instances of placeholders with actual values
    safeReplace(/\$subtheme\$/g, subtheme);
    safeReplace(/\$slug\$/g, slug);
    safeReplace(/\$id\$/g, slugJson.id);
    safeReplace(/\$title\$/g, slugJson.title.replace('LEAP 2025: ', ''));
    safeReplace(/\$description\$/g, ''); //slugJson.description
    safeReplace(/\$org\$/g, orgJson.name);
    safeReplace(/\$pub_url\$/g, mediaJson.pub_url);
    safeReplace(/\$subtheme_title\$/g, subthemeJson.title);
    safeReplace(/\$subtheme_logo_pub_url\$/g, subthemeJson.logo_pub_url);
    safeReplace(/\$json_slug\$/g, JSON.stringify(slugJson));
    safeReplace(/\$json_org\$/g, JSON.stringify(orgJson));
    safeReplace(/\$json_subtheme\$/g, JSON.stringify(subthemeJson));
    safeReplace(/\$json_media\$/g, JSON.stringify(mediaJson));

    // Send the modified HTML
    res.status(200).send(htmlContent);
  } catch (error) {
    return handle500(res, error);
  }
});

// Handle 404 errors
app.use((req, res) => {
  handle404(res);
});

function handle404(res, err) {
  if (err) {
    console.error(err.stack);
  }

  // Try to serve html file, fallback to inline HTML
  const notFoundPath = path.join(__dirname, '_not-found.html');
  res.status(404);

  // Check if html exists and serve it
  res.sendFile(notFoundPath, (err) => {
    if (err) {
      res.end();
    }
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  handle500(res, err);
});

function handle500(res, err) {
  console.error(err.stack);

  // Try to serve html file, fallback to inline HTML
  const errorPath = path.join(__dirname, 'error.html');
  res.status(500);

  // Check if html exists and serve it
  res.sendFile(errorPath, (err) => {
    if (err) {
      res.end();
    }
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from: ${__dirname}`);
});
