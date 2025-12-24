"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2899],
  {
    26267: function (e, t, i) {
      i.d(t, {
        e: function () {
          return m;
        },
      });
      var a = i(67294),
        r = i(41128),
        n = i(33587),
        o = i(8503),
        l = i(80072),
        s = i(11047),
        d = i(27715),
        c = i(10255),
        p = i(35944),
        m = function (e) {
          var t,
            i = e.category,
            m = e.children,
            u = (0, o.bU)(),
            g = (0, r.Vd)("articleList", {
              start: 0,
              limit: 16,
              data: (0, d.k8)({ category: "NEWS", subcategory: i }),
            }).result,
            h = (0, n.Z)(
              null !==
                (t =
                  null === g || void 0 === g ? void 0 : g.data.article_list) &&
                void 0 !== t
                ? t
                : []
            ).slice(0, 8),
            f = (0, a.useMemo)(
              function () {
                return h.map(function (e) {
                  var t,
                    i,
                    a,
                    n =
                      null !==
                        (t =
                          null === (i = e.categories) ||
                          void 0 === i ||
                          null === (a = i.subcategory) ||
                          void 0 === a
                            ? void 0
                            : a.map(function (e) {
                                return e.name;
                              })) && void 0 !== t
                        ? t
                        : [];
                  return {
                    id: e._id,
                    title: e.title,
                    categories: n,
                    imgUrl: (0, r.hT)(e.thumbnail),
                    date: (0, s.Am)(e.dspdate, u),
                    path: e.path,
                    isNew: (0, s.e_)(e.startdate, l.E),
                    isPickedUp: (0, s.e_)(e.startdate, l.e) && "1" === e.pickup,
                  };
                });
              },
              [h, u]
            );
          return (0, p.tZ)(p.HY, {
            children: (0, p.tZ)(c.S, { articles: f, children: m }),
          });
        };
    },
    10014: function (e, t, i) {
      i.d(t, {
        E: function () {
          return l;
        },
      });
      var a = i(70917),
        r = (i(67294), i(48710)),
        n = i(35944);
      var o = { name: "1d3w5wq", styles: "width:100%" },
        l = function (e) {
          var t = e.pcImgSrc,
            i = e.spImgSrc,
            l = e.position,
            s = e.spPosition,
            d = e.isShort ? 300 : 575;
          return (0, n.tZ)("div", {
            css: o,
            children: (0, n.BX)("picture", {
              children: [
                (0, n.tZ)("source", {
                  srcSet: i,
                  width: 375,
                  height: 250,
                  media: r.r.media.preTablet,
                }),
                (0, n.tZ)("img", {
                  css: (0, a.iv)(
                    "display:block;width:100%;object-fit:cover;object-position:",
                    l,
                    ";@media ",
                    r.r.media.preTablet,
                    "{object-position:",
                    s,
                    ";height:250px;}",
                    ""
                  ),
                  src: t,
                  width: 1280,
                  height: d,
                  alt: "",
                }),
              ],
            }),
          });
        };
    },
    77983: function (e, t, i) {
      var a = i(70917),
        r = (i(67294), i(48710)),
        n = i(37642),
        o = i(35944);
      var l = {
        name: "1s4qkvb",
        styles: "display:flex;flex-wrap:wrap;gap:5px",
      };
      t.Z = (0, n.U)(function (e) {
        var t = e.labels;
        return (0, o.tZ)("div", {
          css: l,
          children:
            null === t || void 0 === t
              ? void 0
              : t.map(function (e, t) {
                  return (0, o.tZ)(d, { label: e }, t);
                }),
        });
      });
      var s = {
          name: "hc9rql",
          styles:
            "display:flex;align-items:center;height:24px;padding:4px 7px;background-color:#eaeaea",
        },
        d = function (e) {
          var t = e.label;
          return (0, o.tZ)("div", {
            css: s,
            children: (0, o.tZ)("p", {
              css: (0, a.iv)(
                "width:100%;font-family:var(--comic-font);font-size:11px;line-height:1;white-space:nowrap;@media ",
                r.r.media.preTablet,
                "{font-size:12px;}",
                ""
              ),
              children: t,
            }),
          });
        };
    },
    82899: function (e, t, i) {
      i.d(t, {
        $: function () {
          return $;
        },
      });
      var a = i(67294),
        r = i(41128),
        n = i(53394),
        o = i(33587),
        l = i(46045),
        s = i(27715),
        d = i(26267),
        c = i(65313),
        p = i(73938),
        m = i(95541),
        u = i(70917),
        g = i(11163),
        h = i(8503),
        f = i(48710),
        v = i(77340),
        x = i(71327),
        b = i(10014),
        y = i(72462),
        E = i(86090),
        T = i(79075),
        w = i(32974),
        Z = i(92517),
        S = i(16835),
        k = i(55756),
        I = i(7673),
        P = i(53877),
        O = i(26184),
        U = i(18714),
        A = i(77983),
        N = i(35944),
        R = i(83454);
      var L = { name: "1ff36h2", styles: "flex-grow:1" },
        C = {
          name: "17ikjc7",
          styles: "flex-shrink:0;width:1.25vw;max-width:16px",
        },
        _ = {
          name: "1wg5rc6",
          styles:
            "display:block;width:auto;max-width:100%;height:100%;object-fit:contain",
        },
        D = {
          name: "e8ewlh",
          styles:
            "display:block;width:100%;max-width:100%;height:100%;object-fit:contain",
        },
        j = function (e) {
          var t = e.title,
            i = e.imgUrl,
            a = e.maker,
            r = e.tags,
            n = e.price,
            o = e.linkUrl,
            l = (0, h.bU)(),
            s = (0, g.useRouter)(),
            d = "preview" === R.env.NEXT_PUBLIC_MODE,
            c = (0, k.fP)(["_ga"]),
            p = (0, S.Z)(c, 1)[0];
          return (0, N.BX)("div", {
            css: (0, u.iv)(
              "display:flex;justify-content:flex-start;@media ",
              f.r.media.preTablet,
              "{flex-direction:column;}",
              ""
            ),
            children: [
              (0, N.tZ)("div", {
                children: (0, N.tZ)("div", {
                  css: (0, u.iv)(
                    "display:flex;align-items:center;justify-content:center;width:min(280px, 19.922vw);height:min(280px, 19.922vw);border:1px solid #dbdbdb;@media ",
                    f.r.media.preTablet,
                    "{width:100%;height:auto;aspect-ratio:326/191;background-color:#f2f2f2;border:none;}",
                    ""
                  ),
                  children: (0, N.tZ)(O._, {
                    src: i,
                    loadStyle: D,
                    imgStyle: _,
                    width: 255,
                    height: 255,
                    alt: t,
                  }),
                }),
              }),
              (0, N.tZ)("div", { css: C }),
              (0, N.BX)("div", {
                css: L,
                children: [
                  (0, N.tZ)(A.Z, {
                    wrapperCss: (0, u.iv)(
                      "@media ",
                      f.r.media.preTablet,
                      "{margin-top:22px;}",
                      ""
                    ),
                    labels: r,
                  }),
                  (0, N.tZ)("p", {
                    css: (0, u.iv)(
                      "margin-top:8px;font-family:var(--comic-impact-font);font-size:18px;line-height:1.5;&:not(:lang(ja)){font-size:21px;line-height:1;white-space:pre-wrap;}@media ",
                      f.r.media.preTablet,
                      "{margin-top:16px;font-size:22px;&:not(:lang(ja)){font-size:28px;}}",
                      ""
                    ),
                    children: t,
                  }),
                  a &&
                    (0, N.BX)("div", {
                      css: (0, u.iv)(
                        "display:block;margin-top:8px;@media ",
                        f.r.media.preTablet,
                        "{display:flex;}",
                        ""
                      ),
                      children: [
                        (0, N.tZ)("p", { css: z.descHead, children: M[l] }),
                        (0, N.tZ)("p", { css: z.descBody, children: a }),
                      ],
                    }),
                  n &&
                    "ja" === l &&
                    (0, N.BX)("div", {
                      css: (0, u.iv)(
                        "display:block;margin-top:7px;@media ",
                        f.r.media.preTablet,
                        "{display:flex;}",
                        ""
                      ),
                      children: [
                        (0, N.tZ)("p", {
                          css: (0, u.iv)(
                            "font-size:14px;font-weight:bold;line-height:1.2;@media ",
                            f.r.media.preTablet,
                            "{font-size:12px;}",
                            ""
                          ),
                          children: B[l],
                        }),
                        (0, N.tZ)("p", { css: z.descBody, children: n }),
                      ],
                    }),
                  o &&
                    (0, N.tZ)("div", {
                      css: (0, u.iv)(
                        "margin-top:21px;@media ",
                        f.r.media.preTablet,
                        "{display:flex;justify-content:center;margin-top:25.4px;}",
                        ""
                      ),
                      children: (0, N.tZ)(U.f, {
                        css: (0, u.iv)(
                          "height:32px;font-size:16px;&:not(:lang(ja)){font-size:21px;}@media ",
                          f.r.media.preTablet,
                          "{width:82%;height:46px;font-size:20px;&:lang(en){font-size:26px;}&:lang(fr){font-size:clamp(22px, 2.55vw, 26px);}}",
                          ""
                        ),
                        href: o,
                        icon: "link",
                        onClick: function () {
                          return (function (e) {
                            if (!d) {
                              var t = (0, I.X)(
                                ""
                                  .concat("https://analyze.naruto-official.com")
                                  .concat(s.asPath),
                                [
                                  { key: "title", value: document.title },
                                  { key: "uuid", value: (0, P.p)() },
                                  { key: "sessionId", value: (0, P.M)() },
                                  { key: "cookie", value: p._ga },
                                  { key: "referrer", value: document.referrer },
                                  { key: "extlink", value: e },
                                ]
                              );
                              fetch(t).catch(function (e) {
                                return console.error(e);
                              });
                            }
                          })(o);
                        },
                        children: G[l],
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        z = {
          descHead: (0, u.iv)(
            "grid-column:1/3;font-size:14px;font-weight:bold;line-height:1.2;@media ",
            f.r.media.preTablet,
            "{font-size:12px;}",
            ""
          ),
          descBody: (0, u.iv)(
            "margin-bottom:7px;font-size:14px;line-height:1.2;white-space:pre-wrap;@media ",
            f.r.media.preTablet,
            "{margin-bottom:0;font-size:12px;&::before{content:' ';}}",
            ""
          ),
        },
        M = {
          ja: "\u30e1\u30fc\u30ab\u30fc:",
          en: "Brand:",
          fr: "FABRICANT :",
          de: "Hersteller:",
          es: "FABRICANTE:",
          it: "MARCA:",
        },
        B = {
          ja: "\u4fa1\u683c:",
          en: "Price:",
          fr: "PRIX:",
          de: "Preis:",
          es: "PRECIO:",
          it: "PREZZO:",
        },
        G = {
          ja: "\u5546\u54c1\u30da\u30fc\u30b8\u306f\u3053\u3061\u3089",
          en: "PRODUCT PAGE",
          fr: "VOIR LA PAGE DU PRODUIT",
          de: "ZUR PRODUKTSEITE",
          es: "P\xc1GINA DEL PRODUCTO",
          it: "GUARDA ARTICOLO",
        };
      var X = function (e) {
          var t = e.goodsList,
            i = e.currPageNum,
            r = e.lastPageNum,
            n = (0, g.useRouter)(),
            o = (0, h.bU)(),
            s = (0, l.bn)(),
            d = (0, l.XN)().searchParam.category,
            c = (0, a.useCallback)(
              function (e) {
                s &&
                  (s({
                    type: "CHANGE_PARAM",
                    searchParam: { pageNum: 1, category: e },
                  }),
                  n.push(n.pathname).catch(function (e) {
                    return console.error(e);
                  }));
              },
              [n, s]
            );
          return (0, N.BX)("main", {
            css: H.main,
            children: [
              (0, N.tZ)(b.E, {
                pcImgSrc: "/goods/header_bg_pc.webp",
                spImgSrc: "/goods/header_bg_sp.webp",
                position: "center",
                isShort: !0,
              }),
              (0, N.tZ)("div", {
                css: (0, u.iv)(
                  "position:absolute;top:165px;width:100%;@media ",
                  f.r.media.preTablet,
                  "{top:180px;}",
                  ""
                ),
                children: (0, N.tZ)(v.W, {
                  children: (0, N.tZ)(w.V, {
                    title: "GOODS",
                    ruby: "\u30b0\u30c3\u30ba",
                    slug: "goods",
                    h1: "GOODS",
                    isSmall: !0,
                  }),
                }),
              }),
              (0, N.tZ)("div", {
                children: (0, N.tZ)(v.W, {
                  children: (0, N.BX)("div", {
                    css: H.contentsBox,
                    children: [
                      (0, N.tZ)(Z.Z, {
                        wrapperCss: (0, u.iv)(
                          "@media ",
                          f.r.media.preTablet,
                          "{display:none;}",
                          ""
                        ),
                        items: J(o),
                        initType: d,
                        onClick: c,
                      }),
                      (0, N.tZ)(x.Z, {
                        wrapperCss: (0, u.iv)(
                          "display:none;@media ",
                          f.r.media.preTablet,
                          "{display:block;}",
                          ""
                        ),
                        items: J(o),
                        initType: d,
                        onChange: c,
                      }),
                      (0, N.tZ)("div", {
                        css: H.goodsSummaryList,
                        children:
                          t &&
                          t.map(function (e) {
                            return (0,
                            N.tZ)(j, { title: e.title, imgUrl: e.imgUrl, maker: e.maker, tags: e.tags, price: e.price, linkUrl: e.linkUrl }, e.id);
                          }),
                      }),
                      (0, N.tZ)(T.Z, {
                        wrapperCss: (0, u.iv)(
                          "width:fit-content;margin:52px auto 0;@media ",
                          f.r.media.preTablet,
                          "{margin-top:67px;}",
                          ""
                        ),
                        currPageNum: i,
                        lastPageNum: r,
                      }),
                    ],
                  }),
                }),
              }),
              (0, N.tZ)(y.E, {
                topicsComponent: (0, N.tZ)(E.E, { slug: "news-goods" }),
                bgImgSrc: "/goods/news_content_bg.webp",
              }),
            ],
          });
        },
        H = {
          main: {
            name: "1eeas9r",
            styles:
              "position:relative;z-index:1;display:flex;flex-direction:column",
          },
          contentsBox: (0, u.iv)(
            "margin:60px auto 100px;@media ",
            f.r.media.preTablet,
            "{margin:28px 0 70px;}",
            ""
          ),
          goodsSummaryList: (0, u.iv)(
            "display:grid;grid-template-columns:repeat(2, minmax(278px, 1fr));row-gap:30px;column-gap:2%;margin-top:60px;@media ",
            f.r.media.preTablet,
            "{row-gap:82px;column-gap:25px;margin-top:44px;}@media ",
            "screen and (max-width: 631px)",
            "{grid-template-columns:1fr;margin-top:44px;}",
            ""
          ),
        },
        V = {
          ja: "\u3059\u3079\u3066",
          en: "ALL",
          fr: "TOUT",
          de: "ALLE",
          es: "TODO",
          it: "TUTTO",
        },
        F = {
          ja: "\u30d5\u30a3\u30ae\u30e5\u30a2",
          en: "FIGURES",
          fr: "FIGURINES",
          de: "FIGUREN",
          es: "FIGURAS",
          it: "MODELLINI",
        },
        Y = {
          ja: "\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3",
          en: "APPAREL",
          fr: "V\xcaTEMENTS",
          de: "MODE ",
          es: "MODA",
          it: "MODA",
        },
        W = {
          ja: "\u304a\u3082\u3061\u3083\u30fb\u306c\u3044\u3050\u308b\u307f",
          en: "TOYS",
          fr: "JOUETS & PELUCHES",
          de: "SPIELWAREN & PL\xdcSCHTIERE",
          es: "JUGUETES Y PELUCHES",
          it: "GIOCATTOLI & PELUCHE",
        },
        q = {
          ja: "\u96d1\u8ca8\u30fb\u98df\u54c1",
          en: "FOOD & MISC. ITEMS",
          fr: "OBJETS DIVERS & PRODUITS ALIMENTAIRES",
          de: "VERSCHIEDENES & LEBENSMITTEL",
          es: "ART\xcdCULOS DIVERSOS Y ALIMENTOS",
          it: "ALIMENTARI & VARIE",
        },
        J = function (e) {
          return [
            { label: V[e], type: "" },
            { label: F[e], type: "figure" },
            { label: W[e], type: "toy" },
            { label: Y[e], type: "apparel" },
            { label: q[e], type: "zakka" },
          ];
        },
        K = function (e) {
          var t = e.goodsList,
            i = e.currPageNum,
            a = e.lastPageNum;
          return (0, N.tZ)(N.HY, {
            children: (0, N.BX)(m.DY, {
              children: [
                (0, N.tZ)(p.h, {}),
                (0, N.tZ)(X, { goodsList: t, currPageNum: i, lastPageNum: a }),
                (0, N.tZ)(c.T, {}),
              ],
            }),
          });
        },
        $ = function () {
          var e;
          (0, n.C)();
          var t = (0, l.XN)().searchParam,
            i = t.pageNum,
            c = t.category,
            p = (0, r.Vd)("goodsList", {
              start: 16 * (i - 1),
              limit: 32,
              data: (0, s.k8)({ category: "GOODS", subcategory: c }),
            }).result,
            m = (0, o.Z)(
              null !==
                (e = null === p || void 0 === p ? void 0 : p.data.goods_list) &&
                void 0 !== e
                ? e
                : []
            ).slice(0, 16),
            u = (0, a.useMemo)(
              function () {
                try {
                  var e;
                  return null !==
                    (e =
                      null === m || void 0 === m
                        ? void 0
                        : m.map(function (e) {
                            var t,
                              i,
                              a =
                                null !==
                                  (t =
                                    null === e ||
                                    void 0 === e ||
                                    null === (i = e.categories) ||
                                    void 0 === i
                                      ? void 0
                                      : i.subcategory.map(function (e) {
                                          return e.name;
                                        })) && void 0 !== t
                                  ? t
                                  : [];
                            return {
                              id: e._id,
                              title: e.title,
                              imgUrl: (0, r.hT)(e.thumbnail),
                              maker: e.goods.maker,
                              tags: a,
                              price: e.goods.price,
                              linkUrl: e.goods.url,
                            };
                          })) && void 0 !== e
                    ? e
                    : [];
                } catch (t) {
                  return;
                }
              },
              [m]
            ),
            g = (0, a.useMemo)(
              function () {
                return p
                  ? Math.floor(
                      Math.max(
                        (null === p || void 0 === p
                          ? void 0
                          : p.data.total_count) - 1,
                        0
                      ) / 16
                    ) + 1
                  : 1;
              },
              [p]
            );
          return (0, N.tZ)(d.e, {
            category: "goods",
            children: (0, N.tZ)(K, {
              goodsList: u,
              currPageNum: i,
              lastPageNum: g,
            }),
          });
        };
    },
  },
]);
