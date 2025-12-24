(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4824],
  {
    78e3: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var r = (0, n(92648).Z)(n(67294)).default.createContext({});
      t.AmpStateContext = r;
    },
    9470: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ampFirst,
            n = void 0 !== t && t,
            r = e.hybrid,
            i = void 0 !== r && r,
            a = e.hasQuery,
            o = void 0 !== a && a;
          return n || (i && o);
        });
    },
    72717: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = u),
        (t.default = void 0);
      var r = n(6495).Z,
        i = n(92648).Z,
        a = (0, n(91598).Z)(n(67294)),
        o = i(n(11585)),
        c = n(78e3),
        s = n(15850),
        l = n(9470);
      n(99475);
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(d, [])
          .reverse()
          .concat(u(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (i) {
                var a = !0,
                  o = !1;
                if (
                  i.key &&
                  "number" !== typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  o = !0;
                  var c = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(c) ? (a = !1) : e.add(c);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (a = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (var s = 0, l = p.length; s < l; s++) {
                      var u = p[s];
                      if (i.props.hasOwnProperty(u))
                        if ("charSet" === u) n.has(u) ? (a = !1) : n.add(u);
                        else {
                          var d = i.props[u],
                            f = r[u] || new Set();
                          ("name" === u && o) || !f.has(d)
                            ? (f.add(d), (r[u] = f))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var i = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var o = r({}, e.props || {});
              return (
                (o["data-href"] = o.href),
                (o.href = void 0),
                (o["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, o)
              );
            }
            return a.default.cloneElement(e, { key: i });
          });
      }
      var m = function (e) {
        var t = e.children,
          n = a.useContext(c.AmpStateContext),
          r = a.useContext(s.HeadManagerContext);
        return a.default.createElement(
          o.default,
          {
            reduceComponentsToState: f,
            headManager: r,
            inAmpMode: l.isInAmpMode(n),
          },
          t
        );
      };
      (t.default = m),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    11585: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.headManager,
            n = e.reduceComponentsToState;
          function c() {
            if (t && t.mountedInstances) {
              var i = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(i, e));
            }
          }
          if (i) {
            var s;
            null == t || null == (s = t.mountedInstances) || s.add(e.children),
              c();
          }
          return (
            a(function () {
              var n;
              return (
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.add(e.children),
                function () {
                  var n;
                  null == t ||
                    null == (n = t.mountedInstances) ||
                    n.delete(e.children);
                }
              );
            }),
            a(function () {
              return (
                t && (t._pendingUpdate = c),
                function () {
                  t && (t._pendingUpdate = c);
                }
              );
            }),
            o(function () {
              return (
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null)),
                function () {
                  t &&
                    t._pendingUpdate &&
                    (t._pendingUpdate(), (t._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, n(91598).Z)(n(67294));
      var i = !1,
        a = i ? function () {} : r.useLayoutEffect,
        o = i ? function () {} : r.useEffect;
    },
    10014: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return c;
        },
      });
      var r = n(70917),
        i = (n(67294), n(48710)),
        a = n(35944);
      var o = { name: "1d3w5wq", styles: "width:100%" },
        c = function (e) {
          var t = e.pcImgSrc,
            n = e.spImgSrc,
            c = e.position,
            s = e.spPosition,
            l = e.isShort ? 300 : 575;
          return (0, a.tZ)("div", {
            css: o,
            children: (0, a.BX)("picture", {
              children: [
                (0, a.tZ)("source", {
                  srcSet: n,
                  width: 375,
                  height: 250,
                  media: i.r.media.preTablet,
                }),
                (0, a.tZ)("img", {
                  css: (0, r.iv)(
                    "display:block;width:100%;object-fit:cover;object-position:",
                    c,
                    ";@media ",
                    i.r.media.preTablet,
                    "{object-position:",
                    s,
                    ";height:250px;}",
                    ""
                  ),
                  src: t,
                  width: 1280,
                  height: l,
                  alt: "",
                }),
              ],
            }),
          });
        };
    },
    83773: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return le;
        },
      });
      var r = n(11163),
        i = n(67294),
        a = n(41128),
        o = n(53394),
        c = n(33587),
        s = n(46045),
        l = n(8503),
        u = n(80072),
        d = n(11047),
        p = n(27715),
        f = n(65313),
        m = n(73938),
        h = n(95541),
        g = n(59499),
        v = n(70917),
        y = n(48710),
        b = n(77340),
        w = n(71327),
        x = n(10014),
        E = n(79075),
        A = n(32974),
        N = n(35944);
      var k = {
          name: "8a1pld",
          styles:
            "position:absolute;top:5px;right:0;padding:0;cursor:pointer;background-color:transparent;border:none;outline:none;appearance:none",
        },
        Z = {
          name: "1nmyfay",
          styles:
            "grid-column:1/4;font-family:var(--comic-impact-font);font-size:18px;line-height:normal;background:none;border:none;outline:none;&:not(:lang(ja)){font-size:24px;}&::placeholder{color:#c4c4c4;}",
        },
        S = function (e) {
          var t,
            n = e.tags,
            a = e.isSuggest,
            o = (0, r.useRouter)(),
            c = (0, l.bU)(),
            u = (0, i.useState)(
              o.query.keyword
                ? null === (t = o.query.keyword) || void 0 === t
                  ? void 0
                  : t.toString()
                : ""
            ),
            d = u[0],
            p = u[1],
            f = (0, s.bn)(),
            m = (0, i.useState)(!1),
            h = m[0],
            g = m[1],
            b = (0, i.useRef)(null),
            w = (0, i.useMemo)(
              function () {
                var e = n.filter(function (e) {
                  return new RegExp(d).test(e.toLowerCase());
                });
                return (
                  (e = e.filter(function (e) {
                    return e !== d;
                  })),
                  Array.from(new Set(e))
                );
              },
              [n, d]
            ),
            x = (0, i.useCallback)(function () {
              g(!0);
            }, []),
            E = (0, i.useCallback)(function (e) {
              var t;
              (null !== (t = b.current) &&
                void 0 !== t &&
                t.contains(e.relatedTarget)) ||
                g(!1);
            }, []),
            A = (0, i.useCallback)(function (e) {
              p(e.target.value);
            }, []),
            S = (0, i.useCallback)(
              function () {
                f &&
                  (o.replace(o.pathname).catch(function (e) {
                    return console.error(e);
                  }),
                  f({
                    type: "CHANGE_PARAM",
                    searchParam: { pageNum: 1, keyword: d },
                  }));
              },
              [o, f, d]
            ),
            O = (0, i.useCallback)(function (e) {
              g(!1), p(e);
            }, []);
          return (0, N.BX)("div", {
            css: (0, v.iv)(
              "position:relative;display:grid;grid-template-columns:32px 20px 1fr 30px;width:340px;height:36px;padding-bottom:5px;border-bottom:2px solid rgb(0 0 0);@media ",
              y.r.media.preTablet,
              "{width:100%;}",
              ""
            ),
            onBlur: E,
            children: [
              (0, N.tZ)("input", {
                css: Z,
                type: "text",
                id: "search",
                placeholder: P[c],
                value: d,
                onChange: A,
                onFocus: x,
              }),
              (0, N.tZ)("button", {
                css: k,
                onClick: S,
                children: (0, N.tZ)("img", {
                  src: "/common/news/icon_search.svg",
                  alt: "",
                }),
              }),
              a &&
                "" !== d &&
                h &&
                (0, N.tZ)(C, { ref: b, items: w, onClick: O }),
            ],
          });
        },
        O = {
          name: "1yse7lq",
          styles:
            "position:absolute;top:46px;z-index:1;width:216px;background-color:white;border:2px solid black;&>li:not(:last-of-type){button{border-bottom:1px solid black;}}",
        };
      function M(e, t) {
        var n = e.items,
          r = e.onClick;
        return 0 === n.length
          ? (0, N.tZ)(N.HY, {})
          : (0, N.tZ)("ul", {
              ref: t,
              css: O,
              children: n.map(function (e) {
                return (0, N.tZ)(I, { item: e, onClick: r }, e);
              }),
            });
      }
      var C = i.forwardRef(M),
        T = {
          name: "1dt281e",
          styles:
            "overflow:hidden;font-size:14px;text-overflow:ellipsis;white-space:nowrap",
        },
        j = {
          name: "17kjk6c",
          styles:
            "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;padding:8px 12px;cursor:pointer",
        },
        _ = { name: "1k18kha", styles: "height:40px" },
        I = function (e) {
          var t = e.item,
            n = e.onClick,
            r = (0, i.useCallback)(
              function () {
                n(t);
              },
              [t, n]
            );
          return (0, N.tZ)("li", {
            css: _,
            children: (0, N.BX)("button", {
              css: j,
              onClick: r,
              children: [
                (0, N.tZ)("p", { css: T, children: t }),
                (0, N.tZ)("svg", {
                  css: (0, v.iv)("", ""),
                  width: "8",
                  height: "11",
                  children: (0, N.tZ)("g", {
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "2",
                    children: (0, N.tZ)("path", { d: "M1,1 L7,5.5 1,10" }),
                  }),
                }),
              ],
            }),
          });
        },
        P = {
          ja: "\u30ad\u30fc\u30ef\u30fc\u30c9\u691c\u7d22",
          en: "SEARCH",
          fr: "RECHERCHER",
          de: "SUCHEN",
          es: "B\xdaSQUEDA",
          it: "CERCA",
        },
        U = n(92517),
        R = n(26184),
        L = n(37868);
      var D = { name: "xere0o", styles: "min-height:133px;padding:10px 20px" },
        B = {
          name: "19mtkkg",
          styles:
            "position:absolute;top:min(-15.5%, -30px);right:min(2.5%, 8.7px);width:max(19%, 67px);height:auto;pointer-events:none",
        },
        z = {
          name: "3xsrf",
          styles:
            "display:flex;align-items:center;height:25px;padding:0 5px;text-align:center;background:#000",
        },
        H = {
          name: "zns1ro",
          styles:
            "display:flex;align-items:center;height:25px;padding:0 5px;text-align:center;background:#f99327",
        },
        G = {
          name: "tbxqsq",
          styles: "position:absolute;top:0;left:0;display:flex",
        },
        q = {
          name: "s3pk5b",
          styles: "display:block;width:100%;height:100%;object-fit:contain",
        },
        X = {
          name: "vg6qc2",
          styles:
            "position:absolute;top:0;width:100%;height:100%;overflow:hidden",
        },
        W = {
          name: "15m44ur",
          styles: "position:relative;width:100%;height:0;padding-top:54.4%",
        },
        F = function (e) {
          var t = e.title,
            n = e.imgUrl,
            r = e.date,
            i = e.categories,
            a = e.path,
            o = e.isNew,
            c = e.isPickedUp,
            s = (0, l.bU)(),
            u = "/common/news/pickup_".concat(s, ".svg");
          return (0, N.tZ)(L.Z, {
            href: "/news/".concat(a),
            children: (0, N.tZ)("a", {
              children: (0, N.BX)("div", {
                css: (0, v.iv)(
                  "border:1px solid #dbdbdb;.thumbnail{transition:transform 0.25s;}.info{transition:opacity 0.25s;}&:active .thumbnail{transform:scale(1.2);}&:active .info{opacity:0.5;}@media ",
                  y.r.media.postTablet,
                  "{&:hover .thumbnail{transform:scale(1.2);}&:hover .info{opacity:0.5;}}",
                  ""
                ),
                children: [
                  (0, N.BX)("div", {
                    css: W,
                    children: [
                      (0, N.tZ)("div", {
                        css: X,
                        children: (0, N.tZ)(R._, {
                          src: n,
                          className: "thumbnail",
                          imgStyle: q,
                          alt: t,
                        }),
                      }),
                      (0, N.BX)("div", {
                        css: G,
                        children: [
                          o &&
                            (0, N.tZ)("div", {
                              css: H,
                              children: (0, N.tZ)("p", {
                                css: (0, v.iv)(
                                  "height:13px;font-family:var(--impact-font);font-size:16px;line-height:1;@media ",
                                  y.r.media.preTablet,
                                  "{font-size:14px;}",
                                  ""
                                ),
                                children: "NEW",
                              }),
                            }),
                          i.map(function (e, t) {
                            return (0,
                            N.tZ)("div", { css: z, children: (0, N.tZ)("p", { css: (0, v.iv)("height:12px;font-family:var(--comic-impact-font);font-size:11px;line-height:11px;color:var(--primary-color);white-space:nowrap;@media ", y.r.media.preTablet, "{padding:0 3px;font-size:12px;line-height:12px;}", ""), children: e }) }, t);
                          }),
                        ],
                      }),
                      c && (0, N.tZ)("img", { css: B, src: u, alt: "pick up" }),
                    ],
                  }),
                  (0, N.BX)("div", {
                    className: "info",
                    css: D,
                    children: [
                      r &&
                        (0, N.tZ)("p", {
                          css: (0, v.iv)(
                            "font-family:'Bebas Neue';font-size:14px;line-height:1;@media ",
                            y.r.media.preTablet,
                            "{font-size:18px;}",
                            ""
                          ),
                          children: r,
                        }),
                      (0, N.tZ)("p", {
                        css: (0, v.iv)(
                          "margin-top:10px;font-family:var(--comic-font);font-size:18px;line-height:1.5;&:not(:lang(ja)){font-size:21px;}@media ",
                          y.r.media.preTablet,
                          "{font-size:22px;&:not(:lang(ja)){font-size:20px;}}",
                          ""
                        ),
                        children: t,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Y = {
          name: "1unpw5e",
          styles: "width:fit-content;margin:60px auto 0",
        },
        $ = function (e) {
          var t = e.newsList,
            n = e.currPageNum,
            a = e.lastPageNum,
            o = e.tags,
            c = (0, r.useRouter)(),
            u = (0, l.bU)(),
            d = (0, s.bn)(),
            p = (0, s.XN)().searchParam.category,
            f = (0, i.useCallback)(
              function (e, t) {
                d &&
                  (d({
                    type: "CHANGE_PARAM",
                    searchParam: { pageNum: t || 1, category: e },
                  }),
                  c
                    .push(
                      {
                        pathname: c.pathname,
                        query:
                          "" !== e
                            ? t
                              ? { category: e, page: t }
                              : { category: e }
                            : t
                            ? { page: t }
                            : {},
                      },
                      void 0,
                      { scroll: !1 }
                    )
                    .catch(function (e) {
                      return console.error(e);
                    }));
              },
              [d]
            );
          return (
            (0, i.useEffect)(function () {
              var e, t;
              c.query.page
                ? f(
                    null !== (e = c.query.category) && void 0 !== e ? e : "",
                    Number(c.query.page)
                  )
                : f(null !== (t = c.query.category) && void 0 !== t ? t : "");
            }, []),
            (0, N.BX)("main", {
              css: J.main,
              children: [
                (0, N.tZ)(x.E, {
                  pcImgSrc: "/common/news/header_bg_pc.webp",
                  spImgSrc: "/common/news/header_bg_sp.webp",
                  position: "center",
                  isShort: !0,
                }),
                (0, N.tZ)("div", {
                  css: (0, v.iv)(
                    "position:absolute;top:155px;width:100%;@media ",
                    y.r.media.preTablet,
                    "{top:180px;}",
                    ""
                  ),
                  children: (0, N.tZ)(b.W, {
                    children: (0, N.tZ)(A.V, {
                      title: "NEWS",
                      ruby: "\u30cb\u30e5\u30fc\u30b9",
                      slug: "news",
                      h1: "NEWS",
                      isSmall: !0,
                    }),
                  }),
                }),
                (0, N.tZ)("div", {
                  children: (0, N.tZ)("div", {
                    css: (0, v.iv)(
                      "max-width:1280px;margin:0 auto;@media ",
                      Q,
                      "{padding:0 24px;}",
                      ""
                    ),
                    children: (0, N.BX)("div", {
                      css: J.contentsBox,
                      children: [
                        (0, N.BX)("div", {
                          css: (0, v.iv)(
                            "display:flex;flex-wrap:wrap;row-gap:24px;column-gap:20px;justify-content:space-between;@media ",
                            y.r.media.preTablet,
                            "{flex-direction:column;align-items:center;height:110px;}",
                            ""
                          ),
                          children: [
                            (0, N.tZ)(U.Z, {
                              wrapperCss: (0, v.iv)(
                                "@media ",
                                y.r.media.preTablet,
                                "{display:none;}",
                                ""
                              ),
                              items: oe(u),
                              initType: p,
                              onClick: f,
                            }),
                            (0, N.tZ)(w.Z, {
                              wrapperCss: (0, v.iv)(
                                "display:none;@media ",
                                y.r.media.preTablet,
                                "{display:block;}",
                                ""
                              ),
                              items: oe(u),
                              initType: p,
                              onChange: f,
                            }),
                            (0, N.tZ)(S, { tags: o }),
                          ],
                        }),
                        (0, N.tZ)("div", {
                          css: J.newsSummaryList,
                          children:
                            t &&
                            t.map(function (e) {
                              return (0, N.tZ)(
                                F,
                                (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                    var n =
                                      null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                      ? V(Object(n), !0).forEach(function (t) {
                                          (0, g.Z)(e, t, n[t]);
                                        })
                                      : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(n)
                                        )
                                      : V(Object(n)).forEach(function (t) {
                                          Object.defineProperty(
                                            e,
                                            t,
                                            Object.getOwnPropertyDescriptor(
                                              n,
                                              t
                                            )
                                          );
                                        });
                                  }
                                  return e;
                                })({}, e),
                                e.id
                              );
                            }),
                        }),
                        (0, N.tZ)("div", {
                          css: J.newsNotApplicable,
                          children:
                            0 ===
                              (null === t || void 0 === t
                                ? void 0
                                : t.length) &&
                            (0, N.tZ)("p", { children: ce[u] }),
                        }),
                        (0, N.tZ)(E.Z, {
                          wrapperCss: Y,
                          currPageNum: n,
                          lastPageNum: a,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        Q = "screen and (max-width: 904px)",
        J = {
          main: {
            name: "1eeas9r",
            styles:
              "position:relative;z-index:1;display:flex;flex-direction:column",
          },
          contentsBox: (0, v.iv)(
            "margin:60px auto 100px;@media ",
            y.r.media.preTablet,
            "{margin:28px 0 70px;}",
            ""
          ),
          newsSummaryList: (0, v.iv)(
            "display:grid;grid-template-columns:repeat(4, 1fr);row-gap:40px;column-gap:2%;margin-top:53px;word-break:break-word;@media ",
            Q,
            "{grid-template-columns:repeat(2, 1fr);}@media ",
            y.r.media.preTablet,
            "{row-gap:25px;column-gap:25px;margin-top:55px;}@media ",
            "screen and (max-width: 631px)",
            "{grid-template-columns:1fr;margin-top:42px;}",
            ""
          ),
          newsNotApplicable: {
            name: "got1s6",
            styles:
              "font-family:var(--comic-impact-font);font-size:20px;text-align:center;&:not(:lang(ja)){font-size:26px;}",
          },
        },
        K = {
          ja: "\u3059\u3079\u3066",
          en: "ALL",
          fr: "TOUT",
          de: "ALLE",
          es: "TODO ",
          it: "TUTTO",
        },
        ee = {
          ja: "NARUTO\u30b3\u30e9\u30e0",
          en: "NARUTO COLUMNS",
          fr: "RUBRIQUE NARUTO",
          de: "NARUTOS WELT",
          es: "COLUMNA DE NARUTO",
          it: "IL MONDO DI NARUTO",
        },
        te = {
          ja: "\u30b3\u30df\u30c3\u30af\u30b9\u30fb\u539f\u4f5c",
          en: "MANGA & RELATED WORKS",
          fr: "MANGA & \u0152UVRE ORIGINALE",
          de: "MANGA & ANDERE PUBLIKATIONEN",
          es: "MANGA Y OBRAS ORIGINALES",
          it: "MANGA & PUBBL. CORRELATE",
        },
        ne = {
          ja: "\u30a2\u30cb\u30e1\u30fb\u6620\u753b",
          en: "ANIME & MOVIES",
          fr: "ANIM\xc9 & FILMS",
          de: "ANIME & FILME",
          es: "ANIME Y PEL\xcdCULAS",
          it: "ANIME & FILM",
        },
        re = {
          ja: "\u30b0\u30c3\u30ba",
          en: "STAGE 1",
          fr: "GOODIES",
          de: "STAGE 1",
          es: "MERCHANDISING",
          it: "MERCHANDISE",
        },
        ie = {
          ja: "\u30a4\u30d9\u30f3\u30c8",
          en: "STAGE 3",
          fr: "\xc9V\xc9NEMENT",
          de: "STAGE 3",
          es: "EVENTOS",
          it: "EVENTI",
        },
        ae = {
          ja: "\u30b2\u30fc\u30e0",
          en: "STAGE 2",
          fr: "JEUX",
          de: "STAGE 2",
          es: "JUEGOS",
          it: "GIOCHI",
        },
        oe = function (e) {
          return [
            { label: K[e], type: "" },
            { label: ee[e], type: "column" },
            { label: te[e], type: "comics" },
            { label: ne[e], type: "anime" },
            { label: ae[e], type: "game" },
            { label: re[e], type: "goods" },
            { label: ie[e], type: "event" },
          ];
        },
        ce = {
          ja: "\u8a72\u5f53\u8a18\u4e8b\u304c\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
          en: "No applicable articles were found.",
          fr: "Aucun article pertinent n'a \xe9t\xe9 trouv\xe9.",
          de: "Es wurden keine relevanten Artikel gefunden.",
          es: "No se encontraron art\xedculos relevantes.",
          it: "Non sono stati trovati articoli rilevanti.",
        },
        se = function (e) {
          var t = e.newsList,
            n = e.currPageNum,
            r = e.lastPageNum,
            i = e.tags;
          return (0, N.tZ)(N.HY, {
            children: (0, N.BX)(h.DY, {
              children: [
                (0, N.tZ)(m.h, {}),
                (0, N.tZ)($, {
                  newsList: t,
                  currPageNum: n,
                  lastPageNum: r,
                  tags: i,
                }),
                (0, N.tZ)(f.T, {}),
              ],
            }),
          });
        },
        le = function () {
          var e, t, n;
          (0, o.C)();
          var f = (0, l.bU)(),
            m = (0, r.useRouter)(),
            h = (0, s.XN)().searchParam,
            g = h.pageNum,
            v = h.category,
            y = h.keyword,
            b = (0, a.Vd)("articleList", {
              start: 24 * (g - 1),
              limit: 48,
              data: (0, p.k8)({
                category: ["NEWS"],
                subcategory: v,
                tag: y ? "" : m.query.tag,
                title: [y || ""],
              }),
            }).result,
            w = (0, a.Vd)("siteCommon", {}).result,
            x = (0, c.Z)(
              null !==
                (e =
                  null === b ||
                  void 0 === b ||
                  null === (t = b.data) ||
                  void 0 === t
                    ? void 0
                    : t.article_list) && void 0 !== e
                ? e
                : []
            ).slice(0, 24),
            E = (0, i.useMemo)(
              function () {
                try {
                  var e;
                  return null !==
                    (e =
                      null === x || void 0 === x
                        ? void 0
                        : x.map(function (e) {
                            var t,
                              n,
                              r,
                              i =
                                null !==
                                  (t =
                                    null === (n = e.categories) ||
                                    void 0 === n ||
                                    null === (r = n.subcategory) ||
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
                              imgUrl: (0, a.hT)(e.thumbnail),
                              date: (0, d.Am)(e.dspdate, f),
                              categories: i,
                              path: e.path,
                              isNew: (0, d.e_)(e.startdate, u.E),
                              isPickedUp:
                                (0, d.e_)(e.startdate, u.e) && "1" === e.pickup,
                            };
                          })) && void 0 !== e
                    ? e
                    : [];
                } catch (t) {
                  return;
                }
              },
              [x, f]
            ),
            A =
              null !==
                (n =
                  null === w || void 0 === w
                    ? void 0
                    : w.data.tag.map(function (e) {
                        return e.name;
                      })) && void 0 !== n
                ? n
                : [],
            k = (0, i.useMemo)(
              function () {
                var e;
                return b
                  ? Math.floor(
                      Math.max(
                        (null === b ||
                        void 0 === b ||
                        null === (e = b.data) ||
                        void 0 === e
                          ? void 0
                          : e.total_count) - 1,
                        0
                      ) / 24
                    ) + 1
                  : 1;
              },
              [b]
            );
          return (0, N.tZ)(N.HY, {
            children: (0, N.tZ)(se, {
              newsList: E,
              currPageNum: g,
              lastPageNum: k,
              tags: A,
            }),
          });
        };
    },
    33587: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return c;
        },
        Z: function () {
          return o;
        },
      });
      var r = n(16835),
        i = n(69873),
        a = n(77865),
        o = function (e) {
          var t = (0, i.W)(),
            n = (0, a.A)(),
            o = (0, r.Z)(n, 1)[0].universal;
          return e.filter(function (e) {
            return c(e, o, t);
          });
        },
        c = function (e, t, n) {
          return (
            !("elsewhere" !== n && !t) ||
            "0" === e.regional_setting.enabled ||
            ("1" === e.regional_setting.enabled &&
              0 === e.regional_setting.region_list.length) ||
            e.regional_setting.region_list.includes(n)
          );
        };
    },
    80072: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return r;
        },
        e: function () {
          return i;
        },
      });
      var r = 7,
        i = 14;
    },
    11047: function (e, t, n) {
      "use strict";
      n.d(t, {
        Am: function () {
          return c;
        },
        Fo: function () {
          return o;
        },
        Q: function () {
          return a;
        },
        e_: function () {
          return i;
        },
        f7: function () {
          return r;
        },
        x3: function () {
          return s;
        },
      });
      var r = function (e, t) {
          var n = Math.floor(new Date().getTime() / 1e3);
          return e < n && n < t;
        },
        i = function (e, t) {
          var n = Math.floor(new Date().getTime() / 1e3);
          return e <= n && n <= e + 24 * t * 60 * 60;
        },
        a = function (e) {
          return "number" === typeof e
            ? e
            : "string" === typeof e
            ? new Date(e).getTime() / 1e3
            : 0;
        },
        o = function (e, t) {
          var n = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
            r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0);
          return (
            n.getFullYear() === r.getFullYear() &&
            n.getMonth() === r.getMonth() &&
            n.getDate() === r.getDate()
          );
        },
        c = function (e, t) {
          var n = e.split(" ")[0].split("/"),
            r = n[0],
            i = n[1],
            a = n[2];
          switch (t) {
            case "ja":
              return "".concat(r, "/").concat(i, "/").concat(a);
            case "en":
              return "".concat(i, "/").concat(a, "/").concat(r);
            default:
              return "".concat(a, "/").concat(i, "/").concat(r);
          }
        },
        s = function (e, t) {
          var n = e.split(" ")[0].split("/")[0];
          return "".concat(n);
        };
    },
    27715: function (e, t, n) {
      "use strict";
      n.d(t, {
        T3: function () {
          return l;
        },
        k8: function () {
          return c;
        },
        ux: function () {
          return u;
        },
        y$: function () {
          return s;
        },
        yx: function () {
          return o;
        },
      });
      var r = n(16835);
      function i(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return a(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var o = function (e) {
          return -1 !== e.search(/^[0-9a-zA-Z\s]*$/);
        },
        c = function (e) {
          for (var t = [], n = 0, a = Object.entries(e); n < a.length; n++) {
            var o = (0, r.Z)(a[n], 2),
              c = o[0],
              s = o[1];
            if (Array.isArray(s)) {
              var l,
                u = [],
                d = i(s);
              try {
                for (d.s(); !(l = d.n()).done; ) {
                  var p = l.value;
                  u.push('"'.concat(p, '"'));
                }
              } catch (f) {
                d.e(f);
              } finally {
                d.f();
              }
              t.push('"'.concat(c, '":[').concat(u.join(","), "]"));
            } else s && t.push('"'.concat(c, '":"').concat(s, '"'));
          }
          if (0 !== t.length) return "{".concat(t.join(","), "}");
        },
        s = function e(t) {
          var n = t;
          if (void 0 === n || null === n) return "";
          if (!Number.isSafeInteger(n))
            throw new RangeError(
              "The value is outside the integer range. num: ".concat(n)
            );
          if (0 === n) return "\u96f6";
          var r = "";
          n < 0 && ((r += "\u30de\u30a4\u30ca\u30b9"), (n *= -1));
          for (
            var i = [
                "",
                "\u4e00",
                "\u4e8c",
                "\u4e09",
                "\u56db",
                "\u4e94",
                "\u516d",
                "\u4e03",
                "\u516b",
                "\u4e5d",
              ],
              a = [
                "\u5341",
                "\u767e",
                "\u5343",
                "\u4e07",
                "\u5104",
                "\u5146",
                "\u4eac",
                "\u5793",
                "\ud855\udf71",
                "\u7a63",
                "\u6e9d",
                "\u6f97",
                "\u6b63",
                "\u8f09",
                "\u6975",
                "\u6052\u6cb3\u6c99",
                "\u963f\u50e7\u7947",
                "\u90a3\u7531\u4ed6",
                "\u4e0d\u53ef\u601d\u8b70",
                "\u7121\u91cf\u5927\u6570",
              ],
              o = [
                1, 2, 3, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56,
                60, 64, 68,
              ],
              c = o.length;
            c >= 0;
            --c
          ) {
            var s = Math.pow(10, o[c]);
            if (n >= s) {
              var l = Math.floor(n / s);
              l >= 10 ? (r += e(l)) : (1 === l && o[c] <= 3) || (r += i[l]),
                (r += a[c]),
                (n -= l * s);
            }
          }
          return (r += i[n]);
        },
        l = function (e) {
          return e
            ? e.startsWith("https://youtu.be/")
              ? e.replace("https://youtu.be/", "https://www.youtube.com/embed/")
              : e.replace(
                  "https://www.youtube.com/watch?v=",
                  "https://www.youtube.com/embed/"
                )
            : e;
        },
        u = function (e) {
          return e
            ? e.replace(
                "https://www.youtube.com/embed",
                "https://www.youtube-nocookie.com/embed"
              )
            : e;
        };
    },
    9008: function (e, t, n) {
      e.exports = n(72717);
    },
  },
]);
