"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2119],
  {
    10014: function (e, t, i) {
      i.d(t, {
        E: function () {
          return l;
        },
      });
      var n = i(70917),
        a = (i(67294), i(48710)),
        r = i(35944);
      var o = { name: "1d3w5wq", styles: "width:100%" },
        l = function (e) {
          var t = e.pcImgSrc,
            i = e.spImgSrc,
            l = e.position,
            s = e.spPosition,
            c = e.isShort ? 300 : 575;
          return (0, r.tZ)("div", {
            css: o,
            children: (0, r.BX)("picture", {
              children: [
                (0, r.tZ)("source", {
                  srcSet: i,
                  width: 375,
                  height: 250,
                  media: a.r.media.preTablet,
                }),
                (0, r.tZ)("img", {
                  css: (0, n.iv)(
                    "display:block;width:100%;object-fit:cover;object-position:",
                    l,
                    ";@media ",
                    a.r.media.preTablet,
                    "{object-position:",
                    s,
                    ";height:250px;}",
                    ""
                  ),
                  src: t,
                  width: 1280,
                  height: c,
                  alt: "",
                }),
              ],
            }),
          });
        };
    },
    32974: function (e, t, i) {
      i.d(t, {
        V: function () {
          return l;
        },
      });
      var n = i(70917),
        a = i(48710),
        r = i(36443),
        o = i(35944);
      function l(e) {
        var t = e.className,
          i = e.slug,
          l = (e.title, e.ruby, e.run),
          s = void 0 === l || l,
          c = e.scale,
          d = void 0 === c ? "1" : c,
          p = e.h1,
          u = e.long,
          m = void 0 !== u && u,
          h = e.isTwoLines,
          f = void 0 !== h && h,
          g = e.isSmall,
          v = void 0 !== g && g,
          b = "2/3" === d ? 2 / 3 : 1;
        return (0, o.BX)(o.HY, {
          children: [
            p && (0, o.tZ)("h1", { className: "visually-hidden", children: p }),
            (0, o.tZ)(r._, {
              className: t,
              slug: i,
              run: s,
              height: m ? 80 : 80 * b,
              isTwoLine: f,
              isSmall: v,
              css: (0, n.iv)(
                "@media ",
                a.r.media.preTablet,
                "{--brush-height:",
                f ? 80 : 40,
                "px;}",
                ""
              ),
            }),
          ],
        });
      }
    },
    32119: function (e, t, i) {
      i.d(t, {
        S: function () {
          return K;
        },
      });
      var n = i(67294),
        a = i(41128),
        r = i(53394),
        o = i(33587),
        l = i(46045),
        s = i(11047),
        c = i(26267),
        d = i(65313),
        p = i(73938),
        u = i(95541),
        m = i(70917),
        h = i(11163),
        f = i(8503),
        g = i(48710),
        v = i(77340),
        b = i(10014),
        x = i(72462),
        y = i(86090),
        w = i(32974),
        E = i(79075),
        S = i(35944);
      var T = function (e) {
          var t = e.onChange,
            i = (0, n.useCallback)(
              function (e) {
                t(e.target.checked);
              },
              [t]
            );
          return (0, S.BX)("div", {
            css: Z.toggleBtn,
            children: [
              (0, S.tZ)("input", {
                type: "checkbox",
                id: "check",
                onChange: i,
              }),
              (0, S.tZ)("label", {
                htmlFor: "check",
                children: (0, S.tZ)("span", {}),
              }),
            ],
          });
        },
        Z = {
          toggleBtn: {
            name: "1yre57p",
            styles:
              "display:inline-block;input{display:none;}label{position:relative;display:block;width:55px;height:30px;line-height:30px;cursor:pointer;background:rgb(0 0 0);border-radius:15px;}label>span::before{position:absolute;top:1px;left:9px;font-family:'Bebas Neue';font-size:16px;color:rgb(255 255 255);content:'OFF';opacity:1;transition:0.15s;}input:checked+label>span::before{opacity:0;}label>span::after{position:absolute;top:1px;left:31px;font-family:'Bebas Neue';font-size:16px;color:rgb(0 0 0);content:'ON';opacity:0;transition:0.15s;}&:lang(de){label>span::before{content:'AUS';}label>span::after{content:'AN';}}input:checked+label>span::after{opacity:1;}input:checked+label{background:rgb(250 148 39);}label::after{position:absolute;top:5px;left:30px;width:20px;height:20px;content:'';background:rgb(255 255 255);border-radius:50%;transition:0.3s;}input:checked+label::after{left:6px;}",
          },
        },
        N = i(16835),
        k = i(55756),
        P = i(7673),
        A = i(53877),
        L = i(26184),
        I = i(18714),
        _ = i(6981),
        j = i(77983),
        z = i(83454);
      var B = { name: "1ff36h2", styles: "flex-grow:1" },
        U = {
          name: "17ikjc7",
          styles: "flex-shrink:0;width:1.25vw;max-width:16px",
        },
        O = {
          name: "tbxqsq",
          styles: "position:absolute;top:0;left:0;display:flex",
        },
        C = {
          name: "yqy8o0",
          styles:
            "display:inline-block;width:100%;height:100%;object-fit:contain",
        },
        R = { name: "bjn8wh", styles: "position:relative" },
        M = function (e) {
          var t = e.title,
            i = e.imgUrl,
            n = e.detail,
            a = e.tags,
            r = e.linkUrl,
            o = e.windowType,
            l = e.isWithin,
            s = e.isParmanent,
            c = (0, f.bU)(),
            d = (0, h.useRouter)(),
            p = "preview" === z.env.NEXT_PUBLIC_MODE,
            u = (0, k.fP)(["_ga"]),
            v = (0, N.Z)(u, 1)[0],
            b = [];
          return (
            s && b.push({ label: G[c], bgColor: "orange" }),
            !s && l && b.push({ label: D[c], bgColor: "black" }),
            (0, S.BX)("div", {
              css: (0, m.iv)(
                "display:flex;justify-content:flex-start;@media ",
                g.r.media.preTablet,
                "{flex-direction:column;}",
                ""
              ),
              children: [
                (0, S.BX)("div", {
                  css: R,
                  children: [
                    (0, S.tZ)("div", {
                      css: (0, m.iv)(
                        "display:flex;align-items:center;justify-content:center;width:min(280px, 19.922vw);height:min(280px, 19.922vw);border:1px solid #dbdbdb;@media ",
                        g.r.media.preTablet,
                        "{width:100%;height:auto;aspect-ratio:326/191;background-color:#f2f2f2;border:none;}",
                        ""
                      ),
                      children: (0, S.tZ)(L._, {
                        src: i,
                        imgStyle: C,
                        width: 255,
                        height: 255,
                        alt: t,
                      }),
                    }),
                    (0, S.tZ)("div", {
                      css: O,
                      children:
                        0 !== b.length && (0, S.tZ)(_.h, { stausLabels: b }),
                    }),
                  ],
                }),
                (0, S.tZ)("div", { css: U }),
                (0, S.BX)("div", {
                  css: B,
                  children: [
                    (0, S.tZ)(j.Z, {
                      wrapperCss: (0, m.iv)(
                        "@media ",
                        g.r.media.preTablet,
                        "{margin-top:22px;}",
                        ""
                      ),
                      labels: a,
                    }),
                    (0, S.tZ)("p", {
                      css: (0, m.iv)(
                        "margin-top:8px;font-family:var(--comic-impact-font);font-size:18px;line-height:1.5;&:not(:lang(ja)){font-size:21px;line-height:1.1;}@media ",
                        g.r.media.preTablet,
                        "{margin-top:16px;font-size:22px;&:not(:lang(ja)){font-size:28px;}}",
                        ""
                      ),
                      children: t,
                    }),
                    n &&
                      (0, S.BX)("div", {
                        css: (0, m.iv)(
                          "display:grid;grid-template-columns:auto 1fr;margin-top:8px;@media ",
                          g.r.media.preTablet,
                          "{row-gap:3px;&:not(:lang(ja)){display:block;}}",
                          ""
                        ),
                        children: [
                          (0, S.tZ)("p", { css: V.descHead, children: X[c] }),
                          (0, S.tZ)("p", { css: V.descBody, children: n }),
                        ],
                      }),
                    r &&
                      (0, S.tZ)("div", {
                        css: (0, m.iv)(
                          "margin-top:14px;@media ",
                          g.r.media.preTablet,
                          "{display:flex;justify-content:center;margin-top:20px;}",
                          ""
                        ),
                        children: (0, S.tZ)(I.f, {
                          css: (0, m.iv)(
                            "height:32px;font-family:var(--comic-impact-font);font-size:16px;&:not(:lang(ja)){font-size:21px;}@media ",
                            g.r.media.preTablet,
                            "{width:82%;height:46px;font-size:20px;&:not(:lang(ja)){font-size:26px;}}",
                            ""
                          ),
                          href: r,
                          icon: "same" === o ? void 0 : "link",
                          onClick:
                            "same" === o
                              ? void 0
                              : function () {
                                  return (function (e) {
                                    if (!p) {
                                      var t = (0, P.X)(
                                        ""
                                          .concat(
                                            "https://analyze.naruto-official.com"
                                          )
                                          .concat(d.asPath),
                                        [
                                          {
                                            key: "title",
                                            value: document.title,
                                          },
                                          { key: "uuid", value: (0, A.p)() },
                                          {
                                            key: "sessionId",
                                            value: (0, A.M)(),
                                          },
                                          { key: "cookie", value: v._ga },
                                          {
                                            key: "referrer",
                                            value: document.referrer,
                                          },
                                          { key: "extlink", value: e },
                                        ]
                                      );
                                      fetch(t).catch(function (e) {
                                        return console.error(e);
                                      });
                                    }
                                  })(r);
                                },
                          children: W[c],
                        }),
                      }),
                  ],
                }),
              ],
            })
          );
        },
        V = {
          descHead: (0, m.iv)(
            "grid-column:1/3;font-size:14px;font-weight:bold;line-height:1.5;@media ",
            g.r.media.preTablet,
            "{grid-column:1/2;font-size:12px;&:not(:lang(ja)){margin-left:5px;}}",
            ""
          ),
          descBody: (0, m.iv)(
            "font-size:14px;line-height:1.5;white-space:pre-wrap;@media ",
            g.r.media.preTablet,
            "{margin-bottom:0;margin-left:5px;font-size:12px;&:lang(ja){&::before{content:' ';}}}",
            ""
          ),
        },
        X = {
          ja: "\u4f1a\u5834/\u671f\u9593:",
          en: "venue/date:",
          fr: "LIEU/P\xc9RIODE :",
          de: "VERANSTALTUNGSORT/-ZEIT:",
          es: "LUGAR/FECHA:",
          it: "LUOGO/DATA:",
        },
        W = {
          ja: "\u8a73\u3057\u304f\u306f\u3053\u3061\u3089",
          en: "MORE DETAILS",
          fr: "PLUS D\u2019INFOS",
          de: "DETAILS",
          es: "M\xc1S DETALLES",
          it: "DETTAGLI",
        },
        D = {
          ja: "\u958b\u50ac\u4e2d",
          en: "ON NOW",
          fr: "EN COURS",
          de: "LAUFEND",
          es: "AHORA",
          it: "IN CORSO",
        },
        G = {
          ja: "\u5e38\u8a2d",
          en: "ALWAYS",
          fr: "TOUJOURS",
          de: "STETS",
          es: "SIEMPRE",
          it: "SEMPRE",
        };
      var F = {
          name: "1unpw5e",
          styles: "width:fit-content;margin:60px auto 0",
        },
        H = function (e) {
          var t = e.eventList,
            i = e.currPageNum,
            a = e.lastPageNum,
            r = (0, h.useRouter)(),
            o = (0, f.bU)(),
            s = (0, l.bn)(),
            c = (0, n.useCallback)(
              function (e) {
                s &&
                  (s({
                    type: "CHANGE_PARAM",
                    searchParam: { pageNum: 1, pastFlag: e },
                  }),
                  r
                    .push(r.pathname, void 0, { scroll: !1 })
                    .catch(function (e) {
                      return console.error(e);
                    }));
              },
              [r, s]
            );
          return (0, S.BX)("main", {
            css: q.main,
            children: [
              (0, S.tZ)(b.E, {
                pcImgSrc: "/event/header_bg_pc.webp",
                spImgSrc: "/event/header_bg_sp.webp",
                position: "center",
                spPosition: "center",
                isShort: !0,
              }),
              (0, S.tZ)("div", {
                css: (0, m.iv)(
                  "position:absolute;top:155px;width:100%;@media ",
                  g.r.media.preTablet,
                  "{top:180px;}",
                  ""
                ),
                children: (0, S.tZ)(v.W, {
                  children: (0, S.tZ)(w.V, {
                    title: "EVENT",
                    ruby: "\u30a4\u30d9\u30f3\u30c8",
                    slug: "event",
                    h1: "EVENT",
                    isSmall: !0,
                  }),
                }),
              }),
              (0, S.tZ)("div", {
                children: (0, S.tZ)(v.W, {
                  children: (0, S.BX)("div", {
                    css: q.contentsBox,
                    children: [
                      (0, S.BX)("div", {
                        css: q.filterBox,
                        children: [
                          (0, S.tZ)("p", {
                            css: q.filterLabel,
                            children: Y[o],
                          }),
                          (0, S.tZ)(T, { onChange: c }),
                        ],
                      }),
                      (0, S.tZ)("div", {
                        css: q.eventSummaryList,
                        children:
                          t &&
                          t.map(function (e) {
                            return (0,
                            S.tZ)(M, { title: e.title, imgUrl: e.imgUrl, detail: e.detail, tags: e.tags, linkUrl: e.linkUrl, windowType: e.windowType, isWithin: e.isWithin, isParmanent: e.isPermanent }, e.id);
                          }),
                      }),
                      (0, S.tZ)(E.Z, {
                        wrapperCss: F,
                        currPageNum: i,
                        lastPageNum: a,
                      }),
                    ],
                  }),
                }),
              }),
              (0, S.tZ)(x.E, {
                topicsComponent: (0, S.tZ)(y.E, { slug: "news-event" }),
                bgImgSrc: "/event/news_content_bg.webp",
              }),
            ],
          });
        },
        q = {
          main: {
            name: "1f3izz8",
            styles:
              "position:relative;z-index:0;display:flex;flex-direction:column",
          },
          contentsBox: (0, m.iv)(
            "margin:60px auto 100px;@media ",
            g.r.media.preTablet,
            "{margin:44px 0 70px;}",
            ""
          ),
          filterBox: (0, m.iv)(
            "display:flex;gap:21px;align-items:center;@media ",
            g.r.media.preTablet,
            "{justify-content:center;}",
            ""
          ),
          filterLabel: (0, m.iv)(
            "font-family:var(--comic-impact-font);font-size:18px;font-weight:bold;line-height:1;&:not(:lang(ja)){font-size:23px;font-weight:400;}@media ",
            g.r.media.preTablet,
            "{font-size:20px;&:not(:lang(ja)){font-size:23px;font-weight:400;}}",
            ""
          ),
          eventSummaryList: (0, m.iv)(
            "display:grid;grid-template-columns:repeat(2, minmax(278px, 1fr));row-gap:30px;column-gap:2%;margin-top:53px;@media ",
            g.r.media.preTablet,
            "{row-gap:45px;column-gap:82px;margin-top:42px;}@media ",
            "screen and (max-width: 631px)",
            "{grid-template-columns:1fr;margin-top:42px;}",
            ""
          ),
        },
        Y = {
          ja: "\u904e\u53bb\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u8868\u793a",
          en: "VIEW PAST EVENTS",
          fr: "VOIR LES \xc9V\xc9NEMENTS PASS\xc9S",
          de: "VERGANGENE EREIGNISSE ANZEIGEN",
          es: "VER EVENTOS PASADOS",
          it: "VISUALIZZA GLI EVENTI PASSATI",
        },
        J = function (e) {
          var t = e.eventList,
            i = e.currPageNum,
            n = e.lastPageNum;
          return (0, S.tZ)(S.HY, {
            children: (0, S.BX)(u.DY, {
              children: [
                (0, S.tZ)(p.h, {}),
                (0, S.tZ)(H, { eventList: t, currPageNum: i, lastPageNum: n }),
                (0, S.tZ)(d.T, {}),
              ],
            }),
          });
        },
        K = function () {
          var e;
          (0, r.C)();
          var t = (0, l.XN)().searchParam,
            i = t.pageNum,
            d = t.pastFlag,
            p = (0, a.Vd)("eventList", {}).result,
            u = (0, o.Z)(
              null !==
                (e = null === p || void 0 === p ? void 0 : p.data.event_list) &&
                void 0 !== e
                ? e
                : []
            ).filter(function (e) {
              return (
                (0, s.f7)(e.event.event_startdate, e.event.event_enddate) || d
              );
            }),
            m = (0, n.useMemo)(
              function () {
                try {
                  return u.map(function (e) {
                    var t,
                      i,
                      n,
                      r,
                      o =
                        null !==
                          (t =
                            null === e ||
                            void 0 === e ||
                            null === (i = e.event) ||
                            void 0 === i
                              ? void 0
                              : i.event_startdate) && void 0 !== t
                          ? t
                          : 0,
                      l =
                        null !==
                          (n =
                            null === e ||
                            void 0 === e ||
                            null === (r = e.event) ||
                            void 0 === r
                              ? void 0
                              : r.event_enddate) && void 0 !== n
                          ? n
                          : 0;
                    return {
                      id: e._id,
                      title: e.title,
                      imgUrl: (0, a.hT)(e.thumbnail),
                      detail: e.event.explanation,
                      tags: e.event.posting_area,
                      linkUrl: e.event.url,
                      windowType: e.event.window_type,
                      isWithin: (0, s.f7)(o, l),
                      isPermanent: e.event.is_permanent,
                    };
                  });
                } catch (e) {
                  return;
                }
              },
              [u]
            ),
            h = (0, n.useMemo)(
              function () {
                return null === m || void 0 === m
                  ? void 0
                  : m.filter(function (e) {
                      return e.isPermanent;
                    });
              },
              [m]
            ),
            f = (0, n.useMemo)(
              function () {
                return null === m || void 0 === m
                  ? void 0
                  : m.filter(function (e) {
                      return !e.isPermanent;
                    });
              },
              [m]
            ),
            g = (0, n.useMemo)(
              function () {
                var e;
                return null !==
                  (e =
                    null === f || void 0 === f
                      ? void 0
                      : f.sort(function (e, t) {
                          return e.isWithin && !t.isWithin
                            ? -1
                            : !e.isWithin && t.isWithin
                            ? 1
                            : 0;
                        })) && void 0 !== e
                  ? e
                  : [];
              },
              [f]
            ),
            v = (0, n.useMemo)(
              function () {
                return null === h || void 0 === h ? void 0 : h.concat(g);
              },
              [g, h]
            ),
            b = (0, n.useMemo)(
              function () {
                return null === v || void 0 === v
                  ? void 0
                  : v.slice(16 * (i - 1), 16 * i);
              },
              [i, v]
            ),
            x = (0, n.useMemo)(
              function () {
                return m ? Math.floor(Math.max(m.length - 1, 0) / 16) + 1 : 1;
              },
              [m]
            );
          return (0, S.tZ)(c.e, {
            category: "event",
            children: (0, S.tZ)(J, {
              eventList: b,
              currPageNum: i,
              lastPageNum: x,
            }),
          });
        };
    },
  },
]);
