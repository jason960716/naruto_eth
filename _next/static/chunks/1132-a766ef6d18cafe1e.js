"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1132],
  {
    42730: function (e, i, a) {
      a.d(i, {
        C: function () {
          return gi;
        },
      });
      var n = a(59499),
        t = a(67294),
        r = a(41128),
        o = a(89660),
        s = a(27715),
        l = a(26267),
        c = a(70917),
        u = a(65313),
        d = a(73938),
        p = a(72462),
        m = a(86090),
        g = a(95541),
        h = a(71383),
        b = a(27812),
        w = a(11163),
        f = a(8503),
        x = a(48710),
        v = a(17484),
        y = a(77340),
        T = a(37868),
        S = a(32974),
        j = a(25701),
        M = a(16835),
        k = a(55756),
        B = a(7673),
        C = a(53877),
        O = a(18714),
        F = function () {
          var e = (0, t.useState)({ width: 0, height: 0 }),
            i = e[0],
            a = e[1];
          return (
            (0, t.useEffect)(function () {
              var e = function () {
                a({ width: window.innerWidth, height: window.innerHeight });
              };
              return (
                window.addEventListener("resize", e),
                e(),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            }, []),
            i
          );
        },
        A = a(35944);
      var N = { name: "57te89", styles: "position:relative;margin-left:6px" },
        I = function (e) {
          var i = e.casts;
          return (0, A.BX)(A.HY, {
            children: [
              (0, A.BX)("div", {
                css: R.ttl,
                children: [
                  (0, A.tZ)("p", { css: R.ttlTxt, children: "CAST" }),
                  (0, A.tZ)("div", {
                    css: N,
                    children: (0, A.tZ)("p", {
                      css: R.ttlTxtSub,
                      children: "\u30ad\u30e3\u30b9\u30c8",
                    }),
                  }),
                ],
              }),
              (0, A.tZ)("ul", {
                css: R.ul,
                children: i.map(function (e, i) {
                  return (0,
                  A.BX)("li", { css: R.li, children: [(0, A.tZ)("div", { css: R.work, children: (0, A.tZ)("p", { children: e.char }) }), (0, A.tZ)("div", { css: R.name, children: (0, A.tZ)("p", { children: e.name }) })] }, i);
                }),
              }),
            ],
          });
        },
        R = {
          ttl: (0, c.iv)(
            "display:flex;height:35px;margin-top:44px;margin-bottom:20px;margin-left:30px;@media ",
            x.r.media.prePhone,
            "{width:auto;margin-left:15px;}",
            ""
          ),
          ttlTxt: {
            name: "ymvd7q",
            styles:
              "margin:0;font-family:'Bebas Neue';font-size:32px;line-height:1",
          },
          ttlTxtSub: (0, c.iv)(
            "width:100px;margin:0;font-family:'fot-udkakugoc80-pro';font-size:14px;line-height:1;&:not(:lang(ja)){display:none;}@media (min-width: 768px){position:absolute;top:7px;}@media ",
            x.r.media.prePhone,
            "{position:absolute;top:7px;}",
            ""
          ),
          ul: {
            name: "wjc0fp",
            styles:
              "max-width:960px;padding:0;margin:0 auto;border-top:solid 1px #dbdbdb",
          },
          li: (0, c.iv)(
            "display:flex;border-bottom:solid 1px #dbdbdb;@media ",
            x.r.media.prePhone,
            "{display:block;}",
            ""
          ),
          work: (0, c.iv)(
            "width:155px;height:29px;margin-left:30px;@media ",
            x.r.media.prePhone,
            "{width:auto;margin-left:15px;}p{margin:4px 0;font-size:14px;line-height:21px;@media ",
            x.r.media.prePhone,
            "{p{}margin:18px 0 7px;font-size:16px;line-height:24px;}}",
            ""
          ),
          name: (0, c.iv)(
            "height:29px;margin-left:105px;line-height:1;@media ",
            x.r.media.prePhone,
            "{height:auto;margin-left:15px;line-height:1;}p{margin:7px 0;font-size:14px;@media ",
            x.r.media.prePhone,
            "{p{}margin:7px 0 11px;font-size:16px;}}@media (max-width: 860px){margin-left:13px;}",
            ""
          ),
        };
      var z = { name: "57te89", styles: "position:relative;margin-left:6px" },
        L = function (e) {
          var i = e.staffs;
          return (0, A.BX)(A.HY, {
            children: [
              (0, A.BX)("div", {
                css: P.ttl,
                children: [
                  (0, A.tZ)("p", { css: P.ttlTxt, children: "STAFF" }),
                  (0, A.tZ)("div", {
                    css: z,
                    children: (0, A.tZ)("p", {
                      css: P.ttlTxtSub,
                      children: "\u30b9\u30bf\u30c3\u30d5",
                    }),
                  }),
                ],
              }),
              (0, A.tZ)("ul", {
                css: P.ul,
                children: i.map(function (e, i) {
                  return (0,
                  A.BX)("li", { css: P.li, children: [(0, A.tZ)("div", { css: P.work, children: (0, A.tZ)("p", { children: e.work }) }), (0, A.tZ)("div", { css: P.name, children: (0, A.tZ)("p", { children: e.name }) })] }, i);
                }),
              }),
            ],
          });
        },
        P = {
          ttl: {
            name: "pwfmpx",
            styles:
              "display:flex;height:35px;margin-top:44px;margin-bottom:20px;margin-left:30px;@media (max-width: 770px){width:auto;margin-left:15px;}",
          },
          ttlTxt: {
            name: "ymvd7q",
            styles:
              "margin:0;font-family:'Bebas Neue';font-size:32px;line-height:1",
          },
          ttlTxtSub: (0, c.iv)(
            "width:100px;margin:0;font-family:'fot-udkakugoc80-pro';font-size:14px;line-height:1;&:not(:lang(ja)){display:none;}@media (min-width: 768px){position:absolute;top:7px;}@media ",
            x.r.media.prePhone,
            "{position:absolute;top:7px;}",
            ""
          ),
          ul: {
            name: "wjc0fp",
            styles:
              "max-width:960px;padding:0;margin:0 auto;border-top:solid 1px #dbdbdb",
          },
          li: (0, c.iv)(
            "display:flex;border-bottom:solid 1px #dbdbdb;@media ",
            x.r.media.prePhone,
            "{display:block;}",
            ""
          ),
          work: (0, c.iv)(
            "width:155px;margin-left:30px;@media ",
            x.r.media.prePhone,
            "{width:auto;margin-left:15px;}p{margin:7px 0;font-size:14px;line-height:15px;@media ",
            x.r.media.prePhone,
            "{p{}margin:7px 0;font-size:13px;}}",
            ""
          ),
          name: (0, c.iv)(
            "margin-left:105px;@media ",
            x.r.media.prePhone,
            "{height:auto;margin-left:15px;line-height:1.5;}p{margin:4px 0;font-size:14px;line-height:21px;white-space:pre-wrap;@media ",
            x.r.media.prePhone,
            "{p{}margin:7px 0 11px;font-size:16px;line-height:24px;}}@media (max-width: 860px){margin-left:13px;}",
            ""
          ),
        };
      var E = { name: "b4vp7c", styles: "max-height:0" },
        Z = { name: "1psl7ei", styles: "margin-left:-9px" },
        U = function (e) {
          e.series;
          var i = e.title,
            a = e.staffs,
            n = e.casts,
            r = (0, t.useState)(!1),
            o = r[0],
            s = r[1],
            l = (0, t.useState)(!1),
            u = l[0],
            d = l[1],
            p = (0, t.useState)(!1),
            m = p[0],
            g = p[1],
            h = (0, t.useState)(void 0),
            b = h[0],
            f = h[1],
            v = F().width;
          (0, t.useEffect)(
            function () {
              window.innerWidth > 1023 ? g(o || u) : g(o);
            },
            [o, u]
          ),
            (0, t.useEffect)(
              function () {
                var e;
                f(
                  null === (e = document.getElementById("staffAccordion")) ||
                    void 0 === e
                    ? void 0
                    : e.scrollHeight
                );
              },
              [v]
            );
          var y = (0, w.useRouter)();
          return (
            (0, t.useEffect)(
              function () {
                g(!1), s(!1);
              },
              [y.asPath]
            ),
            (0, A.BX)("div", {
              css: G.wrapper,
              children: [
                (0, A.tZ)("div", {
                  css: [m ? G.scroll : "", "", ""],
                  children: (0, A.tZ)("button", {
                    css: m ? G.accordionTtlOpen : G.accordionTtlClose,
                    onClick: function () {
                      return s(function (e) {
                        return !o;
                      });
                    },
                    onPointerEnter: function () {
                      return d(function (e) {
                        return !u;
                      });
                    },
                    onPointerLeave: function () {
                      return d(function (e) {
                        return !u;
                      });
                    },
                    children: (0, A.BX)("div", {
                      css: [
                        G.accordionTtlTxt,
                        m ? Z : (0, c.iv)("", ""),
                        "",
                        "",
                      ],
                      children: [
                        (0, A.tZ)("p", { children: i }),
                        (0, A.tZ)("div", {
                          css: G.accordionTtlBtn,
                          children: (0, A.BX)("div", {
                            css: (0, c.iv)(
                              "display:flex;width:20px;height:20px;margin:auto 24px auto 0;@media ",
                              x.r.media.prePhone,
                              "{margin:auto 8px auto 0;}",
                              ""
                            ),
                            children: [
                              (0, A.tZ)("img", {
                                src: "/anime/series/plus_bk.svg",
                                alt: "+",
                                css: m
                                  ? [{ display: "none" }]
                                  : [G.icon, { display: "block" }],
                              }),
                              (0, A.tZ)("img", {
                                src: "/anime/series/plus_wh.svg",
                                alt: "+",
                                css:
                                  m && !o && u
                                    ? [G.icon, { display: "block" }]
                                    : [{ display: "none" }],
                              }),
                              (0, A.tZ)("img", {
                                src: "/anime/series/minus_wh.svg",
                                alt: "-",
                                css: o
                                  ? [G.icon, { display: "block" }]
                                  : [{ display: "none" }],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, A.BX)("div", {
                  id: "staffAccordion",
                  css: [
                    G.accordionContent,
                    o
                      ? (0, c.iv)(
                          "max-height:",
                          b,
                          "px;margin-bottom:64px;",
                          ""
                        )
                      : E,
                    "",
                    "",
                  ],
                  children: [
                    (0, A.tZ)(L, { staffs: a }),
                    (0, A.tZ)(I, { casts: n }),
                  ],
                }),
              ],
            })
          );
        },
        G = {
          scroll: {
            name: "ruzzmp",
            styles:
              "padding:5px 0 8px 17px;margin-top:-5px;margin-bottom:-12px;border-style:solid;border-width:2px;border-right:0;border-image-source:url('/common/scroll.svg');border-image-slice:30;border-image-width:24px",
          },
          wrapper: { name: "1h3rtzg", styles: "align-items:center" },
          accordionTtlOpen: {
            name: "e6kvyi",
            styles:
              "position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:61px;padding:0;margin:0 0 -2px;color:#fff;cursor:pointer;background:#000;border:none;border-top:2px solid #000;border-bottom:2px solid #000;transition:background 0.25s,color 0.25s",
          },
          accordionTtlClose: {
            name: "1ra1gg3",
            styles:
              "position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:61px;padding:0;margin:0 0 -2px;color:#000;cursor:pointer;background:none;border:none;border-top:2px solid #000;border-bottom:2px solid #000;transition:background 0.25s,color 0.25s",
          },
          accordionTtlBtn: {
            name: "albbm6",
            styles:
              "position:absolute;right:0;display:flex;align-items:center;height:100%;border:none",
          },
          accordionTtlTxt: {
            name: "1hwimtp",
            styles:
              "display:flex;align-items:center;justify-content:center;width:100%;height:100%;p{margin:0;font-family:var(--comic-impact-font);font-size:26px;&:not(:lang(ja)){margin-top:3px;font-size:34px;}}",
          },
          icon: {
            name: "ypk1el",
            styles: "width:20px;height:20px;margin:auto",
          },
          accordionContent: {
            name: "17cxzx4",
            styles: "height:auto;overflow:hidden;transition:all 1s",
          },
        };
      var V = { name: "57te89", styles: "position:relative;margin-left:6px" },
        D = { name: "57te89", styles: "position:relative;margin-left:6px" },
        q = function (e) {
          var i = e.openings,
            a = e.endings;
          return (0, A.BX)(A.HY, {
            children: [
              (0, A.BX)("div", {
                css: _.ttl,
                children: [
                  (0, A.tZ)("p", { css: _.ttlTxt, children: "OPENING" }),
                  (0, A.tZ)("div", {
                    css: D,
                    children: (0, A.tZ)("p", {
                      css: _.ttlTxtSub,
                      children: "\u30aa\u30fc\u30d7\u30cb\u30f3\u30b0",
                    }),
                  }),
                ],
              }),
              (0, A.tZ)("ul", {
                css: _.ul,
                children: i
                  ? i.map(function (e, i) {
                      return (0,
                      A.BX)("li", { css: _.li, children: [(0, A.tZ)("div", { css: _.ep, children: (0, A.tZ)("p", { children: e.ep }) }), (0, A.tZ)("div", { css: _.song, children: (0, A.tZ)("p", { children: e.song }) }), (0, A.tZ)("div", { css: _.singer, children: (0, A.tZ)("p", { children: e.singer }) })] }, i);
                    })
                  : "",
              }),
              (0, A.BX)("div", {
                css: _.ttl,
                children: [
                  (0, A.tZ)("p", { css: _.ttlTxt, children: "ENDING" }),
                  (0, A.tZ)("div", {
                    css: V,
                    children: (0, A.tZ)("p", {
                      css: _.ttlTxtSub,
                      children: "\u30a8\u30f3\u30c7\u30a3\u30f3\u30b0",
                    }),
                  }),
                ],
              }),
              (0, A.tZ)("ul", {
                css: _.ul,
                children: a
                  ? a.map(function (e, i) {
                      return (0,
                      A.BX)("li", { css: _.li, children: [(0, A.tZ)("div", { css: _.ep, children: (0, A.tZ)("p", { children: e.ep }) }), (0, A.tZ)("div", { css: _.song, children: (0, A.tZ)("p", { children: e.song }) }), (0, A.tZ)("div", { css: _.singer, children: (0, A.tZ)("p", { children: e.singer }) })] }, i);
                    })
                  : "",
              }),
            ],
          });
        },
        _ = {
          ttl: {
            name: "pwfmpx",
            styles:
              "display:flex;height:35px;margin-top:44px;margin-bottom:20px;margin-left:30px;@media (max-width: 770px){width:auto;margin-left:15px;}",
          },
          ttlTxt: {
            name: "ymvd7q",
            styles:
              "margin:0;font-family:'Bebas Neue';font-size:32px;line-height:1",
          },
          ttlTxtSub: (0, c.iv)(
            "width:100px;margin:0;font-family:'fot-udkakugoc80-pro';font-size:14px;line-height:1;&:not(:lang(ja)){display:none;}@media (min-width: 768px){position:absolute;top:5px;}@media ",
            x.r.media.prePhone,
            "{position:absolute;top:5px;}",
            ""
          ),
          ul: {
            name: "wjc0fp",
            styles:
              "max-width:960px;padding:0;margin:0 auto;border-top:solid 1px #dbdbdb",
          },
          li: {
            name: "1h128vq",
            styles:
              "display:flex;justify-content:space-between;padding:0 0 0 30px;border-bottom:solid 1px #dbdbdb;@media (max-width: 860px){padding:0 5% 0 30px;}@media (max-width: 770px){display:block;padding:0 0 0 15px;}",
          },
          ep: {
            name: "1ab8l78",
            styles:
              "width:33%;height:auto;@media (max-width: 770px){width:auto;height:auto;}p{margin:7px 0;font-size:14px;line-height:1;@media (max-width: 770px){p{}margin:18px 0 7px;font-size:13px;}}",
          },
          song: {
            name: "fzsidz",
            styles:
              "width:33%;line-height:1;@media (max-width: 770px){width:auto;height:auto;}p{margin:7px 0;font-size:14px;@media (max-width: 770px){p{}margin:7px 0;font-size:16px;}}",
          },
          singer: {
            name: "glmhva",
            styles:
              "width:33%;line-height:1;@media (max-width: 770px){width:auto;height:auto;}p{margin:7px 0;font-size:14px;@media (max-width: 770px){p{}margin:7px 0 11px;font-size:16px;}}",
          },
        };
      var H = { name: "b4vp7c", styles: "max-height:0" },
        X = { name: "1psl7ei", styles: "margin-left:-9px" },
        W = function (e) {
          e.series;
          var i = e.title,
            a = e.openings,
            n = e.endings,
            r = (0, t.useState)(!1),
            o = r[0],
            s = r[1],
            l = (0, t.useState)(!1),
            u = l[0],
            d = l[1],
            p = (0, t.useState)(!1),
            m = p[0],
            g = p[1],
            h = (0, t.useState)(void 0),
            b = h[0],
            f = h[1],
            v = F().width;
          (0, t.useEffect)(
            function () {
              var e;
              f(
                null === (e = document.getElementById("themeSongAccordion")) ||
                  void 0 === e
                  ? void 0
                  : e.scrollHeight
              );
            },
            [v]
          ),
            (0, t.useEffect)(
              function () {
                window.innerWidth > 1023 ? g(o || u) : g(o);
              },
              [o, u]
            );
          var y = (0, w.useRouter)();
          return (
            (0, t.useEffect)(
              function () {
                g(!1), s(!1);
              },
              [y.asPath]
            ),
            (0, A.tZ)(A.HY, {
              children: (0, A.BX)("div", {
                css: K.wrapper,
                children: [
                  (0, A.tZ)("div", {
                    css: [m ? K.scroll : "", "", ""],
                    children: (0, A.tZ)("button", {
                      css: m ? K.accordionTtlOpen : K.accordionTtlClose,
                      onClick: function () {
                        return s(function (e) {
                          return !o;
                        });
                      },
                      onPointerEnter: function () {
                        return d(function (e) {
                          return !u;
                        });
                      },
                      onPointerLeave: function () {
                        return d(function (e) {
                          return !u;
                        });
                      },
                      children: (0, A.BX)("div", {
                        css: [
                          K.accordionTtlTxt,
                          m ? X : (0, c.iv)("", ""),
                          "",
                          "",
                        ],
                        children: [
                          (0, A.tZ)("p", { children: i }),
                          (0, A.tZ)("div", {
                            css: K.accordionTtlBtn,
                            children: (0, A.BX)("div", {
                              css: (0, c.iv)(
                                "display:flex;width:20px;height:20px;margin:auto 24px auto 0;@media ",
                                x.r.media.prePhone,
                                "{margin:auto 8px auto 0;}",
                                ""
                              ),
                              children: [
                                (0, A.tZ)("img", {
                                  src: "/anime/series/plus_bk.svg",
                                  alt: "+",
                                  css: m
                                    ? [{ display: "none" }]
                                    : [K.icon, { display: "block" }],
                                }),
                                (0, A.tZ)("img", {
                                  src: "/anime/series/plus_wh.svg",
                                  alt: "+",
                                  css:
                                    m && !o && u
                                      ? [K.icon, { display: "block" }]
                                      : [{ display: "none" }],
                                }),
                                (0, A.tZ)("img", {
                                  src: "/anime/series/minus_wh.svg",
                                  alt: "-",
                                  css: o
                                    ? [K.icon, { display: "block" }]
                                    : [{ display: "none" }],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, A.tZ)("div", {
                    id: "themeSongAccordion",
                    css: [
                      K.accordionContent,
                      o ? (0, c.iv)("max-height:", b, "px;", "") : H,
                      "",
                      "",
                    ],
                    children: (0, A.tZ)("div", {
                      className: "accordionContentInner",
                      children: (0, A.tZ)(q, { openings: a, endings: n }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        K = {
          scroll: {
            name: "ruzzmp",
            styles:
              "padding:5px 0 8px 17px;margin-top:-5px;margin-bottom:-12px;border-style:solid;border-width:2px;border-right:0;border-image-source:url('/common/scroll.svg');border-image-slice:30;border-image-width:24px",
          },
          wrapper: { name: "1h3rtzg", styles: "align-items:center" },
          accordionTtlOpen: {
            name: "e6kvyi",
            styles:
              "position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:61px;padding:0;margin:0 0 -2px;color:#fff;cursor:pointer;background:#000;border:none;border-top:2px solid #000;border-bottom:2px solid #000;transition:background 0.25s,color 0.25s",
          },
          accordionTtlClose: {
            name: "1ra1gg3",
            styles:
              "position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:61px;padding:0;margin:0 0 -2px;color:#000;cursor:pointer;background:none;border:none;border-top:2px solid #000;border-bottom:2px solid #000;transition:background 0.25s,color 0.25s",
          },
          accordionTtlBtn: {
            name: "albbm6",
            styles:
              "position:absolute;right:0;display:flex;align-items:center;height:100%;border:none",
          },
          accordionTtlTxt: {
            name: "1hwimtp",
            styles:
              "display:flex;align-items:center;justify-content:center;width:100%;height:100%;p{margin:0;font-family:var(--comic-impact-font);font-size:26px;&:not(:lang(ja)){margin-top:3px;font-size:34px;}}",
          },
          icon: {
            name: "ypk1el",
            styles: "width:20px;height:20px;margin:auto",
          },
          accordionContent: {
            name: "17cxzx4",
            styles: "height:auto;overflow:hidden;transition:all 1s",
          },
        },
        Y = a(83454);
      var J = {
          name: "pdz4vv",
          styles: "display:flex;justify-content:center;margin:0 auto 60px",
        },
        Q = function (e) {
          var i = e.series,
            a = e.staff,
            n = e.cast,
            t = e.opening,
            r = e.ending,
            o = e.officialUrl,
            s = (0, f.bU)(),
            l = (0, w.useRouter)(),
            u = "preview" === Y.env.NEXT_PUBLIC_MODE,
            d = (0, k.fP)(["_ga"]),
            p = (0, M.Z)(d, 1)[0];
          return (0, A.BX)(A.HY, {
            children: [
              (0, A.BX)("div", {
                css: $.container,
                children: [
                  (0, A.tZ)(U, {
                    series: i,
                    title: ee[s],
                    staffs: a,
                    casts: n,
                  }),
                  t
                    ? (0, A.tZ)(W, {
                        series: i,
                        title: ie[s],
                        openings: t,
                        endings: r,
                      })
                    : "",
                ],
              }),
              (0, A.tZ)(O.f, {
                wrapperCss: J,
                css: (0, c.iv)(
                  "width:100%;max-width:350px;height:52px;font-size:26px;&:not(:lang(ja)){font-size:36px;}@media ",
                  x.r.media.preTablet,
                  "{width:82.3%;font-size:22px;&:not(:lang(ja)){font-size:26px;}}",
                  ""
                ),
                href: o,
                icon: "link",
                onClick: function () {
                  return (function (e) {
                    if ((0, B.B)(e) && !u) {
                      var i = (0, B.X)(
                        ""
                          .concat("https://analyze.naruto-official.com")
                          .concat(l.asPath),
                        [
                          { key: "title", value: document.title },
                          { key: "uuid", value: (0, C.p)() },
                          { key: "sessionId", value: (0, C.M)() },
                          { key: "cookie", value: p._ga },
                          { key: "referrer", value: document.referrer },
                          { key: "extlink", value: e },
                        ]
                      );
                      fetch(i).catch(function (e) {
                        return console.error(e);
                      });
                    }
                  })(o);
                },
                children: ae[s],
              }),
            ],
          });
        },
        $ = {
          container: {
            name: "upfgnd",
            styles:
              "padding-bottom:64px;@media (min-width: 1024px){margin:0 auto;}@media (max-width: 1023px){margin:0 auto;}",
          },
        },
        ee = {
          ja: "\u30b9\u30bf\u30c3\u30d5\u30fb\u30ad\u30e3\u30b9\u30c8",
          en: "STAFF AND CAST",
          fr: "DIRECTION & DISTRIBUTION",
          de: "MITWIRKENDE UND BESETZUNG",
          es: "PERSONAL Y REPARTO",
          it: "CAST & STAFF",
        },
        ie = {
          ja: "\u4e3b\u984c\u6b4c",
          en: "THEME SONGS",
          fr: "G\xc9N\xc9RIQUES",
          de: "TITELSONGS",
          es: "TEMAS MUSICALES",
          it: "SIGLE",
        },
        ae = {
          ja: "\u516c\u5f0f\u30b5\u30a4\u30c8\u306f\u3053\u3061\u3089",
          en: "SITE",
          fr: "SITE OFFICIEL",
          de: "OFFIZIELLE WEBSEITE",
          es: "SITIO OFICIAL",
          it: "SITO UFFICIALE",
        },
        ne = a(26184);
      var te = {
          name: "17clsv0",
          styles:
            "width:100%;margin-top:23px;margin-right:0;font-size:26px;line-height:1;&:not(:lang(ja)){font-size:32px;}",
        },
        re = { name: "b4vp7c", styles: "max-height:0" },
        oe = function (e) {
          var i = (0, f.bU)(),
            a = (0, t.useState)(void 0),
            n = a[0],
            r = a[1],
            o = F().width;
          return (
            (0, t.useEffect)(
              function () {
                var i;
                r(
                  null ===
                    (i = document.getElementById(
                      "animeAccordion_".concat(e.id)
                    )) || void 0 === i
                    ? void 0
                    : i.scrollHeight
                );
              },
              [o, e]
            ),
            (0, A.tZ)("div", {
              className: "wrapper",
              id: "animeAccordion_".concat(e.id),
              css: [
                se.wrapper,
                e.click ? (0, c.iv)("max-height:", n, "px;", "") : re,
                "",
                "",
              ],
              children: (0, A.BX)("div", {
                css: se.accordionBoby,
                children: [
                  (0, A.BX)("div", {
                    css: se.seriesSummaryContainer,
                    id: "animeAccordion",
                    children: [
                      (0, A.tZ)("div", {
                        css: se.seriesSummaryImg,
                        children: (0, A.tZ)(ne._, {
                          src: e.src,
                          loadStyle: (0, c.iv)(
                            "width:100%;max-width:456px;height:auto;aspect-ratio:385/289;@media ",
                            x.r.media.prePhone,
                            "{width:86.5%;max-width:289px;aspect-ratio:289/217;margin:0 auto;}",
                            ""
                          ),
                          imgStyle: (0, c.iv)(
                            "width:100%;max-width:456px;height:auto;@media ",
                            x.r.media.prePhone,
                            "{width:86.5%;max-width:289px;}",
                            ""
                          ),
                          alt: "series_img",
                        }),
                      }),
                      (0, A.BX)("div", {
                        css: se.seriesSummary,
                        children: [
                          (0, A.tZ)("p", {
                            css: se.seriesSummaryText,
                            children: e.summaryText,
                          }),
                          (0, A.tZ)(O.f, {
                            wrapperCss: (0, c.iv)(
                              "height:fit-content;padding:12px 14px 14px;@media (max-width: 1023px) and (min-width: 768px){display:flex;justify-content:center;}@media ",
                              x.r.media.preTablet,
                              "{display:none;}",
                              ""
                            ),
                            css: te,
                            href: e.href,
                            icon: "kunai",
                            children: le[i],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, A.tZ)(O.f, {
                    wrapperCss: (0, c.iv)(
                      "height:fit-content;padding:13px 19px;margin-bottom:80px;@media ",
                      x.r.media.postTablet,
                      "{display:none;}@media ",
                      x.r.media.preTablet,
                      "{display:flex;justify-content:center;margin:0 auto 52px;}@media ",
                      x.r.media.prePhone,
                      "{margin:70px auto 52px;}",
                      ""
                    ),
                    css: (0, c.iv)(
                      "max-width:463px;font-size:26px;&:not(:lang(ja)){font-size:32px;line-height:32px;}@media (max-width: 1023px) and (min-width: 768px){width:463px;}@media ",
                      x.r.media.prePhone,
                      "{width:86.5%;font-size:20px;}",
                      ""
                    ),
                    href: e.href,
                    icon: "kunai",
                    children: le[i],
                  }),
                ],
              }),
            })
          );
        },
        se = {
          wrapper: {
            name: "17cxzx4",
            styles: "height:auto;overflow:hidden;transition:all 1s",
          },
          accordionBoby: {
            name: "1xl376e",
            styles:
              "position:relative;width:100%;max-width:960px;min-height:292px;margin:24px auto 0",
          },
          seriesSummaryContainer: (0, c.iv)(
            "display:flex;justify-content:space-around;height:auto;margin:36px auto 60px;@media ",
            x.r.media.prePhone,
            "{display:block;}",
            ""
          ),
          seriesSummaryImg: (0, c.iv)(
            "align-self:start;width:47%;@media ",
            x.r.media.prePhone,
            "{width:100%;text-align:center;}",
            ""
          ),
          seriesSummary: (0, c.iv)(
            "position:relative;width:52.5%;max-width:463px;min-height:181px;margin-bottom:80px;margin-left:40px;@media ",
            x.r.media.prePhone,
            "{width:86.5%;margin:0 auto;}",
            ""
          ),
          seriesSummaryText: {
            name: "1mqw6f5",
            styles:
              "font-size:16px;line-height:2;overflow-wrap:break-word;&:not(:lang(ja)){font-size:15px;line-height:1.5;}",
          },
        },
        le = {
          ja: "\u5404\u8a71\u306e\u3042\u3089\u3059\u3058\u3092\u898b\u308b",
          en: "SEE THE OVERVIEW OF EACH STORY",
          fr: "Voir le synopsis de chaque histoire",
          de: "ZUSAMMENFASSUNGEN ALLER GESCHICHTEN ANSEHEN",
          es: "Ver la sinopsis de cada historia",
          it: "Guarda la sinossi di ogni storia",
        };
      var ce = {
          name: "10g980i",
          styles: "display:flex;width:20px;height:20px;margin:auto 24px auto 0",
        },
        ue = { name: "1gn3kn5", styles: "display:flex;width:100%;height:100%" },
        de = function (e) {
          var i = e.ep,
            a = e.title,
            n = e.isOriginal,
            t = e.click,
            r = e.hover,
            o = e.setClick,
            s = e.setHover,
            l = (0, f.bU)(),
            c = t || r,
            u = function () {
              return (
                !navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i) && !r
              );
            };
          return (0, A.tZ)("button", {
            css: c ? [pe.accordionLabelOpen] : [pe.accordionLabelClose],
            onClick: function () {
              return o(!t);
            },
            onPointerEnter: function () {
              return s(u());
            },
            onPointerLeave: function () {
              return s(u());
            },
            children: (0, A.BX)("div", {
              css: ue,
              children: [
                (0, A.tZ)("div", {
                  css: pe.accordionEp,
                  children: (0, A.tZ)("p", {
                    className: "episode",
                    children: i,
                  }),
                }),
                (0, A.BX)("div", {
                  css: c ? pe.titleSectionOpen : pe.titleSectionClose,
                  children: [
                    (0, A.tZ)("div", {
                      css: pe.accordionTtlTxt,
                      children: (0, A.tZ)("p", {
                        className: c ? "active" : "",
                        children: a,
                      }),
                    }),
                    (0, A.BX)("div", {
                      css: pe.accordionLabelRight,
                      children: [
                        (0, A.tZ)("div", {
                          css: pe.original,
                          children: n
                            ? (0, A.tZ)("p", { children: me[l] })
                            : (0, A.tZ)(A.HY, {}),
                        }),
                        (0, A.BX)("div", {
                          css: ce,
                          children: [
                            (0, A.tZ)("img", {
                              src: "/anime/series/plus_bk.svg",
                              alt: "+",
                              css:
                                t || r
                                  ? [{ display: "none" }]
                                  : [pe.icon, { display: "block" }],
                            }),
                            (0, A.tZ)("img", {
                              src: "/anime/series/plus_wh.svg",
                              alt: "+",
                              css:
                                !t && r
                                  ? [pe.icon, { display: "block" }]
                                  : [{ display: "none" }],
                            }),
                            (0, A.tZ)("img", {
                              src: "/anime/series/minus_wh.svg",
                              alt: "-",
                              css: t
                                ? [pe.icon, { display: "block" }]
                                : [{ display: "none" }],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        pe = {
          accordionLabelOpen: (0, c.iv)(
            "box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;padding:6px 0 8px;padding-left:17px;margin:-6px 0 -12px;cursor:pointer;border-style:solid;border-width:2px;border-right:none;border-image-source:url('/common/scroll.svg');border-image-slice:30;border-image-width:24px;transition:padding-left 0.25s;@media ",
            x.r.media.preTablet,
            "{display:none;}",
            ""
          ),
          accordionLabelClose: (0, c.iv)(
            "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;min-height:61px;padding:0;margin:0 0 -2px;cursor:pointer;border:none;border-top:2px solid #000;@media ",
            x.r.media.preTablet,
            "{display:none;}",
            ""
          ),
          accordionEp: {
            name: "qatkod",
            styles:
              "display:flex;align-items:center;width:160px;min-height:61px;background:none;p{margin:0 0 0 24px;font-family:'Bebas Neue';font-size:26px;}",
          },
          titleSectionOpen: {
            name: "i8js11",
            styles:
              "display:flex;width:100%;height:100%;background:#000;transition:background 0.25s",
          },
          titleSectionClose: {
            name: "1kaaqvc",
            styles:
              "display:flex;width:100%;height:100%;background:none;transition:background 0.25s",
          },
          accordionLabelRight: {
            name: "b9fw7c",
            styles:
              "display:flex;align-items:center;height:100%;margin:auto;border:none",
          },
          original: {
            name: "1jvlucd",
            styles:
              "display:flex;align-items:center;width:83px;height:30px;margin-right:30px;p{width:83px;font-family:var(--comic-impact-font);font-size:11px;background-color:#eaeaea;&:lang(en){font-size:14px;}}",
          },
          icon: {
            name: "ypk1el",
            styles: "width:20px;height:20px;margin:auto",
          },
          accordionTtlTxt: {
            name: "1phhocp",
            styles:
              "width:calc(100% - 160px);height:100%;p{margin:17px 0;font-family:'fot-udkakugoc80-pro';font-size:26px;line-height:29px;color:#000;white-space:pre-wrap;transition:color 0.25s;}p.active{margin:17px 0;margin-left:-17px;color:#fff;transition:color 0.25s,margin-left 0.25s;}",
          },
        },
        me = {
          ja: "\u30a2\u30cb\u30e1\u30aa\u30ea\u30b8\u30ca\u30eb",
          en: "ANIME ORIGINAL",
          fr: "EXCLUSIF \xc0 L\u2019ANIM\xc9",
          de: "ANIME-ORIGINAL",
          es: "EXCLUSIVO DEL ANIME",
          it: "ESCLUSIVO ANIME",
        };
      var ge = {
          name: "vzuwuh",
          styles: "display:flex;width:20px;height:20px;margin:auto 8px auto 0",
        },
        he = {
          name: "1g255of",
          styles:
            "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%",
        },
        be = function (e) {
          var i = e.ep,
            a = e.title,
            n = e.isOriginal,
            t = e.click,
            r = e.setClick,
            o = (0, f.bU)();
          return (0, A.tZ)("button", {
            css: t ? [we.accordionLabelOpen] : [we.accordionLabelClose],
            onClick: function () {
              return r(!t);
            },
            children: (0, A.BX)("div", {
              css: t ? [we.accordionContentsOpen] : [we.accordionContentsClose],
              children: [
                (0, A.BX)("div", {
                  css: he,
                  children: [
                    (0, A.BX)("div", {
                      css: t
                        ? [we.accordionEp, { color: "#fff" }]
                        : [we.accordionEp, { color: "#000" }],
                      children: [
                        (0, A.tZ)("div", {
                          css: (0, c.iv)(
                            "display:none;@media ",
                            x.r.media.prePhone,
                            "{",
                            n ? "display: flex;" : "display: none;",
                            " align-items:center;height:30px;@media (min-width: 573px){width:83px;}p{width:83px;font-family:var(--comic-impact-font);font-size:11px;color:#000;background-color:#eaeaea;&:lang(en){font-size:14px;}}}",
                            ""
                          ),
                          children: n
                            ? (0, A.tZ)("p", { children: fe[o] })
                            : (0, A.tZ)(A.HY, {}),
                        }),
                        (0, A.tZ)("p", { children: i }),
                      ],
                    }),
                    (0, A.tZ)("div", {
                      css: t
                        ? [we.accordionTtlTxt, { color: "#fff" }]
                        : [we.accordionTtlTxt, { color: "#000" }],
                      children: (0, A.tZ)("p", { children: a }),
                    }),
                  ],
                }),
                (0, A.BX)("div", {
                  css: we.accordionLabelRight,
                  children: [
                    (0, A.tZ)("div", {
                      css: t ? we.originalOpen : we.originalClose,
                      children: n
                        ? (0, A.tZ)("p", { children: fe[o] })
                        : (0, A.tZ)(A.HY, {}),
                    }),
                    (0, A.BX)("div", {
                      css: ge,
                      children: [
                        (0, A.tZ)("img", {
                          src: "/anime/series/plus_bk.svg",
                          alt: "+",
                          css: t
                            ? [{ display: "none" }]
                            : [we.icon, { display: "block" }],
                        }),
                        (0, A.tZ)("img", {
                          src: "/anime/series/minus_wh.svg",
                          alt: "-",
                          css: t
                            ? [we.icon, { display: "block" }]
                            : [{ display: "none" }],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        we = {
          accordionLabelOpen: (0, c.iv)(
            "width:100%;height:100%;padding:6px 0 8px;padding-left:17px;margin:-6px 0 -2px;cursor:pointer;border-style:solid;border-width:2px;border-right:none;border-image-source:url('/common/scroll.svg');border-image-slice:30;border-image-width:24px;transition:padding-left 0.25s;@media ",
            x.r.media.postTablet,
            "{display:none;}",
            ""
          ),
          accordionLabelClose: (0, c.iv)(
            "width:100%;height:100%;padding:0;margin:0 0 -2px;cursor:pointer;background-color:#fff;border:none;border-top:2px solid #000;border-bottom:2px solid #000;@media ",
            x.r.media.postTablet,
            "{display:none;}",
            ""
          ),
          accordionContentsOpen: {
            name: "13kpet2",
            styles:
              "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;background-color:#000",
          },
          accordionContentsClose: {
            name: "1g255of",
            styles:
              "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%",
          },
          accordionEp: (0, c.iv)(
            "display:flex;align-items:center;width:93px;min-height:61px;padding-left:10px;background-color:none;&>p{margin:0;font-family:'Bebas Neue';font-size:18px;}@media ",
            x.r.media.prePhone,
            "{flex-direction:column;justify-content:center;}",
            ""
          ),
          accordionLabelRight: {
            name: "9ouxp6",
            styles: "display:flex;align-items:center;height:100%;border:none",
          },
          originalPhone: (0, c.iv)(
            "display:none;@media ",
            x.r.media.prePhone,
            "{align-items:center;height:30px;@media (min-width: 573px){width:83px;}p{width:83px;font-family:var(--comic-impact-font);font-size:11px;color:#000;background-color:#eaeaea;&:lang(en){font-size:14px;}}}",
            ""
          ),
          originalOpen: (0, c.iv)(
            "display:flex;align-items:center;height:30px;margin-right:9px;p{width:83px;font-family:var(--comic-impact-font);font-size:11px;background-color:#eaeaea;&:lang(en){font-size:14px;}}@media ",
            x.r.media.prePhone,
            "{display:none;}",
            ""
          ),
          originalClose: (0, c.iv)(
            "display:flex;align-items:center;height:30px;margin-right:9px;@media (min-width: 573px){width:83px;}p{width:83px;font-family:var(--comic-impact-font);font-size:11px;background-color:#eaeaea;&:lang(en){font-size:14px;}}@media ",
            x.r.media.prePhone,
            "{display:none;}",
            ""
          ),
          icon: {
            name: "ypk1el",
            styles: "width:20px;height:20px;margin:auto",
          },
          accordionTtlTxt: (0, c.iv)(
            "align-items:center;justify-content:center;width:calc(100% - 88px);height:100%;margin:0 auto;p{height:100%;padding:0 5px;margin:auto 0;font-family:var(--comic-impact-font);font-size:22px;line-height:27px;text-align:left;white-space:pre-wrap;@media ",
            x.r.media.postPhone,
            "{p{}text-align:center;}}",
            ""
          ),
        },
        fe = {
          ja: "\u30a2\u30cb\u30e1\u30aa\u30ea\u30b8\u30ca\u30eb",
          en: "ANIME ORIGINAL",
          fr: "EXCLUSIF \xc0 L\u2019ANIM\xc9",
          de: "ANIME-ORIGINAL",
          es: "EXCLUSIVO DEL ANIME",
          it: "ESCLUSIVO ANIME",
        };
      var xe = function (e) {
          var i = e.id,
            a = e.original,
            n = e.ep,
            r = e.title,
            o = e.open,
            s = e.img,
            l = e.summary,
            c = e.href,
            u = (0, t.useState)(!!o),
            d = u[0],
            p = u[1],
            m = (0, t.useState)(!1),
            g = m[0],
            h = m[1];
          return (0, A.BX)("li", {
            className: d || g ? "active" : "not-active",
            css: ve.wrapper,
            children: [
              (0, A.tZ)(de, {
                ep: n,
                title: r,
                isOriginal: a,
                click: d,
                hover: g,
                setClick: p,
                setHover: h,
              }),
              (0, A.tZ)(be, {
                ep: n,
                title: r,
                isOriginal: a,
                click: d,
                setClick: p,
              }),
              (0, A.tZ)(oe, {
                id: i,
                src: s,
                click: d,
                summaryText: l,
                href: c,
              }),
            ],
          });
        },
        ve = {
          wrapper: {
            name: "rt565p",
            styles: "align-items:center;max-width:990px;margin:0 auto",
          },
        };
      var ye = function (e) {
          e.series;
          var i = e.seriesContents;
          e.pending;
          return (0, A.BX)("div", {
            css: Te.wrapper,
            children: [
              (0, A.BX)("div", {
                css: Te.title,
                children: [
                  (0, A.tZ)("p", { css: Te.titleMain, children: "STORY" }),
                  (0, A.tZ)("p", {
                    css: Te.titleSub,
                    children: "\u30b9\u30c8\u30fc\u30ea\u30fc",
                  }),
                ],
              }),
              (0, A.tZ)("ul", {
                css: (0, c.iv)(
                  "@media ",
                  x.r.media.postTablet,
                  "{li:last-of-type.not-active{border-bottom:2px solid #000;}li:last-of-type.active{margin-bottom:2px;}}",
                  ""
                ),
                children: i.map(function (e, i) {
                  return (0,
                  A.tZ)(xe, { id: e.id, original: e.original, ep: e.ep, title: e.title, img: e.img, summary: e.summary, open: 0 === i, href: e.href }, i);
                }),
              }),
            ],
          });
        },
        Te = {
          wrapper: { name: "bjn8wh", styles: "position:relative" },
          title: (0, c.iv)(
            "display:flex;align-items:center;height:82px;margin-top:60px;margin-bottom:33px;@media (min-width: 768px){margin-top:60px;margin-bottom:33px;margin-left:25px;line-height:1;}@media ",
            x.r.media.prePhone,
            "{margin-top:43px;margin-bottom:24px;margin-left:0;}",
            ""
          ),
          titleMain: (0, c.iv)(
            "font-family:'Bebas Neue';font-size:76px;@media ",
            x.r.media.prePhone,
            "{font-size:56px;}",
            ""
          ),
          titleSub: (0, c.iv)(
            "margin-left:20px;font-family:'fot-udkakugoc80-pro';font-size:26px;&:not(:lang(ja)){display:none;}@media ",
            x.r.media.prePhone,
            "{font-size:24px;}",
            ""
          ),
        };
      var Se = { name: "ddus41", styles: "margin-top:240px" },
        je = { name: "yeucz1", styles: "margin-top:265px" },
        Me = { name: "q4dzvk", styles: "width:100%;height:auto" },
        ke = function (e) {
          var i = e.id,
            a = e.logoImg_pc,
            n = e.logoImg_sp,
            t = e.visualImg,
            r = e.summaryTxt,
            o = (0, f.bU)();
          return (0, A.BX)("div", {
            css: Be.wrappar,
            children: [
              (0, A.tZ)("div", {
                css: Be.logo,
                children: (0, A.BX)("picture", {
                  children: [
                    (0, A.tZ)("source", {
                      srcSet: n,
                      width: 375,
                      height: 250,
                      media: x.r.media.preTablet,
                    }),
                    (0, A.tZ)("img", {
                      css: Me,
                      src: a,
                      width: 1280,
                      height: 575,
                      alt: "",
                    }),
                  ],
                }),
              }),
              (0, A.BX)("div", {
                css: Be.summaryContent,
                children: [
                  (0, A.tZ)("div", {
                    css: Be.img,
                    children: (0, A.tZ)("img", {
                      src: t,
                      alt: "naruto_visual",
                    }),
                  }),
                  (0, A.BX)("div", {
                    css: [Be.summary, "boruto" === i ? je : Se, "", ""],
                    children: [
                      (0, A.tZ)("p", {
                        css: Be.summaryTittle,
                        children: Ce[o],
                      }),
                      (0, A.tZ)("p", { css: Be.summaryText, children: r }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Be = {
          wrappar: {
            name: "i5z59c",
            styles:
              "position:relative;padding-bottom:60px;border-bottom:3px solid #000",
          },
          logo: (0, c.iv)(
            "position:absolute;width:100%;text-align:center;@media ",
            x.r.media.postPC,
            "{width:327px;}@media ",
            x.r.media.prePC,
            "{width:300px;}@media ",
            x.r.media.preTablet,
            "{position:static;width:293px;margin:auto;}@media ",
            x.r.media.prePhone,
            "{width:min(293px, 51.3vw);}",
            ""
          ),
          summaryContent: {
            name: "1b82t1u",
            styles:
              "display:flex;flex-flow:row-reverse;align-items:flex-end;height:100%;@media (max-width: 767px){display:block;}",
          },
          summary: {
            name: "13go6s7",
            styles:
              "align-items:flex-end;height:100%;margin-top:240px;@media (min-width: 1280px){width:382px;}@media (max-width: 1279px) and (min-width: 1145px){width:38.5%;}@media (max-width: 1144px) and (min-width: 1024px){width:323px;}@media (max-width: 1023px) and (min-width: 768px){width:38.7%;margin-top:0;margin-bottom:auto;}@media (max-width: 768px){margin-top:0;}",
          },
          summaryTittle: {
            name: "jpg7t1",
            styles:
              "display:flex;flex-direction:column;align-items:center;justify-content:center;width:fit-content;padding:8px;margin-bottom:18px;font-family:var(--comic-impact-font);font-size:26px;line-height:1;color:white;text-align:center;background-color:black;@media (max-width: 1023px){margin-bottom:15px;}@media (max-width: 767px){margin-top:32px;}",
          },
          summaryText: {
            name: "12kvw5o",
            styles:
              "width:100%;font-family:var(--comic-font);font-size:16px;white-space:pre-wrap;&:not(:lang(ja)){font-size:22px;font-weight:400;line-height:1;}@media (min-width: 1280px){width:345px;margin-left:7px;}@media (max-width: 1279px) and (min-width: 1145px){width:90.8%;margin-right:7.2%;}@media (max-width: 1144px) and (min-width: 1024px){width:290px;margin-left:7px;}@media (max-width: 1023px) and (min-width: 768px){width:90.8%;margin-right:7.2%;margin-left:2%;}",
          },
          img: (0, c.iv)(
            "height:100%;margin-top:0;margin-right:0;margin-bottom:auto;@media (min-width: 1280px){width:608px;}@media (max-width: 1279px) and (min-width: 1145px){width:61.5%;}@media (max-width: 1144px) and (min-width: 1024px){width:532px;}@media (max-width: 1023px) and (min-width: 768px){width:61.3%;}@media ",
            x.r.media.prePhone,
            "{width:100%;}img{width:100%;height:auto;}",
            ""
          ),
        },
        Ce = {
          ja: "\u3042\u3089\u3059\u3058",
          en: "SUMMARY",
          fr: "R\xc9SUM\xc9",
          de: "INHALT",
          es: "SUMARIO",
          it: "TRAMA",
        },
        Oe = a(69873),
        Fe = [
          {
            src: "/anime/streaming/amazon-prime-video.webp",
            alt: "AmazonPrimeVideo",
            url: "https://www.amazon.co.jp/gp/video/detail/B09FJ6JVPM",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/abema.webp",
            alt: "ABEMA",
            url: "https://abema.tv/video/title/397-6",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/bandai.webp",
            alt: "\u30d0\u30f3\u30c0\u30a4\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://www.b-ch.com/titles/2876",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/dTV.webp",
            alt: "dTV",
            url: "https://video.dmkt-sp.jp/ti/10008914",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/d-anime.webp",
            alt: "d\u30a2\u30cb\u30e1\u30b9\u30c8\u30a2",
            url: "https://animestore.docomo.ne.jp/animestore/ci_pc?workId=20175",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/hulu.webp",
            alt: "Hulu",
            url: "https://www.hulu.jp/naruto",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/jp/title/70205012",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/unext.webp",
            alt: "U-NEXT",
            url: "https://video.unext.jp/title/SID0018960",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/anime-houdai.webp",
            alt: "\u30a2\u30cb\u30e1\u653e\u984c",
            url: "https://www.animehodai.jp/title/SID0018960",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/animetimes.webp",
            alt: "\u30a2\u30cb\u30e1\u30bf\u30a4\u30e0\u30ba",
            url: "https://animetimes.co.jp/",
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/bandai.webp",
            alt: "\u30d0\u30f3\u30c0\u30a4\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://www.b-ch.com/titles/2876",
            ppv: !0,
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/happydouga.webp",
            alt: "HAPPY\u52d5\u753b",
            url: "https://a.happydouga.jp/web/pc/index.php",
            ppv: !0,
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/jcom.webp",
            alt: "J:COM\u30aa\u30f3\u30c7\u30de\u30f3\u30c9",
            url: "https://linkvod.myjcom.jp/video/sr00002579?type=series",
            ppv: !0,
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/rakuten-tv.webp",
            alt: "Rakuten TV",
            url: "https://tv.rakuten.co.jp/content/2161/",
            ppv: !0,
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/telasa.webp",
            alt: "TELASA",
            url: "https://www.telasa.jp/series/358",
            ppv: !0,
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/hikari-tv.webp",
            alt: "\u3072\u304b\u308aTV",
            url: "https://www.hikaritv.net/video",
            ppv: !0,
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/niconico.webp",
            alt: "\u30cb\u30b3\u30cb\u30b3\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://ch.nicovideo.jp/naruto",
            ppv: !0,
            region: "jp",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/Ani-Gamer.webp",
            alt: "Ani-Gamer (\u5df4\u54c8\u59c6\u7279)",
            url: "https://ani.gamer.com.tw/animeVideo.php?sn=16844",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/friday.webp",
            alt: "FriDay",
            url: "https://video.friday.tw/anime/detail/631",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/hami-video.webp",
            alt: "MOD/HAMI",
            url: "https://hamivideo.hinet.net/product/98597.do?cs=2",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/iqiyi.webp",
            alt: "iQiyi",
            url: "https://www.iq.com/",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u30d6\u30eb\u30cd\u30a4\u3001\u30df\u30e3\u30f3\u30de\u30fc\u3001\u30ab\u30f3\u30dc\u30b8\u30a2\u3001\u30e9\u30aa\u30b9\u3001\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb\u3001\u30de\u30ec\u30fc\u30b7\u30a2\u3001\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u3001\u30d5\u30a3\u30ea\u30d4\u30f3\u3001\u30bf\u30a4\u3001\u30d9\u30c8\u30ca\u30e0",
              en: "Brunei, Myanmar, Cambodia, Laos, Singapore, Malaysia, Indonesia, the Philippines, Thailand, Vietnam",
              fr: "Brunei, Myanmar, Cambodge, Laos, Singapour, Malaisie, Indon\xe9sie, Philippines, Tha\xeflande, Vietnam",
              de: "Brunei, Myanmar, Kambodscha, Laos, Singapur, Malaysia, Indonesien, Philippinen, Thailand, Vietnam",
              es: "Brun\xe9i, Myanmar, Camboya, Laos, Singapur, Malasia, Indonesia, Filipinas, Tailandia, Vietnam",
              it: "Brunei, Myanmar, Cambogia, Laos, Singapore, Malesia, Indonesia, Filippine, Thailandia, Vietnam",
            },
          },
          {
            src: "/anime/streaming/kktv.webp",
            alt: "KKTV",
            url: "https://www.kktv.me/titles/06000502",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/my-video.webp",
            alt: "MyVideo",
            url: "https://www.myvideo.net.tw/details/4/15036",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/tw/title/70205012",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u30d6\u30eb\u30cd\u30a4\u3001\u30ab\u30f3\u30dc\u30b8\u30a2\u3001\u9999\u6e2f\u3001\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u3001\u30e9\u30aa\u30b9\u3001\u30de\u30ab\u30aa\u3001\u30df\u30e3\u30f3\u30de\u30fc\u3001\u30d5\u30a3\u30ea\u30d4\u30f3\u3001\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb\u3001\u53f0\u6e7e\u3001\u30bf\u30a4\u3001\u30d0\u30f3\u30b0\u30e9\u30c7\u30b7\u30e5\u3001\u30d6\u30fc\u30bf\u30f3\u3001\u30a4\u30f3\u30c9\u3001\u30de\u30ec\u30fc\u30b7\u30a2\u3001\u30e2\u30eb\u30c7\u30a3\u30d6\u3001\u30e2\u30f3\u30b4\u30eb\u3001\u30cd\u30d1\u30fc\u30eb\u3001\u30d1\u30ad\u30b9\u30bf\u30f3\u3001\u30b9\u30ea\u30e9\u30f3\u30ab\u3001\u6771\u30c6\u30a3\u30e2\u30fc\u30eb\u3001\u30d9\u30c8\u30ca\u30e0",
              en: "Brunei, Cambodia, Hong Kong, Indonesia, Laos, Macao, Myanmar, the Philippines, Singapore, Taiwan, Thailand, Bangladesh, Bhutan, India, Malaysia, the Maldives, Mongolia, Nepal, Pakistan, Sri Lanka, East Timor, Vietnam",
              fr: "Brunei, Cambodge, Hong Kong, Indon\xe9sie, Laos, Macao, Myanmar, Philippines, Singapour, Ta\xefwan, Tha\xeflande, Bangladesh, Bhoutan, Inde, Malaisie, Maldives, Mongolie, N\xe9pal, Pakistan, Sri Lanka, Timor oriental, Vietnam",
              de: "Brunei, Kambodscha, Hongkong, Indonesien, Laos, Macau, Myanmar, Philippinen, Singapur, Taiwan, Thailand, Bangladesch, Bhutan, Indien, Malaysia, Malediven, Mongolei, Nepal, Pakistan, Sri Lanka, Osttimor, Vietnam",
              es: "Brun\xe9i, Camboya, Hong Kong, Indonesia, Laos, Macao, Myanmar, Filipinas, Singapur, Taiw\xe1n, Tailandia, Bangladesh, But\xe1n, India, Malasia, Maldivas, Mongolia, Nepal, Pakist\xe1n, Sri Lanka, Timor Oriental, Vietnam",
              it: "Brunei, Cambogia, Hong Kong, Indonesia, Laos, Macao, Myanmar, Filippine, Singapore, Taiwan, Thailandia, Bangladesh, Bhutan, India, Malesia, Maldive, Mongolia, Nepal, Pakistan, Sri Lanka, Timor Est, Vietnam",
            },
          },
          {
            src: "/anime/streaming/vidio.webp",
            alt: "Vidio",
            url: "https://www.vidio.com/premier/4131/naruto",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2",
              en: "Indonesia",
              fr: "Indon\xe9sie",
              de: "Indonesien",
              es: "Indonesia",
              it: "Indonesia",
            },
          },
          {
            src: "/anime/streaming/youku.webp",
            alt: "Youku",
            url: "https://v.youku.com/v_show/id_XNTQwMTgxMTE2.html",
            region: "asia",
            series: "naruto1",
            subject: {
              ja: "\u4e2d\u56fd",
              en: "China",
              fr: "Chine",
              de: "China",
              es: "China",
              it: "Cina",
            },
          },
          {
            src: "/anime/streaming/adn.webp",
            alt: "ADN",
            url: "https://animationdigitalnetwork.fr/video/naruto",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30e8\u30fc\u30ed\u30c3\u30d1 \u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30d5\u30e9\u30f3\u30b9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30b9\u30a4\u30b9\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\uff09",
              en: "European French-speaking territories (France, Belgium, Switzerland, Luxembourg)",
              fr: "Pays francophones europ\xe9ens (France, Belgique, Suisse, Luxembourg)",
              de: "Europ\xe4ische franz\xf6sischsprachige Regionen (Frankreich, Belgien, Schweiz, Luxemburg)",
              es: "Territorios europeos de habla francesa (Francia, B\xe9lgica, Suiza, Luxemburgo)",
              it: "Paesi francofoni in Europa (Francia, Belgio, Svizzera, Lussemburgo)",
            },
          },
          {
            src: "/anime/streaming/amazon-prime-video.webp",
            alt: "AMAZON PRIME",
            url: "https://www.primevideo.com/detail/Naruto/0HONAA6TJDRJPZZ2310Z6XOG09",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30d9\u30eb\u30ae\u30fc\u3001\u30d5\u30e9\u30f3\u30b9\u3001\u30ab\u30ca\u30c0\u3001\u30d9\u30ca\u30f3\u3001\u30d6\u30eb\u30ad\u30ca\u30d5\u30a1\u30bd\u3001\u30d6\u30eb\u30f3\u30b8\u3001\u30b3\u30e2\u30ed\u3001\u30b3\u30f3\u30b4\u5171\u548c\u56fd\u3001\u30b3\u30fc\u30c8\u30b8\u30dc\u30ef\u30fc\u30eb\u3001\u30ac\u30dc\u30f3\u3001\u30b0\u30a2\u30c9\u30eb\u30fc\u30d7\u3001\u30ae\u30cb\u30a2\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30ae\u30a2\u30ca\u3001\u30cf\u30a4\u30c1\u3001\u30ec\u30e6\u30cb\u30aa\u30f3\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u3001\u30de\u30c0\u30ac\u30b9\u30ab\u30eb\u3001\u30de\u30ea\u3001\u30de\u30eb\u30c6\u30a3\u30cb\u30fc\u30af\u3001\u30de\u30e8\u30c3\u30c8\u3001\u30e2\u30ca\u30b3\u3001\u30cb\u30b8\u30a7\u30fc\u30eb\u3001\u30cb\u30e5\u30fc\u30ab\u30ec\u30c9\u30cb\u30a2\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30dd\u30ea\u30cd\u30b7\u30a2\u3001\u4e2d\u592e\u30a2\u30d5\u30ea\u30ab\u5171\u548c\u56fd\u3001\u30b3\u30f3\u30b4\u6c11\u4e3b\u5171\u548c\u56fd\u3001\u30b5\u30f3\u30fb\u30d0\u30eb\u30c6\u30eb\u30df\u30fc\u5cf6\u3001\u30b5\u30f3\u30fb\u30de\u30eb\u30bf\u30f3\u3001\u30b5\u30f3\u30fb\u30d4\u30a8\u30fc\u30eb\u5cf6\u30fb\u30df\u30af\u30ed\u30f3\u5cf6\u3001\u30bb\u30cd\u30ac\u30eb\u3001\u30bb\u30fc\u30b7\u30a7\u30eb\u3001\u30b9\u30a4\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u5357\u65b9\u30fb\u5357\u6975\u5730\u57df\u3001\u30c8\u30fc\u30b4\u3001\u30d0\u30cc\u30a2\u30c4\u3001\u30a6\u30a9\u30ea\u30b9\u30fb\u30d5\u30c4\u30ca\uff09",
              en: "French-speaking territories (Belgium, France, Canada, Benin, Burkina Faso, Burundi, Comoros, Republic of the Congo, C\xf4te d'Ivoire, Gabon, Guadeloupe, Guinea, French Guiana, Haiti,  R\xe9union, Luxembourg, Madagascar, Mali, Martinique, Mayotte, Monaco, Niger, New Caledonia, French Polynesia, Central African Republic, Democratic Republic of the Congo, Saint Barth\xe9lemy, Saint Martin, Saint Pierre and Miquelon, Senegal, Seychelles, Switzerland, French Southern and Antarctic Lands, Togo, Vanuatu, Wallis and Futuna)",
              fr: "Territoires francophones (Belgique, France, Canada, B\xe9nin, Burkina Faso, Burundi, Comores, R\xe9publique du Congo, C\xf4te d\u2019Ivoire, Gabon, Guadeloupe, Guin\xe9e, Guyane fran\xe7aise, Ha\xefti, La R\xe9union, Luxembourg, Madagascar, Mali, Martinique, Mayotte, Monaco, Niger, Nouvelle-Cal\xe9donie, Polyn\xe9sie fran\xe7aise, R\xe9publique centrafricaine, R\xe9publique d\xe9mocratique du Congo, Saint-Barth\xe9lemy, Saint-Martin, Saint-Pierre-et-Miquelon, S\xe9n\xe9gal, Seychelles, Suisse, Terres australes et antarctiques fran\xe7aises, Togo, Vanuatu, Wallis-et-Futuna)",
              de: "Franz\xf6sischsprachige Regionen (Belgien, Frankreich, Kanada, Benin, Burkina Faso, Burundi, Komoren, Republik Kongo, Elfenbeink\xfcste, Gabun, Guadeloupe, Guinea, Franz\xf6sisch-Guayana, Haiti, R\xe9union, Luxemburg, Madagaskar, Mali, Martinique, Mayotte, Monaco, Niger, Neukaledonien, Franz\xf6sisch-Polynesien, Zentralafrikanische Republik, Demokratische Republik Kongo, Saint-Barth\xe9lemy, St. Martin, Saint-Pierre und Miquelon, Senegal, Seychellen, Schweiz, Franz\xf6sische S\xfcd- und Antarktisgebiete, Togo, Vanuatu, Wallis und Futuna)",
              es: "Territorios de habla francesa (B\xe9lgica, Francia, Canad\xe1, Ben\xedn, Burkina Faso, Burundi, Comoras, Rep\xfablica del Congo, Costa de Marfil, Gab\xf3n, Guadalupe, Guinea, Guayana Francesa, Hait\xed, Reuni\xf3n, Luxemburgo, Madagascar, Mal\xed, Martinica, Mayotte, M\xf3naco, N\xedger, Nueva Caledonia, Polinesia Francesa, Rep\xfablica Centroafricana, Rep\xfablica Democr\xe1tica del Congo, San Bartolom\xe9, San Mart\xedn, San Pedro y Miquel\xf3n, Senegal, Seychelles, Suiza, Tierras Australes y Ant\xe1rticas Francesas, Togo, Vanuatu, Wallis y Futuna)",
              it: "Paesi francofoni (Belgio, Francia, Canada, Benin, Burkina Faso, Burundi, Comore, Congo, Costa d'Avorio, Gabon, Guadalupa, Guinea, Guyana Francese, Haiti, La Riunione, Lussemburgo, Madagascar, Mali, Martinica, Mayotte, Monaco, Niger, Nuova Caledonia, Polinesia francese, Repubblica Centrafricana, Repubblica Democratica del Congo, Saint-Barth\xe9lemy, San Martino, Saint-Pierre e Miquelon, Senegal, Seychelles, Svizzera, Terre Australi e Antartiche Francesi, Togo, Vanuatu, Wallis e Futuna)",
            },
          },
          {
            src: "/anime/streaming/auvio.webp",
            alt: "Auvio",
            url: "https://www.rtbf.be/auvio/emissions/detail_naruto?id=19842",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30d9\u30eb\u30ae\u30fc",
              en: "Belgium",
              fr: "Belgique",
              de: "Belgien",
              es: "B\xe9lgica",
              it: "Belgio",
            },
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/fr/naruto",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "Worldwide",
              en: "Worldwide",
              fr: "Monde",
              de: "Weltweit",
              es: "Todo el mundo",
              it: "Tutto il mondo",
            },
          },
          {
            src: "/anime/streaming/itunes.webp",
            alt: "iTunes",
            url: "https://tv.apple.com/ca/show/naruto/umc.cmc.3i5nwaw2x5ejk401dxbs92rbm?l=fr",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f",
              en: "France, DROM-COM",
              fr: "France, DROM-COM",
              de: "Frankreich, \xdcbersee-D\xe9partement",
              es: "Francia, territorios franceses de ultramar",
              it: "Francia, DROM-COM",
            },
          },
          {
            src: "/anime/streaming/mytf1.webp",
            alt: "MyTF1",
            url: "https://www.tf1.fr/tfx/naruto/videos",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f\u3001\u30e2\u30ca\u30b3\u3001\u30a2\u30f3\u30c9\u30e9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30b9\u30a4\u30b9\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af",
              en: "France, DROM-COM, Monaco, Andorra, Belgium, Switzerland, Luxembourg",
              fr: "France, DROM-COM, Monaco, Andorre, Belgique, Suisse, Luxembourg",
              de: "Frankreich, \xdcbersee-D\xe9partement, Monaco, Andorra, Belgien, Schweiz, Luxemburg",
              es: "Francia, territorios franceses de ultramar, M\xf3naco, Andorra, B\xe9lgica, Suiza, Luxemburgo",
              it: "Francia, DROM-COM, Monaco, Andorra, Belgio, Svizzera, Lussemburgo",
            },
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/fr/title/70205012",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u3001\u30b9\u30a4\u30b9",
              en: "France, Belgium, Luxembourg, Switzerland",
              fr: "France, Belgique, Luxembourg, Suisse",
              de: "Frankreich, Belgien, Luxemburg, Schweiz",
              es: "Francia, B\xe9lgica, Luxemburgo, Suiza",
              it: "Francia, Belgio, Lussemburgo e Svizzera",
            },
          },
          {
            src: "/anime/streaming/rtl.webp",
            alt: "RTL Mediengruppe",
            url: "https://www.tvnow.de/serien/naruto-12847",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30c9\u30a4\u30c4\u8a9e\u570f",
              en: "German-speaking countries",
              fr: "Pays germanophones",
              de: "Deutschsprachige L\xe4nder",
              es: "Pa\xedses de habla alemana",
              it: "Paesi di lingua tedesca",
            },
          },
          {
            src: "/anime/streaming/youtube.webp",
            alt: "YouTube",
            url: "https://www.youtube.com/channel/UCXX4KE4wk-5vXnzu2RfKwJg",
            region: "eu",
            series: "naruto1",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30a2\u30eb\u30b8\u30a7\u30ea\u30a2\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30d5\u30e9\u30f3\u30b9\u3001\u30b0\u30a2\u30c9\u30eb\u30fc\u30d7\u3001\u30ec\u30e6\u30cb\u30aa\u30f3\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u3001\u30e2\u30ed\u30c3\u30b3\u3001\u30de\u30eb\u30c6\u30a3\u30cb\u30fc\u30af\u3001\u30de\u30e8\u30c3\u30c8\u3001\u30b9\u30a4\u30b9\u3001\u30c1\u30e5\u30cb\u30b8\u30a2\uff09",
              en: "French-speaking territories (Algeria, Belgium, France, Guadeloupe, R\xe9union, Luxembourg, Morocco, Martinique, Mayotte, Switzerland, Tunisia)",
              fr: "Territoires francophones (Alg\xe9rie, Belgique, France, Guadeloupe, La R\xe9union, Luxembourg, Maroc, Martinique, Mayotte, Suisse, Tunisie)",
              de: "Franz\xf6sischsprachige Regionen (Algerien, Belgien, Frankreich, Guadeloupe, R\xe9union, Luxemburg, Marokko, Martinique, Mayotte, Schweiz, Tunesien)",
              es: "Territorios de habla francesa (Argelia, B\xe9lgica, Francia, Guadalupe, Reuni\xf3n, Luxemburgo, Marruecos, Martinica, Mayotte, Suiza, T\xfanez)",
              it: "Paesi francofoni (regioni algerine francofone, Belgio, Francia, Guadalupa, La Riunione, Lussemburgo, regioni marocchine francofone, Martinica, Mayotte, Svizzera, Tunisia)",
            },
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/search?from=videos&q=NARUTO",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/hulu.webp",
            alt: "Hulu",
            url: "https://www.hulu.com",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/hoopla.webp",
            alt: "Hoopla",
            url: "https://www.hoopladigital.com/",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/peacock.webp",
            alt: "Peacock",
            url: "https://www.peacocktv.com/",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/pluto-TV.webp",
            alt: "Pluto TV",
            url: "https://pluto.tv/",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/roku.webp",
            alt: "Roku Channel",
            url: "https://therokuchannel.roku.com/",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/tubi.webp",
            alt: "Tubi",
            url: "https://tubitv.com/",
            region: "na",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/search?from=videos&q=NARUTO",
            region: "sa",
            series: "naruto1",
            subject: {
              ja: "Worldwide\uff08\u65e5\u672c\u4ee5\u5916\uff09",
              en: "Worldwide (Not including Japan)",
              fr: "Monde (Japon exclus)",
              de: "Weltweit (au\xdfer Japan)",
              es: "Todo el mundo (excepto Jap\xf3n)",
              it: "Tutto il mondo (Giappone escluso)",
            },
          },
          {
            src: "/anime/streaming/claro-video.webp",
            alt: "Claro TV - VIDEO",
            url: "https://www.clarovideo.com/mexico/",
            region: "sa",
            series: "naruto1",
            subject: {
              ja: "\u30e1\u30ad\u30b7\u30b3",
              en: "Mexico",
              fr: "Mexique",
              de: "Mexiko",
              es: "M\xe9xico",
              it: "Messico",
            },
          },
          {
            src: "/anime/streaming/hbo-max.webp",
            alt: "HBO Max",
            url: "https://www.hbomax.com/",
            region: "sa",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/",
            region: "sa",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/pluto-TV.webp",
            alt: "Pluto TV",
            url: "https://pluto.tv/",
            region: "sa",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/tubi.webp",
            alt: "Tubi",
            url: "https://tubitv.com/",
            region: "sa",
            series: "naruto1",
          },
          {
            src: "/anime/streaming/amazon-prime-video.webp",
            alt: "AmazonPrimeVideo",
            url: "https://www.amazon.co.jp/gp/video/detail/B01L2L27XI",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/abema.webp",
            alt: "ABEMA",
            url: "https://abema.tv/video/title/397-7",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/bandai.webp",
            alt: "\u30d0\u30f3\u30c0\u30a4\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://www.b-ch.com/titles/3316",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/dTV.webp",
            alt: "dTV",
            url: "https://video.dmkt-sp.jp/ti/10011440",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/d-anime.webp",
            alt: "d\u30a2\u30cb\u30e1\u30b9\u30c8\u30a2",
            url: "https://animestore.docomo.ne.jp/animestore/ci_pc?workId=21020",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/hulu.webp",
            alt: "Hulu",
            url: "https://www.hulu.jp/naruto-shippuden",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/jp/title/80000603",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/unext.webp",
            alt: "U-NEXT",
            url: "https://video.unext.jp/title/SID0025866",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/anime-houdai.webp",
            alt: "\u30a2\u30cb\u30e1\u653e\u984c",
            url: "https://www.animehodai.jp/title/SID0025866",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/animetimes.webp",
            alt: "\u30a2\u30cb\u30e1\u30bf\u30a4\u30e0\u30ba",
            url: "https://animetimes.co.jp/",
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/bandai.webp",
            alt: "\u30d0\u30f3\u30c0\u30a4\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://www.b-ch.com/titles/3316",
            ppv: !0,
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/happydouga.webp",
            alt: "HAPPY\u52d5\u753b",
            url: "https://a.happydouga.jp/web/pc/index.php",
            ppv: !0,
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/jcom.webp",
            alt: "J:COM\u30aa\u30f3\u30c7\u30de\u30f3\u30c9",
            url: "https://linkvod.myjcom.jp/video/sr00002579?type=series",
            ppv: !0,
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/rakuten-tv.webp",
            alt: "Rakuten TV",
            url: "https://tv.rakuten.co.jp/content/43804/",
            ppv: !0,
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/telasa.webp",
            alt: "TELASA",
            url: "https://www.telasa.jp/series/721",
            ppv: !0,
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/hikari-tv.webp",
            alt: "\u3072\u304b\u308aTV",
            url: "https://www.hikaritv.net/video",
            ppv: !0,
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/niconico.webp",
            alt: "\u30cb\u30b3\u30cb\u30b3\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://ch.nicovideo.jp/naruto_shippu",
            ppv: !0,
            region: "jp",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/bilibili.webp",
            alt: "Bili Bili",
            url: "https://www.bilibili.com/bangumi/play/ss3287",
            region: "asia",
            series: "naruto2",
            subject: {
              ja: "\u4e2d\u56fd\u3001\u30d5\u30a3\u30ea\u30d4\u30f3\u3001\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb\u3001\u30bf\u30a4\u3001\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u3001\u30d9\u30c8\u30ca\u30e0",
              en: "China, The Philippines, Singapore, Thailand, Indonesia, Vietnam",
              fr: "Chine, Philippines, Singapour, Tha\xeflande, Indon\xe9sie, Vietnam",
              de: "China, Philippinen, Singapur, Thailand, Indonesien, Vietnam",
              es: "China, Filipinas, Singapur, Tailandia, Indonesia, Vietnam",
              it: "Cina, Filippine, Singapore, Thailandia, Indonesia, Vietnam",
            },
          },
          {
            src: "/anime/streaming/friday.webp",
            alt: "FriDay",
            url: "https://video.friday.tw/anime/detail/2374",
            region: "asia",
            series: "naruto2",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/hami-video.webp",
            alt: "MOD/HAMI",
            url: "https://hamivideo.hinet.net/product/98597.do?cs=2",
            region: "asia",
            series: "naruto2",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/tencent.webp",
            alt: "Tencent",
            url: "https://v.qq.com/x/cover/mzc00200nc1cbum.html",
            region: "asia",
            series: "naruto2",
            subject: {
              ja: "\u4e2d\u56fd",
              en: "China",
              fr: "Chine",
              de: "China",
              es: "China",
              it: "Cina",
            },
          },
          {
            src: "/anime/streaming/true-id.webp",
            alt: "TRUE ID",
            url: "https://movie.trueid.net/th-en/series/WGDqpJwBxbBE",
            region: "asia",
            series: "naruto2",
            subject: {
              ja: "\u30bf\u30a4",
              en: "Thailand",
              fr: "Tha\xeflande",
              de: "Thailand",
              es: "Tailandia",
              it: "Thailandia",
            },
          },
          {
            src: "/anime/streaming/we-tv.webp",
            alt: "WeTV",
            url: "https://wetv.vip/en/play/d0039er6awu-EP1-NARUTO-Shippuden-(Thai-Ver.)",
            region: "asia",
            series: "naruto2",
            subject: {
              ja: "\u30bf\u30a4",
              en: "Thailand",
              fr: "Tha\xeflande",
              de: "Thailand",
              es: "Tailandia",
              it: "Thailandia",
            },
          },
          {
            src: "/anime/streaming/youku.webp",
            alt: "Youku",
            url: "https://v.youku.com/v_show/id_XNTI4Njc5MTY0.html",
            region: "asia",
            series: "naruto2",
            subject: {
              ja: "\u4e2d\u56fd",
              en: "China",
              fr: "Chine",
              de: "China",
              es: "China",
              it: "Cina",
            },
          },
          {
            src: "/anime/streaming/adn.webp",
            alt: "ADN",
            url: "https://animationdigitalnetwork.fr/video/naruto-shippuden",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30e8\u30fc\u30ed\u30c3\u30d1 \u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30d5\u30e9\u30f3\u30b9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30b9\u30a4\u30b9\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\uff09",
              en: "European French-speaking territories (France, Belgium, Switzerland, Luxembourg) ",
              fr: "Pays francophones europ\xe9ens (France, Belgique, Suisse, Luxembourg)",
              de: "Europ\xe4ische franz\xf6sischsprachige Regionen (Frankreich, Belgien, Schweiz, Luxemburg)",
              es: "Territorios europeos de habla francesa (Francia, B\xe9lgica, Suiza, Luxemburgo)",
              it: "Paesi francofoni in Europa (Francia, Belgio, Svizzera, Lussemburgo)",
            },
          },
          {
            src: "/anime/streaming/amazon-prime-video.webp",
            alt: "AMAZON PRIME",
            url: "https://www.primevideo.com/detail/Naruto-Shippuden/0OBDFCJQ5G7NE9FQU4S208OCS0?_encoding=UTF8&language=fr_FR",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30d9\u30eb\u30ae\u30fc\u3001\u30d5\u30e9\u30f3\u30b9\u3001\u30ab\u30ca\u30c0\u3001\u30d9\u30ca\u30f3\u3001\u30d6\u30eb\u30ad\u30ca\u30d5\u30a1\u30bd\u3001\u30d6\u30eb\u30f3\u30b8\u3001\u30b3\u30e2\u30ed\u3001\u30b3\u30f3\u30b4\u5171\u548c\u56fd\u3001\u30b3\u30fc\u30c8\u30b8\u30dc\u30ef\u30fc\u30eb\u3001\u30ac\u30dc\u30f3\u3001\u30b0\u30a2\u30c9\u30eb\u30fc\u30d7\u3001\u30ae\u30cb\u30a2\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30ae\u30a2\u30ca\u3001\u30cf\u30a4\u30c1\u3001\u30ec\u30e6\u30cb\u30aa\u30f3\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u3001\u30de\u30c0\u30ac\u30b9\u30ab\u30eb\u3001\u30de\u30ea\u3001\u30de\u30eb\u30c6\u30a3\u30cb\u30fc\u30af\u3001\u30de\u30e8\u30c3\u30c8\u3001\u30e2\u30ca\u30b3\u3001\u30cb\u30b8\u30a7\u30fc\u30eb\u3001\u30cb\u30e5\u30fc\u30ab\u30ec\u30c9\u30cb\u30a2\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30dd\u30ea\u30cd\u30b7\u30a2\u3001\u4e2d\u592e\u30a2\u30d5\u30ea\u30ab\u5171\u548c\u56fd\u3001\u30b3\u30f3\u30b4\u6c11\u4e3b\u5171\u548c\u56fd\u3001\u30b5\u30f3\u30fb\u30d0\u30eb\u30c6\u30eb\u30df\u30fc\u5cf6\u3001\u30b5\u30f3\u30fb\u30de\u30eb\u30bf\u30f3\u3001\u30b5\u30f3\u30fb\u30d4\u30a8\u30fc\u30eb\u5cf6\u30fb\u30df\u30af\u30ed\u30f3\u5cf6\u3001\u30bb\u30cd\u30ac\u30eb\u3001\u30bb\u30fc\u30b7\u30a7\u30eb\u3001\u30b9\u30a4\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u5357\u65b9\u30fb\u5357\u6975\u5730\u57df\u3001\u30c8\u30fc\u30b4\u3001\u30d0\u30cc\u30a2\u30c4\u3001\u30a6\u30a9\u30ea\u30b9\u30fb\u30d5\u30c4\u30ca\uff09",
              en: "French-speaking territories (Belgium, France, Canada, Benin, Burkina Faso, Burundi, Comoros, Republic of the Congo, C\xf4te d'Ivoire, Gabon, Guadeloupe, Guinea, French Guiana, Haiti,  R\xe9union, Luxembourg, Madagascar, Mali, Martinique, Mayotte, Monaco, Niger, New Caledonia, French Polynesia, Central African Republic, Democratic Republic of the Congo, Saint Barth\xe9lemy, Saint Martin, Saint Pierre and Miquelon, Senegal, Seychelles, Switzerland, French Southern and Antarctic Lands, Togo, Vanuatu, Wallis and Futuna",
              fr: "Territoires francophones (Belgique, France, Canada, B\xe9nin, Burkina Faso, Burundi, Comores, R\xe9publique du Congo, C\xf4te d\u2019Ivoire, Gabon, Guadeloupe, Guin\xe9e, Guyane fran\xe7aise, Ha\xefti, La R\xe9union, Luxembourg, Madagascar, Mali, Martinique, Mayotte, Monaco, Niger, Nouvelle-Cal\xe9donie, Polyn\xe9sie fran\xe7aise, R\xe9publique centrafricaine, R\xe9publique d\xe9mocratique du Congo, Saint-Barth\xe9lemy, Saint-Martin, Saint-Pierre-et-Miquelon, S\xe9n\xe9gal, Seychelles, Suisse, Terres australes et antarctiques fran\xe7aises, Togo, Vanuatu, Wallis-et-Futuna)",
              de: "Franz\xf6sischsprachige Regionen (Belgien, Frankreich, Kanada, Benin, Burkina Faso, Burundi, Komoren, Republik Kongo, Elfenbeink\xfcste, Gabun, Guadeloupe, Guinea, Franz\xf6sisch-Guayana, Haiti, R\xe9union, Luxemburg, Madagaskar, Mali, Martinique, Mayotte, Monaco, Niger, Neukaledonien, Franz\xf6sisch-Polynesien, Zentralafrikanische Republik, Demokratische Republik Kongo, Saint-Barth\xe9lemy, St. Martin, Saint-Pierre und Miquelon, Senegal, Seychellen, Schweiz, Franz\xf6sische S\xfcd- und Antarktisgebiete, Togo, Vanuatu, Wallis und Futuna)",
              es: "Territorios de habla francesa (B\xe9lgica, Francia, Canad\xe1, Ben\xedn, Burkina Faso, Burundi, Comoras, Rep\xfablica del Congo, Costa de Marfil, Gab\xf3n, Guadalupe, Guinea, Guayana Francesa, Hait\xed, Reuni\xf3n, Luxemburgo, Madagascar, Mal\xed, Martinica, Mayotte, M\xf3naco, N\xedger, Nueva Caledonia, Polinesia Francesa, Rep\xfablica Centroafricana, Rep\xfablica Democr\xe1tica del Congo, San Bartolom\xe9, San Mart\xedn, San Pedro y Miquel\xf3n, Senegal, Seychelles, Suiza, Tierras Australes y Ant\xe1rticas Francesas, Togo, Vanuatu, Wallis y Futuna)",
              it: "Paesi francofoni (Belgio, Francia, Canada, Benin, Burkina Faso, Burundi, Comore, Congo, Costa d'Avorio, Gabon, Guadalupa, Guinea, Guyana Francese, Haiti, La Riunione, Lussemburgo, Madagascar, Mali, Martinica, Mayotte, Monaco, Niger, Nuova Caledonia, Polinesia francese, Repubblica Centrafricana, Repubblica Democratica del Congo, Saint-Barth\xe9lemy, San Martino, Saint-Pierre e Miquelon, Senegal, Seychelles, Svizzera, Terre Australi e Antartiche Francesi, Togo, Vanuatu, Wallis e Futuna)",
            },
          },
          {
            src: "/anime/streaming/auvio.webp",
            alt: "Auvio",
            url: "https://www.rtbf.be/auvio/emissions/detail_naruto?id=19842",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30d9\u30eb\u30ae\u30fc",
              en: "Belgium",
              fr: "Belgique",
              de: "Belgien",
              es: "B\xe9lgica",
              it: "Belgio",
            },
          },
          {
            src: "/anime/streaming/crave.webp",
            alt: "Crave",
            url: "https://www.crave.ca/fr/tv-shows/naruto-shippuden",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30ab\u30ca\u30c0",
              en: "Canada",
              fr: "Canada",
              de: "Kanada",
              es: "Canad\xe1",
              it: "Canada",
            },
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/fr/naruto-shippuden",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "Worldwide",
              en: "Worldwide",
              fr: "Monde",
              de: "Weltweit",
              es: "Todo el mundo",
              it: "Tutto il mondo",
            },
          },
          {
            src: "/anime/streaming/itunes.webp",
            alt: "iTunes",
            url: "https://tv.apple.com/ca/show/naruto/umc.cmc.3i5nwaw2x5ejk401dxbs92rbm?l=fr",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f",
              en: "France, DROM-COM",
              fr: "France, DROM-COM",
              de: "Frankreich, \xdcbersee-D\xe9partement",
              es: "Francia, territorios franceses de ultramar",
              it: "Francia, DROM-COM",
            },
          },
          {
            src: "/anime/streaming/mytf1.webp",
            alt: "MyTF1",
            url: "https://www.tf1.fr/tf1/naruto-shippuden",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f\u3001\u30e2\u30ca\u30b3\u3001\u30a2\u30f3\u30c9\u30e9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30b9\u30a4\u30b9\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af",
              en: "France, DROM-COM, Monaco, Andorra, Belgium, Switzerland, Luxembourg",
              fr: "France, DROM-COM, Monaco, Andorre, Belgique, Suisse, Luxembourg",
              de: "Frankreich, \xdcbersee-D\xe9partement, Monaco, Andorra, Belgien, Schweiz, Luxemburg",
              es: "Francia, territorios franceses de ultramar, M\xf3naco, Andorra, B\xe9lgica, Suiza, Luxemburgo",
              it: "Francia, DROM-COM, Monaco, Andorra, Belgio, Svizzera, Lussemburgo",
            },
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/fr/title/80000603",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u3001\u30b9\u30a4\u30b9",
              en: "France, Belgium, Luxembourg, Switzerland",
              fr: "France, Belgique, Luxembourg, Suisse",
              de: "Frankreich, Belgien, Luxemburg, Schweiz",
              es: "Francia, B\xe9lgica, Luxemburgo, Suiza",
              it: "Francia, Belgio, Lussemburgo e Svizzera",
            },
          },
          {
            src: "/anime/streaming/orange.webp",
            alt: "Orange",
            url: "https://video-a-la-demande.orange.fr/serie/NARUTOSHI01W0052289/naruto-shippuden-s1",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f",
              en: "France, DROM-COM",
              fr: "France, DROM-COM",
              de: "Frankreich, \xdcbersee-D\xe9partement",
              es: "Francia, territorios franceses de ultramar",
              it: "Francia, DROM-COM",
            },
          },
          {
            src: "/anime/streaming/pluto-TV.webp",
            alt: "Pluto TV",
            url: "https://pluto.tv/fr/search/details/series/naruto-shippuden-fr/season/1",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30d5\u30e9\u30f3\u30b9\u3001\u30d9\u30eb\u30ae\u30fc \u3001\u30b9\u30a4\u30b9\u3001\u30e2\u30ca\u30b3\u3001\u30a2\u30f3\u30c9\u30e9\u3001\u30b0\u30a2\u30c9\u30eb\u30fc\u30d7\u3001\u30b5\u30f3\u30fb\u30d0\u30eb\u30c6\u30eb\u30df\u30fc\u5cf6\u3001\u30b5\u30f3\u30fb\u30de\u30eb\u30bf\u30f3\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30ae\u30a2\u30ca\u3001\u30de\u30eb\u30c6\u30a3\u30cb\u30fc\u30af\u3001\u30ec\u30e6\u30cb\u30aa\u30f3\u3001\u30cb\u30e5\u30fc\u30ab\u30ec\u30c9\u30cb\u30a2\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30dd\u30ea\u30cd\u30b7\u30a2\u3001\u30a6\u30a9\u30ea\u30b9\u30fb\u30d5\u30c4\u30ca\u3001\u30de\u30e8\u30c3\u30c8\u3001\u30b5\u30f3\u30fb\u30d4\u30a8\u30fc\u30eb\u5cf6\u30fb\u30df\u30af\u30ed\u30f3\u5cf6\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u5357\u65b9\u30fb\u5357\u6975\u5730\u57df\uff09",
              en: "French-speaking territories (France, Belgium, Switzerland, Monaco, Andorra, Guadeloupe, Saint Barth\xe9lemy, Saint Martin, French Guiana, Martinique, R\xe9union, New Caledonia, French Polynesia, Wallis and Futuna, Mayotte, Saint Pierre and Miquelon, French Southern and Antarctic Lands)",
              fr: "Territoires francophones (France, Belgique, Suisse, Monaco, Andorre, Guadeloupe, Saint-Barth\xe9lemy, Saint-Martin, Guyane fran\xe7aise, Martinique, La R\xe9union, Nouvelle-Cal\xe9donie, Polyn\xe9sie fran\xe7aise, Wallis-et-Futuna, Mayotte, Saint-Pierre-et-Miquelon, Terres australes et antarctiques fran\xe7aises)",
              de: "Franz\xf6sischsprachige Regionen (Frankreich, Belgien, Schweiz, Monaco, Andorra, Guadeloupe, Saint-Barth\xe9lemy, St. Martin, Franz\xf6sisch-Guayana, Martinique, R\xe9union, Neukaledonien, Franz\xf6sisch-Polynesien, Wallis und Futuna, Mayotte, Saint-Pierre und Miquelon, Franz\xf6sische S\xfcd- und Antarktisgebiete)",
              es: "Territorios de habla francesa (Francia, B\xe9lgica, Suiza, M\xf3naco, Andorra, Guadalupe, San Bartolom\xe9, San Mart\xedn, Guayana Francesa, Martinica, Reuni\xf3n, Nueva Caledonia, Polinesia Francesa, Wallis y Futuna, Mayotte, San Pedro y Miquel\xf3n, Tierras Australes y Ant\xe1rticas Francesas)",
              it: "Paesi francofoni (Francia, Belgio, Svizzera, Monaco, Andorra, Guadalupe, Saint-Barth\xe9lemy, San Martino, Guyana Francese, Martinica, La Riunione, Nuova Caledonia, Polinesia francese, Wallis e Futuna, Mayotte, Saint-Pierre e Miquelon, Terre Australi e Antartiche Francesi)",
            },
          },
          {
            src: "/anime/streaming/rtl.webp",
            alt: "RTL Mediengruppe",
            url: "https://www.tvnow.de/serien/naruto-shippuden-12957",
            region: "eu",
            series: "naruto2",
            subject: {
              ja: "\u30c9\u30a4\u30c4\u8a9e\u570f",
              en: "German-speaking countries",
              fr: "Pays germanophones",
              de: "Deutschsprachige L\xe4nder",
              es: "Pa\xedses de habla alemana",
              it: "Paesi di lingua tedesca",
            },
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/naruto-shippuden",
            region: "na",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/hulu.webp",
            alt: "Hulu",
            url: "https://www.hulu.com",
            region: "na",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/",
            region: "na",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/pluto-TV.webp",
            alt: "Pluto TV",
            url: "https://pluto.tv/",
            region: "na",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/tubi.webp",
            alt: "Tubi",
            url: "https://tubitv.com/",
            region: "na",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/naruto-shippuden",
            region: "sa",
            series: "naruto2",
            subject: {
              ja: "Worldwide\uff08\u65e5\u672c\u4ee5\u5916\uff09",
              en: "Worldwide (Not including Japan)",
              fr: "Monde (Japon exclus)",
              de: "Weltweit (au\xdfer Japan)",
              es: "Todo el mundo (excepto Jap\xf3n)",
              it: "Tutto il mondo (Giappone escluso)",
            },
          },
          {
            src: "/anime/streaming/claro.webp",
            alt: "Claro TV - VIDEO",
            url: "https://www.clarochile.cl/personas/",
            region: "sa",
            series: "naruto2",
            subject: {
              ja: "\u30e1\u30ad\u30b7\u30b3\u3092\u9664\u304f\u4e2d\u5357\u7c73",
              en: "Latin America (Not including Mexico)",
              fr: "Am\xe9rique latine (Mexique exclus)",
              de: "Lateinamerika (au\xdfer Mexiko)",
              es: "Latinoam\xe9rica (excepto M\xe9xico)",
              it: "America latina (Messico escluso)",
            },
          },
          {
            src: "/anime/streaming/funimation.webp",
            alt: "Funimation",
            url: "https://www.funimation.com/",
            region: "sa",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/pluto-TV.webp",
            alt: "Pluto TV",
            url: "https://pluto.tv/",
            region: "sa",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/tubi.webp",
            alt: "Tubi",
            url: "https://tubitv.com/",
            region: "sa",
            series: "naruto2",
          },
          {
            src: "/anime/streaming/amazon-prime-video.webp",
            alt: "AmazonPrimeVideo",
            url: "https://www.amazon.co.jp/gp/video/detail/B09FJ6X755",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/au-smart.webp",
            alt: "au\u30b9\u30de\u30fc\u30c8\u30d1\u30b9\u30d7\u30ec\u30df\u30a2\u30e0",
            url: "https://www.au.com/entertainment/smartpass/",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/bandai.webp",
            alt: "\u30d0\u30f3\u30c0\u30a4\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://www.b-ch.com/titles/5583",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/dTV.webp",
            alt: "dTV",
            url: "https://video.dmkt-sp.jp/ti/10017906/",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/d-anime.webp",
            alt: "d\u30a2\u30cb\u30e1\u30b9\u30c8\u30a2",
            url: "https://animestore.docomo.ne.jp/animestore/ci_pc?workId=25576",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/hulu.webp",
            alt: "Hulu",
            url: "https://www.hulu.jp/boruto-naruto-next-generations",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/jcom.webp",
            alt: "J:COM\u30aa\u30f3\u30c7\u30de\u30f3\u30c9",
            url: "https://linkvod.myjcom.jp/season/2355?filter=ui-filter-season-2355",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/jp/title/81080523",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/paravi.webp",
            alt: "Paravi",
            url: "https://www.paravi.jp/title/21312",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/telasa.webp",
            alt: "TELASA",
            url: "https://www.telasa.jp/series/7628",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/unext.webp",
            alt: "U-NEXT",
            url: "https://video.unext.jp/title/SID0029042",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/anime-houdai.webp",
            alt: "\u30a2\u30cb\u30e1\u653e\u984c",
            url: "https://www.animehodai.jp/title/SID0029042",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/animetimes.webp",
            alt: "\u30a2\u30cb\u30e1\u30bf\u30a4\u30e0\u30ba",
            url: "https://animetimes.co.jp/",
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/bandai.webp",
            alt: "\u30d0\u30f3\u30c0\u30a4\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://www.b-ch.com/titles/5583",
            ppv: !0,
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/googleplay.webp",
            alt: "Google Play",
            url: "https://play.google.com/store/tv/show/BORUTO_bolt_NARUTO_NEXT_GENERATIONS?id=V2t0A32AS3Y8cMcadPuv6g",
            ppv: !0,
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/jcom.webp",
            alt: "J:COM\u30aa\u30f3\u30c7\u30de\u30f3\u30c9",
            url: "https://linkvod.myjcom.jp/season/2355?filter=ui-filter-season-2355",
            ppv: !0,
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/rakuten-tv.webp",
            alt: "Rakuten TV",
            url: "https://tv.rakuten.co.jp/content/217719/",
            ppv: !0,
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/telasa.webp",
            alt: "TELASA",
            url: "https://www.telasa.jp/series/7628",
            ppv: !0,
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/hikari-tv.webp",
            alt: "\u3072\u304b\u308aTV",
            url: "https://www.hikaritv.net/video",
            ppv: !0,
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/niconico.webp",
            alt: "\u30cb\u30b3\u30cb\u30b3\u30c1\u30e3\u30f3\u30cd\u30eb",
            url: "https://ch.nicovideo.jp/boruto",
            ppv: !0,
            region: "jp",
            series: "boruto",
          },
          {
            src: "/anime/streaming/Ani-Gamer.webp",
            alt: "Ani-Gamer (\u5df4\u54c8\u59c6\u7279)",
            url: "https://ani.gamer.com.tw/animeVideo.php?sn=14882",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/bilibili.webp",
            alt: "Bili Bili",
            url: "https://www.bilibili.com/bangumi/play/ss5978",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u4e2d\u56fd\u3001\u30d5\u30a3\u30ea\u30d4\u30f3\u3001\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb\u3001\u30bf\u30a4\u3001\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u3001\u30d9\u30c8\u30ca\u30e0",
              en: "China, The Philippines, Singapore, Thailand, Indonesia, Vietnam",
              fr: "Chine, Philippines, Singapour, Tha\xeflande, Indon\xe9sie, Vietnam",
              de: "China, Philippinen, Singapur, Thailand, Indonesien, Vietnam",
              es: "China, Filipinas, Singapur, Tailandia, Indonesia, Vietnam",
              it: "Cina, Filippine, Singapore, Thailandia, Indonesia, Vietnam",
            },
          },
          {
            src: "/anime/streaming/friday.webp",
            alt: "FriDay",
            url: "https://video.friday.tw/anime/detail/680",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/hami-video.webp",
            alt: "MOD/HAMI",
            url: "https://hamivideo.hinet.net/product/86508.do?cs=2",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/iqiyi.webp",
            alt: "iQiyi",
            url: "https://www.iqiyi.com/v_19rrb3xn68.html",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u4e2d\u56fd\u3001\u30d6\u30eb\u30cd\u30a4\u3001\u30df\u30e3\u30f3\u30de\u30fc\u3001\u30ab\u30f3\u30dc\u30b8\u30a2\u3001\u30e9\u30aa\u30b9\u3001\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb\u3001\u30d5\u30a3\u30ea\u30d4\u30f3\u3001\u30d9\u30c8\u30ca\u30e0",
              en: "China, Brunei, Myanmar, Cambodia, Laos, Singapore, the Philippines, Vietnam",
              fr: "Chine, Brunei, Myanmar, Cambodge, Laos, Singapour, Philippines, Vietnam",
              de: "China, Brunei, Myanmar, Kambodscha, Laos, Singapur, Philippinen, Vietnam",
              es: "China, Brun\xe9i, Myanmar, Camboya, Laos, Singapur, Filipinas, Vietnam",
              it: "Cina, Brunei, Myanmar, Cambogia, Laos, Singapore, Filippine, Vietnam",
            },
          },
          {
            src: "/anime/streaming/kktv.webp",
            alt: "KKTV",
            url: "https://www.kktv.me/titles/06000503",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/my-video.webp",
            alt: "MyVideo",
            url: "https://www.myvideo.net.tw/details/3/6531",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u53f0\u6e7e",
              en: "Taiwan",
              fr: "Ta\xefwan",
              de: "Taiwan",
              es: "Taiw\xe1n",
              it: "Taiwan",
            },
          },
          {
            src: "/anime/streaming/tencent.webp",
            alt: "Tencent",
            url: "https://v.qq.com/x/cover/mzc00200rmpaf40.html",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u4e2d\u56fd",
              en: "China",
              fr: "Chine",
              de: "China",
              es: "China",
              it: "Cina",
            },
          },
          {
            src: "/anime/streaming/viu.webp",
            alt: "Viu",
            url: "https://www.viu.com/ott/",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u30d5\u30a3\u30ea\u30d4\u30f3\u3001\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2",
              en: "The Philippines, Indonesia",
              fr: "Philippines, Indon\xe9sie",
              de: "Philippinen, Indonesien",
              es: "Filipinas, Indonesia",
              it: "Filippine, Indonesia",
            },
          },
          {
            src: "/anime/streaming/vidio.webp",
            alt: "Vidio",
            url: "https://www.vidio.com/",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2",
              en: "Indonesia",
              fr: "Indon\xe9sie",
              de: "Indonesien",
              es: "Indonesia",
              it: "Indonesia",
            },
          },
          {
            src: "/anime/streaming/we-tv.webp",
            alt: "weTV",
            url: "https://wetv.vip/id/play/bxhkltz7d0xaqhl-BORUTO-NARUTO-NEXT-GENERATIONS",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u30d5\u30a3\u30ea\u30d4\u30f3\u3001\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb\u3001\u30bf\u30a4\u3001\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u3001\u30d9\u30c8\u30ca\u30e0",
              en: "The Philippines, Singapore, Thailand, Indonesia, Vietnam",
              fr: "Philippines, Singapour, Tha\xeflande, Indon\xe9sie, Vietnam",
              de: "Philippinen, Singapur, Thailand, Indonesien, Vietnam",
              es: "Filipinas, Singapur, Tailandia, Indonesia, Vietnam",
              it: "Filippine, Singapore, Thailandia, Indonesia, Vietnam",
            },
          },
          {
            src: "/anime/streaming/youku.webp",
            alt: "Youku",
            url: "https://v.youku.com/v_show/id_XMjY4NjM5Mzc0MA==.html",
            region: "asia",
            series: "boruto",
            subject: {
              ja: "\u4e2d\u56fd",
              en: "China",
              fr: "Chine",
              de: "China",
              es: "China",
              it: "Cina",
            },
          },
          {
            src: "/anime/streaming/adn.webp",
            alt: "ADN",
            url: "https://animationdigitalnetwork.fr/video/boruto-naruto-next-generations",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30e8\u30fc\u30ed\u30c3\u30d1 \u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30d5\u30e9\u30f3\u30b9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30b9\u30a4\u30b9\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\uff09",
              en: "European French-speaking territories (France, Belgium, Switzerland, Luxembourg)",
              fr: "Pays francophones europ\xe9ens (France, Belgique, Suisse, Luxembourg)",
              de: "Europ\xe4ische franz\xf6sischsprachige Regionen (Frankreich, Belgien, Schweiz, Luxemburg)",
              es: "Territorios europeos de habla francesa (Francia, B\xe9lgica, Suiza, Luxemburgo)",
              it: "Paesi francofoni in Europa (Francia, Belgio, Svizzera, Lussemburgo)",
            },
          },
          {
            src: "/anime/streaming/amazon-prime-video.webp",
            alt: "AMAZON PRIME",
            url: "https://www.primevideo.com/detail/Boruto---Naruto-Next-Generations/0MNO6WKB8I3016041RSOV5NKH4",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u8a9e\u570f\uff08\u30d9\u30eb\u30ae\u30fc\u3001\u30d5\u30e9\u30f3\u30b9\u3001\u30ab\u30ca\u30c0\u3001\u30d9\u30ca\u30f3\u3001\u30d6\u30eb\u30ad\u30ca\u30d5\u30a1\u30bd\u3001\u30d6\u30eb\u30f3\u30b8\u3001\u30b3\u30e2\u30ed\u3001\u30b3\u30f3\u30b4\u5171\u548c\u56fd\u3001\u30b3\u30fc\u30c8\u30b8\u30dc\u30ef\u30fc\u30eb\u3001\u30ac\u30dc\u30f3\u3001\u30b0\u30a2\u30c9\u30eb\u30fc\u30d7\u3001\u30ae\u30cb\u30a2\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30ae\u30a2\u30ca\u3001\u30cf\u30a4\u30c1\u3001\u30ec\u30e6\u30cb\u30aa\u30f3\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u3001\u30de\u30c0\u30ac\u30b9\u30ab\u30eb\u3001\u30de\u30ea\u3001\u30de\u30eb\u30c6\u30a3\u30cb\u30fc\u30af\u3001\u30de\u30e8\u30c3\u30c8\u3001\u30e2\u30ca\u30b3\u3001\u30cb\u30b8\u30a7\u30fc\u30eb\u3001\u30cb\u30e5\u30fc\u30ab\u30ec\u30c9\u30cb\u30a2\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u30dd\u30ea\u30cd\u30b7\u30a2\u3001\u4e2d\u592e\u30a2\u30d5\u30ea\u30ab\u5171\u548c\u56fd\u3001\u30b3\u30f3\u30b4\u6c11\u4e3b\u5171\u548c\u56fd\u3001\u30b5\u30f3\u30fb\u30d0\u30eb\u30c6\u30eb\u30df\u30fc\u5cf6\u3001\u30b5\u30f3\u30fb\u30de\u30eb\u30bf\u30f3\u3001\u30b5\u30f3\u30fb\u30d4\u30a8\u30fc\u30eb\u5cf6\u30fb\u30df\u30af\u30ed\u30f3\u5cf6\u3001\u30bb\u30cd\u30ac\u30eb\u3001\u30bb\u30fc\u30b7\u30a7\u30eb\u3001\u30b9\u30a4\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u9818\u5357\u65b9\u30fb\u5357\u6975\u5730\u57df\u3001\u30c8\u30fc\u30b4\u3001\u30d0\u30cc\u30a2\u30c4\u3001\u30a6\u30a9\u30ea\u30b9\u30fb\u30d5\u30c4\u30ca\uff09",
              en: "French-speaking territories (Belgium, France, Canada, Benin, Burkina Faso, Burundi, Comoros, Republic of the Congo, C\xf4te d'Ivoire, Gabon, Guadeloupe, Guinea, French Guiana, Haiti,  R\xe9union, Luxembourg, Madagascar, Mali, Martinique, Mayotte, Monaco, Niger, New Caledonia, French Polynesia, Central African Republic, Democratic Republic of the Congo, Saint Barth\xe9lemy, Saint Martin, Saint Pierre and Miquelon, Senegal, Seychelles, Switzerland, French Southern and Antarctic Lands, Togo, Vanuatu, Wallis and Futuna)",
              fr: "Territoires francophones (Belgique, France, Canada, B\xe9nin, Burkina Faso, Burundi, Comores, R\xe9publique du Congo, C\xf4te d\u2019Ivoire, Gabon, Guadeloupe, Guin\xe9e, Guyane fran\xe7aise, Ha\xefti, La R\xe9union, Luxembourg, Madagascar, Mali, Martinique, Mayotte, Monaco, Niger, Nouvelle-Cal\xe9donie, Polyn\xe9sie fran\xe7aise, R\xe9publique centrafricaine, R\xe9publique d\xe9mocratique du Congo, Saint-Barth\xe9lemy, Saint-Martin, Saint-Pierre-et-Miquelon, S\xe9n\xe9gal, Seychelles, Suisse, Terres australes et antarctiques fran\xe7aises, Togo, Vanuatu, Wallis-et-Futuna)",
              de: "Franz\xf6sischsprachige Regionen (Belgien, Frankreich, Kanada, Benin, Burkina Faso, Burundi, Komoren, Republik Kongo, Elfenbeink\xfcste, Gabun, Guadeloupe, Guinea, Franz\xf6sisch-Guayana, Haiti, R\xe9union, Luxemburg, Madagaskar, Mali, Martinique, Mayotte, Monaco, Niger, Neukaledonien, Franz\xf6sisch-Polynesien, Zentralafrikanische Republik, Demokratische Republik Kongo, Saint-Barth\xe9lemy, St. Martin, Saint-Pierre und Miquelon, Senegal, Seychellen, Schweiz, Franz\xf6sische S\xfcd- und Antarktisgebiete, Togo, Vanuatu, Wallis und Futuna)",
              es: "Territorios de habla francesa (B\xe9lgica, Francia, Canad\xe1, Ben\xedn, Burkina Faso, Burundi, Comoras, Rep\xfablica del Congo, Costa de Marfil, Gab\xf3n, Guadalupe, Guinea, Guayana Francesa, Hait\xed, Reuni\xf3n, Luxemburgo, Madagascar, Mal\xed, Martinica, Mayotte, M\xf3naco, N\xedger, Nueva Caledonia, Polinesia Francesa, Rep\xfablica Centroafricana, Rep\xfablica Democr\xe1tica del Congo, San Bartolom\xe9, San Mart\xedn, San Pedro y Miquel\xf3n, Senegal, Seychelles, Suiza, Tierras Australes y Ant\xe1rticas Francesas, Togo, Vanuatu, Wallis y Futuna)",
              it: "Paesi francofoni (Belgio, Francia, Canada, Benin, Burkina Faso, Burundi, Comore, Congo, Costa d'Avorio, Gabon, Guadalupa, Guinea, Guyana Francese, Haiti, La Riunione, Lussemburgo, Madagascar, Mali, Martinica, Mayotte, Monaco, Niger, Nuova Caledonia, Polinesia francese, Repubblica Centrafricana, Repubblica Democratica del Congo, Saint-Barth\xe9lemy, San Martino, Saint-Pierre e Miquelon, Senegal, Seychelles, Svizzera, Terre Australi e Antartiche Francesi, Togo, Vanuatu, Wallis e Futuna)",
            },
          },
          {
            src: "/anime/streaming/auvio.webp",
            alt: "Auvio",
            url: "https://www.rtbf.be/auvio/emissions/detail_naruto?id=19842",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30d9\u30eb\u30ae\u30fc",
              en: "Belgium",
              fr: "Belgique",
              de: "Belgien",
              es: "B\xe9lgica",
              it: "Belgio",
            },
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/fr/boruto-naruto-next-generations",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "Worldwide",
              en: "Worldwide",
              fr: "Monde",
              de: "Weltweit",
              es: "Todo el mundo",
              it: "Tutto il mondo",
            },
          },
          {
            src: "/anime/streaming/itunes.webp",
            alt: "iTunes",
            url: "https://itunes.apple.com/fr/tv-season/boruto-next-generations/id1477975256",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f",
              en: "France, DROM-COM",
              fr: "France, DROM-COM",
              de: "Frankreich, \xdcbersee-D\xe9partement",
              es: "Francia, territorios franceses de ultramar",
              it: "Francia, DROM-COM",
            },
          },
          {
            src: "/anime/streaming/mytf1.webp",
            alt: "MyTF1",
            url: "https://www.tf1.fr/tf1/boruto-naruto-next-generations",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f\u3001\u30e2\u30ca\u30b3\u3001\u30a2\u30f3\u30c9\u30e9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30b9\u30a4\u30b9\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af",
              en: "France, DROM-COM, Monaco, Andorra, Belgium, Switzerland, Luxembourg",
              fr: "France, DROM-COM, Monaco, Andorre, Belgique, Suisse, Luxembourg",
              de: "Frankreich, \xdcbersee-D\xe9partement, Monaco, Andorra, Belgien, Schweiz, Luxemburg",
              es: "Francia, territorios franceses de ultramar, M\xf3naco, Andorra, B\xe9lgica, Suiza, Luxemburgo",
              it: "Francia, DROM-COM, Monaco, Andorra, Belgio, Svizzera, Lussemburgo",
            },
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/fr/title/81080523",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d9\u30eb\u30ae\u30fc\u3001\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af\u3001\u30b9\u30a4\u30b9",
              en: "France, Belgium, Luxembourg, Switzerland",
              fr: "France, Belgique, Luxembourg, Suisse",
              de: "Frankreich, Belgien, Luxemburg, Schweiz",
              es: "Francia, B\xe9lgica, Luxemburgo, Suiza",
              it: "Francia, Belgio, Lussemburgo e Svizzera",
            },
          },
          {
            src: "/anime/streaming/orange.webp",
            alt: "Orange",
            url: "https://video-a-la-demande.orange.fr/serie/BORUTOS0101W0139186/boruto-s01",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30d5\u30e9\u30f3\u30b9\u3001\u30d5\u30e9\u30f3\u30b9\u306e\u6d77\u5916\u770c\u30fb\u6d77\u5916\u9818\u571f",
              en: "France, DROM-COM",
              fr: "France, DROM-COM",
              de: "Frankreich, \xdcbersee-D\xe9partement",
              es: "Francia, territorios franceses de ultramar",
              it: "Francia, DROM-COM",
            },
          },
          {
            src: "/anime/streaming/rtl.webp",
            alt: "RTL Mediengruppe",
            url: "https://www.tvnow.de/serien/boruto-naruto-next-generations-21246",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30c9\u30a4\u30c4\u8a9e\u570f",
              en: "German-speaking countries",
              fr: "Pays germanophones",
              de: "Deutschsprachige L\xe4nder",
              es: "Pa\xedses de habla alemana",
              it: "Paesi di lingua tedesca",
            },
          },
          {
            src: "/anime/streaming/pluto-TV.webp",
            alt: "Videotron",
            url: "https://www.clubillico.com/jeunesse",
            region: "eu",
            series: "boruto",
            subject: {
              ja: "\u30ab\u30ca\u30c0",
              en: "Canada",
              fr: "Canada",
              de: "Kanada",
              es: "Canad\xe1",
              it: "Canada",
            },
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/",
            region: "na",
            series: "boruto",
          },
          {
            src: "/anime/streaming/hulu.webp",
            alt: "Hulu",
            url: "https://www.hulu.com",
            region: "na",
            series: "boruto",
          },
          {
            src: "/anime/streaming/crunchyroll.webp",
            alt: "Crunchyroll",
            url: "https://www.crunchyroll.com/",
            region: "sa",
            series: "boruto",
            subject: {
              ja: "Worldwide\uff08\u65e5\u672c\u4ee5\u5916\uff09",
              en: "Worldwide (Not including Japan)",
              fr: "Monde (Japon exclus)",
              de: "Weltweit (au\xdfer Japan)",
              es: "Todo el mundo (excepto Jap\xf3n)",
              it: "Tutto il mondo (Giappone escluso)",
            },
          },
          {
            src: "/anime/streaming/claro-video.webp",
            alt: "Claro TV - VIDEO",
            url: "https://www.clarovideo.com/mexico/",
            region: "sa",
            series: "boruto",
            subject: {
              ja: "\u30e1\u30ad\u30b7\u30b3",
              en: "Mexico",
              fr: "Mexique",
              de: "Mexiko",
              es: "M\xe9xico",
              it: "Messico",
            },
          },
          {
            src: "/anime/streaming/claro.webp",
            alt: "Claro TV",
            url: "https://www.clarochile.cl/personas/",
            region: "sa",
            series: "boruto",
            subject: {
              ja: "\u30e1\u30ad\u30b7\u30b3\u3092\u9664\u304f\u4e2d\u5357\u7c73",
              en: "Latin America (Not including Mexico)",
              fr: "Am\xe9rique latine (Mexique exclus)",
              de: "Lateinamerika (au\xdfer Mexiko)",
              es: "Latinoam\xe9rica (excepto M\xe9xico)",
              it: "America latina (Messico escluso)",
            },
          },
          {
            src: "/anime/streaming/funimation.webp",
            alt: "Funimation",
            url: "https://www.funimation.com/",
            region: "sa",
            series: "boruto",
          },
          {
            src: "/anime/streaming/hbo-max.webp",
            alt: "HBO Max",
            url: "https://www.hbomax.com/",
            region: "sa",
            series: "boruto",
          },
          {
            src: "/anime/streaming/netflix.webp",
            alt: "Netflix",
            url: "https://www.netflix.com/",
            region: "sa",
            series: "boruto",
          },
        ],
        Ae = {
          naruto1: {
            jp: Fe.filter(function (e) {
              return "jp" === e.region && "naruto1" === e.series;
            }),
            asia: Fe.filter(function (e) {
              return "asia" === e.region && "naruto1" === e.series;
            }),
            eu: Fe.filter(function (e) {
              return "eu" === e.region && "naruto1" === e.series;
            }),
            na: Fe.filter(function (e) {
              return "na" === e.region && "naruto1" === e.series;
            }),
            sa: Fe.filter(function (e) {
              return "sa" === e.region && "naruto1" === e.series;
            }),
            elsewhere: [],
          },
          naruto2: {
            jp: Fe.filter(function (e) {
              return "jp" === e.region && "naruto2" === e.series;
            }),
            asia: Fe.filter(function (e) {
              return "asia" === e.region && "naruto2" === e.series;
            }),
            eu: Fe.filter(function (e) {
              return "eu" === e.region && "naruto2" === e.series;
            }),
            na: Fe.filter(function (e) {
              return "na" === e.region && "naruto2" === e.series;
            }),
            sa: Fe.filter(function (e) {
              return "sa" === e.region && "naruto2" === e.series;
            }),
            elsewhere: [],
          },
          boruto: {
            jp: Fe.filter(function (e) {
              return "jp" === e.region && "boruto" === e.series;
            }),
            asia: Fe.filter(function (e) {
              return "asia" === e.region && "boruto" === e.series;
            }),
            eu: Fe.filter(function (e) {
              return "eu" === e.region && "boruto" === e.series;
            }),
            na: Fe.filter(function (e) {
              return "na" === e.region && "boruto" === e.series;
            }),
            sa: Fe.filter(function (e) {
              return "sa" === e.region && "boruto" === e.series;
            }),
            elsewhere: [],
          },
        };
      var Ne = {
          name: "1wzg65l",
          styles:
            "margin-top:30px;font-size:11px;line-height:1.5;white-space:pre-wrap",
        },
        Ie = {
          name: "16mebt6",
          styles: "width:100%;margin-left:20px;font-size:12px",
        },
        Re = { name: "zjik7", styles: "display:flex" },
        ze = { name: "b4vp7c", styles: "max-height:0" },
        Le = function (e) {
          var i = e.click,
            a = e.series,
            n = e.streamData,
            r = (0, f.bU)(),
            o = (0, t.useState)(void 0),
            s = o[0],
            l = o[1],
            u = F().width,
            d = n[0].region;
          return (
            (0, t.useEffect)(
              function () {
                var e;
                l(
                  null ===
                    (e = document.getElementById(
                      "streamingAccordion_".concat(d)
                    )) || void 0 === e
                    ? void 0
                    : e.scrollHeight
                );
              },
              [u, i, a, n, d]
            ),
            (0, A.tZ)("div", {
              className: "wrapper",
              id: "streamingAccordion_".concat(d),
              css: [
                Ue.wrapper,
                i ? (0, c.iv)("max-height:", s, "px;", "") : ze,
                "",
                "",
              ],
              children: (0, A.BX)("div", {
                css: Ue.accordionBoby,
                children: [
                  "jp" === d && (0, A.tZ)(Pe, { allstream: n, locale: r }),
                  "na" === d && (0, A.tZ)(Ze, { allstream: n }),
                  ("asia" === d || "sa" === d || "eu" === d) &&
                    (0, A.tZ)("div", {
                      css: (0, c.iv)(
                        "display:grid;grid-template-columns:repeat(2, calc(50% - 25px));row-gap:30px;column-gap:50px;width:100%;img{width:140px;height:auto;margin:auto;}@media ",
                        x.r.media.preTablet,
                        "{display:grid;grid-template-columns:repeat(1, 1fr);row-gap:19px;margin:19px auto 0;}",
                        ""
                      ),
                      children: n.map(function (e, i) {
                        return (0,
                        A.BX)("div", { css: (0, c.iv)("display:flex;align-items:start;padding-top:", i < 2 ? "0px;" : "24px", ";border-top:", i < 2 ? "none;" : "1px solid #707070;", ";@media ", x.r.media.preTablet, "{padding-top:", i < 1 ? "0px;" : "24px", ";border-top:", i < 1 ? "none;" : "1px solid #707070;", ";}", ""), children: [(0, A.tZ)(T.Z, { href: e.url, passHref: !0, children: (0, A.tZ)("a", { target: "_blank", rel: "noopener noreferrer", css: Re, children: (0, A.tZ)("img", { src: e.src, alt: e.alt }) }) }), (0, A.tZ)("div", { css: Ie, children: e.subject && e.subject[r] })] }, i);
                      }),
                    }),
                  (0, A.tZ)("p", { css: Ne, children: De[r] }),
                ],
              }),
            })
          );
        },
        Pe = function (e) {
          var i = e.allstream,
            a = e.locale,
            n = [],
            t = [];
          return (
            i.forEach(function (e) {
              e.ppv ? n.push(e) : t.push(e);
            }),
            (0, A.BX)(A.HY, {
              children: [
                t.length > 0 &&
                  (0, A.BX)(A.HY, {
                    children: [
                      (0, A.tZ)("p", {
                        css: (0, c.iv)(
                          "font-family:var(--comic-impact-font);font-size:15px;&:not(:lang(ja)){font-size:20px;}@media ",
                          x.r.media.preTablet,
                          "{font-size:24px;}",
                          ""
                        ),
                        children: Ge[a],
                      }),
                      (0, A.tZ)(Ze, { allstream: t }),
                    ],
                  }),
                n.length > 0 &&
                  (0, A.BX)(A.HY, {
                    children: [
                      t.length > 0
                        ? (0, A.tZ)("p", {
                            css: (0, c.iv)(
                              "margin-top:30px;font-family:var(--comic-impact-font);font-size:15px;&:not(:lang(ja)){font-size:20px;}@media ",
                              x.r.media.preTablet,
                              "{margin-top:66px;font-size:24px;}",
                              ""
                            ),
                            children: Ve[a],
                          })
                        : (0, A.tZ)("p", {
                            css: (0, c.iv)(
                              "font-family:var(--comic-impact-font);font-size:15px;&:not(:lang(ja)){font-size:20px;}@media ",
                              x.r.media.preTablet,
                              "{font-size:24px;}",
                              ""
                            ),
                            children:
                              "ja" === a ? "\u90fd\u5ea6\u8ab2\u91d1" : "PPV",
                          }),
                      (0, A.tZ)(Ze, { allstream: n }),
                    ],
                  }),
              ],
            })
          );
        },
        Ee = { name: "zjik7", styles: "display:flex" },
        Ze = function (e) {
          var i = e.allstream;
          return (0, A.tZ)("div", {
            css: Ue.streamIcons,
            children: i.map(function (e, i) {
              return (0,
              A.tZ)(T.Z, { href: e.url, passHref: !0, children: (0, A.tZ)("a", { target: "_blank", rel: "noopener noreferrer", css: Ee, children: (0, A.tZ)("img", { src: e.src, alt: e.alt }) }) }, i);
            }),
          });
        },
        Ue = {
          wrapper: {
            name: "17cxzx4",
            styles: "height:auto;overflow:hidden;transition:all 1s",
          },
          accordionBoby: {
            name: "17xt9gw",
            styles:
              "position:relative;width:100%;max-width:960px;margin:24px auto",
          },
          streamMedia: (0, c.iv)(
            "padding:55px 0 81px;margin:0;text-align:left;@media ",
            x.r.media.preTablet,
            "{padding:55px 0 50px;text-align:center;}",
            ""
          ),
          streamIcons: (0, c.iv)(
            "display:grid;grid-template-columns:repeat(6, 1fr);row-gap:24px;min-height:70px;margin:50px 0;img{width:140px;height:auto;margin:auto;}@media ",
            x.r.media.preTablet,
            "{display:grid;grid-template-columns:repeat(2, 1fr);row-gap:19px;margin:19px auto 0;text-align:center;}",
            ""
          ),
        },
        Ge = {
          ja: "\u898b\u653e\u984c",
          en: "Unlimited",
          fr: "ILLIMIT\xc9",
          de: "UNBEGRENZT",
          es: "INCLUIDO EN SUSCRIPCI\xd3N",
          it: "INCLUSO NELL' ABBONAMENTO",
        },
        Ve = {
          ja: "\u90fd\u5ea6\u8ab2\u91d1",
          en: "PPV",
          fr: "PAY-PER-VIEW",
          de: "KOSTENPFLICHTIG",
          es: "PAGO POR VISI\xd3N",
          it: "PAY PER VIEW",
        },
        De = {
          ja: "\u203b\u304a\u4f4f\u307e\u3044\u306e\u5730\u57df\u306b\u3088\u3063\u3066\u5229\u7528\u53ef\u80fd\u306a\u914d\u4fe1\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u7570\u306a\u308a\u307e\u3059\u3002\u304a\u5ba2\u69d8\u3054\u81ea\u8eab\u306b\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",
          en: "*Available streaming services vary depending on your region of residence. Please be sure to check which options are supported where you live.",
          fr: "*Les plateformes de streaming disponibles varient en fonction de votre lieu de r\xe9sidence. Veuillez v\xe9rifier la disponibilit\xe9.",
          de: "*Die verf\xfcgbaren Streamingdienste k\xf6nnen je nach Standort variieren. Bitte \xfcberpr\xfcfe die f\xfcr dich verf\xfcgbaren Streamingdienste.",
          es: "* Las plataformas de streaming disponibles var\xedan seg\xfan la regi\xf3n. Por favor, consulta la disponibilidad en tu regi\xf3n.",
          it: "*Le piattaforme disponibili variano a seconda della regione di residenza. Vi invitiamo a verificare la disponibilit\xe0 nella vostra regione.",
        };
      var qe = {
          name: "10g980i",
          styles: "display:flex;width:20px;height:20px;margin:auto 24px auto 0",
        },
        _e = { name: "1gn3kn5", styles: "display:flex;width:100%;height:100%" },
        He = function (e) {
          var i = e.label,
            a = e.click,
            n = e.hover,
            t = e.setClick,
            r = e.setHover,
            o = ((0, f.bU)(), a || n),
            s = function () {
              return (
                !navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i) && !n
              );
            };
          return (0, A.tZ)("button", {
            css: o ? [Xe.accordionLabelOpen] : [Xe.accordionLabelClose],
            onClick: function () {
              return t(!a);
            },
            onPointerEnter: function () {
              return r(s());
            },
            onPointerLeave: function () {
              return r(s());
            },
            children: (0, A.tZ)("div", {
              css: _e,
              children: (0, A.BX)("div", {
                css: o ? Xe.titleSectionOpen : Xe.titleSectionClose,
                children: [
                  (0, A.tZ)("div", {
                    css: Xe.accordionTtlTxt,
                    children: (0, A.tZ)("p", {
                      className: o ? "active" : "",
                      children: i,
                    }),
                  }),
                  (0, A.tZ)("div", {
                    css: Xe.accordionLabelRight,
                    children: (0, A.BX)("div", {
                      css: qe,
                      children: [
                        (0, A.tZ)("img", {
                          src: "/anime/series/plus_bk.svg",
                          alt: "+",
                          css:
                            a || n
                              ? [{ display: "none" }]
                              : [Xe.icon, { display: "block" }],
                        }),
                        (0, A.tZ)("img", {
                          src: "/anime/series/plus_wh.svg",
                          alt: "+",
                          css:
                            !a && n
                              ? [Xe.icon, { display: "block" }]
                              : [{ display: "none" }],
                        }),
                        (0, A.tZ)("img", {
                          src: "/anime/series/minus_wh.svg",
                          alt: "-",
                          css: a
                            ? [Xe.icon, { display: "block" }]
                            : [{ display: "none" }],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Xe = {
          accordionLabelOpen: (0, c.iv)(
            "box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;padding:6px 0 8px;padding-left:17px;margin:-6px 0 -12px;cursor:pointer;border-style:solid;border-width:2px;border-right:none;border-image-source:url('/common/scroll.svg');border-image-slice:30;border-image-width:24px;transition:padding-left 0.25s;@media ",
            x.r.media.preTablet,
            "{display:none;}",
            ""
          ),
          accordionLabelClose: (0, c.iv)(
            "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;min-height:61px;padding:0;margin:0 0 -2px;cursor:pointer;border:none;border-top:2px solid #000;@media ",
            x.r.media.preTablet,
            "{display:none;}",
            ""
          ),
          titleSectionOpen: {
            name: "i8js11",
            styles:
              "display:flex;width:100%;height:100%;background:#000;transition:background 0.25s",
          },
          titleSectionClose: {
            name: "1kaaqvc",
            styles:
              "display:flex;width:100%;height:100%;background:none;transition:background 0.25s",
          },
          accordionLabelRight: {
            name: "b9fw7c",
            styles:
              "display:flex;align-items:center;height:100%;margin:auto;border:none",
          },
          icon: {
            name: "ypk1el",
            styles: "width:20px;height:20px;margin:auto",
          },
          accordionTtlTxt: {
            name: "ahzieb",
            styles:
              "width:calc(100%);height:100%;p{margin:17px 0;font-family:'fot-udkakugoc80-pro';font-size:26px;line-height:29px;color:#000;white-space:pre-wrap;transition:color 0.25s;}p.active{margin:17px 0;margin-left:-17px;color:#fff;transition:color 0.25s,margin-left 0.25s;}",
          },
        };
      var We = {
          name: "vzuwuh",
          styles: "display:flex;width:20px;height:20px;margin:auto 8px auto 0",
        },
        Ke = {
          name: "1w1qal4",
          styles:
            "display:flex;align-items:center;justify-content:center;width:100%;height:100%",
        },
        Ye = function (e) {
          var i = e.label,
            a = e.click,
            n = e.setClick;
          (0, f.bU)();
          return (0, A.tZ)("button", {
            css: a ? [Je.accordionLabelOpen] : [Je.accordionLabelClose],
            onClick: function () {
              return n(!a);
            },
            children: (0, A.BX)("div", {
              css: a ? [Je.accordionContentsOpen] : [Je.accordionContentsClose],
              children: [
                (0, A.tZ)("div", {
                  css: Ke,
                  children: (0, A.tZ)("div", {
                    css: a
                      ? [Je.accordionTtlTxt, { color: "#fff" }]
                      : [Je.accordionTtlTxt, { color: "#000" }],
                    children: (0, A.tZ)("p", { children: i }),
                  }),
                }),
                (0, A.tZ)("div", {
                  css: Je.accordionLabelRight,
                  children: (0, A.BX)("div", {
                    css: We,
                    children: [
                      (0, A.tZ)("img", {
                        src: "/anime/series/plus_bk.svg",
                        alt: "+",
                        css: a
                          ? [{ display: "none" }]
                          : [Je.icon, { display: "block" }],
                      }),
                      (0, A.tZ)("img", {
                        src: "/anime/series/minus_wh.svg",
                        alt: "-",
                        css: a
                          ? [Je.icon, { display: "block" }]
                          : [{ display: "none" }],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        Je = {
          accordionLabelOpen: (0, c.iv)(
            "width:100%;height:100%;padding:6px 0 8px;padding-left:17px;margin:-6px 0 -2px;cursor:pointer;border-style:solid;border-width:2px;border-right:none;border-image-source:url('/common/scroll.svg');border-image-slice:30;border-image-width:24px;transition:padding-left 0.25s;@media ",
            x.r.media.postTablet,
            "{display:none;}",
            ""
          ),
          accordionLabelClose: (0, c.iv)(
            "width:100%;height:100%;padding:0;margin:0 0 -2px;cursor:pointer;background-color:#fff;border:none;border-top:2px solid #000;border-bottom:2px solid #000;@media ",
            x.r.media.postTablet,
            "{display:none;}",
            ""
          ),
          accordionContentsOpen: {
            name: "13kpet2",
            styles:
              "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;background-color:#000",
          },
          accordionContentsClose: {
            name: "1g255of",
            styles:
              "display:flex;align-items:center;justify-content:space-between;width:100%;height:100%",
          },
          accordionLabelRight: {
            name: "9ouxp6",
            styles: "display:flex;align-items:center;height:100%;border:none",
          },
          icon: {
            name: "ypk1el",
            styles: "width:20px;height:20px;margin:auto",
          },
          accordionTtlTxt: (0, c.iv)(
            "display:flex;align-items:center;justify-content:center;width:100%;height:61px;p{margin:0;font-family:var(--comic-impact-font);font-size:22px;@media ",
            x.r.media.postPhone,
            "{p{}text-align:center;}}",
            ""
          ),
        };
      var Qe = function (e) {
          var i = e.label,
            a = e.open,
            n = e.series,
            r = e.streamData,
            o = (0, t.useState)(a),
            s = o[0],
            l = o[1],
            c = (0, t.useState)(!1),
            u = c[0],
            d = c[1];
          return (
            (0, t.useEffect)(
              function () {
                l(a);
              },
              [a]
            ),
            (0, A.BX)("li", {
              className: s || u ? "active" : "not-active",
              css: $e.wrapper,
              children: [
                (0, A.tZ)(He, {
                  label: i,
                  click: s,
                  hover: u,
                  setClick: l,
                  setHover: d,
                }),
                (0, A.tZ)(Ye, { label: i, click: s, setClick: l }),
                (0, A.tZ)(Le, { click: s, series: n, streamData: r }),
              ],
            })
          );
        },
        $e = {
          wrapper: {
            name: "rt565p",
            styles: "align-items:center;max-width:990px;margin:0 auto",
          },
        };
      var ei,
        ii = function (e) {
          var i = e.series,
            a = (0, f.bU)(),
            n = (0, Oe.W)(),
            r = (0, t.useState)(
              "elsewhere" !== n && "unknown" !== n ? n : "elsewhere"
            ),
            o = r[0],
            s = r[1];
          return (
            (0, t.useEffect)(
              function () {
                "unknown" !== n && "elsewhere" === o && s(n);
              },
              [n, o]
            ),
            (0, A.BX)("div", {
              css: ai.wrapper,
              children: [
                (0, A.BX)("div", {
                  css: ai.title,
                  children: [
                    (0, A.tZ)("p", { css: ai.titleMain, children: ni[a] }),
                    (0, A.tZ)("p", {
                      css: ai.titleSub,
                      children: "\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9",
                    }),
                  ],
                }),
                (0, A.tZ)("ul", {
                  css: (0, c.iv)(
                    "@media ",
                    x.r.media.postTablet,
                    "{li:last-of-type.not-active{border-bottom:2px solid #000;}li:last-of-type.active{margin-bottom:2px;}}",
                    ""
                  ),
                  children: Object.keys(ti).map(function (e) {
                    return (0,
                    A.tZ)(Qe, { label: ti[e][a], open: e === o, series: i, streamData: Ae[i][e] }, e);
                  }),
                }),
              ],
            })
          );
        },
        ai = {
          wrapper: { name: "bjn8wh", styles: "position:relative" },
          title: (0, c.iv)(
            "display:flex;align-items:center;height:82px;margin-top:60px;margin-bottom:33px;@media (min-width: 768px){margin-top:60px;margin-bottom:33px;margin-left:25px;line-height:1;}@media ",
            x.r.media.prePhone,
            "{margin-top:43px;margin-bottom:24px;margin-left:0;}",
            ""
          ),
          titleMain: (0, c.iv)(
            "font-family:'Bebas Neue';font-size:76px;@media ",
            x.r.media.prePhone,
            "{font-size:56px;}",
            ""
          ),
          titleSub: (0, c.iv)(
            "margin-left:20px;font-family:'fot-udkakugoc80-pro';font-size:26px;&:not(:lang(ja)){display:none;}@media ",
            x.r.media.prePhone,
            "{font-size:20px;}",
            ""
          ),
        },
        ni = {
          ja: "STREAMING",
          en: "STREAMING",
          fr: "STREAMING",
          de: "STREAMING-DIENSTE",
          es: "STREAMING",
          it: "STREAMING",
        },
        ti = {
          jp: {
            ja: "\u65e5\u672c",
            en: "Japan",
            fr: "Japon",
            de: "Japan",
            es: "Jap\xf3n",
            it: "Giappone",
          },
          asia: {
            ja: "\u30a2\u30b8\u30a2",
            en: "Asia (Not including Japan)",
            fr: "Asie",
            de: "Asien",
            es: "Asia",
            it: "Asia",
          },
          na: {
            ja: "\u5317\u7c73",
            en: "North America",
            fr: "Am\xe9rique du Nord",
            de: "Nordamerika",
            es: "Am\xe9rica del Norte",
            it: "Nord America",
          },
          sa: {
            ja: "\u4e2d\u5357\u7c73",
            en: "Latin America",
            fr: "Am\xe9rique latine",
            de: "Lateinamerika",
            es: "Latinoam\xe9rica",
            it: "America latina",
          },
          eu: {
            ja: "\u6b27\u5dde\u304a\u3088\u3073\u30d5\u30e9\u30f3\u30b9\u8a9e\u570f",
            en: "Europe and French-Speaking Territories",
            fr: "Europe et territoires francophones",
            de: "Europa und franz\xf6sischsprachige Regionen",
            es: "Europa y territorios de habla francesa",
            it: "Europa e paesi francofoni",
          },
        };
      var ri = {
          name: "1eoy87d",
          styles: "display:flex;justify-content:space-between",
        },
        oi = { name: "1jelov0", styles: "height:260px" },
        si = function (e) {
          var i = e.seriesDetail,
            a = e.episodeList,
            n = e.pending,
            r = a && (0, b.Z)(a).reverse(),
            o = (0, f.bU)(),
            s = t.useRef(null),
            l = (0, w.useRouter)();
          (0, t.useEffect)(
            function () {
              var e;
              n ||
                (l.asPath.includes("#streaming") &&
                  (null === (e = document.getElementById("streaming_target")) ||
                    void 0 === e ||
                    e.scrollIntoView()));
            },
            [n, l]
          );
          var u = (0, c.F4)(
            ei ||
              (ei = (0, h.Z)([
                "\n    from {\n      opacity: 0;\n      transform: translateY(50px);\n    }\n\n    to {\n      opacity: 1;\n      transform: none;\n    }\n  ",
              ]))
          );
          return (0, A.BX)(A.HY, {
            children: [
              (0, A.tZ)("div", {
                css: oi,
                children: (0, A.tZ)("div", {
                  css: (0, c.iv)(
                    "position:absolute;top:144px;width:100%;@media ",
                    x.r.media.preTablet,
                    "{top:167px;}",
                    ""
                  ),
                  children: (0, A.tZ)(y.W, {
                    children: (0, A.BX)("div", {
                      css: ri,
                      children: [
                        (0, A.tZ)(S.V, {
                          title: "ANIME",
                          ruby: "\u30a2\u30cb\u30e1",
                          slug: "anime",
                          scale: "2/3",
                          h1: "ANIME",
                        }),
                        (0, A.tZ)(j.Z, {
                          wrapperCss: (0, c.iv)(
                            "margin-top:16px;@media ",
                            x.r.media.preTablet,
                            "{margin-top:24px;}",
                            ""
                          ),
                          paths: [
                            {
                              label: ui[o],
                              href: "/",
                              font:
                                "ja" === o
                                  ? "fot-udkakugoc80-pro"
                                  : "Bebas Neue",
                            },
                            {
                              label: di[o],
                              href: "/anime",
                              font:
                                "ja" === o
                                  ? "fot-udkakugoc80-pro"
                                  : "Bebas Neue",
                            },
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, A.tZ)("main", {
                css: ci.main,
                children: (0, A.BX)(y.W, {
                  children: [
                    (0, A.BX)("div", {
                      css: ci.seriesCardSet,
                      children: [
                        (0, A.tZ)(li, {
                          id: "naruto1",
                          href: "/anime/naruto1",
                          active: "naruto1" === i.id,
                          src: "/anime/img_1.webp",
                          subTitle:
                            "ja" === o
                              ? "- \u5c11\u5e74\u7bc7 -"
                              : "- NARUTO -",
                        }),
                        (0, A.tZ)(li, {
                          id: "naruto2",
                          href: "/anime/naruto2",
                          active: "naruto2" === i.id,
                          src: "/anime/img_2.webp",
                          subTitle:
                            "ja" === o
                              ? "- \u75be\u98a8\u4f1d -"
                              : "- SHIPPUDEN -",
                        }),
                        (0, A.tZ)(li, {
                          id: "boruto",
                          href: "/anime/boruto",
                          active: "boruto" === i.id,
                          src: "/anime/img_3.webp",
                          subTitle: "- NARUTO NEXT GENERATIONS -",
                        }),
                      ],
                    }),
                    (0, A.BX)("div", {
                      css: ci.content,
                      children: [
                        (0, A.tZ)("div", {
                          ref: s,
                          css: (0, c.iv)("animation:1s ", u, ";", ""),
                          children: (0, A.tZ)(ke, {
                            id: i.id,
                            logoImg_pc: i.logoImg_pc,
                            logoImg_sp: i.logoImg_sp,
                            visualImg: i.seriesImg,
                            summaryTxt: i.seriesSummary,
                          }),
                        }),
                        (0, A.tZ)("div", {
                          children:
                            r &&
                            (0, A.tZ)(ye, {
                              series: i.id,
                              seriesContents: r,
                              pending: n,
                            }),
                        }),
                        (0, A.BX)("div", {
                          id: "streaming_target",
                          children: [
                            (0, A.tZ)(ii, { series: i.id }),
                            (0, A.tZ)("div", {
                              css: ci.banner,
                              children: (0, A.tZ)(v.j, {
                                href: "/special/anime-gallery",
                                src: "/common/banner/anime_gallery_".concat(
                                  o,
                                  "_pc.webp"
                                ),
                                spSrc: "/common/banner/anime_gallery_".concat(
                                  o,
                                  "_sp.webp"
                                ),
                                target: "_self",
                              }),
                            }),
                          ],
                        }),
                        (0, A.tZ)("div", {
                          children: (0, A.tZ)(Q, {
                            series: i.id,
                            staff: i.staff,
                            cast: i.cast,
                            opening: i.opening,
                            ending: i.ending,
                            officialUrl: i.officialUrl,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        li = function (e) {
          var i = e.id,
            a = e.href,
            n = e.active,
            t = e.src,
            r = e.subTitle;
          return (0, A.tZ)(T.Z, {
            href: a,
            children: (0, A.BX)("a", {
              css: n ? [ci.cardActive, ci.seriesCard] : ci.seriesCard,
              children: [
                (0, A.tZ)("div", {
                  css: ci.cardImg,
                  children: (0, A.tZ)("img", {
                    src: t,
                    alt: "NARUTO",
                    className: "thumbnail",
                  }),
                }),
                (0, A.BX)("div", {
                  css: ci.cardTxt,
                  className: "title",
                  children: [
                    (0, A.BX)("p", {
                      children: [
                        "boruto" === i ? "BORUTO" : "NARUTO",
                        (0, A.tZ)("span", {
                          children:
                            "boruto" === i
                              ? "\u30dc\u30eb\u30c8"
                              : "\u30ca\u30eb\u30c8",
                        }),
                      ],
                    }),
                    "naruto2" === i &&
                      (0, A.tZ)("p", {
                        css: (0, c.iv)(
                          "font-family:var(--comic-impact-font);font-size:min(1.25vw, 16px);@media ",
                          x.r.media.prePhone,
                          "{font-size:min(3.2vw, 15px);}&:not(:lang(ja)){font-size:14px;@media ",
                          x.r.media.prePhone,
                          "{&:not(:lang(ja)){}font-size:min(3.7vw, 17px);}}",
                          ""
                        ),
                        children: r,
                      }),
                    "boruto" === i &&
                      (0, A.tZ)("p", {
                        css: (0, c.iv)(
                          "font-family:'Bebas Neue';font-size:14px;@media ",
                          x.r.media.prePhone,
                          "{font-size:min(3.7vw, 17px);}",
                          ""
                        ),
                        children: r,
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        ci = {
          main: {
            name: "zigog8",
            styles: "display:flex;flex-direction:column;align-items:center",
          },
          content: {
            name: "1p0c94c",
            styles:
              "padding:60px;margin-bottom:100px;background-color:white;@media (max-width: 767px){width:calc(100vw - 48px);padding:4.7%;}",
          },
          seriesCardSet: (0, c.iv)(
            "display:flex;justify-content:space-between;width:100%;margin-bottom:48px;@media ",
            x.r.media.prePhone,
            "{display:block;margin-bottom:29px;}",
            ""
          ),
          seriesCard: (0, c.iv)(
            "display:flex;align-items:center;width:32.4%;background-color:#fff;.thumbnail{transition:transform 0.25s;}.title{transition:opacity 0.25s;}&:active .thumbnail{transform:scale(1.2);}&:active .title{opacity:0.5;}@media ",
            x.r.media.postTablet,
            "{&:hover .thumbnail{transform:scale(1.2);}&:hover .title{opacity:0.5;}}@media ",
            x.r.media.prePhone,
            "{width:100%;margin-bottom:5px;}",
            ""
          ),
          cardImg: (0, c.iv)(
            "width:50.8%;overflow:hidden;@media ",
            x.r.media.prePhone,
            "{width:min(33.3%, 120px);height:auto;}img{display:inline-block;width:100%;height:auto;vertical-align:top;object-fit:contain;}",
            ""
          ),
          cardTxt: (0, c.iv)(
            "display:flex;flex-direction:column;align-items:center;justify-content:center;width:49.2%;height:100%;line-height:1;text-align:center;@media ",
            x.r.media.prePhone,
            "{width:max(66.7%, calc(100% - 120px));}p:first-of-type{display:flex;align-items:center;font-family:'Bebas Neue';font-size:min(2.7vw, 35px);@media ",
            x.r.media.prePhone,
            "{p:first-of-type{}font-size:min(6.4vw, 30px);}span:first-of-type{margin-bottom:3px;margin-left:6%;font-family:'fot-udkakugoc80-pro';font-size:min(1.25vw, 16px);white-space:nowrap;@media ",
            x.r.media.prePhone,
            "{span:first-of-type{}font-size:min(3.2vw, 15px);}&:not(:lang(ja)){display:none;}}}",
            ""
          ),
          cardActive: {
            name: "18tx6hi",
            styles: "pointer-events:none;filter:brightness(0.7)",
          },
          banner: {
            name: "lm9ddd",
            styles:
              "margin-top:60px;margin-bottom:53px;overflow:hidden;text-align:center;img{width:100%;height:100%;}",
          },
        },
        ui = {
          ja: "\u30c8\u30c3\u30d7",
          en: "TOP",
          fr: "ACCUEIL",
          de: "TOP",
          es: "INICIO",
          it: "HOME",
        },
        di = {
          ja: "\u30a2\u30cb\u30e1",
          en: "ANIME",
          fr: "ANIM\xc9",
          de: "ANIME",
          es: "ANIME",
          it: "ANIME",
        },
        pi = function (e) {
          var i = e.seriesDetail,
            a = e.episodeList,
            n = e.pending,
            t =
              "boruto" === i.id
                ? '"/anime/bg_anime_boruto.webp"'
                : '"/anime/bg_anime_naruto.webp"';
          return (0, A.tZ)(A.HY, {
            children: (0, A.BX)(g.DY, {
              children: [
                (0, A.BX)("div", {
                  css: (0, c.iv)(
                    "width:100%;background-image:url(",
                    t,
                    ");background-repeat:repeat-y;background-position:top;background-size:100% auto;",
                    ""
                  ),
                  children: [
                    (0, A.tZ)(d.h, {}),
                    (0, A.tZ)(si, {
                      seriesDetail: i,
                      episodeList: a,
                      pending: n,
                    }),
                  ],
                }),
                (0, A.tZ)(p.E, {
                  topicsComponent: (0, A.tZ)(m.E, { slug: "news-anime" }),
                  bgImgSrc: "/common/news_content_bg_boruto.webp",
                }),
                (0, A.tZ)(u.T, {}),
              ],
            }),
          });
        };
      function mi(e, i) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          i &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      var gi = function (e) {
          var i,
            a = e.seriesDetail,
            s = (0, r.Vd)("episodeList", {
              data: '{"series":"'.concat(o.L[a.id], '"}'),
            }),
            c = s.result,
            u = s.pending,
            d = (0, t.useState)({}),
            p = d[0],
            m = d[1],
            g = (0, t.useMemo)(
              function () {
                try {
                  return c
                    ? c.data.episode_list
                        .filter(function (e) {
                          return p[e.code];
                        })
                        .map(function (e) {
                          var i,
                            n = p[e.code];
                          return {
                            id: e._id,
                            title: e.name,
                            img: n ? (0, r.hT)(n.thumbnail) : "",
                            summary:
                              null === n || void 0 === n
                                ? void 0
                                : n.anime.text,
                            original: e.is_anime_original,
                            ep: "EP"
                              .concat(e.start_no, " - ")
                              .concat(
                                null !== (i = e.end_no) && void 0 !== i ? i : ""
                              ),
                            href: "/anime/"
                              .concat(a.id, "/list?episode=")
                              .concat(e.code),
                            open: !1,
                          };
                        })
                    : [];
                } catch (e) {
                  return;
                }
              },
              [c, p, a.id]
            ),
            h = (0, t.useCallback)(function (e, i) {
              m(function (a) {
                return (
                  (a[e] = i),
                  (function (e) {
                    for (var i = 1; i < arguments.length; i++) {
                      var a = null != arguments[i] ? arguments[i] : {};
                      i % 2
                        ? mi(Object(a), !0).forEach(function (i) {
                            (0, n.Z)(e, i, a[i]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(a)
                          )
                        : mi(Object(a)).forEach(function (i) {
                            Object.defineProperty(
                              e,
                              i,
                              Object.getOwnPropertyDescriptor(a, i)
                            );
                          });
                    }
                    return e;
                  })({}, a)
                );
              });
            }, []);
          return (0, A.BX)(l.e, {
            category: "anime",
            children: [
              c &&
                (null === (i = c.data.episode_list) || void 0 === i
                  ? void 0
                  : i.map(function (e) {
                      return (0,
                      A.tZ)(hi, { series: a.id, episodeCode: e.code, onReceive: h }, e._id);
                    })),
              (0, A.tZ)(pi, { seriesDetail: a, episodeList: g, pending: u }),
            ],
          });
        },
        hi = function (e) {
          var i = e.series,
            a = e.episodeCode,
            n = e.onReceive,
            l = (0, r.Vd)("animeSynopsisList", {
              limit: 5,
              sort: "asc",
              data: (0, s.k8)({
                category: "ANIME",
                episode: a,
                series: "".concat(o.L[i]),
              }),
            }).result;
          return (
            (0, t.useEffect)(
              function () {
                l &&
                  l.data.anime_synopsis_list &&
                  l.data.anime_synopsis_list[0] &&
                  n(a, l.data.anime_synopsis_list[0]);
              },
              [n, a, l]
            ),
            (0, A.tZ)(A.HY, {})
          );
        };
    },
    26267: function (e, i, a) {
      a.d(i, {
        e: function () {
          return p;
        },
      });
      var n = a(67294),
        t = a(41128),
        r = a(33587),
        o = a(8503),
        s = a(80072),
        l = a(11047),
        c = a(27715),
        u = a(10255),
        d = a(35944),
        p = function (e) {
          var i,
            a = e.category,
            p = e.children,
            m = (0, o.bU)(),
            g = (0, t.Vd)("articleList", {
              start: 0,
              limit: 16,
              data: (0, c.k8)({ category: "NEWS", subcategory: a }),
            }).result,
            h = (0, r.Z)(
              null !==
                (i =
                  null === g || void 0 === g ? void 0 : g.data.article_list) &&
                void 0 !== i
                ? i
                : []
            ).slice(0, 8),
            b = (0, n.useMemo)(
              function () {
                return h.map(function (e) {
                  var i,
                    a,
                    n,
                    r =
                      null !==
                        (i =
                          null === (a = e.categories) ||
                          void 0 === a ||
                          null === (n = a.subcategory) ||
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
                    imgUrl: (0, t.hT)(e.thumbnail),
                    date: (0, l.Am)(e.dspdate, m),
                    path: e.path,
                    isNew: (0, l.e_)(e.startdate, s.E),
                    isPickedUp: (0, l.e_)(e.startdate, s.e) && "1" === e.pickup,
                  };
                });
              },
              [h, m]
            );
          return (0, d.tZ)(d.HY, {
            children: (0, d.tZ)(u.S, { articles: b, children: p }),
          });
        };
    },
    32974: function (e, i, a) {
      a.d(i, {
        V: function () {
          return s;
        },
      });
      var n = a(70917),
        t = a(48710),
        r = a(36443),
        o = a(35944);
      function s(e) {
        var i = e.className,
          a = e.slug,
          s = (e.title, e.ruby, e.run),
          l = void 0 === s || s,
          c = e.scale,
          u = void 0 === c ? "1" : c,
          d = e.h1,
          p = e.long,
          m = void 0 !== p && p,
          g = e.isTwoLines,
          h = void 0 !== g && g,
          b = e.isSmall,
          w = void 0 !== b && b,
          f = "2/3" === u ? 2 / 3 : 1;
        return (0, o.BX)(o.HY, {
          children: [
            d && (0, o.tZ)("h1", { className: "visually-hidden", children: d }),
            (0, o.tZ)(r._, {
              className: i,
              slug: a,
              run: l,
              height: m ? 80 : 80 * f,
              isTwoLine: h,
              isSmall: w,
              css: (0, n.iv)(
                "@media ",
                t.r.media.preTablet,
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
    26948: function (e, i, a) {
      a.d(i, {
        HS: function () {
          return g;
        },
        Sv: function () {
          return d;
        },
        TX: function () {
          return m;
        },
        Vs: function () {
          return u;
        },
        WC: function () {
          return l;
        },
        Yz: function () {
          return n;
        },
        at: function () {
          return c;
        },
        lA: function () {
          return p;
        },
        ol: function () {
          return o;
        },
        rS: function () {
          return s;
        },
        sq: function () {
          return r;
        },
        yj: function () {
          return t;
        },
      });
      var n = {
          naruto1:
            "NARUTO \u5c11\u5e74\u7bc7 | NARUTO SITE\uff08NARUTO -\u30ca\u30eb\u30c8- & BORUTO -\u30dc\u30eb\u30c8-\u30aa\u30d5\u30a3\u30b7\u30e3\u30eb\u30b5\u30a4\u30c8\uff09",
          naruto2:
            "NARUTO \u75be\u98a8\u4f1d | NARUTO SITE\uff08NARUTO -\u30ca\u30eb\u30c8- & BORUTO -\u30dc\u30eb\u30c8-\u30aa\u30d5\u30a3\u30b7\u30e3\u30eb\u30b5\u30a4\u30c8\uff09",
          boruto:
            "BORUTO | NARUTO SITE\uff08NARUTO -\u30ca\u30eb\u30c8- & BORUTO -\u30dc\u30eb\u30c8-\u30aa\u30d5\u30a3\u30b7\u30e3\u30eb\u30b5\u30a4\u30c8\uff09",
        },
        t = {
          naruto1:
            "\u300e\u7d76\u5bfe\u3001\u706b\u5f71\u306b\u306a\u3063\u3066\u3084\u308b\u3093\u3060\u3063\u3066\u3070\u3088\uff01\uff01\u300f\u6728\u30ce\u8449\u306e\u91cc\u306e\u843d\u3061\u3053\u307c\u308c\u5fcd\u8005\u3001\u3046\u305a\u307e\u304d\u30ca\u30eb\u30c8\u306e\u5922\u306f\u3044\u3064\u304b\u91cc\u4e00\u756a\u306e\u5fcd\u8005\u300c\u706b\u5f71\u300d\u306e\u540d\u3092\u53d7\u3051\u7d99\u3050\u4e8b\u3002\u305d\u306e\u8eab\u306b\u5c01\u5370\u3055\u308c\u305f\u5c3e\u7363\u300c\u4e5d\u5c3e\u306e\u5996\u72d0\u300d\u3086\u3048\u306b\u5b64\u72ec\u306a\u904e\u53bb\u3092\u80cc\u8ca0\u3063\u305f\u30ca\u30eb\u30c8\u3060\u304c\u3001\u30b5\u30b9\u30b1\u3068\u30b5\u30af\u30e9\u3068\u3044\u3046\u4ef2\u9593\u3092\u5f97\u3001\u4e0a\u5fcd\u30ab\u30ab\u30b7\u7387\u3044\u308b\u7b2c\u4e03\u73ed\u306e\u4e00\u54e1\u3068\u3057\u3066\u4efb\u52d9\u3092\u30b9\u30bf\u30fc\u30c8\u3055\u305b\u305f!!",
          naruto2:
            "\u3042\u306e\u7d42\u672b\u306e\u8c37\u306e\u6fc0\u95d8\u304b\u3089\u7d04\u4e8c\u5e74\u534a\u2015\u2015\u3002\u81ea\u6765\u4e5f\u3068\u306e\u4fee\u696d\u306e\u65c5\u3092\u7d42\u3048\u3066\u4e45\u3057\u632f\u308a\u306b\u91cc\u306b\u623b\u3063\u305f\u30ca\u30eb\u30c8\u3092\u5f85\u3063\u3066\u3044\u305f\u306e\u306f\u3001\u533b\u7642\u5fcd\u8005\u3068\u3057\u3066\u983c\u3082\u3057\u304f\u6210\u9577\u3057\u305f\u30b5\u30af\u30e9\u3068\u76f8\u5909\u308f\u3089\u305a\u306e\u30ab\u30ab\u30b7\u3002\u305d\u3057\u3066\u6210\u9577\u3092\u9042\u3052\u305f\u304b\u3064\u3066\u306e\u4ef2\u9593\u9054\u3060\u3063\u305f\u3002\u3057\u304b\u3057\u518d\u4f1a\u306e\u559c\u3073\u3082\u3064\u304b\u306e\u9593\u3001\u6728\u30ce\u8449\u306b\u885d\u6483\u306e\u5831\u305b\u304c\u5165\u308b\u3002\u7802\u96a0\u308c\u306e\u98a8\u5f71\u3068\u306a\u3063\u305f\u6211\u611b\u7f85\u304c\u201c\u6681\u201d\u306b\u9023\u308c\u53bb\u3089\u308c\u305f\u306e\u3060\uff01",
          boruto:
            "\u5e73\u548c\u3068\u5171\u306b\u8fd1\u4ee3\u5316\u304c\u9032\u3093\u3060\u6728\u30ce\u8449\u96a0\u308c\u306e\u91cc\u3002\u9ad8\u3044\u30d3\u30eb\u304c\u7acb\u3061\u4e26\u3073\u3001\u5de8\u5927\u30e2\u30cb\u30bf\u30fc\u306b\u306f\u6620\u50cf\u304c\u6d41\u308c\u3001\u533a\u753b\u3068\u533a\u753b\u3092\u7d50\u3076\u96f7\u8eca\u304c\u91cc\u306e\u4e2d\u3092\u8d70\u308a\u629c\u3051\u308b\u3002\u5fcd\u306e\u91cc\u3068\u306f\u3044\u3048\u4e00\u822c\u306e\u4eba\u304c\u5897\u3048\u3001\u5fcd\u306e\u751f\u304d\u65b9\u3082\u5909\u308f\u308a\u3064\u3064\u3042\u308b\u305d\u3093\u306a\u6642\u4ee3\u2015\u91cc\u306e\u30ea\u30fc\u30c0\u30fc\u3001\u4e03\u4ee3\u76ee\u706b\u5f71\u30fb\u3046\u305a\u307e\u304d\u30ca\u30eb\u30c8\u306e\u606f\u5b50\u3067\u3042\u308b\u30dc\u30eb\u30c8\u306f\u3001\u5fcd\u8005\u3092\u80b2\u3066\u308b\u5b66\u6821\u201d\u5fcd\u8005\u5b66\u6821(\u30a2\u30ab\u30c7\u30df\u30fc)\u201d\u306b\u5165\u5b66\u3059\u308b\u3002",
        },
        r = {
          naruto1: "NARUTO | NARUTO & BORUTO SITE",
          naruto2: "NARUTO: SHIPPUDEN | NARUTO & BORUTO SITE",
          boruto: "BORUTO | NARUTO & BORUTO SITE",
        },
        o = {
          naruto1:
            "\u201cI will become Hokage... Believe it!\u201d Naruto Uzumaki, long shunned by his village, starts a new journey as part of Team 7 with Sasuke, Sakura, and Kakashi!",
          naruto2:
            "Naruto returns from training with Jiraiya and is reunited with Sakura and Kakashi. But there's no time to celebrate as shocking news reaches the village...",
          boruto:
            "The Hidden Leaf has entered an era of peace and modernization. While Naruto leads the village as the Seventh Hokage, his son Boruto begins his own journey...",
        },
        s = {
          naruto1: "NARUTO | NARUTO SITE OFFICIEL (NARUTO & BORUTO)",
          naruto2: "NARUTO SHIPPUDEN | NARUTO SITE OFFICIEL (NARUTO & BORUTO)",
          boruto: "BORUTO | NARUTO SITE OFFICIEL (NARUTO & BORUTO)",
        },
        l = {
          naruto1:
            '"Un jour, je deviendrai Hokage, moi aussi !" Naruto Uzumaki, ninja rat\xe9 de Konoha, forme avec Sasuke et Sakura l\'\xc9quipe 7, dirig\xe9e par Kakashi !',
          naruto2:
            "Naruto rentre au village apr\xe8s avoir achev\xe9 sa formation et retrouve ses camarades. La joie est de courte dur\xe9e : de terribles nouvelles parviennent \xe0 Konoha.",
          boruto:
            "Konoha se modernise dans une \xe8re de paix. Le mode de vie des shinobis est en train de changer. Boruto, fils du 7e Hokage Naruto, entre \xe0 l'Acad\xe9mie Ninja.",
        },
        c = {
          naruto1: "NARUTO | NARUTO OFFIZIELLE WEBSEITE (NARUTO & BORUTO)",
          naruto2:
            "Naruto Shippuden | NARUTO OFFIZIELLE WEBSEITE (NARUTO & BORUTO)",
          boruto: "BORUTO | NARUTO OFFIZIELLE WEBSEITE (NARUTO & BORUTO)",
        },
        u = {
          naruto1:
            "Naruto tr\xe4umt davon, Hokage zu werden! Nach einer einsamen Kindheit beginnt schlie\xdflich sein Abenteuer mit Sasuke, Sakura und Kakashi!",
          naruto2:
            "Naruto kehrt nach seinem Training nach Konoha zur\xfcck, wo seine Freunde schon auf ihn warten. Die Freude w\xe4hrt nur kurz ...",
          boruto:
            'Nachdem Konoha modernisiert wurde, leben dort immer mehr gew\xf6hnliche Menschen. Boruto, Narutos Sohn tritt in die "Ninja-Akademie" ein.',
        },
        d = {
          naruto1: "NARUTO | SITIO OFICIAL DE NARUTO (NARUTO & BORUTO)",
          naruto2:
            "NARUTO SHIPPUDEN | SITIO OFICIAL DE NARUTO (NARUTO & BORUTO)",
          boruto: "BORUTO | SITIO OFICIAL DE NARUTO (NARUTO & BORUTO)",
        },
        p = {
          naruto1:
            "El sue\xf1o de Naruto Uzumaki, un ninja de Konoha, es convertirse en Hokage. Junto a sus compa\xf1eros del Equipo 7, Sasuke y Sakura, \xa1emprende una nueva misi\xf3n!",
          naruto2:
            "Naruto regresa a Konoha despu\xe9s de su largo viaje y se encuentra con Sakura, Kakashi y otros compa\xf1eros. La alegr\xeda se desvanece por una noticia impactante.",
          boruto:
            "La paz ha llegado a Konoha, y con ella, un r\xe1pido desarrollo. Boruto, el hijo del S\xe9ptimo Hokage, Naruto Uzumaki, ingresa en la Academia Ninja.",
        },
        m = {
          naruto1: "Naruto | SITO UFFICIALE DI NARUTO (NARUTO & BORUTO)",
          naruto2:
            "Naruto Shippuden | SITO UFFICIALE DI NARUTO (NARUTO & BORUTO)",
          boruto: "Boruto | SITO UFFICIALE DI NARUTO (NARUTO & BORUTO)",
        },
        g = {
          naruto1:
            'Il ninja reietto e piantagrane Naruto Uzumaki parte con i suoi amici Sasuke, Sakura e Kakashi del Team 7 per inseguire il suo sogno di diventare "Hokage".',
          naruto2:
            "Naruto e Jiraiya ritornano a Konoha dopo due anni e mezzo. Ad attenderli ci sono Sakura, Kakashi e gli altri ninja, ma presto anche una terribile notizia...",
          boruto:
            "La pace regna sovrana su Konoha, e porta con s\xe9 la modernit\xe0. Il figlio del settimo Hokage Naruto Uzumaki, Boruto, si iscrive all' accademia ninja.",
        };
    },
    89660: function (e, i, a) {
      a.d(i, {
        A: function () {
          return t;
        },
        L: function () {
          return n;
        },
      });
      var n = {
          boruto: "boruto",
          naruto1: "naruto-shounen",
          naruto2: "naruto-shippu",
        },
        t = {
          boruto: "boruto",
          "naruto-shounen": "naruto1",
          "naruto-shippu": "naruto2",
        };
    },
  },
]);
