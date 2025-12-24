(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9941],
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
            o = void 0 !== r && r,
            i = e.hasQuery,
            s = void 0 !== i && i;
          return n || (o && s);
        });
    },
    72717: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = c),
        (t.default = void 0);
      var r = n(6495).Z,
        o = n(92648).Z,
        i = (0, n(91598).Z)(n(67294)),
        s = o(n(11585)),
        u = n(78e3),
        f = n(15850),
        a = n(9470);
      n(99475);
      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
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
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function (
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
      function d(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(l, [])
          .reverse()
          .concat(c(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var i = !0,
                  s = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  s = !0;
                  var u = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(u) ? (i = !1) : e.add(u);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var f = 0, a = p.length; f < a; f++) {
                      var c = p[f];
                      if (o.props.hasOwnProperty(c))
                        if ("charSet" === c) n.has(c) ? (i = !1) : n.add(c);
                        else {
                          var l = o.props[c],
                            d = r[c] || new Set();
                          ("name" === c && s) || !d.has(l)
                            ? (d.add(l), (r[c] = d))
                            : (i = !1);
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var o = e.key || t;
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
              var s = r({}, e.props || {});
              return (
                (s["data-href"] = s.href),
                (s.href = void 0),
                (s["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, s)
              );
            }
            return i.default.cloneElement(e, { key: o });
          });
      }
      var v = function (e) {
        var t = e.children,
          n = i.useContext(u.AmpStateContext),
          r = i.useContext(f.HeadManagerContext);
        return i.default.createElement(
          s.default,
          {
            reduceComponentsToState: d,
            headManager: r,
            inAmpMode: a.isInAmpMode(n),
          },
          t
        );
      };
      (t.default = v),
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
          function u() {
            if (t && t.mountedInstances) {
              var o = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(o, e));
            }
          }
          if (o) {
            var f;
            null == t || null == (f = t.mountedInstances) || f.add(e.children),
              u();
          }
          return (
            i(function () {
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
            i(function () {
              return (
                t && (t._pendingUpdate = u),
                function () {
                  t && (t._pendingUpdate = u);
                }
              );
            }),
            s(function () {
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
      var o = !1,
        i = o ? function () {} : r.useLayoutEffect,
        s = o ? function () {} : r.useEffect;
    },
    25293: function (e) {
      !(function () {
        "use strict";
        var t = {
            864: function (e) {
              var t,
                n = "object" === typeof Reflect ? Reflect : null,
                r =
                  n && "function" === typeof n.apply
                    ? n.apply
                    : function (e, t, n) {
                        return Function.prototype.apply.call(e, t, n);
                      };
              t =
                n && "function" === typeof n.ownKeys
                  ? n.ownKeys
                  : Object.getOwnPropertySymbols
                  ? function (e) {
                      return Object.getOwnPropertyNames(e).concat(
                        Object.getOwnPropertySymbols(e)
                      );
                    }
                  : function (e) {
                      return Object.getOwnPropertyNames(e);
                    };
              var o =
                Number.isNaN ||
                function (e) {
                  return e !== e;
                };
              function i() {
                i.init.call(this);
              }
              (e.exports = i),
                (e.exports.once = function (e, t) {
                  return new Promise(function (n, r) {
                    function o(n) {
                      e.removeListener(t, i), r(n);
                    }
                    function i() {
                      "function" === typeof e.removeListener &&
                        e.removeListener("error", o),
                        n([].slice.call(arguments));
                    }
                    h(e, t, i, { once: !0 }),
                      "error" !== t &&
                        (function (e, t, n) {
                          "function" === typeof e.on && h(e, "error", t, n);
                        })(e, o, { once: !0 });
                  });
                }),
                (i.EventEmitter = i),
                (i.prototype._events = void 0),
                (i.prototype._eventsCount = 0),
                (i.prototype._maxListeners = void 0);
              var s = 10;
              function u(e) {
                if ("function" !== typeof e)
                  throw new TypeError(
                    'The "listener" argument must be of type Function. Received type ' +
                      typeof e
                  );
              }
              function f(e) {
                return void 0 === e._maxListeners
                  ? i.defaultMaxListeners
                  : e._maxListeners;
              }
              function a(e, t, n, r) {
                var o, i, s;
                if (
                  (u(n),
                  void 0 === (i = e._events)
                    ? ((i = e._events = Object.create(null)),
                      (e._eventsCount = 0))
                    : (void 0 !== i.newListener &&
                        (e.emit("newListener", t, n.listener ? n.listener : n),
                        (i = e._events)),
                      (s = i[t])),
                  void 0 === s)
                )
                  (s = i[t] = n), ++e._eventsCount;
                else if (
                  ("function" === typeof s
                    ? (s = i[t] = r ? [n, s] : [s, n])
                    : r
                    ? s.unshift(n)
                    : s.push(n),
                  (o = f(e)) > 0 && s.length > o && !s.warned)
                ) {
                  s.warned = !0;
                  var a = new Error(
                    "Possible EventEmitter memory leak detected. " +
                      s.length +
                      " " +
                      String(t) +
                      " listeners added. Use emitter.setMaxListeners() to increase limit"
                  );
                  (a.name = "MaxListenersExceededWarning"),
                    (a.emitter = e),
                    (a.type = t),
                    (a.count = s.length),
                    (function (e) {
                      console && console.warn && console.warn(e);
                    })(a);
                }
                return e;
              }
              function c() {
                if (!this.fired)
                  return (
                    this.target.removeListener(this.type, this.wrapFn),
                    (this.fired = !0),
                    0 === arguments.length
                      ? this.listener.call(this.target)
                      : this.listener.apply(this.target, arguments)
                  );
              }
              function l(e, t, n) {
                var r = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: n,
                  },
                  o = c.bind(r);
                return (o.listener = n), (r.wrapFn = o), o;
              }
              function p(e, t, n) {
                var r = e._events;
                if (void 0 === r) return [];
                var o = r[t];
                return void 0 === o
                  ? []
                  : "function" === typeof o
                  ? n
                    ? [o.listener || o]
                    : [o]
                  : n
                  ? (function (e) {
                      for (
                        var t = new Array(e.length), n = 0;
                        n < t.length;
                        ++n
                      )
                        t[n] = e[n].listener || e[n];
                      return t;
                    })(o)
                  : v(o, o.length);
              }
              function d(e) {
                var t = this._events;
                if (void 0 !== t) {
                  var n = t[e];
                  if ("function" === typeof n) return 1;
                  if (void 0 !== n) return n.length;
                }
                return 0;
              }
              function v(e, t) {
                for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                return n;
              }
              function h(e, t, n, r) {
                if ("function" === typeof e.on)
                  r.once ? e.once(t, n) : e.on(t, n);
                else {
                  if ("function" !== typeof e.addEventListener)
                    throw new TypeError(
                      'The "emitter" argument must be of type EventEmitter. Received type ' +
                        typeof e
                    );
                  e.addEventListener(t, function o(i) {
                    r.once && e.removeEventListener(t, o), n(i);
                  });
                }
              }
              Object.defineProperty(i, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                  return s;
                },
                set: function (e) {
                  if ("number" !== typeof e || e < 0 || o(e))
                    throw new RangeError(
                      'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                        e +
                        "."
                    );
                  s = e;
                },
              }),
                (i.init = function () {
                  (void 0 !== this._events &&
                    this._events !== Object.getPrototypeOf(this)._events) ||
                    ((this._events = Object.create(null)),
                    (this._eventsCount = 0)),
                    (this._maxListeners = this._maxListeners || void 0);
                }),
                (i.prototype.setMaxListeners = function (e) {
                  if ("number" !== typeof e || e < 0 || o(e))
                    throw new RangeError(
                      'The value of "n" is out of range. It must be a non-negative number. Received ' +
                        e +
                        "."
                    );
                  return (this._maxListeners = e), this;
                }),
                (i.prototype.getMaxListeners = function () {
                  return f(this);
                }),
                (i.prototype.emit = function (e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t.push(arguments[n]);
                  var o = "error" === e,
                    i = this._events;
                  if (void 0 !== i) o = o && void 0 === i.error;
                  else if (!o) return !1;
                  if (o) {
                    var s;
                    if ((t.length > 0 && (s = t[0]), s instanceof Error))
                      throw s;
                    var u = new Error(
                      "Unhandled error." + (s ? " (" + s.message + ")" : "")
                    );
                    throw ((u.context = s), u);
                  }
                  var f = i[e];
                  if (void 0 === f) return !1;
                  if ("function" === typeof f) r(f, this, t);
                  else {
                    var a = f.length,
                      c = v(f, a);
                    for (n = 0; n < a; ++n) r(c[n], this, t);
                  }
                  return !0;
                }),
                (i.prototype.addListener = function (e, t) {
                  return a(this, e, t, !1);
                }),
                (i.prototype.on = i.prototype.addListener),
                (i.prototype.prependListener = function (e, t) {
                  return a(this, e, t, !0);
                }),
                (i.prototype.once = function (e, t) {
                  return u(t), this.on(e, l(this, e, t)), this;
                }),
                (i.prototype.prependOnceListener = function (e, t) {
                  return u(t), this.prependListener(e, l(this, e, t)), this;
                }),
                (i.prototype.removeListener = function (e, t) {
                  var n, r, o, i, s;
                  if ((u(t), void 0 === (r = this._events))) return this;
                  if (void 0 === (n = r[e])) return this;
                  if (n === t || n.listener === t)
                    0 === --this._eventsCount
                      ? (this._events = Object.create(null))
                      : (delete r[e],
                        r.removeListener &&
                          this.emit("removeListener", e, n.listener || t));
                  else if ("function" !== typeof n) {
                    for (o = -1, i = n.length - 1; i >= 0; i--)
                      if (n[i] === t || n[i].listener === t) {
                        (s = n[i].listener), (o = i);
                        break;
                      }
                    if (o < 0) return this;
                    0 === o
                      ? n.shift()
                      : (function (e, t) {
                          for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                          e.pop();
                        })(n, o),
                      1 === n.length && (r[e] = n[0]),
                      void 0 !== r.removeListener &&
                        this.emit("removeListener", e, s || t);
                  }
                  return this;
                }),
                (i.prototype.off = i.prototype.removeListener),
                (i.prototype.removeAllListeners = function (e) {
                  var t, n, r;
                  if (void 0 === (n = this._events)) return this;
                  if (void 0 === n.removeListener)
                    return (
                      0 === arguments.length
                        ? ((this._events = Object.create(null)),
                          (this._eventsCount = 0))
                        : void 0 !== n[e] &&
                          (0 === --this._eventsCount
                            ? (this._events = Object.create(null))
                            : delete n[e]),
                      this
                    );
                  if (0 === arguments.length) {
                    var o,
                      i = Object.keys(n);
                    for (r = 0; r < i.length; ++r)
                      "removeListener" !== (o = i[r]) &&
                        this.removeAllListeners(o);
                    return (
                      this.removeAllListeners("removeListener"),
                      (this._events = Object.create(null)),
                      (this._eventsCount = 0),
                      this
                    );
                  }
                  if ("function" === typeof (t = n[e]))
                    this.removeListener(e, t);
                  else if (void 0 !== t)
                    for (r = t.length - 1; r >= 0; r--)
                      this.removeListener(e, t[r]);
                  return this;
                }),
                (i.prototype.listeners = function (e) {
                  return p(this, e, !0);
                }),
                (i.prototype.rawListeners = function (e) {
                  return p(this, e, !1);
                }),
                (i.listenerCount = function (e, t) {
                  return "function" === typeof e.listenerCount
                    ? e.listenerCount(t)
                    : d.call(e, t);
                }),
                (i.prototype.listenerCount = d),
                (i.prototype.eventNames = function () {
                  return this._eventsCount > 0 ? t(this._events) : [];
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            s = !0;
          try {
            t[e](i, i.exports, r), (s = !1);
          } finally {
            s && delete n[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = r(864);
        e.exports = o;
      })();
    },
    9008: function (e, t, n) {
      e.exports = n(72717);
    },
    10748: function (e, t, n) {
      "use strict";
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    92777: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    82262: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    37247: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(e)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    45959: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(e, t)
        );
      }
      function o(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    63553: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(14027),
        o = n(10748);
      function i(e, t) {
        if (t && ("object" === r(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (0, o.Z)(e);
      }
    },
  },
]);
