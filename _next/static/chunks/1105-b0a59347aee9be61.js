"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1105],
  {
    72462: function (e, t, i) {
      i.d(t, {
        E: function () {
          return O;
        },
      });
      var n = i(70917),
        r = i(67294),
        o = i(22451),
        s = i(48710),
        a = i(10255),
        c = i(59499),
        l = i(16835),
        p = i(8503),
        d = i(77340),
        u = i(87516),
        f = i(73205),
        h = i(18714),
        m = i(35944);
      function b(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      var v = { name: "18xxtsz", styles: "position:relative;margin-left:10px" },
        y = { name: "1s7za1j", styles: "position:relative;margin-right:10px" },
        g = { name: "1d3w5wq", styles: "width:100%" };
      function x(e) {
        var t = e.articles,
          i = r.useRef(null),
          a = (0, o.YD)(i),
          x = r.useRef(null),
          j = r.useState(0),
          k = (0, l.Z)(j, 2),
          O = k[0],
          Z = k[1],
          E = O <= 0,
          P = O >= 1,
          z = (0, p.bU)(),
          S = (0, r.useMemo)(
            function () {
              return t.length;
            },
            [t.length]
          );
        r.useEffect(
          function () {
            var e;
            null === (e = x.current) || void 0 === e || e.on("position", Z);
          },
          [O]
        );
        var T = (0, n.iv)(
          "display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border:2px solid white;&:disabled{opacity:0.1;}&:not(:disabled){cursor:pointer;stroke:white;&:active{background:white;stroke:black;}@media ",
          s.r.media.postPhone,
          "{&:not(:disabled){}&:hover{background:white;stroke:black;}}}",
          ""
        );
        return (0, m.BX)("div", {
          ref: i,
          css: g,
          children: [
            (0, m.tZ)("div", {
              css: (0, n.iv)(
                "height:310px;margin:0 -10px;opacity:0;transition:transform 0.5s,opacity 0.5s;transform:translateX(50px);",
                a &&
                  "\n            opacity: 1;\n            transform: translateX(0);\n          ",
                "@media ",
                s.r.media.preTablet,
                "{height:259px;margin:0 -5px;}",
                ""
              ),
              children: (0, m.tZ)(f.c, {
                ref: x,
                children:
                  null === t || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return (0, m.tZ)(
                          u.e,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var i = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? b(Object(i), !0).forEach(function (t) {
                                    (0, c.Z)(e, t, i[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(i)
                                  )
                                : b(Object(i)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(i, t)
                                    );
                                  });
                            }
                            return e;
                          })({}, e),
                          e.id
                        );
                      }),
              }),
            }),
            (0, m.BX)(d.W, {
              css: (0, n.iv)(
                "display:flex;justify-content:space-between;margin-top:24px;opacity:0;transition:transform 0.5s,opacity 0.5s;transform:translateY(50px);",
                a &&
                  "\n            opacity: 1;\n            transform: none;\n          ",
                "@media ",
                s.r.media.prePhone,
                "{justify-content:center;}",
                ""
              ),
              children: [
                (0, m.tZ)(h.f, {
                  href: "/news",
                  icon: "kunai",
                  css: (0, n.iv)(
                    w[z].style,
                    "@media ",
                    s.r.media.preTablet,
                    "{width:269px;height:46px;}",
                    ""
                  ),
                  children: w[z].word,
                }),
                (0, m.BX)("div", {
                  css: (0, n.iv)(
                    "@media ",
                    s.r.media.preTablet,
                    "{display:none;}",
                    ""
                  ),
                  children: [
                    (0, m.tZ)("button", {
                      onClick: function () {
                        x.current && x.current.toPrev();
                      },
                      disabled: E || S < 4,
                      css: [T, y, "", ""],
                      children: (0, m.tZ)("svg", {
                        width: "12",
                        height: "16",
                        strokeWidth: "2",
                        fill: "none",
                        children: (0, m.tZ)("polyline", {
                          points: "11 1, 1 8, 11 15",
                        }),
                      }),
                    }),
                    (0, m.tZ)("button", {
                      onClick: function () {
                        x.current && x.current.toNext();
                      },
                      disabled: P || S < 4,
                      css: [T, v, "", ""],
                      children: (0, m.tZ)("svg", {
                        width: "12",
                        height: "16",
                        strokeWidth: "2",
                        fill: "none",
                        children: (0, m.tZ)("polyline", {
                          points: "1 1, 11 8, 1 15",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var w = {
        ja: {
          word: "\u3082\u3063\u3068\u898b\u308b",
          style: (0, n.iv)(
            "font-size:18px;@media ",
            s.r.media.preTablet,
            "{font-size:20px;}",
            ""
          ),
        },
        en: {
          word: "MORE COMING SOON",
          style: (0, n.iv)(
            "font-size:24px;@media ",
            s.r.media.preTablet,
            "{font-size:26px;}",
            ""
          ),
        },
        fr: {
          word: "Voir plus",
          style: (0, n.iv)(
            "font-size:24px;@media ",
            s.r.media.preTablet,
            "{font-size:26px;}",
            ""
          ),
        },
        de: {
          word: "MEHR ANSEHEN",
          style: { name: "j7349j", styles: "font-size:28px" },
        },
        es: {
          word: "VER M\xc1S",
          style: { name: "j7349j", styles: "font-size:28px" },
        },
        it: {
          word: "SCOPRI DI PI\xd9",
          style: { name: "j7349j", styles: "font-size:28px" },
        },
      };
      var j = {
          name: "19tcabd",
          styles:
            "position:relative;z-index:0;padding:60px 0;overflow:hidden;background:black",
        },
        k = { name: "eivff4", styles: "display:none" },
        O = function (e) {
          var t = e.topicsComponent,
            i = e.bgImgSrc,
            c = (0, a.u)(),
            l = r.useRef(null),
            p = (0, o.YD)(l);
          return (0, m.BX)("div", {
            ref: l,
            css: [0 === c.length && k, j, "", ""],
            children: [
              (0, m.tZ)("div", {
                css: (0, n.iv)(
                  "position:absolute;top:0;right:0;bottom:0;left:0;background:url(",
                  i,
                  ") no-repeat center/cover;opacity:0;transition:opacity 0.5s;",
                  p && "opacity: 1;",
                  ";",
                  ""
                ),
              }),
              (0, m.tZ)("div", {
                css: (0, n.iv)(
                  "position:relative;padding-left:calc(max((100vw - 1090px) / 2, 34px));margin-bottom:43px;@media ",
                  s.r.media.preTablet,
                  "{margin-bottom:30px;}",
                  ""
                ),
                children: t,
              }),
              (0, m.tZ)(x, { articles: c }),
            ],
          });
        };
    },
    86090: function (e, t, i) {
      i.d(t, {
        E: function () {
          return a;
        },
      });
      var n = i(70917),
        r = i(48710),
        o = i(36443),
        s = i(35944);
      function a(e) {
        var t = e.slug;
        return (0, s.tZ)(o._, {
          slug: t,
          height: "68.74",
          css: (0, n.iv)(
            "@media ",
            r.r.media.preTablet,
            "{--brush-height:40px;}",
            ""
          ),
        });
      }
    },
  },
]);
