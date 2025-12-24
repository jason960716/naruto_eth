"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6513],
  {
    89434: function (n, t, e) {
      e.d(t, {
        if: function () {
          return p;
        },
        jt: function () {
          return h;
        },
        mD: function () {
          return d;
        },
      });
      var r = e(92777),
        u = e(82262),
        c = e(10748),
        o = e(45959),
        i = e(63553),
        a = e(37247),
        f = e(59499),
        l = e(25293);
      function s(n) {
        var t = (function () {
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
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var e,
            r = (0, a.Z)(n);
          if (t) {
            var u = (0, a.Z)(this).constructor;
            e = Reflect.construct(r, arguments, u);
          } else e = r.apply(this, arguments);
          return (0, i.Z)(this, e);
        };
      }
      var v = (function (n) {
        (0, o.Z)(e, n);
        var t = s(e);
        function e(n) {
          var u;
          return (
            (0, r.Z)(this, e),
            (u = t.call(this)),
            (0, f.Z)((0, c.Z)(u), "duration", void 0),
            (0, f.Z)((0, c.Z)(u), "value", 0),
            (u.duration = n),
            u
          );
        }
        return (
          (0, u.Z)(e, [
            {
              key: "play",
              value: function () {
                var n = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  e = performance.now(),
                  r = function r(c) {
                    var o = Math.min((c - e) / (1e3 * n.duration), 1);
                    (n.value = t ? 1 - o : o),
                      n.emit("change"),
                      o >= 1
                        ? n.emit("complete")
                        : (u = requestAnimationFrame(r));
                  },
                  u = requestAnimationFrame(r);
                return function () {
                  return cancelAnimationFrame(u);
                };
              },
            },
            {
              key: "forward",
              value: function () {
                return this.play();
              },
            },
            {
              key: "reverse",
              value: function () {
                return this.play(!0);
              },
            },
          ]),
          e
        );
      })(e.n(l)());
      function h(n) {
        var t = n.duration,
          e = void 0 === t ? 1 : t,
          r = n.onChange,
          u = void 0 === r ? function () {} : r,
          c = n.onComplete,
          o = void 0 === c ? function () {} : c,
          i = new v(e)
            .on("change", function () {
              u(i.value);
            })
            .on("complete", o);
        return i.forward();
      }
      function d() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : function (n) {
                return n;
              };
        return function (t) {
          var e = n(t);
          if (e < 0.5) {
            var r = 2 * e;
            return (r * r) / 2;
          }
          var u = 1 - 2 * (e - 0.5);
          return 0.5 + 0.5 * (1 - u * u);
        };
      }
      function p(n, t) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : function (n) {
                return n;
              };
        return function (r) {
          return n + (t - n) * e(r);
        };
      }
    },
    86513: function (n, t, e) {
      e.d(t, {
        W: function () {
          return i.W;
        },
        l: function () {
          return v;
        },
      });
      var r = e(16835),
        u = e(70917),
        c = e(67294),
        o = e(89434),
        i = e(85257),
        a = e(94693),
        f = e(35944);
      var l = { name: "x74085", styles: "width:var(--carousel-viewport)" },
        s = { name: "82a6rk", styles: "flex:1" };
      function v(n) {
        var t = n.className,
          e = n.children,
          v = n.viewport,
          h = void 0 === v ? 1 / 0 : v,
          d = n.controller,
          p = n.pointer,
          m = void 0 === p ? "touch" : p,
          y = n.onSnap,
          Z = c.useState(function () {
            return new i.W();
          }),
          g = (0, r.Z)(Z, 1)[0],
          w = c.useRef(null),
          R = c.useState(h),
          k = (0, r.Z)(R, 2),
          M = k[0],
          E = k[1],
          C = c.useState(0),
          P = (0, r.Z)(C, 2),
          b = P[0],
          x = P[1],
          L = c.useState(0),
          S = (0, r.Z)(L, 2),
          B = S[0],
          I = S[1],
          A = null !== d && void 0 !== d ? d : g,
          W = c.useCallback(
            function (n) {
              x(n), (A.page = n), A.emit("change");
            },
            [A]
          ),
          j = c.useCallback(
            function () {
              var n = (0, o.if)(A.page, B, (0, o.mD)());
              return (0, o.jt)({
                duration: 0.5,
                onChange: function (t) {
                  var e = n(t);
                  W(e);
                },
                onComplete: function () {
                  y && y(A.page);
                },
              });
            },
            [A, B, W, y]
          );
        c.useEffect(
          function () {
            if (null != w.current) {
              var n = w.current,
                t = function () {
                  return E(n.clientWidth);
                };
              return (
                t(),
                window.addEventListener("resize", t),
                function () {
                  return window.removeEventListener("resize", t);
                }
              );
            }
          },
          [h, w]
        ),
          c.useEffect(
            function () {
              var n = function (n) {
                var t = n.animated,
                  e = n.page;
                (t ? I : W)(e);
              };
              return (
                A.cue.on("change", n),
                function () {
                  A.off("change", n);
                }
              );
            },
            [A, W]
          ),
          c.useEffect(
            function () {
              A.page !== B && j();
            },
            [A, B, j]
          );
        var N = c.Children.toArray(e).map(function (n, t) {
            return (0, f.tZ)("div", { css: s, children: n }, t);
          }),
          _ = N.length,
          D = c.useCallback(
            function (n) {
              return Math.max(Math.min(n, _ - 1), 0);
            },
            [_]
          ),
          F = c.useCallback(
            function (n) {
              W(b + n);
            },
            [b, W]
          ),
          O = c.useCallback(
            function (n) {
              var t = D(
                -1 === n
                  ? Math.ceil(b) - 1
                  : 1 === n
                  ? Math.floor(b) + 1
                  : Math.round(b)
              );
              B === t ? j() : I(t);
            },
            [b, B, D, j]
          ),
          q = (0, f.tZ)("div", {
            className: t,
            css: (0, u.iv)(
              "padding:0 var(--carousel-inset);overflow:hidden;--carousel-inset:0;--carousel-viewport:",
              h !== 1 / 0 ? "".concat(h, "px") : "100%",
              ";",
              ""
            ),
            children: (0, f.tZ)("div", {
              ref: w,
              css: l,
              children: (0, f.tZ)("div", {
                css: (0, u.iv)(
                  "display:flex;justify-content:center;width:",
                  100 * N.length,
                  "%;height:100%;",
                  ""
                ),
                style: {
                  transform: "translateX(".concat(
                    (-1 * b * 100) / N.length,
                    "%)"
                  ),
                },
                children: N,
              }),
            }),
          });
        return "none" === m
          ? q
          : (0, f.tZ)(a.t, { viewport: M, onPan: F, onSwipe: O, children: q });
      }
    },
    85257: function (n, t, e) {
      e.d(t, {
        W: function () {
          return p;
        },
      });
      var r = e(92777),
        u = e(82262),
        c = e(10748),
        o = e(45959),
        i = e(63553),
        a = e(37247),
        f = e(59499),
        l = e(25293),
        s = e.n(l);
      function v(n) {
        var t = (function () {
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
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var e,
            r = (0, a.Z)(n);
          if (t) {
            var u = (0, a.Z)(this).constructor;
            e = Reflect.construct(r, arguments, u);
          } else e = r.apply(this, arguments);
          return (0, i.Z)(this, e);
        };
      }
      var h = (function (n) {
        (0, o.Z)(e, n);
        var t = v(e);
        function e() {
          return (0, r.Z)(this, e), t.apply(this, arguments);
        }
        return (
          (0, u.Z)(e, [
            {
              key: "add",
              value: function (n, t) {
                this.emit("change", { page: n, animated: t });
              },
            },
          ]),
          e
        );
      })(s());
      function d(n) {
        var t = (function () {
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
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var e,
            r = (0, a.Z)(n);
          if (t) {
            var u = (0, a.Z)(this).constructor;
            e = Reflect.construct(r, arguments, u);
          } else e = r.apply(this, arguments);
          return (0, i.Z)(this, e);
        };
      }
      var p = (function (n) {
        (0, o.Z)(e, n);
        var t = d(e);
        function e() {
          var n;
          (0, r.Z)(this, e);
          for (var u = arguments.length, o = new Array(u), i = 0; i < u; i++)
            o[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(o))),
            (0, f.Z)((0, c.Z)(n), "page", 0),
            (0, f.Z)((0, c.Z)(n), "cue", new h()),
            n
          );
        }
        return (
          (0, u.Z)(e, [
            {
              key: "jumpTo",
              value: function (n) {
                Math.round(n) === n && this.cue.add(Math.round(n), !1);
              },
            },
            {
              key: "to",
              value: function (n) {
                Math.round(n) === n && this.cue.add(Math.round(n), !0);
              },
            },
            {
              key: "next",
              value: function () {
                this.to(this.page + 1);
              },
            },
            {
              key: "prev",
              value: function () {
                this.to(this.page - 1);
              },
            },
          ]),
          e
        );
      })(s());
    },
    94693: function (n, t, e) {
      e.d(t, {
        t: function () {
          return u;
        },
      });
      var r = e(67294);
      function u(n) {
        var t = n.children,
          e = n.viewport,
          u = n.onPan,
          c = void 0 === u ? function () {} : u,
          o = n.onSwipe,
          i = void 0 === o ? function () {} : o,
          a = r.useRef(null),
          f = r.useRef(!1),
          l = r.useRef(!1),
          s = r.useRef([0, 0]),
          v = r.useRef([0, 0]),
          h = r.useRef(0);
        return (
          r.useEffect(
            function () {
              if (e !== 1 / 0 && null != a.current) {
                var n = a.current,
                  t = e,
                  r = function (n) {
                    return [n.touches[0].clientX, n.touches[0].clientY];
                  },
                  u = function (n) {
                    (f.current = !1),
                      1 === n.touches.length
                        ? ((s.current = r(n)),
                          (v.current = s.current),
                          (h.current = performance.now()),
                          (l.current = !1))
                        : (l.current = !0);
                  },
                  o = function (n) {
                    if (!l.current) {
                      var e = r(n),
                        u = [e[0] - v.current[0], e[1] - v.current[1]];
                      if (((v.current = e), !f.current)) {
                        if (
                          !(function (n, t) {
                            var e = Math.atan2(t, n);
                            return (
                              (e >= 0 && e <= Math.PI / 4) ||
                              (e >= (Math.PI / 4) * 3 && e <= Math.PI) ||
                              (e > -Math.PI && e < (-Math.PI / 4) * 3) ||
                              (e > -Math.PI / 4 && e < 0)
                            );
                          })(u[0], u[1])
                        )
                          return void (l.current = !0);
                        f.current = !0;
                      }
                      n.cancelable && n.preventDefault(), c((u[0] / t) * -1);
                    }
                  },
                  d = function () {
                    if (!l.current) {
                      var n = v.current[0] - s.current[0],
                        e = Math.abs(n),
                        r = performance.now() - h.current;
                      i(
                        (r < 200 && e > 10) || e / t > 0.5
                          ? n > 0
                            ? -1
                            : 1
                          : 0
                      );
                    }
                  };
                return (
                  n.addEventListener("touchstart", u),
                  n.addEventListener("touchmove", o),
                  n.addEventListener("touchend", d),
                  function () {
                    n.removeEventListener("touchstart", u),
                      n.removeEventListener("touchmove", o),
                      n.removeEventListener("touchend", d);
                  }
                );
              }
            },
            [e, a, c, i]
          ),
          r.cloneElement(t, { ref: a })
        );
      }
    },
  },
]);
