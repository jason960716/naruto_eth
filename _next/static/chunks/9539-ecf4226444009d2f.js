"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9539],
  {
    10255: function (t, e, n) {
      n.d(e, {
        S: function () {
          return a;
        },
        u: function () {
          return c;
        },
      });
      var r = n(67294),
        i = n(35944),
        o = r.createContext([]),
        a = function (t) {
          var e = t.articles,
            n = t.children;
          return (0, i.tZ)(o.Provider, { value: e, children: n });
        };
      function c() {
        return (0, r.useContext)(o);
      }
    },
    87516: function (t, e, n) {
      n.d(e, {
        e: function () {
          return m;
        },
      });
      var r = n(70917),
        i = (n(67294), n(8503)),
        o = n(48710),
        a = n(26184),
        c = n(37868),
        u = n(35944);
      var l = {
          name: "13hxdvn",
          styles:
            "display:-webkit-box;margin:0;overflow:hidden;line-height:1.5;-webkit-box-orient:vertical;-webkit-line-clamp:3",
        },
        s = {
          name: "wmh8sp",
          styles:
            "margin-bottom:0.5em;font-family:var(--impact-font);line-height:1",
        },
        f = {
          name: "s3pk5b",
          styles: "display:block;width:100%;height:100%;object-fit:contain",
        },
        d = {
          name: "nryqaz",
          styles:
            "height:24px;padding:0 6px;margin:0;font-family:var(--comic-impact-font);font-size:11px;color:#f99327;background-color:#000;&:not(:lang(ja)){font-size:14px;}",
        },
        h = {
          name: "1ec93n0",
          styles:
            "display:flex;align-items:center;height:24px;padding:0 5px;text-align:center;background:#f99327",
        },
        p = {
          name: "5tdxsi",
          styles:
            "position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:flex-start",
        },
        v = {
          name: "1ftjigq",
          styles:
            "position:absolute;top:min(-10.5%, -30px);right:min(2.5%, 8.7px);z-index:1;width:max(19%, 67px);height:auto;pointer-events:none",
        },
        m = function (t) {
          var e = t.title,
            n = t.categories,
            m = t.imgUrl,
            g = t.date,
            y = t.path,
            w = t.isNew,
            b = t.isPickedUp,
            x = (0, i.bU)(),
            Z = "/common/news/pickup_".concat(x, ".svg");
          return (0, u.tZ)(c.Z, {
            href: "/news/".concat(y),
            children: (0, u.tZ)("a", {
              children: (0, u.BX)("div", {
                css: (0, r.iv)(
                  "display:block;height:310px;padding-top:33px;@media ",
                  o.r.media.preTablet,
                  "{height:259px;}.image img{transition:transform 0.25s;}.info{transition:opacity 0.25s;}&:active .image img{transform:scale(1.2);}&:active .info p{opacity:0.5;}@media ",
                  o.r.media.postTablet,
                  "{&:hover .image img{transform:scale(1.2);}&:hover .info p{opacity:0.5;}}",
                  ""
                ),
                children: [
                  (0, u.BX)("div", {
                    css: (0, r.iv)(
                      "position:relative;width:290px;height:163px;@media ",
                      o.r.media.preTablet,
                      "{width:200px;height:113px;}",
                      ""
                    ),
                    children: [
                      b && (0, u.tZ)("img", { css: v, src: Z, alt: "pick up" }),
                      (0, u.BX)("div", {
                        css: p,
                        children: [
                          w &&
                            (0, u.tZ)("div", {
                              css: h,
                              children: (0, u.tZ)("p", {
                                css: (0, r.iv)(
                                  "height:13px;font-family:var(--impact-font);font-size:16px;line-height:1;@media ",
                                  o.r.media.preTablet,
                                  "{font-size:14px;}",
                                  ""
                                ),
                                children: "NEW",
                              }),
                            }),
                          n.map(function (t, e) {
                            return (0,
                            u.tZ)("span", { css: d, children: t }, e);
                          }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        className: "image",
                        css: (0, r.iv)(
                          "flex:none;height:163px;overflow:hidden;background-color:#f2f2f2;@media ",
                          o.r.media.preTablet,
                          "{width:200px;height:113px;}",
                          ""
                        ),
                        children: (0, u.tZ)(a._, {
                          src: m,
                          loadStyle: (0, r.iv)(
                            "display:block;width:100%;height:100%;object-fit:contain;transition:transform 0.25s;@media ",
                            o.r.media.postTablet,
                            "{&:hover{transform:scale(1.2);}}",
                            ""
                          ),
                          imgStyle: f,
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                  (0, u.BX)("div", {
                    className: "info",
                    css: (0, r.iv)(
                      "width:290px;height:114px;padding:10px 20px;font-size:14px;background-color:#fff;@media ",
                      o.r.media.preTablet,
                      "{width:200px;height:113px;}",
                      ""
                    ),
                    children: [
                      (0, u.tZ)("p", { css: s, children: g }),
                      (0, u.tZ)("p", { css: l, children: e }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    73205: function (t, e, n) {
      n.d(e, {
        c: function () {
          return Z;
        },
      });
      var r = n(16835),
        i = n(92777),
        o = n(82262),
        a = n(10748),
        c = n(45959),
        u = n(63553),
        l = n(37247),
        s = n(59499),
        f = n(25293),
        d = n.n(f),
        h = n(70917),
        p = n(67294),
        v = n(48710),
        m = n(35944);
      function g(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, l.Z)(t);
          if (e) {
            var i = (0, l.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, u.Z)(this, n);
        };
      }
      var y = (function (t) {
          (0, c.Z)(n, t);
          var e = g(n);
          function n() {
            var t;
            (0, i.Z)(this, n);
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++)
              o[c] = arguments[c];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              (0, s.Z)((0, a.Z)(t), "delegate", void 0),
              t
            );
          }
          return (
            (0, o.Z)(n, [
              {
                key: "attach",
                value: function (t) {
                  this.delegate = t;
                },
              },
              {
                key: "detach",
                value: function () {
                  this.delegate = void 0;
                },
              },
              {
                key: "toNext",
                value: function () {
                  var t;
                  null === (t = this.delegate) || void 0 === t || t.toNext();
                },
              },
              {
                key: "toPrev",
                value: function () {
                  var t;
                  null === (t = this.delegate) || void 0 === t || t.toPrev();
                },
              },
            ]),
            n
          );
        })(d()),
        w = { name: "io5aiy", styles: "padding:0 10px" },
        b = {
          name: "13u2jgu",
          styles:
            "display:flex;padding-left:calc(max((100vw - 1110px) / 2, 24px));overflow-x:auto;overflow-y:visible;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}",
        };
      function x(t, e) {
        var n = t.children,
          i = t.className,
          o = p.useRef(null),
          a = p.useState(1 / 0),
          c = (0, r.Z)(a, 2),
          u = c[0],
          l = c[1],
          s = p.useState(310),
          f = (0, r.Z)(s, 2),
          d = f[0],
          g = f[1],
          x = p.useState(function () {
            return new y();
          }),
          Z = (0, r.Z)(x, 1)[0];
        return (
          p.useEffect(
            function () {
              return (
                Z.attach({
                  toNext: function () {
                    if (o.current) {
                      var t = o.current,
                        e = t.scrollLeft % d;
                      t.scroll({
                        left: t.scrollLeft + (d - e),
                        behavior: "smooth",
                      });
                    }
                  },
                  toPrev: function () {
                    if (o.current) {
                      var t = o.current,
                        e = t.scrollLeft % d;
                      0 === e && (e = d),
                        t.scroll({
                          left: t.scrollLeft - e,
                          behavior: "smooth",
                        });
                    }
                  },
                }),
                function () {
                  return Z.detach();
                }
              );
            },
            [Z, d]
          ),
          p.useImperativeHandle(
            e,
            function () {
              return Z;
            },
            [Z]
          ),
          p.useEffect(
            function () {
              if (o.current) {
                var t = o.current,
                  e = function () {
                    var e = t.scrollLeft,
                      n = t.scrollWidth - t.clientWidth;
                    Z.emit("position", e / n);
                  },
                  n = function () {
                    l(t.clientWidth),
                      g(
                        window.matchMedia(v.r.media.preTablet).matches
                          ? 220
                          : 310
                      );
                  },
                  r = function () {
                    n(), e();
                  };
                return (
                  n(),
                  t.addEventListener("scroll", e),
                  window.addEventListener("resize", r),
                  function () {
                    t.removeEventListener("scroll", e),
                      window.removeEventListener("resize", r);
                  }
                );
              }
            },
            [Z]
          ),
          (0, m.tZ)("div", {
            ref: o,
            className: i,
            css: b,
            children: (0, m.tZ)("div", {
              css: (0, h.iv)(
                "display:flex;padding-right:",
                (u - Math.max((u - 1130) / 2, 24)) % d,
                "px;",
                ""
              ),
              children: p.Children.map(n, function (t, e) {
                return (0, m.tZ)("div", { css: w, children: t });
              }),
            }),
          })
        );
      }
      var Z = p.forwardRef(x);
    },
    33587: function (t, e, n) {
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
    80072: function (t, e, n) {
      n.d(e, {
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
    11047: function (t, e, n) {
      n.d(e, {
        Am: function () {
          return c;
        },
        Fo: function () {
          return a;
        },
        Q: function () {
          return o;
        },
        e_: function () {
          return i;
        },
        f7: function () {
          return r;
        },
        x3: function () {
          return u;
        },
      });
      var r = function (t, e) {
          var n = Math.floor(new Date().getTime() / 1e3);
          return t < n && n < e;
        },
        i = function (t, e) {
          var n = Math.floor(new Date().getTime() / 1e3);
          return t <= n && n <= t + 24 * e * 60 * 60;
        },
        o = function (t) {
          return "number" === typeof t
            ? t
            : "string" === typeof t
            ? new Date(t).getTime() / 1e3
            : 0;
        },
        a = function (t, e) {
          var n = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0),
            r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
          return (
            n.getFullYear() === r.getFullYear() &&
            n.getMonth() === r.getMonth() &&
            n.getDate() === r.getDate()
          );
        },
        c = function (t, e) {
          var n = t.split(" ")[0].split("/"),
            r = n[0],
            i = n[1],
            o = n[2];
          switch (e) {
            case "ja":
              return "".concat(r, "/").concat(i, "/").concat(o);
            case "en":
              return "".concat(i, "/").concat(o, "/").concat(r);
            default:
              return "".concat(o, "/").concat(i, "/").concat(r);
          }
        },
        u = function (t, e) {
          var n = t.split(" ")[0].split("/")[0];
          return "".concat(n);
        };
    },
    27715: function (t, e, n) {
      n.d(e, {
        T3: function () {
          return l;
        },
        k8: function () {
          return c;
        },
        ux: function () {
          return s;
        },
        y$: function () {
          return u;
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
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (u = !0), (a = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (u) throw a;
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
              u = a[1];
            if (Array.isArray(u)) {
              var l,
                s = [],
                f = i(u);
              try {
                for (f.s(); !(l = f.n()).done; ) {
                  var d = l.value;
                  s.push('"'.concat(d, '"'));
                }
              } catch (h) {
                f.e(h);
              } finally {
                f.f();
              }
              e.push('"'.concat(c, '":[').concat(s.join(","), "]"));
            } else u && e.push('"'.concat(c, '":"').concat(u, '"'));
          }
          if (0 !== e.length) return "{".concat(e.join(","), "}");
        },
        u = function t(e) {
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
            var u = Math.pow(10, a[c]);
            if (n >= u) {
              var l = Math.floor(n / u);
              l >= 10 ? (r += t(l)) : (1 === l && a[c] <= 3) || (r += i[l]),
                (r += o[c]),
                (n -= l * u);
            }
          }
          return (r += i[n]);
        },
        l = function (t) {
          return t
            ? t.startsWith("https://youtu.be/")
              ? t.replace("https://youtu.be/", "https://www.youtube.com/embed/")
              : t.replace(
                  "https://www.youtube.com/watch?v=",
                  "https://www.youtube.com/embed/"
                )
            : t;
        },
        s = function (t) {
          return t
            ? t.replace(
                "https://www.youtube.com/embed",
                "https://www.youtube-nocookie.com/embed"
              )
            : t;
        };
    },
  },
]);
