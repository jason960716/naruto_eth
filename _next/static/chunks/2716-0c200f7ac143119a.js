"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2716],
  {
    10014: function (e, i, t) {
      t.d(i, {
        E: function () {
          return s;
        },
      });
      var a = t(70917),
        n = (t(67294), t(48710)),
        r = t(35944);
      var l = { name: "1d3w5wq", styles: "width:100%" },
        s = function (e) {
          var i = e.pcImgSrc,
            t = e.spImgSrc,
            s = e.position,
            d = e.spPosition,
            o = e.isShort ? 300 : 575;
          return (0, r.tZ)("div", {
            css: l,
            children: (0, r.BX)("picture", {
              children: [
                (0, r.tZ)("source", {
                  srcSet: t,
                  width: 375,
                  height: 250,
                  media: n.r.media.preTablet,
                }),
                (0, r.tZ)("img", {
                  css: (0, a.iv)(
                    "display:block;width:100%;object-fit:cover;object-position:",
                    s,
                    ";@media ",
                    n.r.media.preTablet,
                    "{object-position:",
                    d,
                    ";height:250px;}",
                    ""
                  ),
                  src: i,
                  width: 1280,
                  height: o,
                  alt: "",
                }),
              ],
            }),
          });
        };
    },
    82716: function (e, i, t) {
      t.d(i, {
        w: function () {
          return ce;
        },
      });
      var a = t(67294),
        n = t(41128),
        r = t(53394),
        l = t(33587),
        s = t(46045),
        d = t(8503),
        o = t(11047),
        c = t(27715),
        m = t(26267),
        p = t(65313),
        h = t(73938),
        g = t(95541),
        u = t(70917),
        f = t(11163),
        b = t(48710),
        x = t(77340),
        v = t(71327),
        y = t(10014),
        S = t(72462),
        T = t(86090),
        w = t(79075),
        E = t(32974),
        Z = t(92517),
        k = t(16835),
        O = t(55756),
        L = t(7673),
        N = t(53877),
        I = t(26184),
        P = t(18714),
        A = t(6981),
        X = t(77983),
        j = t(35944),
        _ = t(83454);
      var R = { name: "1ff36h2", styles: "flex-grow:1" },
        U = {
          name: "17ikjc7",
          styles: "flex-shrink:0;width:1.25vw;max-width:16px",
        },
        C = {
          name: "tbxqsq",
          styles: "position:absolute;top:0;left:0;display:flex",
        },
        B = {
          name: "1wg5rc6",
          styles:
            "display:block;width:auto;max-width:100%;height:100%;object-fit:contain",
        },
        z = {
          name: "e8ewlh",
          styles:
            "display:block;width:100%;max-width:100%;height:100%;object-fit:contain",
        },
        D = { name: "bjn8wh", styles: "position:relative" },
        H = function (e) {
          var i = e.title,
            t = e.imgUrl,
            a = e.maker,
            n = e.tags,
            r = e.genre,
            l = e.deliveryDate,
            s = e.releaseDate,
            o = e.linkUrl,
            c = e.linkLabel,
            m = e.linkUrl2,
            p = e.linkLabel2,
            h = e.isWithin,
            g = (0, d.bU)(),
            x = (0, f.useRouter)(),
            v = "preview" === _.env.NEXT_PUBLIC_MODE,
            y = (0, O.fP)(["_ga"]),
            S = (0, k.Z)(y, 1)[0],
            T = [];
          return (
            h && T.push({ label: Y[g], bgColor: "black" }),
            (0, j.BX)("div", {
              css: (0, u.iv)(
                "display:flex;justify-content:flex-start;@media ",
                b.r.media.preTablet,
                "{flex-direction:column;}",
                ""
              ),
              children: [
                (0, j.BX)("div", {
                  css: D,
                  children: [
                    (0, j.tZ)("div", {
                      css: (0, u.iv)(
                        "display:flex;align-items:center;justify-content:center;width:min(280px, 19.922vw);height:min(280px, 19.922vw);border:1px solid #dbdbdb;@media ",
                        b.r.media.preTablet,
                        "{width:100%;height:auto;aspect-ratio:326/191;background-color:#f2f2f2;border:none;}",
                        ""
                      ),
                      children: (0, j.tZ)(I._, {
                        src: t,
                        loadStyle: z,
                        imgStyle: B,
                        width: 255,
                        height: 255,
                        alt: i,
                      }),
                    }),
                    (0, j.tZ)("div", {
                      css: C,
                      children:
                        0 !== T.length && (0, j.tZ)(A.h, { stausLabels: T }),
                    }),
                  ],
                }),
                (0, j.tZ)("div", { css: U }),
                (0, j.BX)("div", {
                  css: R,
                  children: [
                    (0, j.tZ)(X.Z, {
                      wrapperCss: (0, u.iv)(
                        "@media ",
                        b.r.media.preTablet,
                        "{margin-top:22px;}",
                        ""
                      ),
                      labels: n,
                    }),
                    (0, j.tZ)("p", {
                      css: (0, u.iv)(
                        "margin-top:8px;font-family:var(--comic-impact-font);font-size:18px;line-height:27px;&:not(:lang(ja)){font-size:21px;line-height:23px;}@media ",
                        b.r.media.preTablet,
                        "{margin-top:16px;font-size:26px;line-height:32px;&:not(:lang(ja)){font-size:28px;}}",
                        ""
                      ),
                      children: i,
                    }),
                    a &&
                      (0, j.BX)("div", {
                        css: (0, u.iv)(
                          "margin-top:8px;margin-bottom:7px;@media ",
                          b.r.media.preTablet,
                          "{display:flex;}",
                          ""
                        ),
                        children: [
                          (0, j.tZ)("p", { css: M.descHead, children: F[g] }),
                          (0, j.tZ)("p", { css: M.descBody, children: a }),
                        ],
                      }),
                    r &&
                      (0, j.BX)("div", {
                        css: (0, u.iv)(
                          "margin-bottom:7px;@media ",
                          b.r.media.preTablet,
                          "{display:flex;}",
                          ""
                        ),
                        children: [
                          (0, j.tZ)("p", { css: M.descHead, children: G[g] }),
                          (0, j.tZ)("p", { css: M.descBody, children: r }),
                        ],
                      }),
                    l &&
                      (0, j.BX)("div", {
                        css: (0, u.iv)(
                          "margin-bottom:13px;@media ",
                          b.r.media.preTablet,
                          "{display:flex;}",
                          ""
                        ),
                        children: [
                          (0, j.tZ)("p", { css: M.descHead, children: V[g] }),
                          (0, j.tZ)("p", { css: M.descBody, children: l }),
                        ],
                      }),
                    s &&
                      (0, j.BX)("div", {
                        css: (0, u.iv)(
                          "margin-bottom:13px;@media ",
                          b.r.media.preTablet,
                          "{display:flex;}",
                          ""
                        ),
                        children: [
                          (0, j.tZ)("p", { css: M.descHead, children: W[g] }),
                          (0, j.tZ)("p", { css: M.descBody, children: s }),
                        ],
                      }),
                    o &&
                      (0, j.BX)("div", {
                        css: (0, u.iv)(
                          "@media ",
                          b.r.media.preTablet,
                          "{display:flex;flex-flow:column;align-items:center;justify-content:center;margin:20px auto 0;}",
                          ""
                        ),
                        children: [
                          (0, j.tZ)(P.f, {
                            css: (0, u.iv)(
                              "font-family:var(--comic-impact-font);font-size:16px;line-height:16px;&:not(:lang(ja)){font-size:21px;line-height:21px;}@media ",
                              b.r.media.preTablet,
                              "{width:82%;font-size:20px;line-height:20px;&:not(:lang(ja)){font-size:26px;line-height:26px;}}",
                              ""
                            ),
                            href: o,
                            icon: "link",
                            onClick: function () {
                              return (function (e) {
                                if (!v) {
                                  var i = (0, L.X)(
                                    ""
                                      .concat(
                                        "https://analyze.naruto-official.com"
                                      )
                                      .concat(x.asPath),
                                    [
                                      { key: "title", value: document.title },
                                      { key: "uuid", value: (0, N.p)() },
                                      { key: "sessionId", value: (0, N.M)() },
                                      { key: "cookie", value: S._ga },
                                      {
                                        key: "referrer",
                                        value: document.referrer,
                                      },
                                      { key: "extlink", value: e },
                                    ]
                                  );
                                  fetch(i).catch(function (e) {
                                    return console.error(e);
                                  });
                                }
                              })(o);
                            },
                            children: c || q[g],
                          }),
                          m &&
                            (0, j.tZ)(P.f, {
                              css: (0, u.iv)(
                                "margin-top:5px;font-family:var(--comic-impact-font);font-size:16px;line-height:16px;&:not(:lang(ja)){font-size:21px;line-height:21px;}@media ",
                                b.r.media.preTablet,
                                "{width:82%;font-size:20px;line-height:20px;&:not(:lang(ja)){font-size:26px;line-height:26px;}}",
                                ""
                              ),
                              href: m,
                              icon: "link",
                              children: p || q[g],
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        },
        M = {
          descHead: (0, u.iv)(
            "font-size:14px;font-weight:bold;line-height:1.2;@media ",
            b.r.media.preTablet,
            "{font-size:12px;}",
            ""
          ),
          descBody: (0, u.iv)(
            "font-size:14px;line-height:1.2;white-space:pre-wrap;@media ",
            b.r.media.preTablet,
            "{margin-bottom:0;font-size:12px;&::before{content:' ';}}",
            ""
          ),
        },
        F = {
          ja: "\u30e1\u30fc\u30ab\u30fc:",
          en: "Developer:",
          fr: "\xc9DITEUR :",
          de: "ENTWICKLER:",
          es: "DESARROLLADOR:",
          it: "SVILUPPATORE:",
        },
        G = {
          ja: "\u30b8\u30e3\u30f3\u30eb:",
          en: "Genre:",
          fr: "GENRE :",
          de: "GENRE:",
          es: "G\xc9NERO:",
          it: "GENERE:",
        },
        W = {
          ja: "\u767a\u58f2\u65e5",
          en: "Release:",
          fr: "SORTIE :",
          de: "VER\xd6FFENTLICHUNG",
          es: "LANZAMIENTO",
          it: "USCITA",
        },
        V = {
          ja: "\u914d\u4fe1\u65e5",
          en: "Release:",
          fr: "SORTIE :",
          de: "VER\xd6FFENTLICHUNG",
          es: "LANZAMIENTO",
          it: "USCITA",
        },
        q = {
          ja: "\u516c\u5f0f\u30b5\u30a4\u30c8\u306f\u3053\u3061\u3089",
          en: "SITE",
          fr: "PLUS D\u2019INFOS",
          de: "OFFIZIELLE WEBSeITE",
          es: "SITIO OFICIAL",
          it: "SITO UFFICIALE",
        },
        Y = {
          ja: "\u914d\u4fe1\u4e2d",
          en: "PLAY NOW",
          fr: "OBTENIR MAINTENANT",
          de: "JETZT ERH\xc4LTLICH!",
          es: "DISPONIBLE AHORA",
          it: "PRENDI ORA",
        };
      var Q = function (e) {
          var i = e.gameList,
            t = e.currPageNum,
            n = e.lastPageNum,
            r = (0, f.useRouter)(),
            l = (0, d.bU)(),
            o = (0, s.bn)(),
            c = (0, s.XN)().searchParam.category,
            m = (0, a.useCallback)(
              function (e) {
                o &&
                  (o({
                    type: "CHANGE_PARAM",
                    searchParam: { pageNum: 1, category: e },
                  }),
                  r.push(r.pathname).catch(function (e) {
                    return console.error(e);
                  }));
              },
              [r, o]
            );
          return (0, j.BX)("main", {
            css: J.main,
            children: [
              (0, j.tZ)(y.E, {
                pcImgSrc: "/game/header_bg_pc.webp",
                spImgSrc: "/game/header_bg_sp.webp",
                position: "center",
                spPosition: "center",
                isShort: !0,
              }),
              (0, j.tZ)("div", {
                css: (0, u.iv)(
                  "position:absolute;top:150px;width:100%;@media ",
                  b.r.media.preTablet,
                  "{top:180px;}",
                  ""
                ),
                children: (0, j.tZ)(x.W, {
                  children: (0, j.tZ)(E.V, {
                    title: "GAME",
                    ruby: "\u30b2\u30fc\u30e0",
                    slug: "game",
                    h1: "GAME",
                    isSmall: !0,
                  }),
                }),
              }),
              (0, j.tZ)("div", {
                children: (0, j.tZ)(x.W, {
                  children: (0, j.BX)("div", {
                    css: J.contentsBox,
                    children: [
                      (0, j.tZ)(Z.Z, {
                        wrapperCss: (0, u.iv)(
                          "@media ",
                          b.r.media.preTablet,
                          "{display:none;}",
                          ""
                        ),
                        items: de(l),
                        initType: c,
                        onClick: m,
                      }),
                      (0, j.tZ)(v.Z, {
                        wrapperCss: (0, u.iv)(
                          "display:none;@media ",
                          b.r.media.preTablet,
                          "{display:block;}",
                          ""
                        ),
                        items: de(l),
                        initType: c,
                        onChange: m,
                      }),
                      (0, j.tZ)("div", {
                        css: J.gameSummaryList,
                        children:
                          null === i || void 0 === i
                            ? void 0
                            : i.map(function (e) {
                                return (0,
                                j.tZ)(H, { title: e.title, imgUrl: e.imgUrl, maker: e.maker, tags: e.tags, genre: e.genre, deliveryDate: e.deliveryDate, releaseDate: e.releaseDate, linkUrl: e.linkUrl, linkLabel: e.linkLabel, linkUrl2: e.linkUrl2, linkLabel2: e.linkLabel2, isWithin: e.isWithin }, e.id);
                              }),
                      }),
                      (0, j.tZ)(w.Z, {
                        wrapperCss: (0, u.iv)(
                          "width:fit-content;margin:52px auto 0;@media ",
                          b.r.media.preTablet,
                          "{margin-top:67px;}",
                          ""
                        ),
                        currPageNum: t,
                        lastPageNum: n,
                      }),
                    ],
                  }),
                }),
              }),
              (0, j.tZ)(S.E, {
                topicsComponent: (0, j.tZ)(T.E, { slug: "news-game" }),
                bgImgSrc: "/game/news_content_bg.webp",
              }),
            ],
          });
        },
        J = {
          main: {
            name: "1eeas9r",
            styles:
              "position:relative;z-index:1;display:flex;flex-direction:column",
          },
          contentsBox: (0, u.iv)(
            "margin:60px auto 100px;@media ",
            b.r.media.preTablet,
            "{margin:28px 0 70px;}",
            ""
          ),
          gameSummaryList: (0, u.iv)(
            "display:grid;grid-template-columns:repeat(2, minmax(278px, 1fr));row-gap:30px;column-gap:2%;margin-top:60px;@media ",
            b.r.media.preTablet,
            "{row-gap:82px;column-gap:25px;margin-top:44px;}@media ",
            "screen and (max-width: 631px)",
            "{grid-template-columns:1fr;margin-top:44px;}",
            ""
          ),
        },
        K = {
          ja: "\u3059\u3079\u3066",
          en: "ALL",
          fr: "TOUT",
          de: "ALLE",
          es: "TODO",
          it: "TUTTO",
        },
        $ = {
          ja: "iOS",
          en: "iOS",
          fr: "iOS",
          de: "iOS",
          es: "iOS",
          it: "iOS",
        },
        ee = {
          ja: "Android",
          en: "Android",
          fr: "Android",
          de: "Android",
          es: "Android",
          it: "Android",
        },
        ie = {
          ja: "PS4",
          en: "PS4",
          fr: "PS4",
          de: "PS4",
          es: "PS4",
          it: "PS4",
        },
        te = {
          ja: "PS5",
          en: "PS5",
          fr: "PS5",
          de: "PS5",
          es: "PS5",
          it: "PS5",
        },
        ae = {
          ja: "Switch",
          en: "Switch",
          fr: "Switch",
          de: "Switch",
          es: "Switch",
          it: "Switch",
        },
        ne = {
          ja: "Xbox One",
          en: "Xbox One",
          fr: "Xbox One",
          de: "Xbox One",
          es: "Xbox One",
          it: "Xbox One",
        },
        re = {
          ja: "Xbox Series X|S",
          en: "Xbox Series X|S",
          fr: "Xbox Series X|S",
          de: "Xbox Series X|S",
          es: "Xbox Series X|S",
          it: "Xbox Series X|S",
        },
        le = {
          ja: "Steam",
          en: "Steam",
          fr: "Steam",
          de: "Steam",
          es: "Steam",
          it: "Steam",
        },
        se = {
          ja: "\u305d\u306e\u4ed6",
          en: "OTHER",
          fr: "AUTRES",
          de: "SONSTIGE",
          es: "OTROS",
          it: "ALTRO",
        },
        de = function (e) {
          return [
            { label: K[e], type: "" },
            { label: $[e], type: "ios" },
            { label: ee[e], type: "android" },
            { label: ie[e], type: "ps" },
            { label: te[e], type: "ps5" },
            { label: ae[e], type: "switch" },
            { label: ne[e], type: "xbox" },
            { label: re[e], type: "xboxseriesxs" },
            { label: le[e], type: "steam" },
            { label: se[e], type: "other" },
          ];
        },
        oe = function (e) {
          var i = e.gameList,
            t = e.currPageNum,
            a = e.lastPageNum;
          return (0, j.tZ)(j.HY, {
            children: (0, j.BX)(g.DY, {
              children: [
                (0, j.tZ)(h.h, {}),
                (0, j.tZ)(Q, { gameList: i, currPageNum: t, lastPageNum: a }),
                (0, j.tZ)(p.T, {}),
              ],
            }),
          });
        },
        ce = function () {
          var e;
          (0, r.C)();
          var i = (0, d.bU)(),
            t = (0, s.XN)().searchParam,
            p = t.pageNum,
            h = t.category,
            g = (0, n.Vd)("gameList", {
              start: 16 * (p - 1),
              limit: 32,
              data: (0, c.k8)({ category: "GAME", subcategory: h }),
            }).result,
            u = (0, l.Z)(
              null !==
                (e = null === g || void 0 === g ? void 0 : g.data.game_list) &&
                void 0 !== e
                ? e
                : []
            ).slice(0, 16),
            f = (0, a.useMemo)(
              function () {
                try {
                  var e;
                  return null !==
                    (e =
                      null === u || void 0 === u
                        ? void 0
                        : u.map(function (e) {
                            var t,
                              a,
                              r,
                              l,
                              s =
                                null !==
                                  (t =
                                    null === e ||
                                    void 0 === e ||
                                    null === (a = e.categories) ||
                                    void 0 === a
                                      ? void 0
                                      : a.subcategory.map(function (e) {
                                          return e.name;
                                        })) && void 0 !== t
                                  ? t
                                  : [],
                              d = (0, o.Q)(
                                null === e ||
                                  void 0 === e ||
                                  null === (r = e.game) ||
                                  void 0 === r
                                  ? void 0
                                  : r.delivery_startdate
                              ),
                              c = (0, o.Q)(
                                null === e ||
                                  void 0 === e ||
                                  null === (l = e.game) ||
                                  void 0 === l
                                  ? void 0
                                  : l.delivery_enddate
                              );
                            return {
                              id: e._id,
                              title: e.title,
                              imgUrl: (0, n.hT)(e.thumbnail),
                              maker: e.game.maker,
                              tags: s,
                              genre: e.game.genre,
                              deliveryDate: e.game.delivery_date
                                ? e.game.is_year_only_display
                                  ? (0, o.x3)(e.game.delivery_date, i)
                                  : (0, o.Am)(e.game.delivery_date, i)
                                : null,
                              releaseDate: e.game.releasedate
                                ? e.game.is_year_only_display
                                  ? (0, o.x3)(e.game.releasedate, i)
                                  : (0, o.Am)(e.game.releasedate, i)
                                : null,
                              linkUrl: e.game.url,
                              linkLabel: e.game.url_label,
                              linkUrl2: e.game.url2,
                              linkLabel2: e.game.url2_label,
                              isWithin: 0 !== d && (0, o.f7)(d, c),
                            };
                          })) && void 0 !== e
                    ? e
                    : [];
                } catch (t) {
                  return;
                }
              },
              [i, u]
            ),
            b = (0, a.useMemo)(
              function () {
                return g
                  ? Math.floor(
                      Math.max(
                        (null === g || void 0 === g
                          ? void 0
                          : g.data.total_count) - 1,
                        0
                      ) / 16
                    ) + 1
                  : 1;
              },
              [g]
            );
          return (0, j.tZ)(m.e, {
            category: "game",
            children: (0, j.tZ)(oe, {
              gameList: f,
              currPageNum: p,
              lastPageNum: b,
            }),
          });
        };
    },
  },
]);
