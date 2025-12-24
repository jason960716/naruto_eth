(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8912],
  {
    78e3: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var i = (0, n(92648).Z)(n(67294)).default.createContext({});
      t.AmpStateContext = i;
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
            i = e.hybrid,
            r = void 0 !== i && i,
            a = e.hasQuery,
            d = void 0 !== a && a;
          return n || (r && d);
        });
    },
    72717: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = p),
        (t.default = void 0);
      var i = n(6495).Z,
        r = n(92648).Z,
        a = (0, n(91598).Z)(n(67294)),
        d = r(n(11585)),
        o = n(78e3),
        s = n(15850),
        c = n(9470);
      n(99475);
      function p() {
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
      function l(e, t) {
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
      var u = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(l, [])
          .reverse()
          .concat(p(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                i = {};
              return function (r) {
                var a = !0,
                  d = !1;
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  d = !0;
                  var o = r.key.slice(r.key.indexOf("$") + 1);
                  e.has(o) ? (a = !1) : e.add(o);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    t.has(r.type) ? (a = !1) : t.add(r.type);
                    break;
                  case "meta":
                    for (var s = 0, c = u.length; s < c; s++) {
                      var p = u[s];
                      if (r.props.hasOwnProperty(p))
                        if ("charSet" === p) n.has(p) ? (a = !1) : n.add(p);
                        else {
                          var l = r.props[p],
                            f = i[p] || new Set();
                          ("name" === p && d) || !f.has(l)
                            ? (f.add(l), (i[p] = f))
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
            var r = e.key || t;
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
              var d = i({}, e.props || {});
              return (
                (d["data-href"] = d.href),
                (d.href = void 0),
                (d["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, d)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      var m = function (e) {
        var t = e.children,
          n = a.useContext(o.AmpStateContext),
          i = a.useContext(s.HeadManagerContext);
        return a.default.createElement(
          d.default,
          {
            reduceComponentsToState: f,
            headManager: i,
            inAmpMode: c.isInAmpMode(n),
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
          function o() {
            if (t && t.mountedInstances) {
              var r = i.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(r, e));
            }
          }
          if (r) {
            var s;
            null == t || null == (s = t.mountedInstances) || s.add(e.children),
              o();
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
                t && (t._pendingUpdate = o),
                function () {
                  t && (t._pendingUpdate = o);
                }
              );
            }),
            d(function () {
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
      var i = (0, n(91598).Z)(n(67294));
      var r = !1,
        a = r ? function () {} : i.useLayoutEffect,
        d = r ? function () {} : i.useEffect;
    },
    10014: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return o;
        },
      });
      var i = n(70917),
        r = (n(67294), n(48710)),
        a = n(35944);
      var d = { name: "1d3w5wq", styles: "width:100%" },
        o = function (e) {
          var t = e.pcImgSrc,
            n = e.spImgSrc,
            o = e.position,
            s = e.spPosition,
            c = e.isShort ? 300 : 575;
          return (0, a.tZ)("div", {
            css: d,
            children: (0, a.BX)("picture", {
              children: [
                (0, a.tZ)("source", {
                  srcSet: n,
                  width: 375,
                  height: 250,
                  media: r.r.media.preTablet,
                }),
                (0, a.tZ)("img", {
                  css: (0, i.iv)(
                    "display:block;width:100%;object-fit:cover;object-position:",
                    o,
                    ";@media ",
                    r.r.media.preTablet,
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
    32974: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return o;
        },
      });
      var i = n(70917),
        r = n(48710),
        a = n(36443),
        d = n(35944);
      function o(e) {
        var t = e.className,
          n = e.slug,
          o = (e.title, e.ruby, e.run),
          s = void 0 === o || o,
          c = e.scale,
          p = void 0 === c ? "1" : c,
          l = e.h1,
          u = e.long,
          f = void 0 !== u && u,
          m = e.isTwoLines,
          v = void 0 !== m && m,
          h = e.isSmall,
          g = void 0 !== h && h,
          y = "2/3" === p ? 2 / 3 : 1;
        return (0, d.BX)(d.HY, {
          children: [
            l && (0, d.tZ)("h1", { className: "visually-hidden", children: l }),
            (0, d.tZ)(a._, {
              className: t,
              slug: n,
              run: s,
              height: f ? 80 : 80 * y,
              isTwoLine: v,
              isSmall: g,
              css: (0, i.iv)(
                "@media ",
                r.r.media.preTablet,
                "{--brush-height:",
                v ? 80 : 40,
                "px;}",
                ""
              ),
            }),
          ],
        });
      }
    },
    96992: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return g;
        },
      });
      var i = n(67294),
        r = n(41128),
        a = n(70917),
        d = n(48710),
        o = n(17484),
        s = n(36443),
        c = n(77340),
        p = n(10014),
        l = n(32974),
        u = n(35944);
      var f = { name: "1d3w5wq", styles: "width:100%" },
        m = function (e) {
          var t = e.specialList,
            n = e.specialArchiveList;
          return (0, u.BX)("main", {
            css: v.main,
            children: [
              (0, u.tZ)(p.E, {
                pcImgSrc: "/special/key_visual_pc.webp",
                spImgSrc: "/special/key_visual_sp.webp",
                position: "center",
                isShort: !0,
              }),
              (0, u.tZ)("div", {
                css: (0, a.iv)(
                  "position:absolute;top:155px;width:100%;@media ",
                  d.r.media.preTablet,
                  "{top:180px;}",
                  ""
                ),
                children: (0, u.tZ)(c.W, {
                  children: (0, u.tZ)(l.V, {
                    title: "SPECIAL",
                    ruby: "\u30b9\u30da\u30b7\u30e3\u30eb",
                    slug: "special",
                    h1: "SPECIAL",
                    isSmall: !0,
                  }),
                }),
              }),
              (0, u.tZ)("div", {
                css: v.container,
                children:
                  null === t || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return (0,
                        u.tZ)(h, { href: e.url, src: e.src, spSrc: e.spSrc, target: "same" === e.windowType ? "_self" : "_blank" }, e.banner_id);
                      }),
              }),
              0 !== (null === n || void 0 === n ? void 0 : n.length) &&
                (0, u.BX)("div", {
                  css: v.container,
                  children: [
                    (0, u.tZ)("div", {
                      css: (0, a.iv)(
                        "max-width:1280px;padding:0 100px;margin:50px auto;@media ",
                        d.r.media.preTablet,
                        "{padding:0 60px;margin:20px auto 0;}",
                        ""
                      ),
                      children: (0, u.tZ)(s._, {
                        slug: "special_archive",
                        height: 40,
                        css: (0, a.iv)(
                          "@media ",
                          d.r.media.preTablet,
                          "{--brush-height:40px;}",
                          ""
                        ),
                      }),
                    }),
                    (0, u.tZ)("div", {
                      css: (0, a.iv)(
                        "display:grid;grid-template-columns:repeat(2, calc(50% - 15px));gap:30px;width:100%;padding:20px 60px 100px;@media ",
                        d.r.media.preTablet,
                        "{grid-template-columns:repeat(1, 1fr);row-gap:30px;padding:50px 30px 100px;}",
                        ""
                      ),
                      children:
                        null === n || void 0 === n
                          ? void 0
                          : n.map(function (e, t) {
                              return (0,
                              u.tZ)("div", { css: f, children: (0, u.tZ)(o.j, { href: e.url, src: e.src, spSrc: e.spSrc, target: "same" === e.windowType ? "_self" : "_blank" }) }, t);
                            }),
                    }),
                  ],
                }),
            ],
          });
        },
        v = {
          main: {
            name: "jf023y",
            styles:
              "position:relative;z-index:0;display:flex;flex-direction:column;align-items:center;background-color:#333",
          },
          container: (0, a.iv)(
            "width:100%;max-width:1280px;padding-top:30px;@media ",
            d.r.media.prePC,
            "{padding-top:2.344vw;}@media ",
            d.r.media.preTablet,
            "{padding-top:6.4vw;}",
            ""
          ),
          bannerWrapper: (0, a.iv)(
            "padding-bottom:30px;@media ",
            d.r.media.prePC,
            "{padding-bottom:2.344vw;}@media ",
            d.r.media.preTablet,
            "{display:none;}",
            ""
          ),
          bannerL: {
            name: "1nb0qlv",
            styles: "display:block;width:100%;max-width:1280px",
          },
          spBannerWrapper: (0, a.iv)(
            "display:none;@media ",
            d.r.media.preTablet,
            "{display:block;padding-bottom:6.4vw;}",
            ""
          ),
          spBannerL: (0, a.iv)("", ""),
        },
        h = function (e) {
          var t = e.href,
            n = e.src,
            i = e.spSrc,
            r = e.target;
          return (0, u.tZ)("div", {
            css: (0, a.iv)(
              "padding-bottom:30px;@media ",
              d.r.media.prePC,
              "{padding-bottom:2.344vw;}@media ",
              d.r.media.preTablet,
              "{display:block;padding-bottom:6.4vw;}",
              ""
            ),
            children: (0, u.tZ)(o.j, {
              href: t,
              src: n,
              spSrc: i,
              target: r,
              load: !0,
            }),
          });
        },
        g = function () {
          var e = (0, r.Vd)("siteCommon", {}).result,
            t = (0, i.useMemo)(
              function () {
                try {
                  var t;
                  return null === e ||
                    void 0 === e ||
                    null === (t = e.data.special[0]) ||
                    void 0 === t
                    ? void 0
                    : t.content.map(function (e) {
                        return {
                          banner_id: e.banner_id,
                          url: e.url,
                          src: (0, r.hT)(e.image),
                          spSrc: (0, r.hT)(e.image_sp),
                          windowType: e.window_type,
                        };
                      });
                } catch (n) {
                  return;
                }
              },
              [null === e || void 0 === e ? void 0 : e.data.special]
            ),
            n = (0, i.useMemo)(
              function () {
                try {
                  return null === e || void 0 === e
                    ? void 0
                    : e.data.special_archive.map(function (e) {
                        return {
                          url: e.url,
                          src: (0, r.hT)(e.image),
                          spSrc: (0, r.hT)(e.image_sp),
                          windowType: e.window_type,
                        };
                      });
                } catch (t) {
                  return;
                }
              },
              [null === e || void 0 === e ? void 0 : e.data.special_archive]
            );
          return (0, u.tZ)(u.HY, {
            children: (0, u.tZ)(m, { specialList: t, specialArchiveList: n }),
          });
        };
    },
    9008: function (e, t, n) {
      e.exports = n(72717);
    },
  },
]);
