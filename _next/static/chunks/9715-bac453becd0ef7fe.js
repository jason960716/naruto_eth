"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9715],
  {
    69715: function (e, t, i) {
      i.d(t, {
        k: function () {
          return W;
        },
      });
      var r = i(59499),
        n = i(67294),
        a = i(41128),
        o = i(33587),
        l = i(26267),
        c = i(65313),
        s = i(73938),
        p = i(95541),
        d = i(70917),
        u = i(8503),
        m = i(48710),
        f = i(77340),
        g = i(71327),
        h = i(72462),
        x = i(86090),
        b = i(18714),
        v = i(32974),
        O = i(25701),
        A = i(92517),
        y = i(26184),
        T = i(77983),
        w = i(35944);
      var E = { name: "ujhzxe", styles: "grid-row:1/2;grid-column:3/4" },
        N = {
          name: "ukfjzf",
          styles: "width:100%;height:100%;object-fit:contain",
        },
        Z = function (e) {
          var t = e.title,
            i = e.code,
            r = e.imgUrl,
            n = e.categories,
            a = (0, u.bU)();
          return (0, w.BX)("div", {
            css: (0, d.iv)(
              "display:grid;grid-template-rows:1fr 32px;grid-template-columns:minmax(120px, 1fr) 15px 1.25fr;@media ",
              m.r.media.preTablet,
              "{grid-template-rows:1fr 46px;grid-template-columns:minmax(110px, 1fr) 15px 1fr;row-gap:23px;}",
              ""
            ),
            children: [
              (0, w.tZ)("div", {
                css: (0, d.iv)(
                  "display:flex;grid-row:1/3;grid-column:1/2;align-items:center;justify-content:center;width:100%;aspect-ratio:130/204;border:1px solid #dbdbdb;@media ",
                  m.r.media.preTablet,
                  "{grid-row:1/2;grid-column:1/2;width:100%;}",
                  ""
                ),
                children: (0, w.tZ)(y._, {
                  src: r,
                  imgStyle: N,
                  width: 255,
                  height: 255,
                  alt: t,
                }),
              }),
              (0, w.BX)("div", {
                css: E,
                children: [
                  n &&
                    (0, w.tZ)(T.Z, {
                      labels: n.map(function (e) {
                        return e.name;
                      }),
                    }),
                  (0, w.tZ)("p", {
                    css: (0, d.iv)(
                      "margin-top:20px;font-family:var(--comic-impact-font);font-size:18px;line-height:1.5;&:not(:lang(ja)){font-size:21px;line-height:1.2;}@media ",
                      m.r.media.preTablet,
                      "{margin-top:16px;line-height:32px;&:not(:lang(ja)){font-size:24px;}}",
                      ""
                    ),
                    children: t,
                  }),
                ],
              }),
              (0, w.tZ)(b.f, {
                css: (0, d.iv)(
                  "grid-row:2/3;grid-column:3/4;height:32px;font-size:min(1.23vw, 16px);&:not(:lang(ja)){font-size:21px;letter-spacing:-0.01em;}@media ",
                  m.r.media.preTablet,
                  "{grid-row:2/3;grid-column:1/4;width:100%;height:46px;font-size:20px;&:not(:lang(ja)){font-size:26px;}}",
                  ""
                ),
                href: "/books/".concat(i),
                icon: "kunai",
                children: I[a],
              }),
            ],
          });
        },
        I = {
          ja: "\u8a73\u3057\u304f\u306f\u3053\u3061\u3089",
          en: "MORE DETAILS",
          fr: "PLUS D\u2019INFOS",
          de: "DETAILS",
          es: "M\xc1S DETALLES",
          it: "DETTAGLI",
        };
      var j = {
          name: "15130t7",
          styles: "display:flex;justify-content:center;margin-top:60px",
        },
        S = { name: "125wnaz", styles: "z-index:0" },
        L = {
          name: "1q27pra",
          styles: "z-index:0;display:flex;justify-content:space-between",
        },
        k = {
          name: "1eeas9r",
          styles:
            "position:relative;z-index:1;display:flex;flex-direction:column",
        },
        M = function (e) {
          var t = e.relatedBooks,
            i = (0, u.bU)(),
            r = (0, n.useState)(""),
            a = r[0],
            o = r[1],
            l = "it" === i || "es" === i,
            c = (0, n.useMemo)(
              function () {
                return null === t || void 0 === t
                  ? void 0
                  : t.filter(function (e) {
                      return (
                        "" === a ||
                        e.categories
                          .map(function (e) {
                            return e.code;
                          })
                          .includes(a)
                      );
                    });
              },
              [t, a]
            ),
            s = (0, n.useCallback)(function (e) {
              o(e);
            }, []);
          return (0, w.BX)("main", {
            css: k,
            children: [
              (0, w.tZ)("div", {
                css: (0, d.iv)(
                  "position:absolute;top:160px;width:100%;@media ",
                  m.r.media.preTablet,
                  "{top:164px;}",
                  ""
                ),
                children: (0, w.tZ)(f.W, {
                  children: (0, w.BX)("div", {
                    css: L,
                    children: [
                      (0, w.tZ)("div", {
                        css: S,
                        children: (0, w.tZ)(v.V, {
                          title: "BOOKS",
                          ruby: "\u95a2\u9023\u66f8\u7c4d",
                          slug: "books",
                          scale: "2/3",
                          h1: "BOOKS",
                          long: l || "fr" === i,
                          isTwoLines: l,
                        }),
                      }),
                      (0, w.tZ)(O.Z, {
                        wrapperCss: (0, d.iv)(
                          "z-index:1;margin-top:16px;@media ",
                          m.r.media.preTablet,
                          "{margin-top:44px;}",
                          ""
                        ),
                        paths: [
                          {
                            label: R[i],
                            href: "/",
                            font:
                              "ja" === i ? "fot-udkakugoc80-pro" : "Bebas Neue",
                          },
                          {
                            label: _[i],
                            href: "/comics",
                            font:
                              "ja" === i ? "fot-udkakugoc80-pro" : "Bebas Neue",
                          },
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, w.tZ)("div", {
                css: (0, d.iv)(
                  "width:100%;padding:260px 0 100px;background:url(",
                  "ja" === i
                    ? "/common/bg_naruto_jp.webp"
                    : "/common/bg_naruto_en.webp",
                  ") top/1280px;@media ",
                  m.r.media.preTablet,
                  "{padding:250px 0 80px;}",
                  ""
                ),
                children: (0, w.BX)(f.W, {
                  children: [
                    (0, w.BX)("div", {
                      css: (0, d.iv)(
                        "padding:48px clamp(34px, 34px + (60 - 34) * ((100% - 975px) / (1110 - 975)), 60px);background-color:#fff;@media ",
                        m.r.media.preTablet,
                        "{padding:28px clamp(29px, 29px + (34 - 29) * ((100% - 327px) / (972 - 327)), 34px) 45px;}",
                        ""
                      ),
                      children: [
                        (0, w.tZ)(A.Z, {
                          wrapperCss: (0, d.iv)(
                            "@media ",
                            m.r.media.preTablet,
                            "{display:none;}",
                            ""
                          ),
                          items: H(i),
                          initType: a,
                          onClick: s,
                        }),
                        (0, w.tZ)(g.Z, {
                          wrapperCss: (0, d.iv)(
                            "display:none;@media ",
                            m.r.media.preTablet,
                            "{display:block;}",
                            ""
                          ),
                          items: H(i),
                          initType: a,
                          onChange: s,
                        }),
                        (0, w.tZ)("div", {
                          css: (0, d.iv)(
                            "display:grid;grid-template-columns:repeat(3, 1fr);row-gap:42px;column-gap:42px;margin-top:60px;@media ",
                            m.r.media.preTablet,
                            "{grid-template-columns:repeat(2, 1fr);row-gap:45px;column-gap:clamp(29px, 29px + (34 - 29) * ((100% - 327px) / (972 - 327)), 34px);margin-top:44px;}@media ",
                            C,
                            "{grid-template-columns:1fr;margin-top:44px;}",
                            ""
                          ),
                          children:
                            c &&
                            c.map(function (e) {
                              return (0,
                              w.tZ)(Z, { title: e.title, code: e.code, imgUrl: e.imgUrl, categories: e.categories }, e.id);
                            }),
                        }),
                      ],
                    }),
                    (0, w.tZ)("div", {
                      css: j,
                      children: (0, w.tZ)(b.f, {
                        css: (0, d.iv)(
                          "width:730px;height:100px;font-size:32px;text-align:center;border-width:4px;&:not(:lang(ja)){font-size:46px;}@media ",
                          m.r.media.preTablet,
                          "{width:100%;height:48px;font-size:20px;text-align:left;border-width:2px;&:not(:lang(ja)){font-size:26px;}}",
                          ""
                        ),
                        href: "/comics",
                        icon: "kunai",
                        children: X[i],
                      }),
                    }),
                  ],
                }),
              }),
              (0, w.tZ)(h.E, {
                topicsComponent: (0, w.tZ)(x.E, { slug: "news-books" }),
                bgImgSrc: "/common/news_content_bg_boruto.webp",
              }),
            ],
          });
        },
        C = "screen and (max-width: 710px)",
        R = {
          ja: "\u30c8\u30c3\u30d7",
          en: "TOP",
          fr: "ACCUEIL",
          de: "TOP",
          es: "INICIO",
          it: "HOME",
        },
        _ = {
          ja: "\u30b3\u30df\u30c3\u30af\u30b9",
          en: "COMICS",
          fr: "MANGA",
          de: "MANGA",
          es: "MANGA",
          it: "MANGA",
        },
        U = {
          ja: "\u3059\u3079\u3066",
          en: "ALL",
          fr: "TOUT",
          de: "ALLE",
          es: "TODO",
          it: "TUTTO",
        },
        B = {
          ja: "\u30ce\u30d9\u30eb",
          en: "BOOKS",
          fr: "ROMAN",
          de: "LIGHT NOVEL",
          es: "NOVELAS",
          it: "LIBRI",
        },
        z = {
          ja: "\u30b3\u30df\u30c3\u30af\u30b9",
          en: "COMICS",
          fr: "MANGA",
          de: "MANGA",
          es: "MANGA",
          it: "MANGA",
        },
        G = {
          ja: "\u30a2\u30fc\u30c8\u30ef\u30fc\u30af",
          en: "ARTWORK",
          fr: "ARTWORK",
          de: "ILLUSTRATION",
          es: "ILUSTRACIONES",
          it: "ARTWORK",
        },
        P = {
          ja: "\u30a2\u30cb\u30e1\u95a2\u9023",
          en: "RELATED TITLES",
          fr: "EN LIEN AVEC L'ANIM\xc9",
          de: "ANIME-RELEVANTES",
          es: "PUBLICACIONES RELACIONADAS",
          it: "PUBBLICAZIONI CORRELATE",
        },
        D = {
          ja: "\u305d\u306e\u4ed6",
          en: "OTHER",
          fr: "AUTRES",
          de: "SONSTIGE",
          es: "OTROS",
          it: "ALTRO",
        },
        H = function (e) {
          return [
            { label: U[e], type: "" },
            { label: B[e], type: "novel" },
            { label: z[e], type: "comics" },
            { label: G[e], type: "artwork" },
            { label: P[e], type: "anime_related" },
            { label: D[e], type: "other" },
          ];
        },
        X = {
          ja: "\u30b3\u30df\u30c3\u30af\u30b9\u60c5\u5831\u306f\u3053\u3061\u3089",
          en: "MORE INFO ON THE COMICS",
          fr: "PLUS D\u2019INFOS SUR LE MANGA",
          de: "MEHR INFOS ZUM MANGA",
          es: "INFORMACI\xd3N SOBRE EL MANGA",
          it: "INFORMAZIONI SUL MANGA",
        },
        F = function (e) {
          var t = e.relatedBooks;
          return (0, w.tZ)(w.HY, {
            children: (0, w.BX)(p.DY, {
              children: [
                (0, w.tZ)(s.h, {}),
                (0, w.tZ)(M, { relatedBooks: t }),
                (0, w.tZ)(c.T, {}),
              ],
            }),
          });
        };
      function K(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(i), !0).forEach(function (t) {
                (0, r.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : K(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var W = function (e) {
        var t = e.resp.series_list
            .filter(function (e) {
              return !Array.isArray(e.latest_content);
            })
            .map(function (e) {
              return V(
                V({}, e),
                {},
                { regional_setting: e.latest_content.regional_setting }
              );
            }),
          i = (0, o.Z)(null !== t && void 0 !== t ? t : []),
          r = (0, n.useMemo)(
            function () {
              try {
                return i.map(function (e) {
                  var t,
                    i,
                    r = null === e || void 0 === e ? void 0 : e.latest_content,
                    n =
                      null === e ||
                      void 0 === e ||
                      null === (t = e.latest_content) ||
                      void 0 === t ||
                      null === (i = t.categories) ||
                      void 0 === i
                        ? void 0
                        : i.subcategory;
                  return {
                    id: e.code,
                    title: e.name,
                    code: e.code,
                    imgUrl: (0, a.hT)(r.thumbnail),
                    categories: n,
                  };
                });
              } catch (e) {
                return;
              }
            },
            [i]
          );
        return (0, w.tZ)(l.e, {
          category: "comics",
          children: (0, w.tZ)(F, { relatedBooks: r }),
        });
      };
    },
    26267: function (e, t, i) {
      i.d(t, {
        e: function () {
          return u;
        },
      });
      var r = i(67294),
        n = i(41128),
        a = i(33587),
        o = i(8503),
        l = i(80072),
        c = i(11047),
        s = i(27715),
        p = i(10255),
        d = i(35944),
        u = function (e) {
          var t,
            i = e.category,
            u = e.children,
            m = (0, o.bU)(),
            f = (0, n.Vd)("articleList", {
              start: 0,
              limit: 16,
              data: (0, s.k8)({ category: "NEWS", subcategory: i }),
            }).result,
            g = (0, a.Z)(
              null !==
                (t =
                  null === f || void 0 === f ? void 0 : f.data.article_list) &&
                void 0 !== t
                ? t
                : []
            ).slice(0, 8),
            h = (0, r.useMemo)(
              function () {
                return g.map(function (e) {
                  var t,
                    i,
                    r,
                    a =
                      null !==
                        (t =
                          null === (i = e.categories) ||
                          void 0 === i ||
                          null === (r = i.subcategory) ||
                          void 0 === r
                            ? void 0
                            : r.map(function (e) {
                                return e.name;
                              })) && void 0 !== t
                        ? t
                        : [];
                  return {
                    id: e._id,
                    title: e.title,
                    categories: a,
                    imgUrl: (0, n.hT)(e.thumbnail),
                    date: (0, c.Am)(e.dspdate, m),
                    path: e.path,
                    isNew: (0, c.e_)(e.startdate, l.E),
                    isPickedUp: (0, c.e_)(e.startdate, l.e) && "1" === e.pickup,
                  };
                });
              },
              [g, m]
            );
          return (0, d.tZ)(d.HY, {
            children: (0, d.tZ)(p.S, { articles: h, children: u }),
          });
        };
    },
    77983: function (e, t, i) {
      var r = i(70917),
        n = (i(67294), i(48710)),
        a = i(37642),
        o = i(35944);
      var l = {
        name: "1s4qkvb",
        styles: "display:flex;flex-wrap:wrap;gap:5px",
      };
      t.Z = (0, a.U)(function (e) {
        var t = e.labels;
        return (0, o.tZ)("div", {
          css: l,
          children:
            null === t || void 0 === t
              ? void 0
              : t.map(function (e, t) {
                  return (0, o.tZ)(s, { label: e }, t);
                }),
        });
      });
      var c = {
          name: "hc9rql",
          styles:
            "display:flex;align-items:center;height:24px;padding:4px 7px;background-color:#eaeaea",
        },
        s = function (e) {
          var t = e.label;
          return (0, o.tZ)("div", {
            css: c,
            children: (0, o.tZ)("p", {
              css: (0, r.iv)(
                "width:100%;font-family:var(--comic-font);font-size:11px;line-height:1;white-space:nowrap;@media ",
                n.r.media.preTablet,
                "{font-size:12px;}",
                ""
              ),
              children: t,
            }),
          });
        };
    },
  },
]);
