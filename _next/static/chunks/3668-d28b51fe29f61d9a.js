'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3668],
  {
    488: (e, t, a) => {
      a.d(t, { E1: () => n, WI: () => l });
      var r = a(1950),
        o = a(9509);
      let n = (e) => {
          if ('Fairy Nook' === e) return 'fairy-nook';
          if ('Coral Lagoon' == e) return 'coral-lagoon';
          if ('Hollowtree Hideway' == e) return 'hollow-tree-hideaway';
          if ('Northern Star Stop' == e) return 'northern-star-stop';
          if ("Pirate's Cove" == e) return 'pirates-cove';
        },
        l = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.env.LEAP_API;
          try {
            let a = await fetch(''.concat(t, '/subthemes/').concat(e), {
              next: { revalidate: 60 },
              headers: {
                Authorization: 'Bearer '.concat(r.eS),
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
            if (!a.ok) throw Error('Failed to get subtheme');
            return await a.json();
          } catch (e) {
            e instanceof TypeError
              ? console.error(
                  'Network error: Unable to fetch data. Please check your connection.'
                )
              : console.error('Unexpected error:', e.message);
          }
        };
    },
    1287: (e, t, a) => {
      a.d(t, { A: () => U });
      var r = a(5155),
        o = a(2115),
        n = a(4643),
        l = a(9434);
      function s(e) {
        let { ...t } = e;
        return (0, r.jsx)(n.bL, { 'data-slot': 'dropdown-menu', ...t });
      }
      function i(e) {
        let { ...t } = e;
        return (0, r.jsx)(n.l9, { 'data-slot': 'dropdown-menu-trigger', ...t });
      }
      function d(e) {
        let { className: t, sideOffset: a = 4, ...o } = e;
        return (0, r.jsx)(n.ZL, {
          children: (0, r.jsx)(n.UC, {
            'data-slot': 'dropdown-menu-content',
            sideOffset: a,
            className: (0, l.cn)(
              'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
              t
            ),
            ...o,
          }),
        });
      }
      function c(e) {
        let { ...t } = e;
        return (0, r.jsx)(n.YJ, { 'data-slot': 'dropdown-menu-group', ...t });
      }
      function u(e) {
        let { className: t, inset: a, variant: o = 'default', ...s } = e;
        return (0, r.jsx)(n.q7, {
          'data-slot': 'dropdown-menu-item',
          'data-inset': a,
          'data-variant': o,
          className: (0, l.cn)(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...s,
        });
      }
      function h(e) {
        let { className: t, inset: a, ...o } = e;
        return (0, r.jsx)(n.JU, {
          'data-slot': 'dropdown-menu-label',
          'data-inset': a,
          className: (0, l.cn)(
            'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
            t
          ),
          ...o,
        });
      }
      function m(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(n.wv, {
          'data-slot': 'dropdown-menu-separator',
          className: (0, l.cn)('bg-border -mx-1 my-1 h-px', t),
          ...a,
        });
      }
      var x = a(2147),
        f = a(4416);
      function p(e) {
        let { ...t } = e;
        return (0, r.jsx)(x.bL, { 'data-slot': 'sheet', ...t });
      }
      function g(e) {
        let { ...t } = e;
        return (0, r.jsx)(x.l9, { 'data-slot': 'sheet-trigger', ...t });
      }
      function v(e) {
        let { ...t } = e;
        return (0, r.jsx)(x.ZL, { 'data-slot': 'sheet-portal', ...t });
      }
      function b(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(x.hJ, {
          'data-slot': 'sheet-overlay',
          className: (0, l.cn)(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
            t
          ),
          ...a,
        });
      }
      function j(e) {
        let { className: t, children: a, side: o = 'right', ...n } = e;
        return (0, r.jsxs)(v, {
          children: [
            (0, r.jsx)(b, {}),
            (0, r.jsxs)(x.UC, {
              'data-slot': 'sheet-content',
              className: (0, l.cn)(
                'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
                'right' === o &&
                  'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
                'left' === o &&
                  'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
                'top' === o &&
                  'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
                'bottom' === o &&
                  'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
                t
              ),
              ...n,
              children: [
                a,
                (0, r.jsxs)(x.bm, {
                  className:
                    'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none',
                  children: [
                    (0, r.jsx)(f.A, { className: 'size-4' }),
                    (0, r.jsx)('span', {
                      className: 'sr-only',
                      children: 'Close',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function w(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(x.hE, {
          'data-slot': 'sheet-title',
          className: (0, l.cn)('text-foreground font-semibold', t),
          ...a,
        });
      }
      var k = a(1394),
        N = a(9014),
        y = a(2108),
        F = a(2200),
        A = a(6766),
        C = a(1525),
        B = a(6424),
        E = a(4536),
        S = a(2271),
        P = a(6874),
        _ = a.n(P),
        L = a(7420);
      function U(e) {
        var t, a, n, x, f, v, b, P, U, T, z, I, D, O, q, H, G, $;
        let { className: R } = e,
          [Z, M] = (0, o.useState)(!1),
          [K, W] = (0, o.useState)(''),
          { data: V, status: X } = (0, y.useSession)(),
          { event: J } = (0, C.G)(K),
          Q = () => {
            new Audio('/sounds/cloud_sounds.mp3').play();
          },
          Y = async () => {
            let e = document.querySelector('.left-cloud'),
              t = document.querySelector('.right-cloud');
            Q(),
              null == e || e.classList.add('left-cloud-inout'),
              null == t || t.classList.add('right-cloud-inout'),
              await (0, L.A)(800),
              await (0, L.A)(1600),
              (0, y.signOut)({ callbackUrl: '/login', redirect: !0 }),
              null == e || e.classList.remove('left-cloud-inout'),
              null == t || t.classList.remove('right-cloud-inout');
          };
        return (0, r.jsxs)('div', {
          className: R,
          children: [
            (0, r.jsxs)(p, {
              modal: !1,
              children: [
                (0, r.jsx)(g, {
                  className: 'sm:hidden block',
                  children: (0, r.jsx)('div', {
                    className: 'w-10 h-10 rounded-full p-[2px]',
                    style: {
                      background:
                        'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
                    },
                    onClick: () => {
                      M(!1);
                    },
                    children: (0, r.jsxs)(k.Avatar, {
                      className: 'w-full h-full text-xs bg-black',
                      children: [
                        (0, r.jsx)(k.AvatarImage, {
                          src:
                            null == V ||
                            null == (a = V.user) ||
                            null == (t = a.image)
                              ? void 0
                              : t.toString(),
                          className: 'rounded-full',
                        }),
                        (0, r.jsx)(k.AvatarFallback, {
                          className: 'bg-black text-[#FBBC05] rounded-full',
                          children:
                            (null == V ||
                            null == (x = V.user) ||
                            null == (n = x.email)
                              ? void 0
                              : n.toUpperCase().slice(0, 2)) ||
                            (0, N.tj)('user'),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsxs)(j, {
                  className: 'bg-black text-white border-none overflow-hidden',
                  children: [
                    (0, r.jsxs)(F.jc, {
                      open: Z,
                      onOpenChange: M,
                      children: [
                        (0, r.jsx)(F.d0, {
                          asChild: !0,
                          children: (0, r.jsxs)('div', {
                            className:
                              'mt-10 p-2 rounded-full flex items-center transition-all duration-500 ease-in-out mx-2 cursor-pointer',
                            style: {
                              background:
                                'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                              border: '2px solid transparent',
                            },
                            onClick: () => {
                              Z || M(!0);
                            },
                            children: [
                              (0, r.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search...',
                                className: (0, l.cn)(
                                  'mobile-search-input bg-transparent outline-none text-[#FBBC05] placeholder:text-[#FBBC05]/50 transition-all duration-300 ease-in-out px-2 h-6',
                                  'w-full opacity-100 mr-2'
                                ),
                                onFocus: (e) => {
                                  e.stopPropagation(), M(!0);
                                },
                                onClick: (e) => {
                                  e.stopPropagation();
                                },
                                onBlur: (e) => {
                                  e.stopPropagation();
                                },
                                onChange: (e) => {
                                  W(e.target.value);
                                },
                                autoFocus: !1,
                                tabIndex: -1,
                                autoComplete: 'off',
                              }),
                              (0, r.jsx)(A.default, {
                                src: '/dropdown/search.svg',
                                alt: 'search',
                                width: 24,
                                height: 24,
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(F.Et, {
                          className: 'w-[100vw] p-1 bg-black',
                          align: 'center',
                          side: 'bottom',
                          sideOffset: 15,
                          style: {
                            background:
                              'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                            border: '2px solid transparent',
                            maxHeight: '60vh',
                            overflow: 'hidden',
                          },
                          onMouseDown: (e) => {
                            e.preventDefault();
                          },
                          onInteractOutside: (e) => {
                            e.target instanceof Element &&
                              e.target.closest('[data-sheet-content]') &&
                              e.preventDefault();
                          },
                          forceMount: !0,
                          children: (0, r.jsx)('div', {
                            className: 'bg-black w-full text-[#FBBC05]',
                            onClick: (e) => {
                              e.stopPropagation();
                            },
                            onPointerDown: (e) => {
                              e.stopPropagation();
                            },
                            children: (0, r.jsx)(B.ScrollArea, {
                              className: 'h-[500px]',
                              children: (0, r.jsx)('div', {
                                className: 'flex flex-col gap-4 p-4',
                                children: J
                                  ? J.map((e, t) =>
                                      (0, r.jsx)(
                                        E.A,
                                        { event_id: e.id, variant: 'search' },
                                        t
                                      )
                                    )
                                  : (0, r.jsx)(r.Fragment, {
                                      children: (0, r.jsx)('div', {
                                        className:
                                          'font-public-sans text-white',
                                        children: 'No searched classes',
                                      }),
                                    }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)(w, {
                      className:
                        'px-4 flex items-center gap-2 justify-center border-b-2 border-[#A67C00] pb-4',
                      children: [
                        (0, r.jsx)('div', {
                          className: 'w-10 h-10 rounded-full p-[2px]',
                          style: {
                            background:
                              'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
                          },
                          children: (0, r.jsxs)(k.Avatar, {
                            className: 'w-9 h-9 text-xs',
                            children: [
                              (0, r.jsx)(k.AvatarImage, {
                                src:
                                  null == V ||
                                  null == (v = V.user) ||
                                  null == (f = v.image)
                                    ? void 0
                                    : f.toString(),
                                className: 'rounded-full',
                              }),
                              (0, r.jsx)(k.AvatarFallback, {
                                className:
                                  'bg-black text-[#FBBC05] rounded-full',
                                children:
                                  (null == V ||
                                  null == (P = V.user) ||
                                  null == (b = P.email)
                                    ? void 0
                                    : b.toUpperCase().slice(0, 2)) ||
                                  (0, N.tj)('user'),
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)('span', {
                          className: 'font-playfair text-lg text-[#FBBC05]',
                          children: [
                            'Welcome, ',
                            null == V || null == (U = V.user) ? void 0 : U.name,
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className:
                        'flex flex-col gap-4 px-4 font-playfair font-bold text-[#98C10E]',
                      children: [
                        (0, r.jsx)('div', {
                          className: 'flex text-lg',
                          children: (0, r.jsx)(S.A, { variant: 'mobile' }),
                        }),
                        (0, r.jsxs)(_(), {
                          href: '/faq',
                          className: 'flex text-lg',
                          children: [
                            (0, r.jsx)(A.default, {
                              src: '/dropdown/faq.svg',
                              alt: 'faq',
                              width: 28,
                              height: 28,
                              className: 'mr-3',
                            }),
                            'Frequently Asked Questions',
                          ],
                        }),
                        (0, r.jsxs)(_(), {
                          href: '/leap',
                          className: 'flex text-lg',
                          children: [
                            (0, r.jsx)(A.default, {
                              src: '/dropdown/leap.svg',
                              alt: 'leap',
                              width: 28,
                              height: 28,
                              className: 'mr-3',
                            }),
                            'About LEAP 2025',
                          ],
                        }),
                        (0, r.jsxs)(_(), {
                          href: '/lscs',
                          className: 'flex text-lg',
                          children: [
                            (0, r.jsx)(A.default, {
                              src: '/dropdown/lscs.svg',
                              alt: 'lscs',
                              width: 28,
                              height: 28,
                              className: 'mr-3',
                            }),
                            'La Salle Computer Society',
                          ],
                        }),
                        (0, r.jsxs)('div', {
                          role: 'button',
                          className: 'flex text-lg',
                          onClick: () => {
                            Y();
                          },
                          children: [
                            (0, r.jsx)(A.default, {
                              src: '/dropdown/logout.svg',
                              alt: 'logout',
                              width: 28,
                              height: 28,
                              className: 'mr-3',
                            }),
                            'Log Out',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)(s, {
              children: [
                (0, r.jsx)(i, {
                  className: 'hidden sm:block',
                  children: (0, r.jsx)('div', {
                    className: 'w-10 h-10 rounded-full p-[2px]',
                    style: {
                      background:
                        'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
                    },
                    children: (0, r.jsxs)(k.Avatar, {
                      className: 'w-full h-full text-xs',
                      children: [
                        (0, r.jsx)(k.AvatarImage, {
                          src:
                            null == V ||
                            null == (z = V.user) ||
                            null == (T = z.image)
                              ? void 0
                              : T.toString(),
                          className: 'rounded-full',
                        }),
                        (0, r.jsx)(k.AvatarFallback, {
                          className: 'bg-black text-[#FBBC05] rounded-full',
                          children:
                            (null == V ||
                            null == (D = V.user) ||
                            null == (I = D.email)
                              ? void 0
                              : I.toUpperCase().slice(0, 2)) ||
                            (0, N.tj)('user'),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)(d, {
                  align: 'end',
                  alignOffset: 20,
                  className:
                    'hidden sm:block w-72 bg-black text-[#98C10E] p-[1px] rounded-md overflow-hidden',
                  style: {
                    background:
                      'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                    border: '2px solid transparent',
                  },
                  children: (0, r.jsxs)('div', {
                    className: 'bg-black rounded-sm w-full',
                    children: [
                      ' ',
                      (0, r.jsxs)(h, {
                        className:
                          'font-playfair text-xl flex items-center gap-4 text-[#FBBC05]',
                        children: [
                          (0, r.jsx)('div', {
                            className: 'w-10 h-10 rounded-full p-[2px]',
                            style: {
                              background:
                                'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
                            },
                            children: (0, r.jsxs)(k.Avatar, {
                              className: 'w-9 h-9 text-xs',
                              children: [
                                (0, r.jsx)(k.AvatarImage, {
                                  src:
                                    null == V ||
                                    null == (q = V.user) ||
                                    null == (O = q.image)
                                      ? void 0
                                      : O.toString(),
                                  className: 'rounded-full',
                                }),
                                (0, r.jsx)(k.AvatarFallback, {
                                  className:
                                    'bg-black text-[#FBBC05] rounded-full',
                                  children:
                                    (null == V ||
                                    null == (G = V.user) ||
                                    null == (H = G.email)
                                      ? void 0
                                      : H.toUpperCase().slice(0, 2)) ||
                                    (0, N.tj)('user'),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)('span', {
                            className:
                              'font-playfair text-xl font-bold text-[#FBBC05]',
                            children: [
                              'Welcome, ',
                              null == V || null == ($ = V.user)
                                ? void 0
                                : $.name,
                            ],
                          }),
                        ],
                      }),
                      ' ',
                      (0, r.jsx)(m, { className: 'bg-[#B38B18]' }),
                      (0, r.jsxs)(c, {
                        className: 'p-2 font-playfair font-bold text-base',
                        children: [
                          (0, r.jsx)(u, {
                            children: (0, r.jsxs)(_(), {
                              href: '/faq',
                              className: 'flex text-lg',
                              children: [
                                (0, r.jsx)(A.default, {
                                  src: '/dropdown/faq.svg',
                                  alt: 'faq',
                                  width: 28,
                                  height: 28,
                                  className: 'mr-3',
                                }),
                                'Frequently Asked Questions',
                              ],
                            }),
                          }),
                          (0, r.jsx)(u, {
                            children: (0, r.jsxs)(_(), {
                              href: '/leap',
                              className: 'flex text-lg',
                              children: [
                                (0, r.jsx)(A.default, {
                                  src: '/dropdown/leap.svg',
                                  alt: 'leap',
                                  width: 28,
                                  height: 28,
                                  className: 'mr-3',
                                }),
                                'About LEAP 2025',
                              ],
                            }),
                          }),
                          (0, r.jsx)(u, {
                            children: (0, r.jsxs)(_(), {
                              href: '/lscs',
                              className: 'flex text-lg',
                              children: [
                                (0, r.jsx)(A.default, {
                                  src: '/dropdown/lscs.svg',
                                  alt: 'lscs',
                                  width: 28,
                                  height: 28,
                                  className: 'mr-3',
                                }),
                                'La Salle Computer Society',
                              ],
                            }),
                          }),
                          (0, r.jsx)(u, {
                            children: (0, r.jsxs)('div', {
                              role: 'button',
                              className: 'flex text-lg',
                              onClick: () => {
                                Y();
                              },
                              children: [
                                (0, r.jsx)(A.default, {
                                  src: '/dropdown/logout.svg',
                                  alt: 'logout',
                                  width: 28,
                                  height: 28,
                                  className: 'mr-3',
                                }),
                                'Log Out',
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    1394: (e, t, a) => {
      a.d(t, {
        Avatar: () => l,
        AvatarFallback: () => i,
        AvatarImage: () => s,
      });
      var r = a(5155);
      a(2115);
      var o = a(3760),
        n = a(9434);
      function l(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(o.bL, {
          'data-slot': 'avatar',
          className: (0, n.cn)(
            'relative flex size-8 shrink-0 overflow-hidden rounded-full',
            t
          ),
          ...a,
        });
      }
      function s(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(o._V, {
          'data-slot': 'avatar-image',
          className: (0, n.cn)('aspect-square size-full', t),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(o.H4, {
          'data-slot': 'avatar-fallback',
          className: (0, n.cn)(
            'bg-muted flex size-full items-center justify-center rounded-full',
            t
          ),
          ...a,
        });
      }
    },
    1525: (e, t, a) => {
      a.d(t, { G: () => l });
      var r = a(2115),
        o = a(7057),
        n = a(1950);
      let l = (e) => {
        let [t, a] = (0, r.useState)([]);
        return (
          (0, r.useEffect)(() => {
            let t = setTimeout(() => {
              '' !== e.trim() &&
                (async () => {
                  a(await (0, o.OO)(e, n.H$));
                })();
            }, 500);
            return () => {
              clearTimeout(t);
            };
          }, [e]),
          { event: t }
        );
      };
    },
    1950: (e, t, a) => {
      a.d(t, { H$: () => o, eS: () => n });
      var r = a(9509);
      let o =
        r.env.LEAP_API ||
        r.env.NEXT_PUBLIC_LEAP_API ||
        '/api';
      r.env.NEXT_PUBLIC_BASE_URL;
      let n = r.env.API_SECRET;
    },
    2200: (e, t, a) => {
      a.d(t, { Et: () => i, d0: () => s, jc: () => l });
      var r = a(5155);
      a(2115);
      var o = a(3899),
        n = a(9434);
      function l(e) {
        let { ...t } = e;
        return (0, r.jsx)(o.bL, { 'data-slot': 'hover-card', ...t });
      }
      function s(e) {
        let { ...t } = e;
        return (0, r.jsx)(o.l9, { 'data-slot': 'hover-card-trigger', ...t });
      }
      function i(e) {
        let { className: t, align: a = 'center', sideOffset: l = 4, ...s } = e;
        return (0, r.jsx)(o.ZL, {
          'data-slot': 'hover-card-portal',
          children: (0, r.jsx)(o.UC, {
            'data-slot': 'hover-card-content',
            align: a,
            sideOffset: l,
            className: (0, n.cn)(
              'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
              t
            ),
            ...s,
          }),
        });
      }
    },
    2271: (e, t, a) => {
      a.d(t, { A: () => w });
      var r = a(5155);
      a(2115);
      var o = a(9474),
        n = a(9434);
      function l(e) {
        let { ...t } = e;
        return (0, r.jsx)(o._s.Root, { 'data-slot': 'drawer', ...t });
      }
      function s(e) {
        let { ...t } = e;
        return (0, r.jsx)(o._s.Trigger, {
          'data-slot': 'drawer-trigger',
          ...t,
        });
      }
      function i(e) {
        let { ...t } = e;
        return (0, r.jsx)(o._s.Portal, { 'data-slot': 'drawer-portal', ...t });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(o._s.Overlay, {
          'data-slot': 'drawer-overlay',
          className: (0, n.cn)(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
            t
          ),
          ...a,
        });
      }
      function c(e) {
        let { className: t, children: a, ...l } = e;
        return (0, r.jsxs)(i, {
          'data-slot': 'drawer-portal',
          children: [
            (0, r.jsx)(d, {}),
            (0, r.jsxs)(o._s.Content, {
              'data-slot': 'drawer-content',
              className: (0, n.cn)(
                'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
                'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
                'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
                'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
                'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
                t
              ),
              ...l,
              children: [
                (0, r.jsx)('div', {
                  className:
                    'bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block',
                }),
                a,
              ],
            }),
          ],
        });
      }
      function u(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)('div', {
          'data-slot': 'drawer-header',
          className: (0, n.cn)('flex flex-col gap-1.5 p-4', t),
          ...a,
        });
      }
      function h(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)('div', {
          'data-slot': 'drawer-footer',
          className: (0, n.cn)('mt-auto flex flex-col gap-2 p-4', t),
          ...a,
        });
      }
      function m(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(o._s.Title, {
          'data-slot': 'drawer-title',
          className: (0, n.cn)('text-foreground font-semibold', t),
          ...a,
        });
      }
      function x(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)(o._s.Description, {
          'data-slot': 'drawer-description',
          className: (0, n.cn)('text-muted-foreground text-sm', t),
          ...a,
        });
      }
      var f = a(6424),
        p = a(6766),
        g = a(4536),
        v = a(2108),
        b = a(6082),
        j = a(7654);
      function w(e) {
        let { variant: t } = e,
          { data: a, status: o } = (0, v.useSession)(),
          { user: n } = (0, b.h)(a),
          { bookmarks: i, refreshBookmarks: d } = (0, j.s)(
            null == n ? void 0 : n.id
          );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(l, {
            children: [
              (0, r.jsx)(s, {
                onClick: () => {
                  d();
                },
                children:
                  'mobile' === t
                    ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)('div', {
                          className: 'flex text-lg gap-4',
                          children: [
                            (0, r.jsx)(p.default, {
                              src: '/dropdown/bookmark.svg',
                              alt: 'Bookmark',
                              width: 28,
                              height: 28,
                            }),
                            (0, r.jsx)('div', {
                              className: 'flex',
                              children: 'Bookmark',
                            }),
                          ],
                        }),
                      })
                    : (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)('div', {
                          className:
                            'flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out',
                          style: {
                            background:
                              'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                            border: '2px solid transparent',
                          },
                          children: (0, r.jsx)(p.default, {
                            src: '/dropdown/bookmark.svg',
                            alt: 'Bookmark',
                            width: 28,
                            height: 28,
                          }),
                        }),
                      }),
              }),
              (0, r.jsxs)(c, {
                className: 'bg-[#161515] border-none',
                style: {
                  background:
                    'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                  border: '2px solid transparent',
                },
                children: [
                  (0, r.jsx)(u, {
                    className: 'text-white font-playfair',
                    children: (0, r.jsxs)('div', {
                      className:
                        'flex flex-col items-center justify-center mt-4',
                      children: [
                        (0, r.jsx)(m, {
                          className:
                            'text-white text-[24px] sm:text-[36px] font-bold',
                          children: 'BOOKMARK',
                        }),
                        (0, r.jsx)(x, {
                          className: 'text-white text[16px] sm:text-[12px]',
                          children: 'SEE SAVED EVENTS HERE:',
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(h, {
                    children: (0, r.jsx)('div', {
                      className: 'flex flex-col items-center justify-center ',
                      children: (0, r.jsx)(f.ScrollArea, {
                        className:
                          'h-[500px] sm:min-w-1/2 min-w-screen text-white p-4',
                        children: (0, r.jsx)('div', {
                          className: 'flex flex-col gap-4 text-white',
                          children:
                            null == i
                              ? void 0
                              : i.map((e, t) =>
                                  (0, r.jsx)(g.A, { event_id: e.event_id }, t)
                                ),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    4536: (e, t, a) => {
      a.d(t, { A: () => x });
      var r = a(5155),
        o = a(1950),
        n = a(7057),
        l = a(2115);
      let s = (e) => {
          let [t, a] = (0, l.useState)();
          return (
            (0, l.useEffect)(() => {
              (async () => {
                a(await (0, n.tj)(e, o.H$));
              })();
            }, [e]),
            { eventMedia: t }
          );
        },
        i = (e) => {
          let [t, a] = (0, l.useState)();
          return (
            (0, l.useEffect)(() => {
              (async () => {
                e && a(await (0, n.Zm)(e, o.H$));
              })();
            }, [e]),
            { event: t }
          );
        };
      var d = a(488);
      let c = (e) => {
        let [t, a] = (0, l.useState)();
        return (
          (0, l.useEffect)(() => {
            (async () => {
              e && a(await (0, d.WI)(e, o.H$));
            })();
          }, [e]),
          { subtheme: t }
        );
      };
      var u = a(5028);
      let h = (0, u.default)(
          () => Promise.all([a.e(8322), a.e(807)]).then(a.bind(a, 807)),
          { loadableGenerated: { webpack: () => [null] }, ssr: !1 }
        ),
        m = (0, u.default)(
          () => Promise.all([a.e(8322), a.e(4921)]).then(a.bind(a, 4921)),
          { loadableGenerated: { webpack: () => [null] }, ssr: !1 }
        );
      function x(e) {
        var t, a, o, n;
        let { event_id: l, variant: u } = e,
          { event: x } = i(l),
          { eventMedia: f } = s(l),
          { subtheme: p } = c(null == x ? void 0 : x.subtheme_id),
          g = (0, d.E1)(null == p ? void 0 : p.title);
        console.log(g);
        let v =
            (null != (a = null == x ? void 0 : x.max_slots) ? a : 0) -
            (null != (o = null == x ? void 0 : x.registered_slots) ? o : 0),
          b =
            null !=
            (n =
              null == x || null == (t = x.title)
                ? void 0
                : t.replace(/^LEAP 2025:\s*/i, ''))
              ? n
              : '';
        return (0, r.jsx)(r.Fragment, {
          children:
            void 0 !== p
              ? (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)('a', {
                    href: '/'
                      .concat(g, '/')
                      .concat(null == x ? void 0 : x.slug),
                    className:
                      'search' === u
                        ? 'font-playfair p-4 sm:p-6 rounded-lg bg-cover bg-center  bg-blend-multiply object-cover bg-black/70 hover:bg-black/90 duration-200 transition ease-in-out'
                        : 'font-playfair p-4 sm:p-6 rounded-full bg-cover bg-center  bg-blend-multiply object-cover bg-black/70 hover:bg-black/90 duration-200 transition ease-in-out',
                    style: {
                      backgroundImage: 'url('.concat(
                        (null == f ? void 0 : f.pub_url) ||
                          '/api/imgur/Rjo6F4G.png',
                        ')'
                      ),
                    },
                    children: (0, r.jsxs)('div', {
                      className:
                        'flex flex-col items-center justify-center text-center gap-2',
                      children: [
                        (0, r.jsx)('div', {
                          className:
                            'font-semibold text-[16px] sm:text-[24px] break-all',
                          children: b || 'Event Title',
                        }),
                        (0, r.jsxs)('div', {
                          className:
                            'text-[12px] sm:text-[16px] flex justify-between gap-4',
                          children: [
                            (0, r.jsxs)('div', {
                              className: 'flex items-center gap-1',
                              children: [
                                (0, r.jsx)(h, {}),
                                (0, r.jsx)('p', {
                                  children:
                                    v > 0
                                      ? ''.concat(v, ' slots left')
                                      : 'Event Full',
                                }),
                              ],
                            }),
                            (0, r.jsxs)('div', {
                              className: 'flex items-center gap-1',
                              children: [
                                (0, r.jsx)(m, {}),
                                (0, r.jsxs)('p', {
                                  children: [
                                    ' ',
                                    (null == x ? void 0 : x.schedule) &&
                                      new Date(x.schedule).toLocaleDateString(
                                        'en-US',
                                        {
                                          year: 'numeric',
                                          month: 'long',
                                          day: 'numeric',
                                        }
                                      ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
              : null,
        });
      }
    },
    6082: (e, t, a) => {
      a.d(t, { h: () => s });
      var r = a(1950),
        o = a(9509);
      let n = async function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : o.env.LEAP_API;
        if (e)
          try {
            let a = await fetch(''.concat(t, '/users?email=').concat(e), {
              method: 'GET',
              headers: {
                Authorization: 'Bearer '.concat(r.eS),
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'MyAppClient/1.0',
                'X-Custom-Header': 'secure-client-check',
              },
            });
            if (!a.ok) throw Error('Failed to get user');
            return await a.json();
          } catch (e) {
            e instanceof TypeError
              ? console.error(
                  'Network error: Unable to fetch data. Please check your connection.'
                )
              : console.error('Unexpected error:', e.message);
          }
      };
      var l = a(2115);
      let s = (e) => {
        let [t, a] = (0, l.useState)();
        return (
          (0, l.useEffect)(() => {
            (async () => {
              var t;
              a(
                await n(
                  null == e || null == (t = e.user) ? void 0 : t.email,
                  r.H$
                )
              );
            })();
          }, [e]),
          { user: t }
        );
      };
    },
    6424: (e, t, a) => {
      a.d(t, { ScrollArea: () => l });
      var r = a(5155);
      a(2115);
      var o = a(7836),
        n = a(9434);
      function l(e) {
        let { className: t, children: a, ...l } = e;
        return (0, r.jsxs)(o.bL, {
          'data-slot': 'scroll-area',
          className: (0, n.cn)('relative', t),
          ...l,
          children: [
            (0, r.jsx)(o.LM, {
              'data-slot': 'scroll-area-viewport',
              className:
                'focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1',
              children: a,
            }),
            (0, r.jsx)(s, {}),
            (0, r.jsx)(o.OK, {}),
          ],
        });
      }
      function s(e) {
        let { className: t, orientation: a = 'vertical', ...l } = e;
        return (0, r.jsx)(o.VM, {
          'data-slot': 'scroll-area-scrollbar',
          orientation: a,
          className: (0, n.cn)(
            'flex touch-none p-px transition-colors select-none',
            'vertical' === a && 'h-full w-2.5 border-l border-l-transparent',
            'horizontal' === a &&
              'h-2.5 flex-col border-t border-t-transparent',
            t
          ),
          ...l,
          children: (0, r.jsx)(o.lr, {
            'data-slot': 'scroll-area-thumb',
            className: 'bg-border relative flex-1 rounded-full',
          }),
        });
      }
    },
    7057: (e, t, a) => {
      a.d(t, { AX: () => i, OO: () => n, Zm: () => l, tj: () => s });
      var r = a(1950),
        o = a(9509);
      let n = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.env.LEAP_API;
          try {
            let a = await fetch(
              ''.concat(t, '/events/search?q=').concat(encodeURIComponent(e)),
              {
                next: { revalidate: 60 },
                method: 'GET',
                headers: {
                  Authorization: 'Bearer '.concat(r.eS),
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              }
            );
            if (!a.ok && 404 === a.status) return null;
            return await a.json();
          } catch (e) {
            return (
              e instanceof TypeError
                ? console.error(
                    'Network error: Unable to fetch data. Please check your connection.'
                  )
                : console.error('Unexpected error:', e.message),
              null
            );
          }
        },
        l = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.env.LEAP_API;
          try {
            let a = await fetch(''.concat(t, '/events/').concat(e), {
              next: { revalidate: 60 },
              method: 'GET',
              headers: {
                Authorization: 'Bearer '.concat(r.eS),
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
            if (!a.ok) throw Error('Failed to get event');
            return await a.json();
          } catch (e) {
            e instanceof TypeError
              ? console.error(
                  'Network error: Unable to fetch data. Please check your connection.'
                )
              : console.error('Unexpected error:', e.message);
          }
        },
        s = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.env.LEAP_API;
          try {
            let a = await fetch(''.concat(t, '/events/').concat(e, '/media'), {
              next: { revalidate: 60 },
              method: 'GET',
              headers: {
                Authorization: 'Bearer '.concat(r.eS),
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
            if (!a.ok) return void console.log('no media yet');
            return await a.json();
          } catch (e) {
            e instanceof TypeError
              ? console.error(
                  'Network error: Unable to fetch data. Please check your connection.'
                )
              : console.error('Unexpected error:', e.message);
          }
        },
        i = () => {
          navigator.clipboard
            .writeText(window.location.href)
            .then(() => console.log('Copied!'))
            .catch((e) => console.error('Clipboard error:', e));
        };
    },
    7420: (e, t, a) => {
      a.d(t, { A: () => r });
      function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
    },
    7653: (e, t, a) => {
      a.d(t, { GK: () => i, bW: () => l, uN: () => s });
      var r = a(1950),
        o = a(3464),
        n = a(9509);
      let l = async function (e, t) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.env.LEAP_API;
          try {
            return (
              await o.A.post(
                ''.concat(a, '/bookmarks'),
                { user_id: e, event_id: t },
                {
                  headers: {
                    Authorization: 'Bearer '.concat(r.eS),
                    Accept: 'application/json',
                  },
                }
              )
            ).data;
          } catch (e) {
            console.log('error: ' + e);
          }
        },
        s = async function (e, t) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.env.LEAP_API;
          try {
            return (
              await o.A.delete(''.concat(a, '/bookmarks'), {
                data: { user_id: e, event_id: t },
                headers: {
                  Authorization: 'Bearer '.concat(r.eS),
                  Accept: 'application/json',
                },
              })
            ).data;
          } catch (e) {
            console.log('error: ' + e);
          }
        },
        i = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : n.env.LEAP_API;
          if (e)
            try {
              let a = await fetch(
                ''.concat(t, '/users/').concat(e, '/bookmarks'),
                {
                  cache: 'no-store',
                  headers: {
                    Authorization: 'Bearer '.concat(r.eS),
                    Accept: 'application/json',
                  },
                }
              );
              if (!a.ok) throw Error('Failed to get users');
              return await a.json();
            } catch (e) {
              e instanceof TypeError
                ? console.error(
                    'Network error: Unable to fetch data. Please check your connection.'
                  )
                : console.error('Unexpected error:', e.message);
            }
        };
    },
    7654: (e, t, a) => {
      a.d(t, { s: () => l });
      var r = a(1950),
        o = a(7653),
        n = a(2115);
      let l = (e) => {
        let [t, a] = (0, n.useState)([]),
          l = (0, n.useCallback)(async () => {
            if (!e) return void a([]);
            try {
              let t = await (0, o.GK)(e, r.H$);
              a(t);
            } catch (e) {
              console.error('Failed to fetch bookmarks:', e);
            }
          }, [e]);
        return (
          (0, n.useEffect)(() => {
            l();
          }, [l]),
          { bookmarks: t, refreshBookmarks: l }
        );
      };
    },
    9014: (e, t, a) => {
      function r(e) {
        return (e = e.toUpperCase()).slice(0, 2);
      }
      function o(e) {
        let t = new Date(e);
        return {
          formattedDate: t.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
          }),
          formattedTime: t.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: !0,
            timeZone: 'UTC',
          }),
        };
      }
      a.d(t, { DC: () => o, tj: () => r });
    },
    9434: (e, t, a) => {
      a.d(t, { cn: () => n });
      var r = a(2596),
        o = a(9688);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, o.QP)((0, r.$)(t));
      }
    },
  },
]);
