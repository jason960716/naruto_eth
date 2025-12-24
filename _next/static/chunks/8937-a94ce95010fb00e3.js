(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8937],
  {
    78e3: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AmpStateContext = void 0);
      var r = (0, n(92648).Z)(n(67294)).default.createContext({});
      e.AmpStateContext = r;
    },
    9470: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isInAmpMode = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.ampFirst,
            n = void 0 !== e && e,
            r = t.hybrid,
            i = void 0 !== r && r,
            o = t.hasQuery,
            a = void 0 !== o && o;
          return n || (i && a);
        });
    },
    72717: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.defaultHead = l),
        (e.default = void 0);
      var r = n(6495).Z,
        i = n(92648).Z,
        o = (0, n(91598).Z)(n(67294)),
        a = i(n(11585)),
        c = n(78e3),
        s = n(15850),
        u = n(9470);
      n(99475);
      function l() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function d(t, e) {
        return "string" === typeof e || "number" === typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(function (
                t,
                e
              ) {
                return "string" === typeof e || "number" === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      var f = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(t, e) {
        var n = e.inAmpMode;
        return t
          .reduce(d, [])
          .reverse()
          .concat(l(n).reverse())
          .filter(
            (function () {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                r = {};
              return function (i) {
                var o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" !== typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var c = i.key.slice(i.key.indexOf("$") + 1);
                  t.has(c) ? (o = !1) : t.add(c);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    e.has(i.type) ? (o = !1) : e.add(i.type);
                    break;
                  case "meta":
                    for (var s = 0, u = f.length; s < u; s++) {
                      var l = f[s];
                      if (i.props.hasOwnProperty(l))
                        if ("charSet" === l) n.has(l) ? (o = !1) : n.add(l);
                        else {
                          var d = i.props[l],
                            h = r[l] || new Set();
                          ("name" === l && a) || !h.has(d)
                            ? (h.add(d), (r[l] = h))
                            : (o = !1);
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (t, e) {
            var i = t.key || e;
            if (
              !n &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (e) {
                return t.props.href.startsWith(e);
              })
            ) {
              var a = r({}, t.props || {});
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                o.default.cloneElement(t, a)
              );
            }
            return o.default.cloneElement(t, { key: i });
          });
      }
      var E = function (t) {
        var e = t.children,
          n = o.useContext(c.AmpStateContext),
          r = o.useContext(s.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: h,
            headManager: r,
            inAmpMode: u.isInAmpMode(n),
          },
          e
        );
      };
      (e.default = E),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    11585: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          var e = t.headManager,
            n = t.reduceComponentsToState;
          function c() {
            if (e && e.mountedInstances) {
              var i = r.Children.toArray(
                Array.from(e.mountedInstances).filter(Boolean)
              );
              e.updateHead(n(i, t));
            }
          }
          if (i) {
            var s;
            null == e || null == (s = e.mountedInstances) || s.add(t.children),
              c();
          }
          return (
            o(function () {
              var n;
              return (
                null == e ||
                  null == (n = e.mountedInstances) ||
                  n.add(t.children),
                function () {
                  var n;
                  null == e ||
                    null == (n = e.mountedInstances) ||
                    n.delete(t.children);
                }
              );
            }),
            o(function () {
              return (
                e && (e._pendingUpdate = c),
                function () {
                  e && (e._pendingUpdate = c);
                }
              );
            }),
            a(function () {
              return (
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null)),
                function () {
                  e &&
                    e._pendingUpdate &&
                    (e._pendingUpdate(), (e._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, n(91598).Z)(n(67294));
      var i = !1,
        o = i ? function () {} : r.useLayoutEffect,
        a = i ? function () {} : r.useEffect;
    },
    16688: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return h;
        },
      });
      var r = n(70917),
        i = n(48710),
        o = n(37868),
        a = n(78578),
        c = n(35944);
      var s = { name: "n0vgbu", styles: "font-family:var(--comic-font)" },
        u = {
          name: "seowml",
          styles:
            "height:calc(16 * var(--px));font-family:var(--impact-font);font-size:calc(16 * var(--px));line-height:calc(16 * var(--px));color:black;white-space:pre",
        },
        l = { name: "n0vgbu", styles: "font-family:var(--comic-font)" },
        d = { name: "3ijxgo", styles: "font-size:calc(16 * var(--px))" },
        f = {
          name: "1wlm32u",
          styles:
            "display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;height:fit-content;text-align:right",
        };
      function h(t) {
        var e = t.className,
          n = (0, r.iv)(
            "display:inline-block;padding:0 calc(3 * var(--px));overflow:hidden;font-family:var(--impact-font);font-size:calc(16 * var(--px));line-height:calc(21 * var(--px));color:black;text-decoration:underline;text-overflow:ellipsis;white-space:nowrap;background:#fff;@media ",
            i.r.media.preTablet,
            "{--px:1px;}",
            ""
          );
        return (0, c.BX)("div", {
          className: e,
          css: f,
          children: [
            (0, c.tZ)(o.Z, {
              href: "/",
              children: (0, c.tZ)("a", {
                css: [n, d, "", ""],
                children: (0, c.tZ)(a.I, {
                  ja: (0, c.tZ)(c.HY, {
                    children: (0, c.tZ)("span", {
                      css: l,
                      children: "\u30c8\u30c3\u30d7",
                    }),
                  }),
                  en: "TOP",
                  fr: "ACCUEIL",
                  de: "TOP",
                  es: "INICIO",
                  it: "HOME",
                }),
              }),
            }),
            (0, c.BX)("span", { css: u, children: [" ", "/", " "] }),
            (0, c.tZ)(o.Z, {
              href: "/about",
              children: (0, c.tZ)("a", {
                css: n,
                children: (0, c.tZ)(a.I, {
                  ja: (0, c.BX)(c.HY, {
                    children: [
                      (0, c.tZ)("span", { children: "NARUTO" }),
                      " ",
                      (0, c.tZ)("span", { css: s, children: "\u3068\u306f" }),
                    ],
                  }),
                  en: "ABOUT NARUTO",
                  de: "\xdcBER NARUTO",
                  fr: "HISTOIRE",
                  es: "SOBRE NARUTO",
                  it: "COS\u2019\xc8 NARUTO",
                }),
              }),
            }),
          ],
        });
      }
    },
    35474: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return i;
        },
      });
      n(67294);
      var r = n(35944);
      function i(t) {
        var e = t.children;
        return (0, r.tZ)("div", { children: e });
      }
    },
    97113: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return i;
        },
      });
      n(67294);
      var r = n(35944);
      function i(t) {
        var e = t.children;
        return (0, r.tZ)("div", {
          style: {
            width: "calc(1280 * var(--px))",
            margin: "auto",
            position: "relative",
          },
          children: e,
        });
      }
    },
    96962: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return s;
        },
      });
      var r = n(70917),
        i = n(67294),
        o = n(22451),
        a = n(35944);
      var c = {
        name: "1kv1qof",
        styles:
          "position:absolute;right:0;bottom:0;left:0;width:100%;height:calc(768 * var(--px));background:black",
      };
      function s(t) {
        var e = t.src,
          n = i.useRef(null),
          s = (0, o.YD)(n);
        return (0, a.tZ)("div", {
          ref: n,
          css: c,
          children: (0, a.tZ)("img", {
            src: e,
            css: (0, r.iv)(
              "width:100%;height:100%;clip-path:",
              s
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              ";transition:clip-path 1s;object-fit:cover;",
              ""
            ),
            alt: "",
          }),
        });
      }
    },
    60770: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return c;
        },
      });
      var r = n(70917),
        i = n(67294),
        o = n(22451),
        a = n(35944);
      function c() {
        var t = i.useRef(null),
          e = (0, o.YD)(t);
        return (0, a.tZ)("img", {
          ref: t,
          src: "/about/story/naruto/29/cell_n.webp",
          alt: "",
          css: (0, r.iv)(
            {
              position: "absolute",
              left: "calc(".concat(100, " * var(--px))"),
              top: "calc(".concat(3940, " * var(--px))"),
              width: "calc(".concat(1080, " * var(--px))"),
              height: "calc(".concat(388, " * var(--px))"),
              zIndex: 2,
              clipPath: e
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              transition: "clip-path ease-in 0.5s",
            },
            "",
            ""
          ),
        });
      }
    },
    2653: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return f;
        },
      });
      var r = n(71383),
        i = n(70917),
        o = n(67294),
        a = n(22451),
        c = n(35944);
      var s = { name: "1dk0v5d", styles: "z-index:2" };
      function u(t, e) {
        var n = t.x,
          r = t.y,
          i = t.width,
          o = t.height,
          a = t.src,
          u = t.className;
        return (0, c.tZ)("img", {
          ref: e,
          className: u,
          src: a,
          style: {
            position: "absolute",
            left: "calc(".concat(n, " * var(--px))"),
            top: "calc(".concat(r, " * var(--px))"),
            width: "calc(".concat(i, " * var(--px))"),
            height: "calc(".concat(o, " * var(--px))"),
          },
          css: s,
          alt: "",
        });
      }
      var l,
        d = o.forwardRef(u);
      function f() {
        var t = o.useRef(null),
          e = (0, a.YD)(t),
          n = (0, a.rS)(t),
          s = Math.max(Math.min(1 - n, 1), 0);
        return (0, c.tZ)(d, {
          ref: t,
          src: "/about/story/naruto/29/cell_o.webp",
          x: 390,
          y: 4408,
          width: 500,
          height: 749.41,
          css: (0, i.iv)(
            "filter:sepia(",
            s,
            ");opacity:0;transform:translateY(100px);",
            e
              ? (0, i.iv)(
                  "animation:forwards 1s ",
                  (0, i.F4)(
                    l ||
                      (l = (0, r.Z)([
                        "\n            to {\n              opacity: 1;\n              transform: none;\n            }\n          ",
                      ]))
                  ),
                  ";",
                  ""
                )
              : "",
            ";",
            ""
          ),
        });
      }
    },
    54074: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return s;
        },
      });
      var r = n(70917),
        i = n(67294),
        o = n(22451),
        a = n(35944);
      var c = {
        name: "ah9dla",
        styles:
          "position:absolute;right:0;bottom:0;left:0;width:100%;height:100vh;background:black",
      };
      function s() {
        var t = i.useRef(null),
          e = (0, o.YD)(t);
        return (0, a.tZ)("div", {
          ref: t,
          css: c,
          children: (0, a.tZ)("img", {
            src: "/about/story/naruto/29/cutin.webp",
            css: (0, r.iv)(
              "width:100%;height:100%;clip-path:",
              e ? "circle(100%)" : "circle(0)",
              ";transition:clip-path var(--ease-in-out-quart) 2s;object-fit:cover;",
              ""
            ),
            alt: "",
          }),
        });
      }
    },
    67131: function (t, e, n) {
      "use strict";
      n.d(e, {
        n: function () {
          return a;
        },
      });
      n(67294);
      var r = n(56406),
        i = n(35944);
      var o = {
        name: "gmye0q",
        styles: "height:calc(5277 * var(--px) + 100vh)",
      };
      function a(t) {
        var e = t.loads,
          n = t.children;
        return (0, i.tZ)(r.x, {
          fill: "naruto",
          height: 5277,
          load: e,
          css: o,
          children: n,
        });
      }
    },
    72422: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return c;
        },
      });
      var r = n(70917),
        i = n(67294),
        o = n(22451),
        a = n(35944);
      function c(t) {
        var e = t.top,
          n = t.bottom,
          c = t.height,
          s = void 0 === c ? 280 : c,
          u = t.src,
          l = i.useRef(null),
          d = (0, o.YD)(l),
          f = void 0 === e && void 0 === n ? 0 : n;
        return (0, a.tZ)("div", {
          ref: l,
          css: (0, r.iv)(
            "position:absolute;",
            void 0 !== e && "top: calc(".concat(e, " * var(--px));"),
            " right:0;",
            void 0 !== f && "bottom: calc(".concat(f, " * var(--px));"),
            " left:0;z-index:2;display:flex;align-items:center;justify-content:center;height:calc(",
            s,
            " * var(--px));clip-path:",
            d
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            ";background:black;transition:clip-path ease-in 0.3s;",
            ""
          ),
          children: (0, a.tZ)("img", {
            src: u,
            style: {
              height: "calc(280 * var(--px))",
              opacity: d ? 1 : 0,
              transition: "opacity linear 1s 0.3s",
            },
            alt: "",
          }),
        });
      }
    },
    71230: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return nt;
        },
      });
      var r = n(16835),
        i = n(70917),
        o = n(67294),
        a = n(77865),
        c = n(48710),
        s = n(65313),
        u = n(73938),
        l = n(95541),
        d = n(41664),
        f = n.n(d),
        h = n(43077),
        E = n(78578),
        A = n(35944);
      var p = {
          name: "1f174z2",
          styles:
            "display:flex;justify-content:space-between;width:192px;margin:40px auto 0;&:lang(en){width:277px;}&:lang(fr){width:337px;}&:lang(de){width:360px;}&:lang(es){width:307px;}&:lang(it){width:325px;}",
        },
        v = { name: "nkt64x", styles: "margin-right:10px" },
        S = {
          name: "1e4vlvn",
          styles:
            "display:flex;align-items:center;justify-content:center;width:100%;max-width:575px;padding:17px;margin:auto;font-family:var(--comic-impact-font);text-align:center;border:3px solid #ffce00;&:not(:lang(ja)){font-size:24px;}",
        },
        I = {
          name: "1gq3bqw",
          styles:
            "position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:0 24px;background:rgb(0 0 0 / 70%);backdrop-filter:blur(16px)",
        },
        N = {
          name: "1bg3m49",
          styles:
            "position:absolute;right:0;left:0;width:min(100vw, 1280px);height:100%;margin:auto;background:url('/about/story/screen.webp') center top/cover",
        },
        m = {
          name: "1pn1sgy",
          styles:
            "display:inline-flex;align-items:center;justify-content:center;width:86px;height:40px;font-family:var(--comic-impact-font);font-size:18px;line-height:40px;color:black;text-align:center;cursor:pointer;background:white;border:2px solid black;&:not(:lang(ja)){padding-top:2px;font-size:24px;}&:lang(en){width:128px;}&:lang(fr){width:158px;}&:lang(de){width:174px;}&:lang(es){width:136px;}&:lang(it){width:152px;}",
        };
      function g(t) {
        var e = t.onPermit,
          n = o.useState(!1),
          a = (0, r.Z)(n, 2),
          c = a[0],
          s = a[1],
          u = (0, h.m)();
        o.useEffect(
          function () {
            return (
              u(!0),
              function () {
                return u(!1);
              }
            );
          },
          [u]
        );
        var l = m;
        return (0, A.BX)("div", {
          css: (0, i.iv)(
            "position:fixed;top:0;right:0;bottom:0;left:0;display:",
            c ? "none" : "block",
            ";color:white;background:#fa0;",
            ""
          ),
          children: [
            (0, A.tZ)("div", { css: N }),
            (0, A.tZ)("div", {
              css: I,
              children: (0, A.BX)("div", {
                children: [
                  (0, A.BX)("div", {
                    css: S,
                    children: [
                      (0, A.tZ)("img", {
                        src: "/about/story/alert.svg",
                        alt: "",
                        css: v,
                      }),
                      (0, A.tZ)(E.I, {
                        ja: "\u3010\u6ce8\u610f\u3011\u3053\u306e\u5148\u3001\u7269\u8a9e\u306e\u6838\u5fc3\u306b\u89e6\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u3042\u308a\u307e\u3059\uff01",
                        en: "[Warning] This page contains spoilers!",
                        fr: "[Attention] Cette page contient des spoilers !",
                        de: "[Warnung] Diese Seite enth\xe4lt Spoiler!",
                        es: "[Advertencia] \xa1Esta p\xe1gina contiene spoilers!",
                        it: "[Attenzione] Contiene spoiler!",
                      }),
                    ],
                  }),
                  (0, A.BX)("div", {
                    css: p,
                    children: [
                      (0, A.tZ)(f(), {
                        href: "/",
                        children: (0, A.tZ)("a", {
                          css: l,
                          children: (0, A.tZ)(E.I, {
                            ja: "\u30c8\u30c3\u30d7\u3078",
                            en: "RETURN tO TOP",
                            fr: "RETOUR \xc0 L\u2019ACCUEIL",
                            de: "Zur\xfcck zum anfang",
                            es: "VOLVER A INICIO",
                            it: "TORNA ALLA HOME",
                          }),
                        }),
                      }),
                      (0, A.tZ)("button", {
                        css: l,
                        onClick: function () {
                          s(!0), u(!1), e();
                        },
                        children: (0, A.tZ)(E.I, {
                          fr: "OUI",
                          de: "OK",
                          es: "OK",
                          it: "OK",
                          children: "OK",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var T = n(16688),
        O = n(41128),
        b = n(33587),
        R = n(8503),
        L = n(27715),
        Z = n(26184),
        x = n(37868),
        y = n(3911),
        U = n(94279);
      var C = {
          name: "3c5zhf",
          styles:
            "margin-right:0.25em;font-family:var(--impact-font);font-size:20px",
        },
        D = {
          name: "1e5bdr5",
          styles:
            "width:100%;padding:10px 15px;font-family:var(--comic-impact-font);text-align:left;cursor:pointer",
        };
      function H(t) {
        var e = t.no,
          n = t.series,
          r = t.title,
          o = t.active,
          a = t.onSelect;
        return (0, A.tZ)("li", {
          css: (0, i.iv)(
            "border-bottom:1px solid #555;",
            o
              ? "naruto" === n
                ? "color: var(--naruto-color);"
                : "color: var(--boruto-color);"
              : "",
            ";",
            ""
          ),
          children: (0, A.BX)("button", {
            css: D,
            onClick: a,
            children: [(0, A.tZ)("span", { css: C, children: e }), r],
          }),
        });
      }
      function w(t) {
        if (!t) return ["naruto", 1];
        var e = t.split("."),
          n = (0, r.Z)(e, 2);
        return [n[0], +n[1]];
      }
      var M = { name: "1l4wtac", styles: "color:var(--boruto-color)" },
        B = { name: "5gm0m1", styles: "color:var(--naruto-color)" },
        k = {
          name: "11sr1vm",
          styles:
            "padding:0 15px;margin-top:35px;font-family:var(--impact-font);font-size:32px;line-height:1",
        };
      function j(t) {
        var e = t.expanded,
          n = t.collapse,
          r = (0, U.r)(),
          o = (0, R.bU)(),
          a = k;
        return (0, A.BX)("div", {
          css: (0, i.iv)(
            "position:fixed;top:0;right:0;bottom:0;left:0;z-index:3;pointer-events:",
            e ? "auto" : "none",
            ";--naruto-color:#f99327;--boruto-color:#ff2f92;",
            ""
          ),
          children: [
            (0, A.tZ)("div", {
              css: (0, i.iv)(
                "position:absolute;top:0;right:0;bottom:0;left:0;background:rgb(0 0 0 / 70%);opacity:",
                e ? 1 : 0,
                ";transition:opacity 0.25s;",
                ""
              ),
              onClick: n,
              "aria-hidden": !0,
            }),
            (0, A.BX)("div", {
              css: (0, i.iv)(
                "position:absolute;top:0;right:0;bottom:0;width:540px;padding:0 60px 35px 0;overflow:auto;color:white;background:black;transform:",
                e ? "none" : "translateX(100%)",
                ";",
                e
                  ? "\n            transition: transform 0.25s 0.25s;\n          "
                  : "\n            transition: transform 0.25s;\n          ",
                "@media ",
                c.r.media.preTablet,
                "{width:100%;}",
                ""
              ),
              children: [
                (0, A.tZ)("div", {
                  css: [a, B, "", ""],
                  children: "NARUTO STORY",
                }),
                (0, A.BX)("ul", {
                  children: [
                    (0, A.tZ)(H, {
                      no: "01",
                      title: (0, E.J)(o, {
                        ja: "\u9023\u8f09\u958b\u59cb!",
                        en: "NARUTO BEGINS!",
                        fr: "LE D\xc9BUT DE NARUTO !",
                        de: "Wie alles begann!",
                        es: "INICIO DE LA SERIE",
                        it: "L\u2019 INIZIO!",
                      }),
                      series: "naruto",
                      active: "naruto.01" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.01");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "02",
                      title: (0, E.J)(o, {
                        ja: "\u6ce2\u306e\u56fd\u4efb\u52d9",
                        en: "MISSION IN THE LAND OF WAVES",
                        fr: "LA MISSION AU PAYS DES VAGUES",
                        de: "Mission im Land der Wellen",
                        es: "MISI\xd3N EN EL PA\xcdS DE LAS OLAS",
                        it: "NEL PAESE DELLE ONDE!",
                      }),
                      series: "naruto",
                      active: "naruto.02" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.02");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "03",
                      title: (0, E.J)(o, {
                        ja: "\u4e2d\u5fcd\u8a66\u9a13",
                        en: "THE CHUNIN EXAM",
                        fr: "L\u2019EXAMEN DES CHUNIN",
                        de: "Die Chunin-Pr\xfcfung",
                        es: "EL EXAMEN CHUNIN",
                        it: "L\u2019 ESAME CHUNIN",
                      }),
                      series: "naruto",
                      active: "naruto.03" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.03");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "04",
                      title: (0, E.J)(o, {
                        ja: "\u6ce2\u4e71\uff01\u6728\u30ce\u8449\u5d29\u3057\uff01",
                        en: "THE DESTRUCTION OF THE HIDDEN LEAF VILLAGE",
                        fr: "L\u2019AN\xc9ANTISSEMENT DE KONOHA !",
                        de: "Konoha in Gefahr!",
                        es: "\xa1LA CA\xcdDA DE KONOHA!",
                        it: "LA CADUTA DI KONOHA!",
                      }),
                      series: "naruto",
                      active: "naruto.04" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.04");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "05",
                      title: (0, E.J)(o, {
                        ja: "\u201c\u6681\u201d\u6765\u8972\uff01",
                        en: "INVASION OF AKATSUKI!",
                        fr: "L\u2019ASSAUT DE L\u2019 \xab AKATSUKI \xbb !",
                        de: "\u201cAkatsuki\u201d greift an!",
                        es: "\xa1INVASI\xd3N DE \u201cAKATSUKI\u201d !",
                        it: "ARRIVA \u201cALBA\u201d !",
                      }),
                      series: "naruto",
                      active: "naruto.05" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.05");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "06",
                      title: (0, E.J)(o, {
                        ja: "\u6fc0\u7a81\uff01\u4f1d\u8aac\u306e\u4e09\u5fcd",
                        en: "CLASH! THE LEGENDARY SANNIN",
                        fr: "LES TROIS SANNIN L\xc9GENDAIRES",
                        de: "Die legend\xe4ren Sannin",
                        es: "LOS LEGENDARIOS SANNIN",
                        it: "I TRE NINJA LEGGENDARI",
                      }),
                      series: "naruto",
                      active: "naruto.06" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.06");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "07",
                      title: (0, E.J)(o, {
                        ja: "\u30b5\u30b9\u30b1 \u6728\u30ce\u8449\u596a\u56de\u4efb\u52d9\u958b\u59cb!",
                        en: "MISSION: BRING BACK SASUKE!",
                        fr: "LA MISSION DE R\xc9CUP\xc9RATION DE SASUKE D\xc9BUTE !",
                        de: "DIE SASUKE-RETTUNGSMISSION BEGINNT!",
                        es: "\xa1MISI\xd3N: RECUPERAR A SASUKE!",
                        it: "OBBIETTIVO: RECUPERARE SASUKE!",
                      }),
                      series: "naruto",
                      active: "naruto.07" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.07");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "08",
                      title: (0, E.J)(o, {
                        ja: "\u82e5\u304d\u30ab\u30ab\u30b7\u306e\u7269\u8a9e",
                        en: "Kakashi Chronicles: A Boy\u2019s Life on the Battlefield",
                        fr: "LE PASS\xc9 DE KAKASHI",
                        de: "Kakashis Geschichte",
                        es: "LA HISTORIA DEL JOVEN KAKASHI",
                        it: "LA STORIA DI KAKASHI",
                      }),
                      series: "naruto",
                      active: "naruto.08" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.08");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "09",
                      title: (0, E.J)(o, {
                        ja: "\u305d\u308c\u305e\u308c\u306e\u6210\u9577",
                        en: "GROWTH",
                        fr: "CHACUN A PROGRESS\xc9",
                        de: "Fortschritte",
                        es: "CRECIMIENTO",
                        it: "CRESCERE",
                      }),
                      series: "naruto",
                      active: "naruto.09" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.09");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "10",
                      title: (0, E.J)(o, {
                        ja: "\u5927\u86c7\u4e38\u3068\u30b5\u30b9\u30b1\u306e\u6fc0\u95d8",
                        en: "OROCHIMARU VS SASUKE",
                        fr: "DUEL F\xc9ROCE ENTRE OROCHIMARU ET SASUKE",
                        de: "Orochimaru vs. Sasuke",
                        es: "OROCHIMARU CONTRA SASUKE",
                        it: "OROCHIMARU E SASUKE",
                      }),
                      series: "naruto",
                      active: "naruto.10" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.10");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "11",
                      title: (0, E.J)(o, {
                        ja: "\u4e0d\u6b7b\u30b3\u30f3\u30d3\u300c\u98db\u6bb5\uff06\u89d2\u90fd\u300d\u3068\u306e\u6b7b\u95d8",
                        en: "Battle against the Zombie Combo.Death match with Hidan & Kakuzu.",
                        fr: "COMBAT \xc0 MORT CONTRE LE DUO IMMORTEL \xab HIDAN ET KAKUZU \xbb",
                        de: 'Unerbitterter Kampf gegen die "Zombie Kombo" : Hidan & Kakuzu',
                        es: "PELEA CONTRA EL \u201cD\xdaO INMORTAL\u201d HIDAN Y KAKUZU.",
                        it: "LOTTA CONTRO IL \u201cTEAM DEGLI ZOMBIE\u201d",
                      }),
                      series: "naruto",
                      active: "naruto.11" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.11");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "12",
                      title: (0, E.J)(o, {
                        ja: "\u86c7\u3068\u9df9",
                        en: "HEBI & TAKA",
                        fr: "LE SERPENT ET LE FAUCON",
                        de: "Die SchlaNge und der Falke",
                        es: "LA SERPIENTE Y EL HALC\xd3N.",
                        it: "LA SERPE E IL FALCO",
                      }),
                      series: "naruto",
                      active: "naruto.12" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.12");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "13",
                      title: (0, E.J)(o, {
                        ja: "\u300c\u706b\u306e\u56fd\u300d\u3001\u201c\u86c7\u201d\u3068\u201c\u6681\u201d\u3002",
                        en: "The Land of Fire, the Hebi, and Akatsuki.",
                        fr: "LE \xab PAYS DU FEU \xbb, LE \xab SERPENT \xbb ET \xab AKATSUKI \xbb",
                        de: "\u201cFEUER-REICH\u201d, \u201cHEBI\u201d, UND \u201cAKATSUKI\u201d.",
                        es: "EL PA\xcdS DEL FUEGO, LA \u201cSERPIENTE\u201d Y \u201cAKATSUKI\u201d",
                        it: "IL PAESE DEL FUOCO, LA \u201cSERPE\u201d EL\u2019 \u201cALBA\u201d",
                      }),
                      series: "naruto",
                      active: "naruto.13" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.13");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "14",
                      title: (0, E.J)(o, {
                        ja: "\u81ea\u6765\u4e5fVS\u30da\u30a4\u30f3",
                        en: "JIRAIYA VS PAIN",
                        fr: "JIRAYA CONTRE PAIN",
                        de: "JIRAIYA VS. PAIN",
                        es: "JIRAIYA CONTRA PAIN",
                        it: "JIRAIYA CONTRO PAIN",
                      }),
                      series: "naruto",
                      active: "naruto.14" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.14");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "15",
                      title: (0, E.J)(o, {
                        ja: "\u3046\u3061\u306f\u4e00\u65cf\u3068\u30a4\u30bf\u30c1\u306e\u771f\u5b9f",
                        en: "THE TRUTH BEHIND ITACHI AND THE UCHIHA CLAN",
                        fr: "LA V\xc9RIT\xc9 SUR ITACHI ET LE CLAN UCHIWA",
                        de: "Das Geheimnis des Uchiha-Clans und Itachi",
                        es: "EL SECRETO DE ITACHI Y DEL CLAN UCHIHA",
                        it: "IL SEGRETO DI ITACHI E DEL CLAN UCHIHA",
                      }),
                      series: "naruto",
                      active: "naruto.15" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.15");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "16",
                      title: (0, E.J)(o, {
                        ja: "\u4fee\u884c\u3068\u6fc0\u95d8",
                        en: "MORE TRAINING, MORE BATTLES.",
                        fr: "ENTRA\xceNEMENT ET COMBATS",
                        de: "TRAINING UND ERBITTERTE K\xc4MPFE",
                        es: "M\xc1S ENTRENAMIENTOS Y BATALLAS",
                        it: "ALLENAMENTI E SCONTRI",
                      }),
                      series: "naruto",
                      active: "naruto.16" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.16");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "17",
                      title: (0, E.J)(o, {
                        ja: "\u30da\u30a4\u30f3\u306e\u6765\u8972",
                        en: "PAIN\u2019S INVASION",
                        fr: "L\u2019ASSAUT DE PAIN",
                        de: "PAIN GREIFT AN",
                        es: "\xa1EL ASALTO DE PAIN!",
                        it: "PAIN ALL\u2019 ATTACCO!",
                      }),
                      series: "naruto",
                      active: "naruto.17" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.17");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "18",
                      title: (0, E.J)(o, {
                        ja: "\u4e94\u5f71\u4f1a\u8ac7",
                        en: "THE FIVE KAGE SUMMIT",
                        fr: "LE CONSEIL DES CINQ KAGE",
                        de: "Das Treffen der Kage",
                        es: "LA REUNI\xd3N DE LOS CINCO KAGE",
                        it: "IL SUMMIT DEI KAGE",
                      }),
                      series: "naruto",
                      active: "naruto.18" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.18");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "19",
                      title: (0, E.J)(o, {
                        ja: "\u5fa9\u8b90 \u2026\uff01",
                        en: "Revenge!",
                        fr: "LA VENGEANCE !",
                        de: "Rache!",
                        es: "\xa1VENGANZA!",
                        it: "VENDETTA!",
                      }),
                      series: "naruto",
                      active: "naruto.19" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.19");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "20",
                      title: (0, E.J)(o, {
                        ja: "\u7236\u3068\u6bcd\u306e\u7269\u8a9e",
                        en: "THE STORY OF NARUTO\u2019S FATHER AND MOTHER",
                        fr: "L\u2019HISTOIRE DES PARENTS DE NARUTO",
                        de: "Die Geschichte von Narutos Eltern",
                        es: "LOS PADRES DE NARUTO",
                        it: "I GENITORI DI NARUTO",
                      }),
                      series: "naruto",
                      active: "naruto.20" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.20");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "21",
                      title: (0, E.J)(o, {
                        ja: "\u5fcd\u754c\u5927\u6226\u3001\u958b\u6226\uff01",
                        en: "THE GREAT NINJA WAR BEGINS!",
                        fr: "LE D\xc9BUT DE LA GRANDE GUERRE NINJA ",
                        de: "Der gro\xdfe Shinobi-Weltkrieg beginnt!",
                        es: "\xa1LA GRAN GUERRA NINJA COMIENZA!",
                        it: "LA GRANDE GUERRA NINJA",
                      }),
                      series: "naruto",
                      active: "naruto.21" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.21");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "22",
                      title: (0, E.J)(o, {
                        ja: "\u7a62\u571f\u8ee2\u751f\u2026!!",
                        en: "THE REANIMATION JUSTU\u2026!",
                        fr: "LA R\xc9INCARNATION DES \xc2MES !!",
                        de: "Die Wiedergeburt aus schmutziger Erde: das Edo-Tensei!",
                        es: "INVOCACI\xd3N: REENCARNACI\xd3N DEL MUNDO IMPURO",
                        it: "TECNICA DELLA RESURREZIONE IMPURA!",
                      }),
                      series: "naruto",
                      active: "naruto.22" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.22");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "23",
                      title: (0, E.J)(o, {
                        ja: "\u65b0\u65e7\u4e94\u5f71\u5bfe\u6c7a",
                        en: "THE FIVE KAGE OF THE PAST AND PRESENT CLASH!",
                        fr: "LES CINQ ANCIENS KAGE CONTRE LES CINQ NOUVEAUX KAGE",
                        de: "Kampf der alten und neuen Kage",
                        es: "LOS VIEJOS Y LOS NUEVOS KAGE",
                        it: "VECCHI E NUOVI KAGE",
                      }),
                      series: "naruto",
                      active: "naruto.23" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.23");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "24",
                      title: (0, E.J)(o, {
                        ja: "\u305d\u308c\u305e\u308c\u306e\u6226\u3044",
                        en: "TO EACH THEIR OWN BATTLE",
                        fr: "\xc0 CHACUN SON COMBAT",
                        de: "DER KAMPF JEDES EINZELNEN",
                        es: "UNA BATALLA QUE PELEAR",
                        it: "LE ALTRE BATTAGLIE",
                      }),
                      series: "naruto",
                      active: "naruto.24" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.24");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "25",
                      title: (0, E.J)(o, {
                        ja: "\u3046\u3061\u306f\u30aa\u30d3\u30c8",
                        en: "Obito Uchiha",
                        fr: "OBITO UCHIWA",
                        de: "Obito Uchiha",
                        es: "OBITO UCHIHA",
                        it: "OBITO UCHIHA",
                      }),
                      series: "naruto",
                      active: "naruto.25" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.25");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "26",
                      title: (0, E.J)(o, {
                        ja: "\u3059\u3079\u3066\u3092\u77e5\u308b\u8005\u305f\u3061",
                        en: "THE ALL-KNOWING",
                        fr: "LE TEMPS DES R\xc9PONSES",
                        de: "Die Allwissenden",
                        es: "LOS QUE LO SABEN TODO",
                        it: "I CUSTODI DEL SEGRETO",
                      }),
                      series: "naruto",
                      active: "naruto.26" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.26");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "27",
                      title: (0, E.J)(o, {
                        ja: "\u7121\u9650\u6708\u8aad",
                        en: "THE INFINITE TSUKUYOMI",
                        fr: "LES ARCANES LUNAIRES INFINIS",
                        de: "Das ENDLOSE Tsukuyomi",
                        es: "EL TSUKUYOMI INFINITO",
                        it: "LO TSUKUYOMI INFINITO",
                      }),
                      series: "naruto",
                      active: "naruto.27" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.27");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "28",
                      title: (0, E.J)(o, {
                        ja: "\u30ab\u30b0\u30e4\u306e\u8a08\u753b",
                        en: "KAGUYA\u2019S PLAN",
                        fr: "LE PLAN DE KAGUYA",
                        de: "Kaguyas Plan",
                        es: "EL PLAN DE KAGUYA",
                        it: "IL PIANO DI KAGUYA",
                      }),
                      series: "naruto",
                      active: "naruto.28" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.28");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "29",
                      title: (0, E.J)(o, {
                        ja: "\u53cb\u3068\u306e\u6226\u3044",
                        en: "A CLASH BETWEEN FRIENDS",
                        fr: "LE COMBAT DES AMIS",
                        de: "KAMPF ZWISCHEN FREUNDEN",
                        es: "LUCHA CONTRA UN AMIGO",
                        it: "SCONTRO TRA AMICI",
                      }),
                      series: "naruto",
                      active: "naruto.29" === r.anchor,
                      onSelect: function () {
                        return r.to("naruto.29");
                      },
                    }),
                  ],
                }),
                (0, A.tZ)("div", {
                  css: [a, M, "", ""],
                  children: "BORUTO STORY",
                }),
                (0, A.BX)("ul", {
                  children: [
                    (0, A.tZ)(H, {
                      no: "01",
                      title: (0, E.J)(o, {
                        ja: "BORUTO\u958b\u59cb",
                        en: "BORUTO BEGINS!",
                        fr: "LE D\xc9BUT DE BORUTO",
                        de: "DER BEGINN VON BORUTO",
                        es: "EL INICIO DE BORUTO",
                        it: "ARRIVA BORUTO!",
                      }),
                      series: "boruto",
                      active: "boruto.01" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.01");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "02",
                      title: (0, E.J)(o, {
                        ja: "\u72d9\u308f\u308c\u305f\u30c1\u30e3\u30af\u30e9",
                        en: "THE TARGETED CHAKRA",
                        fr: "\xc0 LA RECHERCHE DU CHAKRA",
                        de: "DAS BEGEHRTE CHAKRA",
                        es: "EL CHAKRA ACECHADO",
                        it: "ALLA RICERCA DEL CHAKRA",
                      }),
                      series: "boruto",
                      active: "boruto.02" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.02");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "03",
                      title: (0, E.J)(o, {
                        ja: "\u521d\u3081\u3066\u306e\u5358\u72ec\u4efb\u52d9",
                        en: "FIRST SOLO MISSION",
                        fr: "LA PREMI\xc8RE MISSION SOLO",
                        de: "DIE ERSTE SOLO-MISSION",
                        es: "LA PRIMERA MISI\xd3N",
                        it: "LA PRIMA MISSIONE",
                      }),
                      series: "boruto",
                      active: "boruto.03" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.03");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "04",
                      title: (0, E.J)(o, {
                        ja: "\u91cc\u306b\u5fcd\u3073\u5bc4\u308b\u4e0d\u6c17\u5473\u306a\u5f71",
                        en: "AN OMINOUS SHADOW LURKING IN THE VILLAGE",
                        fr: "L\u2019OMBRE MENA\xc7ANT KONOHA",
                        de: "EIN UNHEIMLICHER SCHATTEN SCHLEICHT SICH INS DORF",
                        es: "LA SOMBRA DE KONOHA",
                        it: "L\u2019 OMBRA SU KONOHA",
                      }),
                      series: "boruto",
                      active: "boruto.04" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.04");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "05",
                      title: (0, E.J)(o, {
                        ja: "\u65b0\u305f\u306a\u308b\u8105\u5a01",
                        en: "A NEW THREAT",
                        fr: "UNE NOUVELLE MENACE",
                        de: "EINE NEUE BEDROHUNG",
                        es: "UNA NUEVA AMENAZA",
                        it: "UNA NUOVA MINACCIA",
                      }),
                      series: "boruto",
                      active: "boruto.05" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.05");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "06",
                      title: (0, E.J)(o, {
                        ja: "\u8b0e\u306e\u5c11\u5e74\u3068\u306e\u51fa\u4f1a\u3044",
                        en: "THE MYSTERIOUS BOY",
                        fr: "UNE RENCONTRE MYST\xc8RIEUSE",
                        de: "BEGEGNUNG MIT EINEM GEHEIMNISVOLLEN JUNGEN",
                        es: "ENCUENTRO CON UN CHICO MISTERIOSO",
                        it: "IL RAGAZZO MISTERIOSO",
                      }),
                      series: "boruto",
                      active: "boruto.06" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.06");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "07",
                      title: (0, E.J)(o, {
                        ja: "\u30c7\u30eb\u30bf\u8972\u6765",
                        en: "DELTA ATTACKS",
                        fr: "L\u2019ATTAQUE DE DELTA",
                        de: "DELTAS \xdcBERFALL",
                        es: "EL ATAQUE DE DELTA",
                        it: "DELTA ALL\u2019 ATTACCO!",
                      }),
                      series: "boruto",
                      active: "boruto.07" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.07");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "08",
                      title: (0, E.J)(o, {
                        ja: "\u4fee\u884c\u306e\u65e5\u3005",
                        en: "DAYS OF TRAINING",
                        fr: "L\u2019ENTRA\xceNEMENT",
                        de: "TAGE DES TRAININGS",
                        es: "D\xcdAS DE ENTRENAMIENTO",
                        it: "ALLENARSI",
                      }),
                      series: "boruto",
                      active: "boruto.08" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.08");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "09",
                      title: (0, E.J)(o, {
                        ja: "\u30b8\u30b2\u30f3\u6025\u8972",
                        en: "JIGEN\u2019S RAID",
                        fr: "L\u2019ATTAQUE FURTIVE DE JIGEN",
                        de: "JIGENS \xdcBERRASCHUNGSANGRIFF",
                        es: "ENCUENTRO REPENTINO CON JIGEN",
                        it: "SCONTRO CON JIGEN",
                      }),
                      series: "boruto",
                      active: "boruto.09" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.09");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "10",
                      title: (0, E.J)(o, {
                        ja: "\u4e03\u4ee3\u76ee\u3092\u52a9\u3051\u306b",
                        en: "RESCUE THE SEVENTH HOKAGE",
                        fr: "\xc0 LA RESCOUSSE DU SEPTI\xc8ME HOKAGE",
                        de: "ZUR RETTUNG DES 7.HOKAGE",
                        es: "AL RESCATE DEL S\xc9PTIMO HOKAGE",
                        it: "IN SOCCORSO DELL\u2019 HOKAGE",
                      }),
                      series: "boruto",
                      active: "boruto.10" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.10");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "11",
                      title: (0, E.J)(o, {
                        ja: "\u300e\u6954\uff08\u30ab\u30fc\u30de\uff09\u300f\u306e\u6cd5\u5247",
                        en: "THE LAWS OF KARMA",
                        fr: "LES R\xc8GLES DU \xab K\xc2MA \xbb",
                        de: "DAS GESETZ DES \u201cKARMAS\u201d",
                        es: "LAS LEYES DEL \u201cKARMA\u201d",
                        it: "LA LEGGE DEL \u201cKARMA\u201d",
                      }),
                      series: "boruto",
                      active: "boruto.11" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.11");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "12",
                      title: (0, E.J)(o, {
                        ja: "\u30a4\u30c3\u30b7\u30ad\u3068\u306e\u6b7b\u95d8",
                        en: "DEATH MATCH WITH ISSHIKI",
                        fr: "LE COMBAT \xc0 MORT CONTRE ISSHIKI",
                        de: "KAMPF AUF LEBEN UND TOD MIT ISSHIKI",
                        es: "PELEA A MUERTE CONTRA ISSHIKI",
                        it: "SCONTRO CON ISSHIKI",
                      }),
                      series: "boruto",
                      active: "boruto.12" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.12");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "13",
                      title: (0, E.J)(o, {
                        ja: "\u3082\u3063\u3068\u5f37\u304f\u306a\u308b\u305f\u3081\u306b",
                        en: "TO BECOME STRONGER",
                        fr: "AFIN DE DEVENIR PLUS FORT",
                        de: "UM NOCH ST\xc4RKER ZU WERDEN",
                        es: "POR VOLVERSE M\xc1S FUERTE",
                        it: "SEMPRE PI\xd9 FORTI",
                      }),
                      series: "boruto",
                      active: "boruto.13" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.13");
                      },
                    }),
                    (0, A.tZ)(H, {
                      no: "14",
                      title: (0, E.J)(o, {
                        ja: "\u95d8\u3044\u306e\u884c\u65b9",
                        en: "BATTLE AWAITS",
                        fr: "L\u2019ISSUE DU COMBAT",
                        de: "DER VERLAUF DES KAMPFES",
                        es: "EL DESTINO DE LA BATALLA",
                        it: "L\u2019 ESITO DELLA BATTAGLIA",
                      }),
                      series: "boruto",
                      active: "boruto.14" === r.anchor,
                      onSelect: function () {
                        return r.to("boruto.14");
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var K = {
        name: "192ugeh",
        styles: "font-family:var(--comic-impact-font);font-size:14px",
      };
      function G(t) {
        var e = t.expanded,
          n = t.onToggle;
        return (0, A.BX)("button", {
          onClick: n,
          css: (0, i.iv)(
            "position:fixed;top:0;right:10px;bottom:0;z-index:3;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;width:40px;height:60px;margin:auto;font-family:var(--comic-font);font-size:14px;line-height:1;color:white;cursor:pointer;background:black;transition:width 0.25s,height 0.25s,right 0.25s;",
            !e &&
              "\n            &:hover {\n              width: 60px;\n              right: 0;\n            }          \n          ",
            " ",
            e
              ? "\n            width: 60px;\n            height: 100%;\n            right: 0;\n            border-left: 1px solid #555;\n          "
              : "",
            ";",
            ""
          ),
          children: [
            (0, A.tZ)("span", {
              css: K,
              children: (0, A.tZ)(E.I, {
                ja: "\u76ee\u6b21",
                children: "INDEX",
              }),
            }),
            (0, A.BX)("svg", {
              width: "14",
              height: "16",
              css: (0, i.iv)(
                "margin-top:7px;transition:transform 0.25s;",
                e ? "\n            transform: rotate(90deg);\n          " : "",
                ";",
                ""
              ),
              children: [
                (0, A.tZ)("line", {
                  x1: "1",
                  y1: "1",
                  x2: "1",
                  y2: "15",
                  strokeWidth: "2",
                  stroke: "white",
                }),
                (0, A.tZ)("line", {
                  x1: "7",
                  y1: "1",
                  x2: "7",
                  y2: "15",
                  strokeWidth: "2",
                  stroke: "white",
                }),
                (0, A.tZ)("line", {
                  x1: "13",
                  y1: "1",
                  x2: "13",
                  y2: "15",
                  strokeWidth: "2",
                  stroke: "white",
                }),
              ],
            }),
          ],
        });
      }
      var P = {
        name: "e343ul",
        styles:
          "position:fixed;top:60px;right:10px;bottom:-60px;z-index:3;margin:auto;font-family:var(--impact-font)",
      };
      function Y(t) {
        var e = t.current,
          n = t.total;
        return (0, A.tZ)("svg", {
          width: "40",
          height: "32",
          css: P,
          children: (0, A.BX)("g", {
            transform: "translate(5 0)",
            children: [
              (0, A.tZ)("text", {
                x: "0",
                y: "14",
                fill: "black",
                fontSize: "18",
                children: e,
              }),
              (0, A.tZ)("line", {
                x1: "29",
                y1: "1",
                x2: "1",
                y2: "31",
                stroke: "black",
              }),
              (0, A.tZ)("text", {
                x: "18",
                y: "32",
                fontSize: "15",
                children: n,
              }),
            ],
          }),
        });
      }
      var J = { name: "1bvdsd4", styles: "aspect-ratio:90/142" },
        F = {
          name: "y8vy6e",
          styles: "position:fixed;right:10px;bottom:106px;z-index:1;width:90px",
        };
      function z(t) {
        var e = t.slug,
          n = w(y.u9[e]),
          i = (0, r.Z)(n, 2),
          a = i[0],
          c = i[1],
          s = (function () {
            var t,
              e = (0, O.Vd)("comicList", {
                data: (0, L.k8)({
                  categories: ["\u30b3\u30df\u30c3\u30af"],
                  comic_type: "comic_details",
                }),
              }).result;
            return {
              comics: (0, b.Z)(
                null !==
                  (t =
                    null === e || void 0 === e ? void 0 : e.data.comic_list) &&
                  void 0 !== t
                  ? t
                  : []
              ).map(function (t) {
                return {
                  url: "/comics/".concat(t.path),
                  series: t.series[0].code,
                  volume: t.comic.comic_no,
                  thumbnail: (0, O.hT)(t.thumbnail),
                };
              }),
            };
          })().comics.filter(function (t) {
            return t.series === a && t.volume === c;
          });
        if (0 === s.length) return (0, A.tZ)(o.Fragment, {});
        var u = s[0];
        return (0, A.tZ)(A.HY, {
          children: (0, A.tZ)("div", {
            css: F,
            children: (0, A.tZ)(x.Z, {
              href: u.url,
              children: (0, A.tZ)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, A.tZ)(Z._, {
                  loadStyle: J,
                  src: u.thumbnail,
                  alt: "",
                  width: "90",
                }),
              }),
            }),
          }),
        });
      }
      function X() {
        var t = (0, U.r)(),
          e = o.useState(!1),
          n = (0, r.Z)(e, 2),
          i = n[0],
          a = n[1],
          c = o.useState(t.anchor),
          s = (0, r.Z)(c, 2),
          u = s[0],
          l = s[1],
          d = (0, h.m)(),
          f = function () {
            a(!1);
          };
        o.useEffect(
          function () {
            return function () {
              return d(!1);
            };
          },
          [d]
        ),
          o.useEffect(
            function () {
              if (u !== t.anchor) return l(t.anchor), a(!1), void d(!1);
              d(i);
            },
            [u, t.anchor, i, d]
          );
        var E = w(u),
          p = (0, r.Z)(E, 2),
          v = p[0],
          S = p[1];
        return (0, A.BX)(A.HY, {
          children: [
            (0, A.tZ)(j, { expanded: i, collapse: f }),
            (0, A.tZ)(G, {
              expanded: i,
              onToggle: function () {
                return i ? f() : void a(!0);
              },
            }),
            (0, A.tZ)(Y, { current: S, total: "naruto" === v ? y.mH : y.b0 }),
            (0, A.tZ)(z, { slug: u }),
          ],
        });
      }
      function V(t) {
        var e = t.controllerRef,
          n = t.onStart,
          i = t.children,
          a = o.useRef(Array(o.Children.count(i))),
          c = o.useState(0),
          s = (0, r.Z)(c, 2),
          u = s[0],
          l = s[1];
        return (
          o.useImperativeHandle(e, function () {
            return {
              to: function (t) {
                var e = a.current[t];
                window.scrollTo({
                  top: null === e || void 0 === e ? void 0 : e.offsetTop,
                  behavior: "smooth",
                });
              },
            };
          }),
          o.useEffect(function () {
            var t = function () {},
              e = function () {
                var t = window.innerHeight,
                  e = a.current
                    .map(function (t) {
                      return t ? t.getBoundingClientRect().top : 1 / 0;
                    })
                    .map(function (t, e) {
                      return [e, t];
                    })
                    .reverse()
                    .filter(function (e) {
                      return (0, r.Z)(e, 2)[1] < t;
                    });
                if (0 === e.length) return l(0);
                var n = (0, r.Z)(e[0], 1)[0];
                l(n);
              };
            return (
              window.addEventListener("resize", t),
              window.addEventListener("scroll", e),
              function () {
                window.removeEventListener("resize", t),
                  window.removeEventListener("scroll", e);
              }
            );
          }, []),
          o.useEffect(
            function () {
              n && n(u);
            },
            [u, n]
          ),
          (0, A.tZ)(A.HY, {
            children: o.Children.map(i, function (t, e) {
              return (0, A.tZ)(
                "div",
                {
                  ref: function (t) {
                    return (a.current[e] = t);
                  },
                  children: t,
                },
                e
              );
            }),
          })
        );
      }
      var _ = {
          name: "1yg5a5w",
          styles: "position:absolute;right:-3px;bottom:27px;left:-3px",
        },
        W = {
          name: "1m2g5e2",
          styles:
            "z-index:1;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:3px",
        },
        q = {
          name: "1rkv4nj",
          styles:
            "position:absolute;left:0;right:0;top:0;bottom:117px;background:black",
        };
      function Q() {
        return (0, A.BX)("div", {
          css: W,
          children: [
            (0, A.tZ)("div", { css: q }),
            (0, A.BX)("svg", {
              width: "9",
              height: "63",
              css: _,
              children: [
                (0, A.tZ)("circle", {
                  cx: "4.5",
                  cy: "4.5",
                  r: "4.5",
                  fill: "black",
                }),
                (0, A.tZ)("circle", {
                  cx: "4.5",
                  cy: "31.5",
                  r: "4.5",
                  fill: "black",
                }),
                (0, A.tZ)("circle", {
                  cx: "4.5",
                  cy: "58.5",
                  r: "4.5",
                  fill: "black",
                }),
              ],
            }),
          ],
        });
      }
      function $(t) {
        var e = t.className,
          n = t.children,
          a = o.useState(0),
          c = (0, r.Z)(a, 2),
          s = c[0],
          u = c[1],
          l = Math.min(s / 1280, 1);
        return (
          o.useEffect(function () {
            var t = function () {
              return u(window.innerWidth);
            };
            return (
              window.addEventListener("resize", t),
              t(),
              function () {
                return window.removeEventListener("resize", t);
              }
            );
          }, []),
          (0, A.tZ)("div", {
            className: e,
            css: (0, i.iv)("--px:", l, "px;", ""),
            children: n,
          })
        );
      }
      var tt = {
        name: "t35mcj",
        styles:
          "position:relative;z-index:0;padding-bottom:calc(400 * var(--px));font-size:calc(16 * var(--px))",
      };
      function et(t) {
        var e = t.sliverRef,
          n = t.onSliverStart,
          r = t.children;
        return (0, A.BX)($, {
          css: tt,
          children: [
            (0, A.tZ)(Q, {}),
            (0, A.tZ)(V, { controllerRef: e, onStart: n, children: r }),
          ],
        });
      }
      function nt(t) {
        var e = t.children,
          n = (0, a.A)(),
          d = (0, r.Z)(n, 2),
          f = d[0],
          h = d[1].unlockStory,
          E = o.useState(f.unlockStory),
          p = (0, r.Z)(E, 2),
          v = p[0],
          S = p[1];
        return (
          (0, o.useEffect)(
            function () {
              S(f.unlockStory);
            },
            [f]
          ),
          (0, A.BX)(A.HY, {
            children: [
              v &&
                (0, A.tZ)(U.F, {
                  children: function (t, n) {
                    return (0, A.tZ)(A.HY, {
                      children: (0, A.BX)(l.DY, {
                        children: [
                          (0, A.tZ)(u.h, {}),
                          (0, A.tZ)(T.a, {
                            css: (0, i.iv)(
                              "position:absolute;top:108px;right:20px;z-index:1;@media ",
                              c.r.media.postTablet,
                              "{display:none;}",
                              ""
                            ),
                          }),
                          (0, A.tZ)(et, {
                            sliverRef: t,
                            onSliverStart: n,
                            children: e,
                          }),
                          (0, A.tZ)(X, {}),
                          (0, A.tZ)(s.T, { banner: !1 }),
                        ],
                      }),
                    });
                  },
                }),
              !v &&
                (0, A.tZ)(g, {
                  onPermit: function () {
                    S(!0), h();
                  },
                }),
            ],
          })
        );
      }
    },
    56406: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return v;
        },
      });
      var r,
        i = n(50029),
        o = n(16835),
        a = n(71383),
        c = n(70917),
        s = n(87794),
        u = n.n(s),
        l = n(67294),
        d = n(48710),
        f = n(35944);
      var h = {
          name: "jkmqk",
          styles:
            "margin-top:calc(12 * var(--px));margin-left:calc(10 * var(--px));font-family:var(--impact-font)",
        },
        E = {
          name: "82gzbt",
          styles:
            "position:absolute;top:0;right:0;left:0;display:flex;align-items:center;justify-content:center;height:100vh",
        };
      function A(t) {
        var e = t.fill;
        return (0, f.BX)("div", {
          css: (0, c.iv)(
            {
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background: e ? ("naruto" === e ? "#FA0" : "#FF7AAD") : "#DDD",
            },
            "",
            ""
          ),
          children: [
            (0, f.tZ)("span", {
              style: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: "auto",
                width: "3px",
                background: "black",
              },
            }),
            (0, f.tZ)("div", {
              css: E,
              children: (0, f.BX)("span", {
                css: (0, c.iv)(
                  "position:absolute;display:inline-flex;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100px;height:117px;background:",
                  e ? ("naruto" === e ? "#FA0" : "#FF7AAD") : "#DDD",
                  ";",
                  ""
                ),
                children: [
                  (0, f.tZ)("img", {
                    src: "/about/story/loading.svg",
                    width: "70",
                    height: "72.436",
                    css: (0, c.iv)(
                      "width:calc(70 * var(--px));height:calc(72.436 * var(--px));animation:3s linear infinite ",
                      (0, c.F4)(
                        r ||
                          (r = (0, a.Z)([
                            "\n            to {\n              transform: rotate(360deg);\n            }\n          ",
                          ]))
                      ),
                      ";",
                      ""
                    ),
                    alt: "",
                  }),
                  (0, f.tZ)("span", { css: h, children: "LOADING ..." }),
                ],
              }),
            }),
          ],
        });
      }
      var p = {
        name: "1jhkkng",
        styles: "z-index:2;width:100%;height:100%;position:relative",
      };
      function v(t) {
        t.name;
        var e = t.height,
          n = t.children,
          r = t.load,
          a = void 0 === r ? [] : r,
          s = t.fill,
          h = t.className,
          E = t.start,
          v = void 0 !== E && E,
          S = t.stop,
          I = void 0 !== S && S,
          N = l.useState(!1),
          m = (0, o.Z)(N, 2),
          g = m[0],
          T = m[1],
          O = l.useRef(null),
          b = l.useState(!1),
          R = (0, o.Z)(b, 2),
          L = R[0],
          Z = R[1],
          x = l.useState(!1),
          y = (0, o.Z)(x, 2),
          U = y[0],
          C = y[1];
        return (
          l.useEffect(
            function () {
              if (!U) {
                var t = O.current;
                if (t) {
                  var e = new IntersectionObserver(function (t) {
                    var e = (0, o.Z)(t, 1)[0];
                    Z(e.isIntersecting);
                  });
                  return (
                    e.observe(t),
                    function () {
                      return e.unobserve(t);
                    }
                  );
                }
              }
            },
            [U]
          ),
          l.useEffect(
            function () {
              if (L) {
                var t = setTimeout(function () {
                  C(!0);
                }, 100);
                return function () {
                  return clearTimeout(t);
                };
              }
            },
            [L]
          ),
          l.useEffect(
            function () {
              if (U) {
                var t = a.map(
                  (function () {
                    var t = (0, i.Z)(
                      u().mark(function t(e) {
                        var n;
                        return u().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  ((n = new Image()).src = e),
                                  t.abrupt(
                                    "return",
                                    new Promise(function (t) {
                                      n.addEventListener("load", t),
                                        n.addEventListener("error", t);
                                    })
                                  )
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                );
                Promise.all(t)
                  .then(function () {
                    return T(!0);
                  })
                  .catch(function () {
                    return T(!0);
                  });
              }
            },
            [a, U]
          ),
          (0, f.tZ)("div", {
            ref: O,
            className: h,
            css: (0, c.iv)(
              "height:calc(",
              e,
              " * var(--px) + ",
              I ? "117px" : "0px",
              ");overflow:hidden;background:",
              s ? ("naruto" === s ? "#FA0" : "#FF7AAD") : "#DDD",
              ";",
              v &&
                "\n          @media "
                  .concat(
                    d.r.media.preTablet,
                    " {\n            padding-top: 138px;\n            height: calc("
                  )
                  .concat(e, " * var(--px) + ")
                  .concat(
                    I ? "117px" : "0px",
                    " + 138px);\n          }\n        "
                  ),
              ";",
              ""
            ),
            children: (0, f.tZ)("div", {
              css: p,
              children: g ? n : (0, f.tZ)(A, { fill: s }),
            }),
          })
        );
      }
    },
    36175: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return s;
        },
      });
      var r,
        i = n(71383),
        o = n(70917),
        a = n(35944),
        c = (0, o.F4)(
          r ||
            (r = (0, i.Z)(["\nto {\n  opacity: 1;\n  transform: none;\n}\n"]))
        );
      function s(t) {
        var e = t.x,
          n = t.y,
          r = t.width,
          i = t.height,
          s = t.order,
          u = t.src;
        return (0, a.tZ)("img", {
          className: "sprite",
          src: u,
          style: {
            position: "absolute",
            left: "calc(".concat(e, " * var(--px))"),
            top: "calc(".concat(n, " * var(--px))"),
            width: "calc(".concat(r, " * var(--px))"),
            height: "calc(".concat(i, " * var(--px))"),
          },
          css: (0, o.iv)(
            "z-index:2;opacity:0;transform:translateY(100px);animation:forwards 1s ",
            c,
            ";animation-delay:",
            0.25 * s,
            "s;",
            ""
          ),
          alt: "",
        });
      }
    },
    13344: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return c;
        },
      });
      var r = n(8503),
        i = n(78578),
        o = n(21905),
        a = n(35944);
      function c() {
        var t = (0, r.bU)();
        return (0, a.tZ)(o.V, {
          title: (0, i.J)(t, {
            en: "BORUTO STORY",
            fr: "NARUTO R\xc9SUM\xc9",
            de: "BORUTO DIE STORY",
            es: "BORUTO LA HISTORIA",
            it: "BORUTO LA STORIA",
            or: "BORUTO STORY",
          }),
          ruby: (0, a.tZ)(i.I, {
            ja: (0, a.BX)(a.HY, {
              children: [
                "\u30dc\u30eb\u30c8",
                (0, a.tZ)("br", {}),
                "\u30b9\u30c8\u30fc\u30ea\u30fc",
              ],
            }),
          }),
          body: (0, a.tZ)(i.I, {
            ja: (0, a.BX)(a.HY, {
              children: [
                "\u706b\u5f71\u3092\u76ee\u6307\u3057\u305f\u5c11\u5e74\u306e\u7269\u8a9e\u306f\u65b0\u6642\u4ee3\u3078\u3068\u53d7\u3051\u7d99\u304c\u308c\u308b!!",
                (0, a.tZ)("br", {}),
                "NARUTO\u30ef\u30fc\u30eb\u30c9\u306e\u4eca\u3092\u76ee\u6483\u305b\u3088!!",
              ],
            }),
            de: (0, a.BX)(a.HY, {
              children: [
                "Die Geschichte des jungen Ninjas, dessen Traum es ist, ",
                (0, a.tZ)("br", {}),
                "Hokage zu werden, wird an die n\xe4chste Generation weitergegeben! ",
                (0, a.tZ)("br", {}),
                "Ein neues Zeitalter ist in der NARUTO-Wel",
                (0, a.tZ)("br", {}),
                "eingetreten!",
              ],
            }),
            en: (0, a.BX)(a.HY, {
              children: [
                "The story of a young boy who dreams of becoming",
                (0, a.tZ)("br", {}),
                "Hokage is passed on to a new generation!",
                (0, a.tZ)("br", {}),
                "See how the world of NARUTO has changed",
                (0, a.tZ)("br", {}),
                "over the years!!",
              ],
            }),
            fr: (0, a.BX)(a.HY, {
              children: [
                "L\u2019histoire d\u2019un jeune gar\xe7on qui r\xeave de devenir Hokage",
                (0, a.tZ)("br", {}),
                "est transmise \xe0 une nouvelle g\xe9n\xe9ration !",
                (0, a.tZ)("br", {}),
                "D\xe9couvrez le nouveau monde de NARUTO !",
              ],
            }),
            es: (0, a.BX)(a.HY, {
              children: [
                "\xa1La historia del joven ninja, cuyo sue\xf1o era",
                (0, a.tZ)("br", {}),
                "convertirse en Hokage, pasa a la pr\xf3xima generaci\xf3n!",
                (0, a.tZ)("br", {}),
                "\xa1Llega una nueva era en el mundo de Naruto!",
              ],
            }),
            it: (0, a.BX)(a.HY, {
              children: [
                "Il nuovo capitolo della storia dei ninja della foglia!",
                (0, a.tZ)("br", {}),
                "Sei pronto per scoprire cos\u2019 \xe8 cambiato nel mondo",
                (0, a.tZ)("br", {}),
                "di NARUTO?",
              ],
            }),
          }),
          inset: 164,
          portrait: {
            src: "/about/story/boruto.webp",
            left: -196,
            top: -157,
            height: 796.5,
          },
        });
      }
    },
    21905: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return p;
        },
      });
      var r,
        i = n(71383),
        o = n(70917),
        a = (n(67294), n(8503)),
        c = n(48710),
        s = n(16688),
        u = n(35944);
      var l = {
          name: "vg2ukg",
          styles:
            "font-family:var(--comic-impact-font);font-size:calc(24 * var(--px));line-height:1.08;&:lang(ja){line-height:1.25;}&:not(:lang(ja)){margin-top:calc(5 * var(--px));}",
        },
        d = {
          name: "c4m66j",
          styles:
            "width:calc(40 * var(--px));height:calc(31.33 * var(--px));margin-right:calc(20 * var(--px))",
        },
        f = {
          name: "126tytm",
          styles:
            "display:flex;align-items:center;padding-left:calc(80 * var(--px))",
        },
        h = {
          name: "1s89058",
          styles:
            "margin-left:calc(30 * var(--px));font-family:var(--comic-font);font-size:calc(36 * var(--px));line-height:1.2",
        },
        E = {
          name: "15fn88w",
          styles:
            "position:relative;font-family:var(--impact-font);font-size:calc(100 * var(--px));font-weight:normal;line-height:1;background:black",
        },
        A = { name: "179t5g5", styles: "position:relative;z-index:1" };
      function p(t) {
        var e = t.breadcrumb,
          n = void 0 !== e && e,
          p = t.title,
          v = t.ruby,
          S = t.body,
          I = t.portrait,
          N = t.inset,
          m = (0, a.bU)(),
          g = (0, o.F4)(
            r ||
              (r = (0, i.Z)([
                "\n    from {\n      transform: scale(1.25) translate(calc(-50 * var(--px)), calc(-50 * var(--px)));\n      filter: blur(calc(16 * var(--px)));\n      opacity: 1;\n    }\n\n    to {\n      transform: none;\n      filter: none;\n      opacity: 1;\n    }\n  ",
              ]))
          );
        return (0, u.BX)("div", {
          css: (0, o.iv)(
            "position:absolute;top:calc(107 * var(--px));left:calc(246 * var(--px));z-index:2;box-sizing:border-box;width:calc(863 * var(--px));height:calc(240 * var(--px));padding:calc(24 * var(--px)) calc(24 * var(--px)) calc(24 * var(--px)) calc(",
            N,
            " * var(--px));color:white;background:black;",
            ""
          ),
          children: [
            (0, u.BX)("div", {
              css: A,
              children: [
                (0, u.BX)("div", {
                  css: (0, o.iv)(
                    "margin:calc(-4 * var(--px)) 0;",
                    "ja" === m
                      ? "\n              display: flex;\n              align-items: center;          \n            "
                      : "\n              padding-left: calc(140 * var(--px));\n            ",
                    ";",
                    ""
                  ),
                  children: [
                    (0, u.tZ)("h2", { css: E, children: p }),
                    (0, u.tZ)("p", { css: h, children: v }),
                  ],
                }),
                (0, u.BX)("div", {
                  children: [
                    (0, u.BX)("div", {
                      css: f,
                      children: [
                        (0, u.tZ)("img", {
                          src: "/about/story/mark.svg",
                          alt: "",
                          css: d,
                        }),
                        (0, u.tZ)("p", { css: l, children: S }),
                      ],
                    }),
                    n &&
                      (0, u.tZ)("span", {
                        css: (0, o.iv)(
                          "position:absolute;right:0;bottom:0;@media ",
                          c.r.media.preTablet,
                          "{display:none;}",
                          ""
                        ),
                        children: (0, u.tZ)(s.a, {}),
                      }),
                  ],
                }),
              ],
            }),
            (0, u.tZ)("img", {
              src: I.src,
              alt: "",
              css: (0, o.iv)(
                "position:absolute;top:calc(",
                I.top,
                " * var(--px));left:calc(",
                I.left,
                " * var(--px));height:calc(",
                I.height,
                " * var(--px));opacity:0;animation:1s forwards ",
                g,
                ";",
                ""
              ),
            }),
          ],
        });
      }
    },
    72258: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return c;
        },
      });
      var r = n(8503),
        i = n(78578),
        o = n(21905),
        a = n(35944);
      function c() {
        var t = (0, r.bU)();
        return (0, a.tZ)(o.V, {
          title: (0, i.J)(t, {
            en: "NARUTO'S STORY",
            fr: "NARUTO R\xc9SUM\xc9",
            de: "NARUTO DIE STORY",
            es: "NARUTO LA HISTORIA",
            it: "NARUTO LA STORIA",
            or: "NARUTO'S STORY",
          }),
          ruby: (0, a.tZ)(i.I, {
            ja: (0, a.BX)(a.HY, {
              children: [
                "\u30ca\u30eb\u30c8",
                (0, a.tZ)("br", {}),
                "\u30b9\u30c8\u30fc\u30ea\u30fc",
              ],
            }),
            en: void 0,
          }),
          body: (0, a.tZ)(i.I, {
            ja: (0, a.BX)(a.HY, {
              children: [
                "1999\u5e74\u306e\u9023\u8f09\u958b\u59cb\u304b\u3089\u5b8c\u7d50\u307e\u3067\u2014\u2014\u2014",
                (0, a.tZ)("br", {}),
                "\u843d\u3061\u3053\u307c\u308c\u5fcd\u8005\u306e\u8a66\u7df4\u306b\u6e80\u3061\u305f\u6210\u9577\u7269\u8a9e\u3092",
                (0, a.tZ)("br", {}),
                "\u540d\u30b7\u30fc\u30f3\u3067\u3075\u308a\u304b\u3048\u308b!!",
              ],
            }),
            en: (0, a.BX)(a.HY, {
              children: [
                "From its debut in 1999, all the way to its stunning conclusion\u2014",
                (0, a.tZ)("br", {}),
                "look back on the trials and tribulations of an outcast",
                (0, a.tZ)("br", {}),
                "ninja\u2019s coming of age and the famous scenes that",
                (0, a.tZ)("br", {}),
                "shaped his story!!",
              ],
            }),
            de: (0, a.BX)(a.HY, {
              children: [
                "Von der Erstausstrahlung im Jahre 1999 bis zum",
                (0, a.tZ)("br", {}),
                "atemberaubenden Finale -Blickt zur\xfcck auf die legend\xe4rsten",
                (0, a.tZ)("br", {}),
                "Szenen der Geschichte des Au\xdfenseiter-Ninjas",
                (0, a.tZ)("br", {}),
                "und die Pr\xfcfungen und H\xfcrden, die er \xfcberstehen musste!",
              ],
            }),
            fr: (0, a.BX)(a.HY, {
              children: [
                "Depuis le d\xe9but de la s\xe9rie en 1999 jusqu\u2019\xe0 sa conclusion,",
                (0, a.tZ)("br", {}),
                "revivez au travers de sc\xe8nes cultes l\u2019histoire",
                (0, a.tZ)("br", {}),
                "d\u2019un ninja rat\xe9 qui a \xe9volu\xe9 au fil des \xe9preuves",
                (0, a.tZ)("br", {}),
                "et des difficult\xe9s !",
                (0, a.tZ)("br", {}),
              ],
            }),
            es: (0, a.BX)(a.HY, {
              children: [
                "Revive los momentos m\xe1s incre\xedbles de la historia",
                (0, a.tZ)("br", {}),
                "de crecimiento y superaci\xf3n del ni\xf1o shinobi,",
                (0, a.tZ)("br", {}),
                "\xa1desde la primera emisi\xf3n en 1999 hasta su",
                (0, a.tZ)("br", {}),
                "incre\xedble final!",
              ],
            }),
            it: (0, a.BX)(a.HY, {
              children: [
                "Rivivi i momenti pi\xf9 incredibili della storia",
                (0, a.tZ)("br", {}),
                "del ragazzo che voleva diventare Hokage,",
                (0, a.tZ)("br", {}),
                "dagli albori nel 1999 alla sua incredibile fine!",
              ],
            }),
          }),
          breadcrumb: !0,
          inset: 84,
          portrait: {
            src: "/about/story/naruto.webp",
            left: -328,
            top: -107,
            height: 796.5,
          },
        });
      }
    },
    78578: function (t, e, n) {
      "use strict";
      n.d(e, {
        I: function () {
          return o;
        },
        J: function () {
          return a;
        },
      });
      var r = n(8503),
        i = n(35944);
      function o(t) {
        var e = t.ja,
          n = t.en,
          o = t.de,
          a = t.fr,
          c = t.it,
          s = t.es,
          u = t.children;
        switch ((0, r.bU)()) {
          case "ja":
            return (0, i.tZ)(i.HY, { children: e || u });
          case "en":
            return (0, i.tZ)(i.HY, { children: n || u });
          case "de":
            return (0, i.tZ)(i.HY, { children: o || u });
          case "fr":
            return (0, i.tZ)(i.HY, { children: a || u });
          case "it":
            return (0, i.tZ)(i.HY, { children: c || u });
          case "es":
            return (0, i.tZ)(i.HY, { children: s || u });
          default:
            return (0, i.tZ)(i.HY, { children: u });
        }
      }
      function a(t, e) {
        var n = e.ja,
          r = e.en,
          i = e.de,
          o = e.fr,
          a = e.it,
          c = e.es,
          s = e.or;
        switch (t) {
          case "ja":
            return n || s || "";
          case "en":
            return r || s || "";
          case "de":
            return i || s || "";
          case "fr":
            return o || s || "";
          case "it":
            return a || s || "";
          case "es":
            return c || s || "";
          default:
            return s || "";
        }
      }
    },
    33587: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return c;
        },
        Z: function () {
          return a;
        },
      });
      var r = n(16835),
        i = n(69873),
        o = n(77865),
        a = function (t) {
          var e = (0, i.W)(),
            n = (0, o.A)(),
            a = (0, r.Z)(n, 1)[0].universal;
          return t.filter(function (t) {
            return c(t, a, e);
          });
        },
        c = function (t, e, n) {
          return (
            !("elsewhere" !== n && !e) ||
            "0" === t.regional_setting.enabled ||
            ("1" === t.regional_setting.enabled &&
              0 === t.regional_setting.region_list.length) ||
            t.regional_setting.region_list.includes(n)
          );
        };
    },
    27715: function (t, e, n) {
      "use strict";
      n.d(e, {
        T3: function () {
          return u;
        },
        k8: function () {
          return c;
        },
        ux: function () {
          return l;
        },
        y$: function () {
          return s;
        },
        yx: function () {
          return a;
        },
      });
      var r = n(16835);
      function i(t, e) {
        var n =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return o(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return o(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          c = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (s = !0), (a = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var a = function (t) {
          return -1 !== t.search(/^[0-9a-zA-Z\s]*$/);
        },
        c = function (t) {
          for (var e = [], n = 0, o = Object.entries(t); n < o.length; n++) {
            var a = (0, r.Z)(o[n], 2),
              c = a[0],
              s = a[1];
            if (Array.isArray(s)) {
              var u,
                l = [],
                d = i(s);
              try {
                for (d.s(); !(u = d.n()).done; ) {
                  var f = u.value;
                  l.push('"'.concat(f, '"'));
                }
              } catch (h) {
                d.e(h);
              } finally {
                d.f();
              }
              e.push('"'.concat(c, '":[').concat(l.join(","), "]"));
            } else s && e.push('"'.concat(c, '":"').concat(s, '"'));
          }
          if (0 !== e.length) return "{".concat(e.join(","), "}");
        },
        s = function t(e) {
          var n = e;
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
              o = [
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
              a = [
                1, 2, 3, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56,
                60, 64, 68,
              ],
              c = a.length;
            c >= 0;
            --c
          ) {
            var s = Math.pow(10, a[c]);
            if (n >= s) {
              var u = Math.floor(n / s);
              u >= 10 ? (r += t(u)) : (1 === u && a[c] <= 3) || (r += i[u]),
                (r += o[c]),
                (n -= u * s);
            }
          }
          return (r += i[n]);
        },
        u = function (t) {
          return t
            ? t.startsWith("https://youtu.be/")
              ? t.replace("https://youtu.be/", "https://www.youtube.com/embed/")
              : t.replace(
                  "https://www.youtube.com/watch?v=",
                  "https://www.youtube.com/embed/"
                )
            : t;
        },
        l = function (t) {
          return t
            ? t.replace(
                "https://www.youtube.com/embed",
                "https://www.youtube-nocookie.com/embed"
              )
            : t;
        };
    },
    9008: function (t, e, n) {
      t.exports = n(72717);
    },
  },
]);
