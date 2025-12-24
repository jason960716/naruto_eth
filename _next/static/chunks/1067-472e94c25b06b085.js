"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1067],
  {
    5608: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return he;
        },
      });
      var n = t(67294),
        o = t(41128),
        r = t(33587),
        a = t(27715),
        l = t(26267),
        c = t(65313),
        s = t(73938),
        d = t(95541),
        u = t(70917),
        p = t(8503),
        m = t(48710),
        f = t(77340),
        h = t(37868),
        v = t(72462),
        b = t(86090),
        g = t(18714),
        y = t(32974),
        x = t(25701),
        k = t(72601),
        I = t(59499),
        E = t(22345),
        A = t(35944);
      function w(e, i) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          i &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function _(e) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? w(Object(t), !0).forEach(function (i) {
                (0, I.Z)(e, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (i) {
                Object.defineProperty(
                  e,
                  i,
                  Object.getOwnPropertyDescriptor(t, i)
                );
              });
        }
        return e;
      }
      function Z(e, i) {
        var t =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, i) {
              if (!e) return;
              if ("string" === typeof e) return S(e, i);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return S(e, i);
            })(e)) ||
            (i && e && "number" === typeof e.length)
          ) {
            t && (e = t);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          a = !0,
          l = !1;
        return {
          s: function () {
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (l = !0), (r = e);
          },
          f: function () {
            try {
              a || null == t.return || t.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function S(e, i) {
        (null == i || i > e.length) && (i = e.length);
        for (var t = 0, n = new Array(i); t < i; t++) n[t] = e[t];
        return n;
      }
      var T = { name: "s5xdrg", styles: "display:flex;align-items:center" },
        N = {
          name: "1xc6g76",
          styles:
            "font-size:14px;&:not(:lang(ja)){font-family:var(--impact-font);font-size:18px;}",
        },
        O = { name: "1r0yqr6", styles: "margin-top:10px" },
        C = {
          name: "maiwv9",
          styles:
            "margin-top:1px;font-family:var(--comic-impact-font);font-size:15px;line-height:1;color:white;&:not(:lang(ja)){font-size:18px;}&:lang(es),&:lang(it){letter-spacing:-0.01em;}",
        },
        j = function (e) {
          var i = e.publisherLinks,
            t = (0, p.bU)();
          return (0, A.BX)("div", {
            css: (0, u.iv)(
              "width:fit-content;margin-bottom:12px;overflow-x:hidden;&:lang(fr){margin-right:110px;}&:lang(de){margin-right:150px;}&:lang(es){margin-right:160px;}&:lang(it){margin-right:80px;}@media ",
              m.r.media.preTablet,
              "{margin-right:auto;margin-bottom:auto;}",
              ""
            ),
            children: [
              (0, A.tZ)("div", {
                css: (0, u.iv)(
                  "height:24px;padding:4px 10px;background-color:black;&+div{margin-top:18px;}&:not(:lang(ja)){&+div{margin-top:14px;}}@media ",
                  m.r.media.preTablet,
                  "{height:28px;padding:5px 10px;font-size:17px;}",
                  ""
                ),
                children: (0, A.tZ)("p", { css: C, children: L[t] }),
              }),
              B(t, i).map(function (e) {
                return (0, A.BX)(
                  "div",
                  {
                    css: O,
                    children: [
                      (0, A.tZ)("p", { css: N, children: e.siteName }),
                      (0, A.tZ)("div", {
                        css: (0, u.iv)(
                          "display:flex;flex-wrap:wrap;align-items:center;margin-left:-35px;@media ",
                          m.r.media.preTablet,
                          "{margin-left:-32px;}",
                          ""
                        ),
                        children: e.links.map(function (i) {
                          return (0,
                          A.tZ)("div", { children: i.href && (0, A.BX)("span", { css: T, children: [(0, A.tZ)(R, {}), (0, A.tZ)(E.h, { css: (0, u.iv)("font-size:16px;&:not(:lang(ja)){font-size:18px;}@media ", m.r.media.preTablet, "{font-size:18px;&:not(:lang(ja)){font-size:21px;}}", ""), href: i.href, color: "black", children: i.label })] }) }, "".concat(e.key).concat(i.key));
                        }),
                      }),
                    ],
                  },
                  e.key
                );
              }),
            ],
          });
        },
        R = function (e) {
          var i = e.className;
          return (0, A.tZ)("div", {
            className: i,
            css: (0, u.iv)(
              "width:1px;height:20px;margin:0 18px;background-color:black;@media ",
              m.r.media.preTablet,
              "{margin:0 16px;}",
              ""
            ),
          });
        },
        L = {
          ja: "\u8a66\u3057\u8aad\u307f\u30fb\u8cfc\u5165\u306f\u3053\u3061\u3089",
          en: "CLICK HERE TO PREVIEW OR PURCHASE",
          fr: "APER\xe7U / ACHAT",
          de: "LESEPROBE \u30fb KAUFEN ",
          es: "VISTA PREVIA/COMPRAR AHORA: HAZ CLIC AQU\xed",
          it: "LEGGI ANTEPRIMA / ACQUISTA ORA: CLICCA QUI",
        },
        B = function (e, i) {
          var t,
            n = [],
            o = Z(U[e]);
          try {
            var r = function () {
              var e = t.value,
                o = i.filter(function (i) {
                  return i.publisher === e.key;
                })[0];
              if (!o) return "continue";
              var r = e.links.map(function (e) {
                  return _(_({}, e), {}, { href: o.links[e.key] });
                }),
                a = _(_({}, e), {}, { links: r });
              n.push(a);
            };
            for (o.s(); !(t = o.n()).done; ) r();
          } catch (a) {
            o.e(a);
          } finally {
            o.f();
          }
          return n;
        },
        U = {
          ja: [
            {
              key: "s_manga",
              siteName: "\u96c6\u82f1\u793e\u516c\u5f0f S-MANGA",
              links: [
                {
                  key: "ebook_mono",
                  label: "\u96fb\u5b50\u7248 \u30e2\u30ce\u30af\u30ed",
                },
                {
                  key: "ebook_color",
                  label: "\u96fb\u5b50\u7248 \u30ab\u30e9\u30fc",
                },
                { key: "paperbook", label: "\u7d19\u7248" },
              ],
            },
            {
              key: "zebrack",
              siteName: "\u30bc\u30d6\u30e9\u30c3\u30af",
              links: [
                {
                  key: "ebook_mono",
                  label: "\u96fb\u5b50\u7248 \u30e2\u30ce\u30af\u30ed",
                },
                {
                  key: "ebook_color",
                  label: "\u96fb\u5b50\u7248 \u30ab\u30e9\u30fc",
                },
              ],
            },
          ],
          en: [
            {
              key: "s_manga",
              siteName: "SHUEISHA S-MANGA SITE",
              links: [
                { key: "ebook_mono", label: "EBOOK" },
                { key: "ebook_mono", label: "ebook B&W" },
                { key: "ebook_color", label: "EBOOK COLOR" },
                { key: "paperbook", label: "PAPERBACK" },
              ],
            },
          ],
          fr: [
            {
              key: "s_manga",
              siteName: "S-MANGA, SITE OFFICIEL DE SHUEISHA",
              links: [
                { key: "ebook_mono", label: "VERSION NUM\xe9RIQUE" },
                {
                  key: "ebook_mono",
                  label: "VERSION NUM\xe9RIQUE EN NOIR ET BLANC",
                },
                {
                  key: "ebook_color",
                  label: "VERSION NUM\xe9RIQUE EN COULEURS",
                },
                { key: "paperbook", label: "VERSION PAPIER" },
              ],
            },
          ],
          de: [
            {
              key: "s_manga",
              siteName: "OFFIZIELLE SHUEISHA S-MANGA",
              links: [
                { key: "ebook_mono", label: "DIGITALE AUSGABE" },
                {
                  key: "ebook_mono",
                  label: "DIGITALE AUSGABE SCHWARZ-WEI\xdf",
                },
                { key: "ebook_color", label: "DIGITALE AUSGABE IN FARBE" },
                { key: "paperbook", label: "PHYSISCHE AUSGABE" },
              ],
            },
          ],
          es: [
            {
              key: "s_manga",
              siteName: "SITO OFICIAL DE SHUEISHA S-MANGA",
              links: [
                { key: "ebook_mono", label: "EDICI\xf3N DIGITAL" },
                {
                  key: "ebook_mono",
                  label: "EDICI\xf3N DIGITAL (BLANCO Y NEGRO)",
                },
                { key: "ebook_color", label: "EDICI\xf3N DIGITAL (COLOR)" },
                { key: "paperbook", label: "EDICI\xf3N IMPRESA" },
              ],
            },
          ],
          it: [
            {
              key: "s_manga",
              siteName: "SHUEISHA S-MANGA (SITO UFF.)",
              links: [
                { key: "ebook_mono", label: "ED. DIGITALE" },
                { key: "ebook_mono", label: "ED. DIGITALE (B&W)" },
                { key: "ebook_color", label: "ED. DIGITALE (A COLORI)" },
                { key: "paperbook", label: "ED. CARTACEA" },
              ],
            },
          ],
        },
        z = t(16835),
        P = t(11163),
        M = t(86513),
        D = t(85257),
        G = t(26184);
      var H = {
          name: "y301de",
          styles: "display:block;width:100%;height:auto",
        },
        X = {
          name: "flre9y",
          styles: "display:block;width:100%;height:auto;aspect-ratio:300/474",
        },
        V = { name: "bx4ghp", styles: "aspect-ratio:300/472" },
        F = function (e) {
          var i = e.imgPaths,
            t = (0, n.useState)(function () {
              return new D.W();
            })[0],
            o = n.useState(0),
            r = (0, z.Z)(o, 2),
            a = r[0],
            l = r[1],
            c = (0, P.useRouter)();
          (0, n.useEffect)(
            function () {
              t.to(0), l(0);
            },
            [c.asPath, t]
          );
          var s = n.useCallback(function (e) {
            l(e);
          }, []);
          return (0, A.BX)("div", {
            css: (0, u.iv)("", ""),
            children: [
              (0, A.tZ)(M.l, {
                viewport: 1 / 0,
                controller: t,
                pointer: "all",
                onSnap: s,
                children: i.map(function (e, i) {
                  return (0,
                  A.tZ)("div", { css: V, children: (0, A.tZ)(G._, { src: e, loadStyle: X, imgStyle: H, alt: "" }) }, i);
                }),
              }),
              (0, A.tZ)(Y, {
                count: i.length,
                currIdx: a,
                onClick: function (e) {
                  t.to(e);
                },
                onClickPrev: function () {
                  0 === a ? t.to(i.length - 1) : t.prev();
                },
                onClickNext: function () {
                  a === i.length - 1 ? t.to(0) : t.next();
                },
              }),
            ],
          });
        },
        W = { name: "9k5o6f", styles: "transform:scale(-1, 1)" },
        Y = function (e) {
          var i = e.count,
            t = e.currIdx,
            n = e.onClick,
            o = e.onClickPrev,
            r = e.onClickNext;
          return (0, A.BX)("div", {
            css: (0, u.iv)(
              "display:flex;column-gap:15px;align-items:center;justify-content:center;margin-top:15px;@media ",
              m.r.media.preTablet,
              "{column-gap:2.667vw;height:auto;margin-top:2.133vw;}",
              ""
            ),
            children: [
              (0, A.tZ)("button", {
                onClick: o,
                css: (0, u.iv)(
                  "display:flex;align-items:center;cursor:pointer;@media ",
                  m.r.media.preTablet,
                  "{display:none;}",
                  ""
                ),
                children: (0, A.tZ)("img", {
                  src: "/anime/carouselArrow.svg",
                  alt: "prev",
                }),
              }),
              Array.from({ length: i }, function (e, i) {
                return i;
              }).map(function (e) {
                return (0, A.tZ)(Q, { idx: e, active: t === e, onClick: n }, e);
              }),
              (0, A.tZ)("button", {
                onClick: r,
                css: (0, u.iv)(
                  "display:flex;align-items:center;cursor:pointer;@media ",
                  m.r.media.preTablet,
                  "{display:none;}",
                  ""
                ),
                children: (0, A.tZ)("img", {
                  css: W,
                  src: "/anime/carouselArrow.svg",
                  alt: "next",
                }),
              }),
            ],
          });
        },
        Q = function (e) {
          var i = e.idx,
            t = e.active,
            o = e.onClick,
            r = (0, n.useCallback)(
              function () {
                o(i);
              },
              [i, o]
            );
          return (0, A.tZ)("button", {
            css: (0, u.iv)(
              "width:10px;height:10px;cursor:",
              t ? "auto" : "pointer",
              ";background-color:",
              t ? "var(--primary-color)" : "black",
              ";border-radius:5px;@media ",
              m.r.media.preTablet,
              "{width:2.4vw;height:2.4vw;border-radius:1.333vw;}",
              ""
            ),
            onClick: r,
          });
        },
        K = function (e) {
          var i = e.currComics,
            t = (0, p.bU)();
          return (0, A.BX)("div", {
            css: (0, u.iv)(
              "position:relative;display:flex;max-width:920px;padding:30px 80px 18px 36px;margin:0 auto;background-color:#fff;@media ",
              m.r.media.preTablet,
              "{flex-direction:column;max-width:none;padding:7.467vw 7.467vw 80px;margin:25px auto 0;}",
              ""
            ),
            children: [
              (0, A.tZ)("div", {
                css: (0, u.iv)(
                  "flex:1;max-width:300px;@media ",
                  m.r.media.preTablet,
                  "{width:100%;max-width:none;height:auto;}",
                  ""
                ),
                children: (0, A.tZ)(F, { imgPaths: i.images }),
              }),
              (0, A.BX)("div", {
                css: (0, u.iv)(
                  "position:relative;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin-left:34px;@media ",
                  m.r.media.preTablet,
                  "{width:100%;height:auto;margin:20px 0 0;}",
                  ""
                ),
                children: [
                  (0, A.BX)("div", {
                    children: [
                      (0, A.BX)("div", {
                        css: (0, u.iv)(
                          "font-family:var(--comic-font);font-size:26px;line-height:36px;&:not(:lang(ja)){font-size:30px;}br{display:none;}@media ",
                          m.r.media.preTablet,
                          "{font-size:28px;line-height:36px;&:not(:lang(ja)){br{display:block;}}}",
                          ""
                        ),
                        children: [
                          "ja" === t &&
                            (0, A.tZ)("span", {
                              css: (0, u.iv)(
                                "@media ",
                                m.r.media.preTablet,
                                "{&:not(:lang(ja)){font-size:22px;}}",
                                ""
                              ),
                              children: "\u5dfb\u30ce".concat(i.volume),
                            }),
                          q(i.title, t),
                        ],
                      }),
                      (0, A.BX)("div", {
                        css: (0, u.iv)(
                          "font-size:12px;line-height:24px;@media ",
                          m.r.media.preTablet,
                          "{font-size:12px;line-height:24px;}",
                          ""
                        ),
                        children: [
                          $[t],
                          " ",
                          "fr" === t || "de" === t || "es" === t
                            ? "".concat(i.storyFrom, "-").concat(i.storyTo)
                            : "".concat(i.storyFrom, "~").concat(i.storyTo),
                        ],
                      }),
                      (0, A.tZ)("div", {
                        css: (0, u.iv)(
                          "margin-top:26px;font-family:var(--comic-font);font-size:18px;line-height:1.5;white-space:pre-wrap;&:not(:lang(ja)){margin-top:20px;}@media ",
                          m.r.media.preTablet,
                          "{height:auto;margin-top:15px;font-size:18px;line-height:27px;&:not(:lang(ja)){margin-top:4px;}}",
                          ""
                        ),
                        children: i.storySummary,
                      }),
                      (0, A.BX)("div", {
                        css: (0, u.iv)(
                          "display:flex;column-gap:10px;justify-content:flex-start;margin:25px auto 0;@media ",
                          m.r.media.preTablet,
                          "{flex-direction:column;row-gap:17px;}",
                          ""
                        ),
                        children: [
                          i.storyUrl &&
                            (0, A.tZ)(g.f, {
                              css: (0, u.iv)(
                                "height:40px;font-size:18px;&:not(:lang(ja)){font-size:26px;}@media ",
                                m.r.media.preTablet,
                                "{grid-row:1/2;grid-column:1/4;width:100%;height:46px;font-size:20px;}",
                                ""
                              ),
                              href: i.storyUrl,
                              icon: "kunai",
                              children: J[t],
                            }),
                          i.animeUrl &&
                            (0, A.tZ)(g.f, {
                              css: (0, u.iv)(
                                "height:40px;font-size:18px;&:not(:lang(ja)){font-size:26px;}@media ",
                                m.r.media.preTablet,
                                "{grid-row:2/3;grid-column:1/4;width:100%;height:46px;font-size:20px;}",
                                ""
                              ),
                              href: i.animeUrl,
                              icon: "kunai",
                              children: ee[t],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, A.tZ)("div", {
                    css: (0, u.iv)(
                      "min-height:34px;@media ",
                      m.r.media.preTablet,
                      "{min-height:40px;}",
                      ""
                    ),
                  }),
                  "ja" === t &&
                    0 !== i.publisherLinks.length &&
                    (0, A.tZ)(j, { publisherLinks: i.publisherLinks }),
                ],
              }),
              (0, A.tZ)("div", {
                css: (0, u.iv)(
                  "position:absolute;right:30px;bottom:30px;@media ",
                  m.r.media.preTablet,
                  "{right:7.467vw;bottom:19px;}",
                  ""
                ),
                children: (0, A.tZ)(k.m, {
                  breakPoint: m.r.breaks.tablet,
                  lineUp: !0,
                }),
              }),
            ],
          });
        },
        q = function (e, i) {
          return "ja" === i ? "\u300c".concat(e, "\u300d") : e;
        },
        $ = {
          ja: "\u30ca\u30f3\u30d0\u30fc",
          en: "NO.",
          fr: "NO.",
          de: "NO.",
          es: "Cap.",
          it: "NO.",
        },
        J = {
          ja: "\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u898b\u308b",
          en: "VIEW STORY",
          fr: "VOIR L\u2019HISTOIRE",
          de: "STORY ANSEHEN",
          es: "VER HISTORIA",
          it: "VEDI STORIA",
        },
        ee = {
          ja: "\u30a2\u30cb\u30e1\u7248\u306f\u3053\u3061\u3089",
          en: "ANIME VERSION",
          fr: "VERSION ANIM\xc9",
          de: "ANIME-VERSION",
          es: "VERSI\xd3N ANIME",
          it: "VERSIONE ANIME",
        };
      var ie = { name: "4zleql", styles: "display:block" },
        te = { name: "1ort9xp", styles: "display:block;aspect-ratio:80/126" },
        ne = function (e) {
          var i = e.className,
            t = e.comics,
            n = e.width,
            o = e.height;
          return (0, A.tZ)(G._, {
            src: t.imgSrc,
            className: i,
            loadStyle: te,
            imgStyle: ie,
            width: n,
            height: o,
            alt: t.title,
          });
        };
      var oe = {
          name: "1tabgvh",
          styles: "display:flex;align-items:center;padding:0 5px",
        },
        re = function (e) {
          var i = e.active,
            t = e.comicsList,
            o = n.useRef(null),
            r = t.findIndex(function (e) {
              return e.id === i.id;
            });
          return (
            n.useEffect(
              function () {
                var e;
                null === (e = o.current) ||
                  void 0 === e ||
                  e.scroll({ left: -window.innerWidth / 2 + 5 + 45 + 90 * r });
              },
              [r]
            ),
            (0, A.tZ)("div", {
              ref: o,
              css: (0, u.iv)(
                "position:relative;margin:20px 0 0;overflow:auto;@media ",
                m.r.media.preTablet,
                "{margin-top:28px;}",
                ""
              ),
              children: (0, A.tZ)("div", {
                css: (0, u.iv)(
                  "display:flex;width:calc(90px * ",
                  t.length,
                  " + 10px);padding:0 5px;",
                  ""
                ),
                children: t.map(function (e) {
                  return (0,
                  A.tZ)("div", { css: oe, children: (0, A.tZ)(ae, { comics: e, selected: i.id === e.id }) }, e.id);
                }),
              }),
            })
          );
        },
        ae = function (e) {
          var i = e.comics,
            t = e.selected;
          return (0, A.tZ)(h.Z, {
            href: "/comics/".concat(i.path),
            children: (0, A.tZ)("a", {
              children: (0, A.tZ)(ne, {
                css: (0, u.iv)(
                  "filter:brightness(",
                  t ? 0.6 : 1,
                  ");border:",
                  t ? 0 : "2px solid #000",
                  ";",
                  ""
                ),
                width: "80",
                comics: i,
              }),
            }),
          });
        };
      var le = {
          name: "1eoy87d",
          styles: "display:flex;justify-content:space-between",
        },
        ce = {
          name: "q4b2tk",
          styles:
            "position:relative;z-index:0;display:flex;flex-direction:column;overflow-x:hidden",
        },
        se = {
          name: "xpr5yx",
          styles: "&:disabled{opacity:0;}&:not(:disabled){cursor:pointer;}",
        },
        de = function (e) {
          var i,
            t,
            n,
            o,
            r,
            a = e.currComics,
            l = e.comicsList,
            c = (0, p.bU)(),
            s =
              "ja" === c
                ? "/common/bg_naruto_jp.webp"
                : "/common/bg_naruto_en.webp",
            d =
              "ja" === c
                ? "/common/bg_boruto_jp.webp"
                : "/common/bg_boruto_en.webp",
            k =
              "ja" === c
                ? "/common/bg_boruto_tbv_jp.webp"
                : "/common/bg_boruto_en.webp",
            I = -1;
          a &&
            l &&
            ((I = l.findIndex(function (e, i) {
              return e.id === a.id;
            })),
            (t =
              null ===
                (o = l.find(function (e, i) {
                  return i === I - 1;
                })) || void 0 === o
                ? void 0
                : o.path),
            (n =
              null ===
                (r = l.find(function (e, i) {
                  return i === I + 1;
                })) || void 0 === r
                ? void 0
                : r.path));
          var E = se,
            w = (0, u.iv)(
              "display:block;stroke:black;@media ",
              m.r.media.preTablet,
              "{width:18px;height:34px;}",
              ""
            );
          return (0, A.BX)("main", {
            css: ce,
            children: [
              (0, A.tZ)("div", {
                css: (0, u.iv)(
                  "position:absolute;top:169px;width:100%;@media ",
                  m.r.media.preTablet,
                  "{top:177px;}",
                  ""
                ),
                children: (0, A.tZ)(f.W, {
                  children: (0, A.BX)("div", {
                    css: le,
                    children: [
                      (0, A.tZ)(y.V, {
                        title: "COMICS",
                        ruby: "\u30b3\u30df\u30c3\u30af\u30b9",
                        slug: "comics",
                        scale: "2/3",
                        h1: "COMICS",
                      }),
                      (0, A.tZ)(x.Z, {
                        wrapperCss: (0, u.iv)(
                          "margin-top:16px;@media ",
                          m.r.media.preTablet,
                          "{margin-top:24px;}",
                          ""
                        ),
                        paths: [
                          {
                            label: ue[c],
                            href: "/",
                            font:
                              "ja" === c ? "fot-udkakugoc80-pro" : "Bebas Neue",
                          },
                          {
                            label: pe[c],
                            href: "/comics",
                            font:
                              "ja" === c ? "fot-udkakugoc80-pro" : "Bebas Neue",
                          },
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, A.BX)("div", {
                css: (0, u.iv)(
                  "width:100%;padding:280px 0 100px;background:url(",
                  (function (e) {
                    switch (e) {
                      case "naruto":
                        return s;
                      case "boruto":
                        return d;
                      case "boruto_two_blue_vortex":
                        return k;
                    }
                  })(
                    null !==
                      (i = null === a || void 0 === a ? void 0 : a.series) &&
                      void 0 !== i
                      ? i
                      : "naruto"
                  ),
                  ") top/1280px;@media ",
                  m.r.media.preTablet,
                  "{padding:250px 0 45px;}",
                  ""
                ),
                children: [
                  (0, A.BX)(f.W, {
                    relative: !0,
                    children: [
                      (0, A.BX)("div", {
                        css: (0, u.iv)(
                          "position:absolute;top:50%;z-index:2;display:flex;align-items:center;justify-content:space-between;width:100%;@media ",
                          m.r.media.preTablet,
                          "{top:0;align-items:end;width:calc(100% + 20px);aspect-ratio:300/236;margin-left:-10px;}",
                          ""
                        ),
                        children: [
                          (0, A.tZ)(h.Z, {
                            href: t ? "/comics/".concat(t) : "",
                            children: (0, A.tZ)("button", {
                              disabled: void 0 === t,
                              css: E,
                              children: (0, A.BX)("svg", {
                                width: "30",
                                height: "56",
                                strokeWidth: "3",
                                fill: "none",
                                css: w,
                                children: [
                                  (0, A.tZ)("polyline", {
                                    points: "29 1, 1 28, 29 55",
                                    css: (0, u.iv)(
                                      "@media ",
                                      m.r.media.preTablet,
                                      "{display:none;}",
                                      ""
                                    ),
                                  }),
                                  (0, A.tZ)("polyline", {
                                    points: "17 1, 1 17, 17 34",
                                    css: (0, u.iv)(
                                      "display:none;@media ",
                                      m.r.media.preTablet,
                                      "{display:block;}",
                                      ""
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, A.tZ)(h.Z, {
                            href: n ? "/comics/".concat(n) : "",
                            children: (0, A.tZ)("button", {
                              disabled: void 0 === n,
                              css: E,
                              children: (0, A.BX)("svg", {
                                width: "30",
                                height: "56",
                                strokeWidth: "3",
                                fill: "none",
                                css: w,
                                children: [
                                  (0, A.tZ)("polyline", {
                                    points: "1 1, 29 28, 1 55",
                                    css: (0, u.iv)(
                                      "@media ",
                                      m.r.media.preTablet,
                                      "{display:none;}",
                                      ""
                                    ),
                                  }),
                                  (0, A.tZ)("polyline", {
                                    points: "1 1, 17 17, 1 34",
                                    css: (0, u.iv)(
                                      "display:none;@media ",
                                      m.r.media.preTablet,
                                      "{display:block;}",
                                      ""
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      a && (0, A.tZ)(K, { currComics: a }),
                    ],
                  }),
                  a && l && (0, A.tZ)(re, { active: a, comicsList: l }),
                  (0, A.tZ)(f.W, {
                    children: (0, A.BX)("div", {
                      css: (0, u.iv)(
                        "display:flex;align-items:center;justify-content:center;max-width:920px;margin:40px auto 0;@media ",
                        m.r.media.preTablet,
                        "{width:83%;margin-top:45px;}",
                        ""
                      ),
                      children: [
                        (0, A.tZ)(g.f, {
                          css: (0, u.iv)(
                            "font-size:18px;border:2px solid #000;&:not(:lang(ja)){font-size:26px;}@media ",
                            m.r.media.preTablet,
                            "{display:none;}",
                            ""
                          ),
                          height: "40",
                          fontSize: "18",
                          href: "/comics",
                          icon: "kunai-left",
                          left: !0,
                          children: me[c],
                        }),
                        (0, A.tZ)(g.f, {
                          css: (0, u.iv)(
                            "display:none;@media ",
                            m.r.media.preTablet,
                            "{display:inline-flex;margin-top:20px;border:2px solid #000;div{padding-right:26px;text-align:center;}&:not(:lang(ja)){font-size:26px;}}",
                            ""
                          ),
                          width: 1 / 0,
                          height: "46",
                          fontSize: "20",
                          href: "/comics",
                          icon: "kunai-left",
                          left: !0,
                          children: me[c],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, A.tZ)(v.E, {
                topicsComponent: (0, A.tZ)(b.E, { slug: "news-comics" }),
                bgImgSrc: "/common/news_content_bg_boruto.webp",
              }),
            ],
          });
        },
        ue = {
          ja: "\u30c8\u30c3\u30d7",
          en: "TOP",
          fr: "ACCUEIL",
          de: "TOP",
          es: "INICIO",
          it: "HOME",
        },
        pe = {
          ja: "\u30b3\u30df\u30c3\u30af\u30b9",
          en: "COMICS",
          fr: "MANGA",
          de: "MANGA",
          es: "MANGA",
          it: "MANGA",
        },
        me = {
          ja: "\u4e00\u89a7\u306b\u3082\u3069\u308b",
          en: "Return to list",
          fr: "Retour au sommaire",
          de: "Zur\xfcck zur \xdcbersicht",
          es: "Volver al \xedndice",
          it: "Torna all'indice",
        },
        fe = function (e) {
          var i = e.currComics,
            t = e.comicsList;
          return (0, A.tZ)(A.HY, {
            children: (0, A.BX)(d.DY, {
              children: [
                (0, A.tZ)(s.h, {}),
                (0, A.tZ)(de, { currComics: i, comicsList: t }),
                (0, A.tZ)(c.T, {}),
              ],
            }),
          });
        },
        he = function (e) {
          var i,
            t,
            c,
            s,
            d,
            u,
            p = e.comicDetailDto,
            m = (0, o.Vd)("comicList", {
              sort: "asc",
              data: (0, a.k8)({
                categories: ["\u30b3\u30df\u30c3\u30af"],
                comic_type: "comic_details",
                series: ["naruto"],
              }),
            }).result,
            f = (0, o.Vd)("comicList", {
              sort: "asc",
              data: (0, a.k8)({
                categories: ["\u30b3\u30df\u30c3\u30af"],
                comic_type: "comic_details",
                series: ["boruto"],
              }),
            }).result,
            h = (0, o.Vd)("comicList", {
              sort: "asc",
              data: (0, a.k8)({
                categories: ["\u30b3\u30df\u30c3\u30af"],
                comic_type: "comic_details",
                series: ["boruto_two_blue_vortex"],
              }),
            }).result,
            v =
              null !==
                (i =
                  null === m ||
                  void 0 === m ||
                  null === (t = m.data) ||
                  void 0 === t
                    ? void 0
                    : t.comic_list) && void 0 !== i
                ? i
                : [],
            b =
              null !==
                (c =
                  null === f ||
                  void 0 === f ||
                  null === (s = f.data) ||
                  void 0 === s
                    ? void 0
                    : s.comic_list) && void 0 !== c
                ? c
                : [],
            g =
              null !==
                (d =
                  null === h ||
                  void 0 === h ||
                  null === (u = h.data) ||
                  void 0 === u
                    ? void 0
                    : u.comic_list) && void 0 !== d
                ? d
                : [],
            y = v.concat(b).concat(g),
            x = (0, r.Z)(y),
            k = (0, n.useMemo)(
              function () {
                var e, i;
                return [p.thumbnail].concat(
                  null !==
                    (e =
                      null === (i = p.comic) || void 0 === i
                        ? void 0
                        : i.images.filter(function (e) {
                            return e;
                          })) && void 0 !== e
                    ? e
                    : []
                );
              },
              [p]
            ),
            I = (0, n.useMemo)(
              function () {
                try {
                  var e,
                    i,
                    t,
                    n,
                    r,
                    a,
                    l,
                    c,
                    s,
                    d,
                    u,
                    m,
                    f,
                    h,
                    v,
                    b =
                      null !==
                        (e =
                          null === (i = p.comic) ||
                          void 0 === i ||
                          null === (t = i.publisher_links) ||
                          void 0 === t
                            ? void 0
                            : t.filter(function (e) {
                                return Object.values(e.links).some(function (
                                  e
                                ) {
                                  return e;
                                });
                              })) && void 0 !== e
                        ? e
                        : [],
                    g = p.series ? p.series[0].code : "naruto",
                    y =
                      null !== (n = p.comic) && void 0 !== n && n.anime_url
                        ? "/anime".concat(
                            null === (r = p.comic) || void 0 === r
                              ? void 0
                              : r.anime_url
                          )
                        : "";
                  return {
                    id: p._id,
                    images: (0, o.hT)(k),
                    title: p.title,
                    volume:
                      null !==
                        (a =
                          null === (l = p.comic) || void 0 === l
                            ? void 0
                            : l.comic_no) && void 0 !== a
                        ? a
                        : 0,
                    storyFrom:
                      null !==
                        (c =
                          null === (s = p.comic) || void 0 === s
                            ? void 0
                            : s.story_from) && void 0 !== c
                        ? c
                        : 0,
                    storyTo:
                      null !==
                        (d =
                          null === (u = p.comic) || void 0 === u
                            ? void 0
                            : u.story_to) && void 0 !== d
                        ? d
                        : 0,
                    storySummary:
                      null !==
                        (m =
                          null === (f = p.comic) || void 0 === f
                            ? void 0
                            : f.text) && void 0 !== m
                        ? m
                        : "",
                    storyUrl:
                      null !==
                        (h =
                          null === (v = p.comic) || void 0 === v
                            ? void 0
                            : v.story_url) && void 0 !== h
                        ? h
                        : "",
                    animeUrl: y,
                    publisherLinks: b,
                    series: g,
                  };
                } catch (x) {
                  return;
                }
              },
              [p, k]
            ),
            E = (0, n.useMemo)(
              function () {
                try {
                  return x.map(function (e) {
                    var i,
                      t,
                      n,
                      r,
                      a,
                      l,
                      c = e.series ? e.series[0].code : "naruto",
                      s =
                        null !==
                          (i =
                            null === (t = e.comic) || void 0 === t
                              ? void 0
                              : t.comic_no) && void 0 !== i
                          ? i
                          : 0;
                    return {
                      id: e._id,
                      path: e.path,
                      imgSrc: (0, o.hT)(e.thumbnail),
                      title: e.title,
                      volume: s,
                      storyFrom:
                        null !==
                          (n =
                            null === (r = e.comic) || void 0 === r
                              ? void 0
                              : r.story_from) && void 0 !== n
                          ? n
                          : 0,
                      storyTo:
                        null !==
                          (a =
                            null === (l = e.comic) || void 0 === l
                              ? void 0
                              : l.story_to) && void 0 !== a
                          ? a
                          : 0,
                      storySummary: e.title,
                      series: c,
                      isBoruto1Initial: "boruto" === c && 1 === s,
                      isBoruto2Initial:
                        "boruto_two_blue_vortex" === c && 1 === s,
                    };
                  });
                } catch (e) {
                  return;
                }
              },
              [x]
            );
          return (0, A.tZ)(l.e, {
            category: "comics",
            children: (0, A.tZ)(fe, { currComics: I, comicsList: E }),
          });
        };
    },
    26267: function (e, i, t) {
      t.d(i, {
        e: function () {
          return p;
        },
      });
      var n = t(67294),
        o = t(41128),
        r = t(33587),
        a = t(8503),
        l = t(80072),
        c = t(11047),
        s = t(27715),
        d = t(10255),
        u = t(35944),
        p = function (e) {
          var i,
            t = e.category,
            p = e.children,
            m = (0, a.bU)(),
            f = (0, o.Vd)("articleList", {
              start: 0,
              limit: 16,
              data: (0, s.k8)({ category: "NEWS", subcategory: t }),
            }).result,
            h = (0, r.Z)(
              null !==
                (i =
                  null === f || void 0 === f ? void 0 : f.data.article_list) &&
                void 0 !== i
                ? i
                : []
            ).slice(0, 8),
            v = (0, n.useMemo)(
              function () {
                return h.map(function (e) {
                  var i,
                    t,
                    n,
                    r =
                      null !==
                        (i =
                          null === (t = e.categories) ||
                          void 0 === t ||
                          null === (n = t.subcategory) ||
                          void 0 === n
                            ? void 0
                            : n.map(function (e) {
                                return e.name;
                              })) && void 0 !== i
                        ? i
                        : [];
                  return {
                    id: e._id,
                    title: e.title,
                    categories: r,
                    imgUrl: (0, o.hT)(e.thumbnail),
                    date: (0, c.Am)(e.dspdate, m),
                    path: e.path,
                    isNew: (0, c.e_)(e.startdate, l.E),
                    isPickedUp: (0, c.e_)(e.startdate, l.e) && "1" === e.pickup,
                  };
                });
              },
              [h, m]
            );
          return (0, u.tZ)(u.HY, {
            children: (0, u.tZ)(d.S, { articles: v, children: p }),
          });
        };
    },
    32974: function (e, i, t) {
      t.d(i, {
        V: function () {
          return l;
        },
      });
      var n = t(70917),
        o = t(48710),
        r = t(36443),
        a = t(35944);
      function l(e) {
        var i = e.className,
          t = e.slug,
          l = (e.title, e.ruby, e.run),
          c = void 0 === l || l,
          s = e.scale,
          d = void 0 === s ? "1" : s,
          u = e.h1,
          p = e.long,
          m = void 0 !== p && p,
          f = e.isTwoLines,
          h = void 0 !== f && f,
          v = e.isSmall,
          b = void 0 !== v && v,
          g = "2/3" === d ? 2 / 3 : 1;
        return (0, a.BX)(a.HY, {
          children: [
            u && (0, a.tZ)("h1", { className: "visually-hidden", children: u }),
            (0, a.tZ)(r._, {
              className: i,
              slug: t,
              run: c,
              height: m ? 80 : 80 * g,
              isTwoLine: h,
              isSmall: b,
              css: (0, n.iv)(
                "@media ",
                o.r.media.preTablet,
                "{--brush-height:",
                h ? 80 : 40,
                "px;}",
                ""
              ),
            }),
          ],
        });
      }
    },
    22345: function (e, i, t) {
      t.d(i, {
        h: function () {
          return f;
        },
      });
      var n = t(16835),
        o = t(70917),
        r = t(11163),
        a = (t(67294), t(55756)),
        l = t(7673),
        c = t(53877),
        s = t(35555),
        d = t(37868),
        u = t(35944),
        p = t(83454);
      var m = { name: "s9xgxd", styles: "margin-left:5px;vertical-align:-2px" },
        f = function (e) {
          var i = e.href,
            t = e.className,
            f = e.color,
            h = e.children,
            v = e.target,
            b = void 0 === v ? "_blank" : v,
            g = (0, r.useRouter)(),
            y = "preview" === p.env.NEXT_PUBLIC_MODE,
            x = (0, a.fP)(["_ga"]),
            k = (0, n.Z)(x, 1)[0],
            I = "black" === f ? "black" : "#fa9427";
          return (0, u.tZ)(d.Z, {
            href: i,
            children: (0, u.tZ)("a", {
              target: b,
              rel: "_blank" === b ? "noopener noreferrer" : "",
              onClick: function () {
                return (function () {
                  if ((0, l.B)(i) && !y) {
                    var e = (0, l.X)(
                      ""
                        .concat("https://analyze.naruto-official.com")
                        .concat(g.asPath),
                      [
                        { key: "title", value: document.title },
                        { key: "uuid", value: (0, c.p)() },
                        { key: "sessionId", value: (0, c.M)() },
                        { key: "cookie", value: k._ga },
                        { key: "referrer", value: document.referrer },
                        { key: "extlink", value: i },
                      ]
                    );
                    fetch(e).catch(function (e) {
                      return console.error(e);
                    });
                  }
                })();
              },
              children: (0, u.BX)("p", {
                className: t,
                css: (0, o.iv)(
                  "display:inline-block;font-family:var(--comic-impact-font);color:",
                  I,
                  ";&:hover{text-decoration:underline;}",
                  ""
                ),
                children: [
                  h,
                  (0, u.tZ)(s.x, { css: m, size: "16px", color: I }),
                ],
              }),
            }),
          });
        };
    },
    17913: function (e, i, t) {
      t.d(i, {
        P: function () {
          return n;
        },
      });
      var n = function (e) {
        if (void 0 !== e && null !== e && !e.includes("news_noimg.jpg"))
          return ""
            .concat(
              "https://cmsapi-frontend.naruto-official.com/site/api/",
              "naruto/Image/get?path="
            )
            .concat(e);
      };
    },
  },
]);
