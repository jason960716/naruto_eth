(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    68357: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ie;
        },
      });
      var r = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (r) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        i = Math.abs,
        o = String.fromCharCode,
        a = Object.assign;
      function s(e) {
        return e.trim();
      }
      function c(e, t, n) {
        return e.replace(t, n);
      }
      function u(e, t) {
        return e.indexOf(t);
      }
      function l(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function f(e, t, n) {
        return e.slice(t, n);
      }
      function p(e) {
        return e.length;
      }
      function d(e) {
        return e.length;
      }
      function h(e, t) {
        return t.push(e), e;
      }
      var m = 1,
        g = 1,
        v = 0,
        y = 0,
        b = 0,
        x = "";
      function w(e, t, n, r, i, o, a) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: i,
          children: o,
          line: m,
          column: g,
          length: a,
          return: "",
        };
      }
      function S(e, t) {
        return a(
          w("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function E() {
        return (b = y > 0 ? l(x, --y) : 0), g--, 10 === b && ((g = 1), m--), b;
      }
      function O() {
        return (b = y < v ? l(x, y++) : 0), g++, 10 === b && ((g = 1), m++), b;
      }
      function k() {
        return l(x, y);
      }
      function I() {
        return y;
      }
      function A(e, t) {
        return f(x, e, t);
      }
      function C(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function T(e) {
        return (m = g = 1), (v = p((x = e))), (y = 0), [];
      }
      function j(e) {
        return (x = ""), e;
      }
      function P(e) {
        return s(A(y - 1, R(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function L(e) {
        for (; (b = k()) && b < 33; ) O();
        return C(e) > 2 || C(b) > 3 ? "" : " ";
      }
      function Z(e, t) {
        for (
          ;
          --t &&
          O() &&
          !(b < 48 || b > 102 || (b > 57 && b < 65) || (b > 70 && b < 97));

        );
        return A(e, I() + (t < 6 && 32 == k() && 32 == O()));
      }
      function R(e) {
        for (; O(); )
          switch (b) {
            case e:
              return y;
            case 34:
            case 39:
              34 !== e && 39 !== e && R(b);
              break;
            case 40:
              41 === e && R(e);
              break;
            case 92:
              O();
          }
        return y;
      }
      function N(e, t) {
        for (; O() && e + b !== 57 && (e + b !== 84 || 47 !== k()); );
        return "/*" + A(t, y - 1) + "*" + o(47 === e ? e : O());
      }
      function B(e) {
        for (; !C(k()); ) O();
        return A(e, y);
      }
      var U = "-ms-",
        M = "-moz-",
        _ = "-webkit-",
        z = "comm",
        D = "rule",
        H = "decl",
        G = "@keyframes";
      function $(e, t) {
        for (var n = "", r = d(e), i = 0; i < r; i++)
          n += t(e[i], i, e, t) || "";
        return n;
      }
      function K(e, t, n, r) {
        switch (e.type) {
          case "@import":
          case H:
            return (e.return = e.return || e.value);
          case z:
            return "";
          case G:
            return (e.return = e.value + "{" + $(e.children, r) + "}");
          case D:
            e.value = e.props.join(",");
        }
        return p((n = $(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function X(e, t) {
        switch (
          (function (e, t) {
            return (
              (((((((t << 2) ^ l(e, 0)) << 2) ^ l(e, 1)) << 2) ^ l(e, 2)) <<
                2) ^
              l(e, 3)
            );
          })(e, t)
        ) {
          case 5103:
            return _ + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return _ + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return _ + e + M + e + U + e + e;
          case 6828:
          case 4268:
            return _ + e + U + e + e;
          case 6165:
            return _ + e + U + "flex-" + e + e;
          case 5187:
            return (
              _ +
              e +
              c(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
              e
            );
          case 5443:
            return _ + e + U + "flex-item-" + c(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              _ +
              e +
              U +
              "flex-line-pack" +
              c(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return _ + e + U + c(e, "shrink", "negative") + e;
          case 5292:
            return _ + e + U + c(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              _ +
              "box-" +
              c(e, "-grow", "") +
              _ +
              e +
              U +
              c(e, "grow", "positive") +
              e
            );
          case 4554:
            return _ + c(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
          case 6187:
            return (
              c(
                c(c(e, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return c(e, /(image-set\([^]*)/, _ + "$1$`$1");
          case 4968:
            return (
              c(
                c(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  "-webkit-box-pack:$3-ms-flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              _ +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return c(e, /(.+)-inline(.+)/, _ + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (p(e) - 1 - t > 6)
              switch (l(e, t + 1)) {
                case 109:
                  if (45 !== l(e, t + 4)) break;
                case 102:
                  return (
                    c(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1-webkit-$2-$3$1" +
                        M +
                        (108 == l(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~u(e, "stretch")
                    ? X(c(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== l(e, t + 1)) break;
          case 6444:
            switch (l(e, p(e) - 3 - (~u(e, "!important") && 10))) {
              case 107:
                return c(e, ":", ":" + _) + e;
              case 101:
                return (
                  c(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      _ +
                      (45 === l(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      _ +
                      "$2$3$1" +
                      U +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (l(e, t + 11)) {
              case 114:
                return _ + e + U + c(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return _ + e + U + c(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return _ + e + U + c(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return _ + e + U + e + e;
        }
        return e;
      }
      function W(e) {
        return j(V("", null, null, null, [""], (e = T(e)), 0, [0], e));
      }
      function V(e, t, n, r, i, a, s, l, f) {
        for (
          var d = 0,
            m = 0,
            g = s,
            v = 0,
            y = 0,
            b = 0,
            x = 1,
            w = 1,
            S = 1,
            A = 0,
            C = "",
            T = i,
            j = a,
            R = r,
            U = C;
          w;

        )
          switch (((b = A), (A = O()))) {
            case 40:
              if (108 != b && 58 == U.charCodeAt(g - 1)) {
                -1 != u((U += c(P(A), "&", "&\f")), "&\f") && (S = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              U += P(A);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              U += L(b);
              break;
            case 92:
              U += Z(I() - 1, 7);
              continue;
            case 47:
              switch (k()) {
                case 42:
                case 47:
                  h(F(N(O(), I()), t, n), f);
                  break;
                default:
                  U += "/";
              }
              break;
            case 123 * x:
              l[d++] = p(U) * S;
            case 125 * x:
            case 59:
            case 0:
              switch (A) {
                case 0:
                case 125:
                  w = 0;
                case 59 + m:
                  y > 0 &&
                    p(U) - g &&
                    h(
                      y > 32
                        ? q(U + ";", r, n, g - 1)
                        : q(c(U, " ", "") + ";", r, n, g - 2),
                      f
                    );
                  break;
                case 59:
                  U += ";";
                default:
                  if (
                    (h(
                      (R = Y(U, t, n, d, m, i, l, C, (T = []), (j = []), g)),
                      a
                    ),
                    123 === A)
                  )
                    if (0 === m) V(U, t, R, R, T, a, g, l, j);
                    else
                      switch (v) {
                        case 100:
                        case 109:
                        case 115:
                          V(
                            e,
                            R,
                            R,
                            r &&
                              h(Y(e, R, R, 0, 0, i, l, C, i, (T = []), g), j),
                            i,
                            j,
                            g,
                            l,
                            r ? T : j
                          );
                          break;
                        default:
                          V(U, R, R, R, [""], j, 0, l, j);
                      }
              }
              (d = m = y = 0), (x = S = 1), (C = U = ""), (g = s);
              break;
            case 58:
              (g = 1 + p(U)), (y = b);
            default:
              if (x < 1)
                if (123 == A) --x;
                else if (125 == A && 0 == x++ && 125 == E()) continue;
              switch (((U += o(A)), A * x)) {
                case 38:
                  S = m > 0 ? 1 : ((U += "\f"), -1);
                  break;
                case 44:
                  (l[d++] = (p(U) - 1) * S), (S = 1);
                  break;
                case 64:
                  45 === k() && (U += P(O())),
                    (v = k()),
                    (m = g = p((C = U += B(I())))),
                    A++;
                  break;
                case 45:
                  45 === b && 2 == p(U) && (x = 0);
              }
          }
        return a;
      }
      function Y(e, t, n, r, o, a, u, l, p, h, m) {
        for (
          var g = o - 1, v = 0 === o ? a : [""], y = d(v), b = 0, x = 0, S = 0;
          b < r;
          ++b
        )
          for (
            var E = 0, O = f(e, g + 1, (g = i((x = u[b])))), k = e;
            E < y;
            ++E
          )
            (k = s(x > 0 ? v[E] + " " + O : c(O, /&\f/g, v[E]))) &&
              (p[S++] = k);
        return w(e, t, n, 0 === o ? D : l, p, h, m);
      }
      function F(e, t, n) {
        return w(e, t, n, z, o(b), f(e, 2, -2), 0);
      }
      function q(e, t, n, r) {
        return w(e, t, n, H, f(e, 0, r), f(e, r + 1, -1), r);
      }
      var J = function (e, t, n) {
          for (
            var r = 0, i = 0;
            (r = i), (i = k()), 38 === r && 12 === i && (t[n] = 1), !C(i);

          )
            O();
          return A(e, y);
        },
        Q = function (e, t) {
          return j(
            (function (e, t) {
              var n = -1,
                r = 44;
              do {
                switch (C(r)) {
                  case 0:
                    38 === r && 12 === k() && (t[n] = 1),
                      (e[n] += J(y - 1, t, n));
                    break;
                  case 2:
                    e[n] += P(r);
                    break;
                  case 4:
                    if (44 === r) {
                      (e[++n] = 58 === k() ? "&\f" : ""), (t[n] = e[n].length);
                      break;
                    }
                  default:
                    e[n] += o(r);
                }
              } while ((r = O()));
              return e;
            })(T(e), t)
          );
        },
        ee = new WeakMap(),
        te = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || ee.get(n)) &&
              !r
            ) {
              ee.set(e, !0);
              for (
                var i = [], o = Q(t, i), a = n.props, s = 0, c = 0;
                s < o.length;
                s++
              )
                for (var u = 0; u < a.length; u++, c++)
                  e.props[c] = i[s]
                    ? o[s].replace(/&\f/g, a[u])
                    : a[u] + " " + o[s];
            }
          }
        },
        ne = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        re = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case H:
                  e.return = X(e.value, e.length);
                  break;
                case G:
                  return $([S(e, { value: c(e.value, "@", "@" + _) })], r);
                case D:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return $(
                            [
                              S(e, {
                                props: [c(t, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            r
                          );
                        case "::placeholder":
                          return $(
                            [
                              S(e, {
                                props: [
                                  c(t, /:(plac\w+)/, ":-webkit-input-$1"),
                                ],
                              }),
                              S(e, { props: [c(t, /:(plac\w+)/, ":-moz-$1")] }),
                              S(e, {
                                props: [c(t, /:(plac\w+)/, U + "input-$1")],
                              }),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        ie = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var i = e.stylisPlugins || re;
          var o,
            a,
            s = {},
            c = [];
          (o = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  s[t[n]] = !0;
                c.push(e);
              }
            );
          var u,
            l,
            f = [
              K,
              ((l = function (e) {
                u.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && l(e));
              }),
            ],
            p = (function (e) {
              var t = d(e);
              return function (n, r, i, o) {
                for (var a = "", s = 0; s < t; s++) a += e[s](n, r, i, o) || "";
                return a;
              };
            })([te, ne].concat(i, f));
          a = function (e, t, n, r) {
            (u = n),
              $(W(e ? e + "{" + t.styles + "}" : t.styles), p),
              r && (h.inserted[t.name] = !0);
          };
          var h = {
            key: t,
            sheet: new r({
              key: t,
              container: o,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: s,
            registered: {},
            insert: a,
          };
          return h.sheet.hydrate(c), h;
        };
    },
    54880: function (e, t, n) {
      "use strict";
      var r;
      n.d(t, {
        E: function () {
          return g;
        },
        T: function () {
          return f;
        },
        c: function () {
          return h;
        },
        h: function () {
          return c;
        },
        w: function () {
          return l;
        },
      });
      var i = n(67294),
        o = n(68357),
        a = n(70444),
        s = n(52243),
        c = {}.hasOwnProperty,
        u = (0, i.createContext)(
          "undefined" !== typeof HTMLElement ? (0, o.Z)({ key: "css" }) : null
        );
      u.Provider;
      var l = function (e) {
          return (0, i.forwardRef)(function (t, n) {
            var r = (0, i.useContext)(u);
            return e(t, r, n);
          });
        },
        f = (0, i.createContext)({});
      var p = (r || (r = n.t(i, 2))).useInsertionEffect
        ? (r || (r = n.t(i, 2))).useInsertionEffect
        : function (e) {
            e();
          };
      var d = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        h = function (e, t) {
          var n = {};
          for (var r in t) c.call(t, r) && (n[r] = t[r]);
          return (n[d] = e), n;
        },
        m = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          (0, a.hC)(t, n, r);
          p(function () {
            return (0, a.My)(t, n, r);
          });
          return null;
        },
        g = l(function (e, t, n) {
          var r = e.css;
          "string" === typeof r &&
            void 0 !== t.registered[r] &&
            (r = t.registered[r]);
          var o = e[d],
            u = [r],
            l = "";
          "string" === typeof e.className
            ? (l = (0, a.fp)(t.registered, u, e.className))
            : null != e.className && (l = e.className + " ");
          var p = (0, s.O)(u, void 0, (0, i.useContext)(f));
          l += t.key + "-" + p.name;
          var h = {};
          for (var g in e)
            c.call(e, g) && "css" !== g && g !== d && (h[g] = e[g]);
          return (
            (h.ref = n),
            (h.className = l),
            (0, i.createElement)(
              i.Fragment,
              null,
              (0, i.createElement)(m, {
                cache: t,
                serialized: p,
                isStringTag: "string" === typeof o,
              }),
              (0, i.createElement)(o, h)
            )
          );
        });
    },
    70917: function (e, t, n) {
      "use strict";
      var r;
      n.d(t, {
        F4: function () {
          return f;
        },
        iv: function () {
          return l;
        },
        xB: function () {
          return u;
        },
      });
      var i = n(67294),
        o = (n(68357), n(54880)),
        a = (n(8679), n(70444)),
        s = n(52243),
        c = (r || (r = n.t(i, 2))).useInsertionEffect
          ? (r || (r = n.t(i, 2))).useInsertionEffect
          : i.useLayoutEffect,
        u = (0, o.w)(function (e, t) {
          var n = e.styles,
            r = (0, s.O)([n], void 0, (0, i.useContext)(o.T)),
            u = (0, i.useRef)();
          return (
            c(
              function () {
                var e = t.key + "-global",
                  n = new t.sheet.constructor({
                    key: e,
                    nonce: t.sheet.nonce,
                    container: t.sheet.container,
                    speedy: t.sheet.isSpeedy,
                  }),
                  i = !1,
                  o = document.querySelector(
                    'style[data-emotion="' + e + " " + r.name + '"]'
                  );
                return (
                  t.sheet.tags.length && (n.before = t.sheet.tags[0]),
                  null !== o &&
                    ((i = !0),
                    o.setAttribute("data-emotion", e),
                    n.hydrate([o])),
                  (u.current = [n, i]),
                  function () {
                    n.flush();
                  }
                );
              },
              [t]
            ),
            c(
              function () {
                var e = u.current,
                  n = e[0];
                if (e[1]) e[1] = !1;
                else {
                  if (
                    (void 0 !== r.next && (0, a.My)(t, r.next, !0),
                    n.tags.length)
                  ) {
                    var i = n.tags[n.tags.length - 1].nextElementSibling;
                    (n.before = i), n.flush();
                  }
                  t.insert("", r, n, !1);
                }
              },
              [t, r.name]
            ),
            null
          );
        });
      function l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, s.O)(t);
      }
      var f = function () {
        var e = l.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      };
    },
    35944: function (e, t, n) {
      "use strict";
      n.d(t, {
        BX: function () {
          return s;
        },
        HY: function () {
          return o;
        },
        tZ: function () {
          return a;
        },
      });
      n(67294), n(68357);
      var r = n(54880),
        i = (n(8679), n(52243), n(85893)),
        o = i.Fragment;
      function a(e, t, n) {
        return r.h.call(t, "css")
          ? (0, i.jsx)(r.E, (0, r.c)(e, t), n)
          : (0, i.jsx)(e, t, n);
      }
      function s(e, t, n) {
        return r.h.call(t, "css")
          ? (0, i.jsxs)(r.E, (0, r.c)(e, t), n)
          : (0, i.jsxs)(e, t, n);
      }
    },
    52243: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return h;
        },
      });
      var r = function (e) {
          for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(r)) |
                    ((255 & e.charCodeAt(++r)) << 8) |
                    ((255 & e.charCodeAt(++r)) << 16) |
                    ((255 & e.charCodeAt(++r)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (i) {
            case 3:
              n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n =
              1540483477 * (65535 & (n ^= n >>> 13)) +
              ((59797 * (n >>> 16)) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36);
        },
        i = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      var o = /[A-Z]|^ms/g,
        a = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        s = function (e) {
          return 45 === e.charCodeAt(1);
        },
        c = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        u = (function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return s(e) ? e : e.replace(o, "-$&").toLowerCase();
        }),
        l = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(a, function (e, t, n) {
                  return (p = { name: t, styles: n, next: p }), t;
                });
          }
          return 1 === i[e] || s(e) || "number" !== typeof t || 0 === t
            ? t
            : t + "px";
        };
      function f(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (p = { name: n.name, styles: n.styles, next: p }), n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (p = { name: r.name, styles: r.styles, next: p }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var i = 0; i < n.length; i++) r += f(e, t, n[i]) + ";";
              else
                for (var o in n) {
                  var a = n[o];
                  if ("object" !== typeof a)
                    null != t && void 0 !== t[a]
                      ? (r += o + "{" + t[a] + "}")
                      : c(a) && (r += u(o) + ":" + l(o, a) + ";");
                  else if (
                    !Array.isArray(a) ||
                    "string" !== typeof a[0] ||
                    (null != t && void 0 !== t[a[0]])
                  ) {
                    var s = f(e, t, a);
                    switch (o) {
                      case "animation":
                      case "animationName":
                        r += u(o) + ":" + s + ";";
                        break;
                      default:
                        r += o + "{" + s + "}";
                    }
                  } else
                    for (var p = 0; p < a.length; p++)
                      c(a[p]) && (r += u(o) + ":" + l(o, a[p]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var i = p,
                o = n(e);
              return (p = i), f(e, t, o);
            }
        }
        if (null == t) return n;
        var a = t[n];
        return void 0 !== a ? a : n;
      }
      var p,
        d = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var h = function (e, t, n) {
        if (
          1 === e.length &&
          "object" === typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0];
        var i = !0,
          o = "";
        p = void 0;
        var a = e[0];
        null == a || void 0 === a.raw
          ? ((i = !1), (o += f(n, t, a)))
          : (o += a[0]);
        for (var s = 1; s < e.length; s++)
          (o += f(n, t, e[s])), i && (o += a[s]);
        d.lastIndex = 0;
        for (var c, u = ""; null !== (c = d.exec(o)); ) u += "-" + c[1];
        return { name: r(o) + u, styles: o, next: p };
      };
    },
    70444: function (e, t, n) {
      "use strict";
      n.d(t, {
        My: function () {
          return o;
        },
        fp: function () {
          return r;
        },
        hC: function () {
          return i;
        },
      });
      function r(e, t, n) {
        var r = "";
        return (
          n.split(" ").forEach(function (n) {
            void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
          }),
          r
        );
      }
      var i = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        o = function (e, t, n) {
          i(e, t, n);
          var r = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var o = t;
            do {
              e.insert(t === o ? "." + r : "", o, e.sheet, !0);
              o = o.next;
            } while (void 0 !== o);
          }
        };
    },
    76489: function (e, t) {
      "use strict";
      (t.Q = function (e, t) {
        if ("string" !== typeof e)
          throw new TypeError("argument str must be a string");
        var n = {},
          r = (t || {}).decode || i,
          o = 0;
        for (; o < e.length; ) {
          var s = e.indexOf("=", o);
          if (-1 === s) break;
          var c = e.indexOf(";", o);
          if (-1 === c) c = e.length;
          else if (c < s) {
            o = e.lastIndexOf(";", s - 1) + 1;
            continue;
          }
          var u = e.slice(o, s).trim();
          if (void 0 === n[u]) {
            var l = e.slice(s + 1, c).trim();
            34 === l.charCodeAt(0) && (l = l.slice(1, -1)), (n[u] = a(l, r));
          }
          o = c + 1;
        }
        return n;
      }),
        (t.q = function (e, t, i) {
          var a = i || {},
            s = a.encode || o;
          if ("function" !== typeof s)
            throw new TypeError("option encode is invalid");
          if (!r.test(e)) throw new TypeError("argument name is invalid");
          var c = s(t);
          if (c && !r.test(c)) throw new TypeError("argument val is invalid");
          var u = e + "=" + c;
          if (null != a.maxAge) {
            var l = a.maxAge - 0;
            if (isNaN(l) || !isFinite(l))
              throw new TypeError("option maxAge is invalid");
            u += "; Max-Age=" + Math.floor(l);
          }
          if (a.domain) {
            if (!r.test(a.domain))
              throw new TypeError("option domain is invalid");
            u += "; Domain=" + a.domain;
          }
          if (a.path) {
            if (!r.test(a.path)) throw new TypeError("option path is invalid");
            u += "; Path=" + a.path;
          }
          if (a.expires) {
            var f = a.expires;
            if (
              !(function (e) {
                return "[object Date]" === n.call(e) || e instanceof Date;
              })(f) ||
              isNaN(f.valueOf())
            )
              throw new TypeError("option expires is invalid");
            u += "; Expires=" + f.toUTCString();
          }
          a.httpOnly && (u += "; HttpOnly");
          a.secure && (u += "; Secure");
          a.partitioned && (u += "; Partitioned");
          if (a.priority) {
            switch (
              "string" === typeof a.priority
                ? a.priority.toLowerCase()
                : a.priority
            ) {
              case "low":
                u += "; Priority=Low";
                break;
              case "medium":
                u += "; Priority=Medium";
                break;
              case "high":
                u += "; Priority=High";
                break;
              default:
                throw new TypeError("option priority is invalid");
            }
          }
          if (a.sameSite) {
            switch (
              "string" === typeof a.sameSite
                ? a.sameSite.toLowerCase()
                : a.sameSite
            ) {
              case !0:
                u += "; SameSite=Strict";
                break;
              case "lax":
                u += "; SameSite=Lax";
                break;
              case "strict":
                u += "; SameSite=Strict";
                break;
              case "none":
                u += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return u;
        });
      var n = Object.prototype.toString,
        r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function i(e) {
        return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
      }
      function o(e) {
        return encodeURIComponent(e);
      }
      function a(e, t) {
        try {
          return t(e);
        } catch (n) {
          return e;
        }
      }
    },
    8679: function (e, t, n) {
      "use strict";
      var r = n(59864),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (h) {
            var i = d(n);
            i && i !== h && e(t, i, r);
          }
          var a = l(n);
          f && (a = a.concat(f(n)));
          for (var s = c(t), m = c(n), g = 0; g < a.length; ++g) {
            var v = a[g];
            if (!o[v] && (!r || !r[v]) && (!m || !m[v]) && (!s || !s[v])) {
              var y = p(n, v);
              try {
                u(t, v, y);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    44019: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, r) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7942: function (e, t, n) {
      "use strict";
      var r = n(85696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(92648).Z,
        o = n(17273).Z,
        a = i(n(67294)),
        s = n(64957),
        c = n(57995),
        u = n(30647),
        l = n(51992),
        f = n(90639),
        p = n(44019),
        d = n(70227),
        h = {};
      function m(e, t, n, r) {
        if (e && s.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, n, r)).catch(function (e) {
            0;
          });
          var i =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          h[t + "%" + n + (i ? "%" + i : "")] = !0;
        }
      }
      var g = a.default.forwardRef(function (e, t) {
        var n,
          i = e.href,
          g = e.as,
          v = e.children,
          y = e.prefetch,
          b = e.passHref,
          x = e.replace,
          w = e.shallow,
          S = e.scroll,
          E = e.locale,
          O = e.onClick,
          k = e.onMouseEnter,
          I = e.onTouchStart,
          A = e.legacyBehavior,
          C = void 0 === A ? !0 !== Boolean(!1) : A,
          T = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = v),
          !C ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = a.default.createElement("a", null, n));
        var j = !1 !== y,
          P = a.default.useContext(u.RouterContext),
          L = a.default.useContext(l.AppRouterContext);
        L && (P = L);
        var Z,
          R = a.default.useMemo(
            function () {
              var e = s.resolveHref(P, i, !0),
                t = r(e, 2),
                n = t[0],
                o = t[1];
              return { href: n, as: g ? s.resolveHref(P, g) : o || n };
            },
            [P, i, g]
          ),
          N = R.href,
          B = R.as,
          U = a.default.useRef(N),
          M = a.default.useRef(B);
        C && (Z = a.default.Children.only(n));
        var _ = C ? Z && "object" === typeof Z && Z.ref : t,
          z = f.useIntersection({ rootMargin: "200px" }),
          D = r(z, 3),
          H = D[0],
          G = D[1],
          $ = D[2],
          K = a.default.useCallback(
            function (e) {
              (M.current === B && U.current === N) ||
                ($(), (M.current = B), (U.current = N)),
                H(e),
                _ &&
                  ("function" === typeof _
                    ? _(e)
                    : "object" === typeof _ && (_.current = e));
            },
            [B, _, N, $, H]
          );
        a.default.useEffect(
          function () {
            var e = G && j && s.isLocalURL(N),
              t = "undefined" !== typeof E ? E : P && P.locale,
              n = h[N + "%" + B + (t ? "%" + t : "")];
            e && !n && m(P, N, B, { locale: t });
          },
          [B, N, G, E, j, P]
        );
        var X = {
          ref: K,
          onClick: function (e) {
            C || "function" !== typeof O || O(e),
              C &&
                Z.props &&
                "function" === typeof Z.props.onClick &&
                Z.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, i, o, c, u, l, f) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      s.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var p = function () {
                      "beforePopState" in t
                        ? t[i ? "replace" : "push"](n, r, {
                            shallow: o,
                            locale: u,
                            scroll: c,
                          })
                        : t[i ? "replace" : "push"](n, {
                            forceOptimisticNavigation: !f,
                          });
                    };
                    l ? a.default.startTransition(p) : p();
                  }
                })(e, P, N, B, x, w, S, E, Boolean(L), j);
          },
          onMouseEnter: function (e) {
            C || "function" !== typeof k || k(e),
              C &&
                Z.props &&
                "function" === typeof Z.props.onMouseEnter &&
                Z.props.onMouseEnter(e),
              (!j && L) || (s.isLocalURL(N) && m(P, N, B, { priority: !0 }));
          },
          onTouchStart: function (e) {
            C || "function" !== typeof I || I(e),
              C &&
                Z.props &&
                "function" === typeof Z.props.onTouchStart &&
                Z.props.onTouchStart(e),
              (!j && L) || (s.isLocalURL(N) && m(P, N, B, { priority: !0 }));
          },
        };
        if (!C || b || ("a" === Z.type && !("href" in Z.props))) {
          var W = "undefined" !== typeof E ? E : P && P.locale,
            V =
              P &&
              P.isLocaleDomain &&
              p.getDomainLocale(B, W, P.locales, P.domainLocales);
          X.href = V || d.addBasePath(c.addLocale(B, W, P && P.defaultLocale));
        }
        return C
          ? a.default.cloneElement(Z, X)
          : a.default.createElement("a", Object.assign({}, T, X), n);
      });
      (t.default = g),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    90639: function (e, t, n) {
      "use strict";
      var r = n(85696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            u = e.disabled || !a,
            l = i.useState(!1),
            f = r(l, 2),
            p = f[0],
            d = f[1],
            h = i.useState(null),
            m = r(h, 2),
            g = m[0],
            v = m[1];
          i.useEffect(
            function () {
              if (a) {
                if (u || p) return;
                if (g && g.tagName) {
                  var e = (function (e, t, n) {
                    var r = (function (e) {
                        var t,
                          n = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          r = c.find(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                        if (r && (t = s.get(r))) return t;
                        var i = new Map(),
                          o = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                              var t = i.get(e.target),
                                n = e.isIntersecting || e.intersectionRatio > 0;
                              t && n && t(n);
                            });
                          }, e);
                        return (
                          (t = { id: n, observer: o, elements: i }),
                          c.push(n),
                          s.set(n, t),
                          t
                        );
                      })(n),
                      i = r.id,
                      o = r.observer,
                      a = r.elements;
                    return (
                      a.set(e, t),
                      o.observe(e),
                      function () {
                        if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                          o.disconnect(), s.delete(i);
                          var t = c.findIndex(function (e) {
                            return e.root === i.root && e.margin === i.margin;
                          });
                          t > -1 && c.splice(t, 1);
                        }
                      }
                    );
                  })(
                    g,
                    function (e) {
                      return e && d(e);
                    },
                    { root: null == t ? void 0 : t.current, rootMargin: n }
                  );
                  return e;
                }
              } else if (!p) {
                var r = o.requestIdleCallback(function () {
                  return d(!0);
                });
                return function () {
                  return o.cancelIdleCallback(r);
                };
              }
            },
            [g, u, n, t, p]
          );
          var y = i.useCallback(function () {
            d(!1);
          }, []);
          return [v, p, y];
        });
      var i = n(67294),
        o = n(26286),
        a = "function" === typeof IntersectionObserver,
        s = new Map(),
        c = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    51992: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var r = (0, n(92648).Z)(n(67294)),
        i = r.default.createContext(null);
      t.AppRouterContext = i;
      var o = r.default.createContext(null);
      t.LayoutRouterContext = o;
      var a = r.default.createContext(null);
      t.GlobalLayoutRouterContext = a;
      var s = r.default.createContext(null);
      t.TemplateContext = s;
    },
    1183: function (e, t, n) {
      "use strict";
      n.d(t, {
        iv: function () {
          return w;
        },
        lS: function () {
          return x;
        },
        ue: function () {
          return b;
        },
      });
      var r = n(59499),
        i = n(50029),
        o = n(16835),
        a = n(87794),
        s = n.n(a),
        c = n(67294),
        u = n(28613),
        l = n(62089),
        f = n(83454),
        p = n(21876).Buffer;
      function d(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var m = {
          token: "cmsbase/Token/get",
          siteCommon: "cmsbase/SiteCommon/get",
          siteInfomationList: "cmsbase/SiteInfomation/list",
          articleList: "naruto/Article/list",
          articleGet: "naruto/Article/get",
          imageGet: "naruto/Image/get",
          comicList: "naruto/Comic/list",
          comicGet: "naruto/Comic/get",
          animeSynopsisList: "naruto/AnimeSynopsis/list",
          animeSynopsisGet: "naruto/AnimeSynopsis/get",
          goodsList: "naruto/Goods/list",
          gameList: "naruto/Game/list",
          eventList: "naruto/Event/list",
          episodeList: "naruto/Episode/list",
          seriesList: "naruto/Series/list",
          enqueteGet: "naruto/Enquete/detail",
          enqueteAnswer: "naruto/Enquete/answer",
        },
        g = {
          token: "GET",
          siteCommon: "GET",
          siteInfomationList: "GET",
          articleList: "GET",
          articleGet: "GET",
          imageGet: "GET",
          comicList: "GET",
          comicGet: "GET",
          animeSynopsisList: "GET",
          animeSynopsisGet: "GET",
          goodsList: "GET",
          gameList: "GET",
          eventList: "GET",
          episodeList: "GET",
          seriesList: "GET",
          enqueteGet: "GET",
          enqueteAnswer: "POST",
        },
        v = function (e) {
          if (e) {
            for (var t = {}, n = 0, r = Object.entries(e); n < r.length; n++) {
              var i = (0, o.Z)(r[n], 2),
                a = i[0],
                s = i[1];
              if (void 0 !== s) {
                var c = s;
                "number" === typeof s && ((c = s.toString()), (t[a] = c)),
                  (t[a] = c);
              }
            }
            var u = Object.entries(t)
              .map(function (e) {
                var t = (0, o.Z)(e, 2),
                  n = t[0],
                  r = t[1],
                  i = r === decodeURIComponent(r) ? encodeURIComponent(r) : r;
                return "".concat(n, "=").concat(i);
              })
              .join("&");
            return "?".concat(u);
          }
          return "";
        },
        y = (function () {
          var e = (0, i.Z)(
            s().mark(function e(t, n, r, i) {
              var o, a, c, u, d, h, y;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        f.env.NEXT_PUBLIC_BASIC_USER &&
                          f.env.NEXT_PUBLIC_BASIC_PASS &&
                          (a = {
                            Authorization: "Basic ".concat(
                              p
                                .from(
                                  ""
                                    .concat(f.env.NEXT_PUBLIC_BASIC_USER, ":")
                                    .concat(f.env.NEXT_PUBLIC_BASIC_PASS)
                                )
                                .toString("base64")
                            ),
                          }),
                        (c = i),
                        (u = g[n]),
                        (d =
                          null !==
                            (o = f.env.NEXT_PUBLIC_PREVIEW_API_BASE_URL) &&
                          void 0 !== o
                            ? o
                            : "https://naruto-be.vercel.app/site/api/"),
                        (h = v(r)),
                        (y = "".concat(d).concat(m[n]).concat(h)),
                        e.abrupt("return", (0, l.WY)(t, y, a, c, u))
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r, i) {
            return e.apply(this, arguments);
          };
        })(),
        b = function (e, t, n) {
          return (function () {
            var r = (0, i.Z)(
              s().mark(function r(i) {
                var o;
                return s().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), y(i, e, t, n);
                      case 2:
                        return (o = r.sent), (r.next = 5), o.json();
                      case 5:
                        return r.abrupt("return", r.sent);
                      case 6:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        },
        x = function (e) {
          var t = (0, c.useState)(e),
            n = t[0],
            r = t[1];
          if (!e) return e;
          var i = Object.entries(e),
            a = Object.entries(n),
            s =
              i.length !== a.length ||
              i.some(function (e) {
                var t = (0, o.Z)(e, 2),
                  r = t[0],
                  i = t[1];
                return n[r] !== i;
              });
          return s && r(e), s ? e : n;
        },
        w = function (e, t, n) {
          var r = (0, u.n)(t);
          return h(h({}, n), {}, { token: e, site: r, ip: "naruto" });
        };
    },
    62089: function (e, t, n) {
      "use strict";
      n.d(t, {
        RQ: function () {
          return h;
        },
        WY: function () {
          return f;
        },
        hQ: function () {
          return m;
        },
      });
      var r = n(59499),
        i = n(50029),
        o = n(87794),
        a = n.n(o),
        s = n(67294);
      function c(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var l = Symbol("ABORTED"),
        f = (function () {
          var e = (0, i.Z)(
            a().mark(function e(t, n, r, i) {
              var o,
                s,
                c = arguments;
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = c.length > 4 && void 0 !== c[4] ? c[4] : "GET"),
                        (e.next = 3),
                        fetch(n, {
                          method: o,
                          headers: r,
                          body: i,
                          signal:
                            null === t || void 0 === t ? void 0 : t.signal,
                        })
                      );
                    case 3:
                      return (s = e.sent), e.abrupt("return", s);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r, i) {
            return e.apply(this, arguments);
          };
        })(),
        p = function (e) {
          var t = e.func,
            n = e.dispatchRef,
            r = Symbol("TASK_ID"),
            o = null;
          return {
            func: t,
            taskId: r,
            runId: null,
            start: (function () {
              var e = (0, i.Z)(
                a().mark(function e() {
                  var i, s;
                  return a().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              o && o.abort(),
                              (o = new AbortController()),
                              (i = Symbol("RUN_ID")),
                              n.current({ type: "START", taskId: r, runId: i }),
                              (e.prev = 4),
                              (e.next = 7),
                              t(o)
                            );
                          case 7:
                            return (
                              (s = e.sent),
                              n.current({
                                type: "RESULT",
                                taskId: r,
                                runId: i,
                                result: s,
                              }),
                              e.abrupt("return", s)
                            );
                          case 12:
                            if (
                              ((e.prev = 12),
                              (e.t0 = e.catch(4)),
                              !(e.t0 instanceof Error))
                            ) {
                              e.next = 19;
                              break;
                            }
                            if (
                              "AbortError" !== e.t0.name &&
                              "TypeError" !== e.t0.name
                            ) {
                              e.next = 18;
                              break;
                            }
                            return (
                              n.current({ type: "ABORT", taskId: r, runId: i }),
                              e.abrupt("return", l)
                            );
                          case 18:
                            n.current({
                              type: "ERROR",
                              taskId: r,
                              runId: i,
                              error: e.t0,
                            });
                          case 19:
                            throw e.t0;
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            abort: function () {
              o && (o.abort(), (o = null));
            },
            started: !1,
            pending: !0,
            aborted: !1,
            error: null,
            result: null,
          };
        },
        d = function (e, t) {
          switch (t.type) {
            case "INIT":
              return p(t);
            case "START":
              return e.taskId !== t.taskId
                ? e
                : u(
                    u({}, e),
                    {},
                    {
                      runId: t.runId,
                      started: !0,
                      pending: !0,
                      aborted: !1,
                      error: null,
                      result: null,
                    }
                  );
            case "RESULT":
              return e.taskId !== t.taskId || e.runId !== t.runId
                ? e
                : u(
                    u({}, e),
                    {},
                    { started: !1, pending: !1, error: null, result: t.result }
                  );
            case "ABORT":
              return e.taskId !== t.taskId || e.runId !== t.runId
                ? e
                : u(u({}, e), {}, { started: !1, aborted: !0 });
            case "ERROR":
              return e.taskId !== t.taskId || e.runId !== t.runId
                ? e
                : u(
                    u({}, e),
                    {},
                    { started: !1, pending: !1, result: null, error: t.error }
                  );
          }
        },
        h = function (e) {
          var t = (0, s.useRef)(function () {
              throw new Error("not initialized");
            }),
            n = (0, s.useReducer)(d, { func: e, dispatchRef: t }, p),
            r = n[0],
            i = n[1];
          return (
            r.func !== e && i({ type: "INIT", func: e, dispatchRef: t }),
            (t.current = i),
            (0, s.useEffect)(function () {
              return function () {
                t.current = function () {
                  return null;
                };
              };
            }, []),
            r
          );
        },
        m = function (e) {
          var t = e && e.start,
            n = e && e.abort,
            r = (0, s.useRef)();
          (0, s.useEffect)(
            function () {
              t &&
                (r.current && r.current(),
                (0, i.Z)(
                  a().mark(function e() {
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t();
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )().catch(function (e) {
                  return console.error(e);
                }));
            },
            [t]
          ),
            (0, s.useEffect)(
              function () {
                n && (r.current = n);
              },
              [n]
            ),
            (0, s.useEffect)(function () {
              return function () {
                r.current && r.current();
              };
            }, []);
        };
    },
    17484: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return g;
        },
      });
      var r = n(16835),
        i = n(70917),
        o = n(11163),
        a = (n(67294), n(55756)),
        s = n(7673),
        c = n(53877),
        u = n(48710),
        l = n(26184),
        f = n(37868),
        p = n(35944),
        d = n(83454);
      var h = {
          name: "1g5635e",
          styles:
            "display:block;width:100%;height:auto;aspect-ratio:122/37;transition:opacity 0.25s;object-fit:cover",
        },
        m = { name: "ayn9pq", styles: "background-color:black" },
        g = function (e) {
          var t = e.href,
            n = e.src,
            g = e.spSrc,
            v = e.target,
            y = void 0 === v ? "_blank" : v,
            b = e.load,
            x = void 0 !== b && b,
            w = (0, o.useRouter)(),
            S = "preview" === d.env.NEXT_PUBLIC_MODE,
            E = (0, a.fP)(["_ga"]),
            O = (0, r.Z)(E, 1)[0];
          return (0, p.tZ)(f.Z, {
            href: t,
            children: (0, p.tZ)("a", {
              target: y,
              rel: "_blank" === y ? "noopener noreferrer" : "",
              onClick: function () {
                if ((0, s.B)(t) && !S) {
                  var e = (0, s.X)(
                    ""
                      .concat("https://analyze.naruto-official.com")
                      .concat(w.asPath),
                    [
                      { key: "title", value: document.title },
                      { key: "uuid", value: (0, c.p)() },
                      { key: "sessionId", value: (0, c.M)() },
                      { key: "cookie", value: O._ga },
                      { key: "referrer", value: document.referrer },
                      { key: "extlink", value: t },
                    ]
                  );
                  fetch(e).catch(function (e) {
                    return console.error(e);
                  });
                }
              },
              children: (0, p.tZ)("div", {
                css: m,
                children: (0, p.BX)("picture", {
                  children: [
                    (0, p.tZ)("source", {
                      srcSet: g,
                      media: u.r.media.preTablet,
                    }),
                    !x &&
                      (0, p.tZ)("img", {
                        src: n,
                        css: (0, i.iv)(
                          "display:block;object-fit:cover;width:100%;height:auto;transition:opacity 0.25s;@media ",
                          u.r.media.postTablet,
                          "{&:hover{opacity:0.8;}}&:active{opacity:0.8;}",
                          ""
                        ),
                        alt: "",
                      }),
                    x &&
                      (0, p.tZ)(l._, {
                        src: n,
                        loadStyle: h,
                        imgStyle: (0, i.iv)(
                          "display:block;object-fit:cover;width:100%;height:auto;transition:opacity 0.25s;@media ",
                          u.r.media.postTablet,
                          "{&:hover{opacity:0.8;}}&:active{opacity:0.8;}",
                          ""
                        ),
                        alt: "",
                        size: "10%",
                      }),
                  ],
                }),
              }),
            }),
          });
        };
    },
    37642: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var r = n(59499),
        i = n(35944);
      function o(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        return function (n) {
          return (0, i.tZ)("div", {
            css: [t, n.wrapperCss, "", ""],
            children: (0, i.tZ)(e, a({}, n)),
          });
        };
      }
    },
    77340: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return s;
        },
      });
      var r = n(70917),
        i = (n(67294), n(48710)),
        o = n(35944);
      var a = { name: "bjn8wh", styles: "position:relative" },
        s = function (e) {
          var t = e.className,
            n = e.children,
            s = e.relative,
            c = void 0 !== s && s;
          return (0, o.tZ)("div", {
            className: t,
            css: (0, r.iv)(
              "max-width:1280px;padding:0 85px;margin:0 auto;@media (max-width: 1145px){padding:0 clamp(24px, 24px + (85 - 24) * ((100% - 1023px) / (1145 - 1023)), 85px);}@media ",
              i.r.media.preTablet,
              "{padding:0 24px;}",
              ""
            ),
            children: c ? (0, o.tZ)("div", { css: a, children: n }) : n,
          });
        };
    },
    73938: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return k;
        },
      });
      var r = n(59499),
        i = n(16835),
        o = n(70917),
        a = n(11163),
        s = n(67294),
        c = n(8503),
        u = n(19891),
        l = n(48710),
        f = n(95541),
        p = n(55519),
        d = n(63233),
        h = n(72427),
        m = n(85859),
        g = n(91419),
        v = n(37642),
        y = n(37868),
        b = n(35944),
        x = (0, v.U)(function (e) {
          var t = e.pcWidth,
            n = e.spWidth,
            r = (0, c.bU)();
          return (0,
          b.tZ)(y.Z, { href: "/", children: (0, b.tZ)("a", { children: (0, b.tZ)("img", { css: (0, o.iv)("width:", t, "px;@media ", l.r.media.preTablet, "{width:", n, "px;}", ""), src: "/common/logo_".concat(r, ".webp"), alt: "" }) }) });
        });
      function w(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = {
          name: "nm3c83",
          styles: "position:fixed;top:19.24px;left:25px;z-index:1",
        },
        O = { name: "10k07g3", styles: "position:relative;z-index:3" };
      function k() {
        var e = s.useState(!1),
          t = (0, i.Z)(e, 2),
          n = t[0],
          r = t[1],
          v = (0, a.useRouter)(),
          y = (0, f.Q0)(),
          w = (0, c.bU)(),
          k = (0, p.k)(),
          I = (0, i.Z)(k, 2),
          A = I[0],
          C = I[1];
        (0, s.useEffect)(
          function () {
            var e;
            r(!1),
              A.loaded ||
                A.pages[0].includes(
                  null !== (e = "https://naruto-official.com") ? e : ""
                ) ||
                (C(S(S({}, A), {}, { loaded: !0 })),
                v.asPath.includes("nolangsuggestion=1") ||
                  ((0, u.v)() !== w && y((0, b.tZ)(g.J, {}))));
          },
          [w, v]
        );
        var T = (0, b.BX)(b.HY, {
          children: [
            (0, b.tZ)("span", {
              css: (0, o.iv)(
                "position:fixed;top:10px;right:10px;z-index:3;display:inline-block;width:68px;height:68px;@media ",
                l.r.media.preTablet,
                "{top:0;right:0;width:60px;height:60px;}",
                ""
              ),
              children: (0, b.tZ)(m.j, {
                open: n,
                onToggle: function () {
                  return r(function (e) {
                    return !e;
                  });
                },
              }),
            }),
            (0, b.tZ)("span", {
              css: (0, o.iv)(
                "position:fixed;top:32px;right:98px;z-index:3;@media ",
                l.r.media.preTablet,
                "{top:14px;right:68px;}",
                ""
              ),
              children: (0, b.tZ)(d.Z, {}),
            }),
          ],
        });
        return (0, b.BX)("header", {
          css: O,
          children: [
            (0, b.tZ)(x, { wrapperCss: E, pcWidth: 143, spWidth: 125 }),
            T,
            (0, b.tZ)(h.v, { open: n }),
          ],
        });
      }
    },
    55519: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return s;
        },
        k: function () {
          return c;
        },
      });
      var r = n(67294),
        i = n(35944),
        o = (0, r.createContext)({}),
        a = (0, r.createContext)(function () {}),
        s = function (e) {
          var t = e.value,
            n = e.setValue,
            r = e.children;
          return (0, i.tZ)(o.Provider, {
            value: t,
            children: (0, i.tZ)(a.Provider, { value: n, children: r }),
          });
        },
        c = function () {
          return [(0, r.useContext)(o), (0, r.useContext)(a)];
        };
    },
    26184: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
      });
      var r,
        i = n(71383),
        o = n(70917),
        a = n(67294),
        s = n(35944);
      function c(e) {
        var t = e.src,
          n = e.className,
          c = e.loadStyle,
          u = e.imgStyle,
          l = e.width,
          f = e.height,
          p = e.alt,
          d = e.size,
          h = (0, a.useState)(!1),
          m = h[0],
          g = h[1];
        return (
          (0, a.useEffect)(
            function () {
              var e = new Image();
              (e.src = t),
                (e.onload = function () {
                  g(!0);
                });
            },
            [t]
          ),
          m
            ? (0, s.tZ)("img", {
                className: n,
                css: u,
                src: t,
                width: l,
                height: f,
                alt: p,
              })
            : (0, s.tZ)(s.HY, {
                children: (0, s.tZ)("div", {
                  css: (0, o.iv)(
                    c || u,
                    " display:flex;align-items:center;justify-content:center;background:white;",
                    ""
                  ),
                  children: (0, s.tZ)("img", {
                    src: "/common/image-loading.svg",
                    width: "70",
                    height: "72.436",
                    css: (0, o.iv)(
                      "width:",
                      d || "20%",
                      ";height:auto;animation:3s linear infinite ",
                      (0, o.F4)(
                        r ||
                          (r = (0, i.Z)([
                            "\n    to {\n      transform: rotate(360deg);\n    }\n  ",
                          ]))
                      ),
                      ";",
                      ""
                    ),
                    alt: p,
                  }),
                }),
              })
        );
      }
    },
    63233: function (e, t, n) {
      "use strict";
      var r = n(16835),
        i = n(70917),
        o = n(41664),
        a = n.n(o),
        s = n(11163),
        c = n(67294),
        u = n(8503),
        l = n(37642),
        f = n(35944);
      function p(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return d(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return d(e, t);
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
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var h = { ja: "JP", en: "EN", fr: "FR", de: "DE", es: "ES", it: "IT" },
        m = { name: "bjn8wh", styles: "position:relative" },
        g = { name: "6sug3x", styles: "margin-top:3px" },
        v = {
          name: "14exz87",
          styles:
            "position:relative;display:inline-flex;align-items:center;justify-content:center;height:30px;padding:7px 28px 7px 16.6px;font-family:'Bebas Neue';font-size:16px;line-height:1em;color:white;cursor:pointer;background:black;border-radius:20px;&::before{position:absolute;top:0;right:8.3px;bottom:0;left:auto;z-index:1;display:block;width:6px;height:6px;margin:auto;content:'';background:url('/common/header/lang_pulldown_arrow.svg') center center no-repeat;background-size:contain;}&::after{position:absolute;top:0;right:1px;bottom:0;left:auto;display:block;width:17px;height:calc(100% - 2px);margin:auto;content:'';background-color:white;border-radius:0 20px 20px 0;}",
        },
        y = { name: "179t5g5", styles: "position:relative;z-index:1" },
        b = function (e) {
          var t,
            n = (0, s.useRouter)();
          t =
            n.asPath.includes("/anime") ||
            n.asPath.includes("/comics") ||
            n.asPath.includes("/books") ||
            n.asPath.includes("/news")
              ? n.asPath
              : n.pathname;
          var r = (function (e, t) {
            var n = [];
            "ja" !== e && n.push(e);
            var r = t.match(/[^/]+/g);
            if (r) {
              var i,
                o = p(r);
              try {
                for (o.s(); !(i = o.n()).done; ) {
                  var a = i.value;
                  (0, u.b8)(a) || n.push(a);
                }
              } catch (s) {
                o.e(s);
              } finally {
                o.f();
              }
            }
            return "/".concat(n.join("/"));
          })(e.lang, t);
          return (0, f.tZ)(a(), {
            href: r,
            passHref: !0,
            children: (0, f.tZ)("a", {
              css: (0, i.iv)(
                "top:0;display:flex;align-items:center;justify-content:center;padding:5px 0;margin:10px 0 0;font-family:'Bebas Neue';font-size:16px;line-height:0.8em;color:white;text-align:center;cursor:pointer;&::after{position:absolute;display:block;width:44px;height:30px;content:'';background:#333;border-radius:20px;opacity:0;transition:0.25s opacity;}",
                e.lang === e.selected &&
                  "\n            &::after {\n              opacity: 1;\n            }\n          ",
                " &:hover{&::after{opacity:1;}}",
                ""
              ),
              onClick: function (e) {
                e.preventDefault(),
                  (function () {
                    var e = new URL(r, window.location.href);
                    e.searchParams.set("nolangsuggestion", "1"),
                      (window.location.href = e.toString());
                  })();
              },
              children: (0, f.tZ)("span", { css: y, children: e.langStr }),
            }),
          });
        };
      t.Z = (0, l.U)(function () {
        var e = (0, u.bU)(),
          t = (0, c.useState)(!1),
          n = t[0],
          o = t[1];
        c.useEffect(
          function () {
            if (n) {
              var e = function () {
                o(!1);
              };
              return (
                document.addEventListener("click", e),
                function () {
                  return document.removeEventListener("click", e);
                }
              );
            }
          },
          [n]
        );
        var a = (0, f.tZ)("div", {
            css: v,
            onClick: function () {
              o(!0);
            },
            "aria-hidden": !0,
            children: (0, f.tZ)("div", { css: g, children: h[e] }),
          }),
          s = (0, f.tZ)("div", {
            css: (0, i.iv)(
              "position:absolute;top:0;z-index:2;display:flex;flex-direction:column;width:57px;padding:0 0 5px;pointer-events:none;background:black;border:1px solid white;border-radius:10px;opacity:0;",
              n &&
                "\n          opacity: 1;\n          pointer-events: all;\n        ",
              ";",
              ""
            ),
            onClick: function (e) {
              e.stopPropagation();
            },
            children: Object.entries(h).map(function (t) {
              var n = (0, r.Z)(t, 2),
                i = n[0],
                o = n[1];
              return (0, f.tZ)(b, { lang: i, langStr: o, selected: e }, i);
            }),
          });
        return (0, f.BX)("div", { css: m, children: [a, s] });
      });
    },
    37868: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(59499),
        i = n(41664),
        o = n.n(i),
        a = (n(67294), n(8503)),
        s = n(35944);
      function c(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e) {
        var t = (0, a.bU)();
        if (
          "string" === typeof e.href &&
          !e.href.startsWith("http") &&
          !e.href.startsWith("//") &&
          !1 !== e.locale
        ) {
          var n = "ja" === t ? "" : "/".concat(t);
          return (0, s.tZ)(
            o(),
            u(
              u({}, u(u({}, e), {}, { href: "".concat(n).concat(e.href) })),
              {},
              { passHref: !0 }
            )
          );
        }
        return (0, s.tZ)(o(), u(u({}, e), {}, { passHref: !0 }));
      }
    },
    18714: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return m;
        },
      });
      var r,
        i = n(71383),
        o = n(70917),
        a = n(48710),
        s = n(62892),
        c = n(35555),
        u = n(37868),
        l = n(35944);
      var f = { name: "10w3hxi", styles: ".icon path{transition:fill 0.25s;}" },
        p = { name: "1vqt3sh", styles: ".icon{transition:fill 0.25s;}" },
        d = { name: "hws4l", styles: ".icon path{fill:white;}" },
        h = {
          name: "wngfe7",
          styles: "flex:1;&:not(:lang(ja)){margin-top:3px;}",
        };
      function m(e) {
        var t = e.fontSize,
          n = void 0 === t ? 18 : t,
          m = e.width,
          g = e.height,
          v = void 0 === g ? 40 : g,
          y = e.children,
          b = e.href,
          x = e.onClick,
          w = e.center,
          S = e.left,
          E = e.className,
          O = e.wrapperCss,
          k = e.color,
          I = void 0 === k ? "white" : k,
          A = e.icon,
          C = e.target,
          T = void 0 === C ? "_self" : C,
          j = e.disabled,
          P = void 0 !== j && j,
          L = Number(v) >= 100,
          Z = null !== w && void 0 !== w ? w : L,
          R = (0, o.iv)(
            "flex:none;width:auto;",
            Z
              ? "\n        position: absolute;\n        right: var(--button-inset);\n      "
              : "",
            " ",
            S
              ? "\n        order: -1;\n        margin-right: var(--button-gap);\n      "
              : "\n      margin-left: var(--button-gap);\n    ",
            ";",
            ""
          ),
          N = (function () {
            switch (A) {
              case "kunai":
                return (0, l.tZ)(s.J, {
                  className: "icon",
                  css: (0, o.iv)(
                    "min-height:",
                    L ? "10px" : "7px",
                    ";",
                    R,
                    ";",
                    ""
                  ),
                });
              case "kunai-white":
                return (0, l.tZ)(s.J, {
                  className: "icon",
                  color: "white",
                  css: (0, o.iv)(
                    "min-height:",
                    L ? "10px" : "7px",
                    ";",
                    R,
                    ";",
                    ""
                  ),
                });
              case "kunai-left":
                return (0, l.tZ)(s.J, {
                  className: "icon",
                  css: (0, o.iv)(
                    "min-height:",
                    L ? "10px" : "7px",
                    ";",
                    R,
                    ";",
                    ""
                  ),
                  left: !0,
                });
              case "link":
                return (0, l.tZ)(c.x, { className: "icon", css: R });
            }
          })(),
          B = (0, l.BX)(l.HY, {
            children: [(0, l.tZ)("div", { css: h, children: y }), N],
          }),
          U = (0, o.iv)(
            "color:white;background:black;",
            "kunai" === A
              ? (0, o.iv)(
                  ".icon{fill:white;transform:translateZ(0);animation:0.25s linear ",
                  (0, o.F4)(
                    r ||
                      (r = (0, i.Z)([
                        "\n              to {\n                transform: translateX(-8px);\n              }\n            ",
                      ]))
                  ),
                  ";animation-iteration-count:2;}",
                  ""
                )
              : d,
            ";",
            ""
          ),
          M = (0, o.iv)(
            "position:relative;display:inline-flex;align-items:center;padding:calc(var(--button-inset) / 2) var(--button-inset);font-family:var(--comic-impact-font);font-size:",
            n,
            "px;line-height:",
            n,
            "px;text-align:",
            Z ? "center" : "left",
            ";background:",
            I,
            ";border:",
            "".concat(L ? "4px" : "2px", P ? " solid #d8d8d8" : " solid black"),
            ";",
            null == m
              ? ""
              : "width: ".concat(
                  m === 1 / 0 ? "100%" : "".concat(m, "px"),
                  ";"
                ),
            " ",
            v === -1 / 0 ? "" : "min-height: ".concat(v, "px"),
            ";transition:background 0.25s,color 0.25s;",
            "kunai" === A ? p : f,
            " &:active{",
            U,
            ";}@media ",
            a.r.media.postPhone,
            "{&:hover{",
            U,
            ";}}&:disabled{color:white;background:#d8d8d8;.icon path{fill:white;}}",
            O,
            " --button-inset:",
            L ? "20px" : "10px",
            ";--button-gap:var(--button-inset);",
            ""
          );
        return b
          ? (0, l.tZ)(u.Z, {
              href: b,
              children: (0, l.tZ)("a", {
                css: M,
                className: E,
                target: "link" === A ? "_blank" : T,
                rel:
                  "link" === A || "_blank" === T ? "noopener noreferrer" : "",
                onClick: x,
                children: B,
              }),
            })
          : (0, l.tZ)("button", {
              css: M,
              className: E,
              onClick: x,
              disabled: P,
              children: B,
            });
      }
    },
    91419: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return S;
        },
      });
      var r = n(70917),
        i = n(11163),
        o = n(67294),
        a = n(8503),
        s = n(19891),
        c = n(48710),
        u = n(95541),
        l = n(37642),
        f = n(18714),
        p = n(35944);
      function d(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return h(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return h(e, t);
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
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var m = {
          name: "197bsjy",
          styles:
            "position:fixed;top:98px;right:10px;width:fit-content;margin-left:auto",
        },
        g = {
          name: "1nqp5zk",
          styles:
            "display:flex;width:100%;height:100%;padding:24px;background:rgb(0 0 0 / 70%);position:absolute;z-index:11",
        },
        v = { name: "e0dnmk", styles: "cursor:pointer" },
        y = { name: "1u2foh5", styles: "width:160px;margin:0 auto 15px auto" },
        b = { name: "sv9ss7", styles: "width:160px;margin:24px auto 10px" },
        x = {
          name: "1cyajnd",
          styles: "position:absolute;top:5px;right:5px;cursor:pointer",
        },
        w = {
          name: "1a4ms5q",
          styles:
            "position:relative;width:200px;height:185px;margin-left:0;background-color:#fff;border:6px solid #000",
        };
      function S() {
        var e = (0, a.bU)(),
          t = (0, u.sS)(),
          n = (0, o.useState)(""),
          c = n[0],
          l = n[1],
          h = (0, i.useRouter)(),
          S = (0, o.useState)(!1),
          E = S[0],
          O = S[1],
          k = (0, o.useState)(!1),
          I = k[0],
          A = k[1],
          C = (0, o.useState)({ label: "Language", type: "others" }),
          T = C[0],
          P = C[1],
          L = (0, o.useCallback)(
            function () {
              t();
            },
            [t]
          ),
          Z = (0, o.useState)(""),
          R = Z[0],
          N = Z[1],
          B = (0, o.useCallback)(function (e) {
            N(e), A("others" === e);
          }, []),
          U = (0, o.useCallback)(
            function () {
              if ("others" !== R) {
                var e;
                e =
                  h.asPath.includes("/anime") ||
                  h.asPath.includes("/comics") ||
                  h.asPath.includes("/books") ||
                  h.asPath.includes("/news")
                    ? h.asPath
                    : h.pathname;
                var t = (function (e, t) {
                  var n = [];
                  "ja" !== e && n.push(e);
                  var r = t.match(/[^/]+/g);
                  if (r) {
                    var i,
                      o = d(r);
                    try {
                      for (o.s(); !(i = o.n()).done; ) {
                        var s = i.value;
                        (0, a.b8)(s) || n.push(s);
                      }
                    } catch (c) {
                      o.e(c);
                    } finally {
                      o.f();
                    }
                  }
                  return "/".concat(n.join("/"));
                })(R, e);
                if (t.includes("nolangsuggestion=1")) window.location.href = t;
                else {
                  var n = new URL(t, "https://naruto-official.com");
                  n.searchParams.set("nolangsuggestion", "1"),
                    (window.location.href = n.toString());
                }
              }
            },
            [R, h]
          );
        (0, o.useEffect)(
          function () {
            var t = (0, s.v)();
            if ((l(t), e !== t))
              if ((0, a.b8)(t)) {
                N(t), O(!0);
                var n = H.find(function (e) {
                  return e.type === c;
                });
                n && P(n);
              } else O(!1), A(!0);
          },
          [e, c]
        );
        var G = (0, p.BX)("div", {
          css: w,
          children: [
            (0, p.tZ)("div", {
              onClick: function (e) {
                e.stopPropagation();
              },
              children: (0, p.BX)("svg", {
                width: "16",
                height: "16",
                stroke: "black",
                onClick: L,
                "aria-hidden": !0,
                css: x,
                children: [
                  (0, p.tZ)("line", {
                    x1: "0.5",
                    y1: "0.5",
                    x2: "15.5",
                    y2: "15.5",
                    strokeWidth: 1,
                  }),
                  (0, p.tZ)("line", {
                    x1: "15.5",
                    y1: "0.5",
                    x2: "0.5",
                    y2: "15.5",
                    strokeWidth: 1,
                  }),
                ],
              }),
            }),
            (0, p.tZ)("div", {
              css: (0, r.iv)(
                "width:148px;margin-top:18px;margin-left:14px;font-family:",
                "ja" === c
                  ? "fot-udkakugoc80-pro, sans-serif"
                  : "Bebas Neue, sans-serif",
                ";letter-spacing:",
                "ja" === c ? "0" : "-0.01em",
                ";font-size:15px;line-height:18px;",
                ""
              ),
              children: E ? M[c] : z,
            }),
            (0, p.tZ)("div", {
              css: b,
              children: (0, p.tZ)(j, {
                items: H,
                defaultValue: T,
                checkType: e,
                onChange: B,
              }),
            }),
            (0, p.tZ)("div", {
              css: y,
              children: (0, p.tZ)(f.f, {
                onClick: U,
                icon: "kunai-white",
                color: "black",
                css: (0, r.iv)(
                  "width:160px;height:40px;font-size:14px;color:white;font-family:",
                  "ja" === c
                    ? "fot-udkakugoc80-pro, sans-serif"
                    : "Bebas Neue, sans-serif",
                  ";letter-spacing:",
                  "ja" === c ? "0" : "-0.01em",
                  ";",
                  !I && v,
                  ";",
                  ""
                ),
                disabled: I,
                children: E ? _[c] : D,
              }),
            }),
          ],
        });
        return (0, p.tZ)("div", {
          "aria-hidden": !0,
          css: g,
          children: (0, p.tZ)("div", { css: m, children: G }),
        });
      }
      var E = {
          name: "kzdrva",
          styles:
            "pointer-events:none;transition:transform 0.25s;transform:scaleY(0)",
        },
        O = {
          name: "5rct17",
          styles: "transition:transform 0.25s;transform:scaleY(1)",
        },
        k = { name: "uoytoy", styles: "right:0px" },
        I = { name: "3yxqr7", styles: "right:0px;transform:rotate(180deg)" },
        A = {
          name: "1y0jjk3",
          styles:
            "position:absolute;top:0px;right:0px;width:24px;height:24px;background-color:#fff;display:flex;justify-content:center;align-items:center",
        },
        C = {
          name: "xr3noz",
          styles: "position:absolute;width:100%;inset:0;cursor:pointer",
        },
        T = {
          name: "1y7gf1r",
          styles: "position:relative;z-index:1;width:100%;height:30px",
        },
        j = function (e) {
          var t = e.items,
            n = e.defaultValue,
            i = e.checkType,
            a = e.onChange,
            s = (0, o.useState)(!1),
            c = s[0],
            u = s[1],
            l = (0, o.useState)(t[0]),
            f = l[0],
            d = l[1],
            h = (0, o.useCallback)(
              function (e) {
                a(e.type), d(e), u(!1);
              },
              [a]
            );
          return (
            (0, o.useEffect)(
              function () {
                n && d(n);
              },
              [n]
            ),
            (0, p.BX)("div", {
              css: T,
              children: [
                (0, p.tZ)("button", {
                  css: C,
                  onClick: function () {
                    return u(!c);
                  },
                  children: (0, p.tZ)("div", {
                    css: (0, r.iv)(
                      "position:relative;font-family:",
                      "ja" === f.type
                        ? "fot-udkakugoc80-pro, sans-serif"
                        : "Bebas Neue, sans-serif",
                      ";letter-spacing:",
                      "ja" === f.type ? "0" : "-0.01em",
                      ";font-size:14px;height:30px;line-height:24px;color:#fff;background-color:#000;border:3px solid rgb(0 0 0);",
                      ""
                    ),
                    children:
                      f &&
                      (0, p.BX)(p.HY, {
                        children: [
                          (0, p.tZ)("div", {
                            css: (0, r.iv)(
                              "text-align:left;margin-left:8px;margin-top:",
                              "ja" === f.type ? "0px" : "1px",
                              ";",
                              ""
                            ),
                            children: f.label,
                          }),
                          (0, p.tZ)("div", {
                            css: A,
                            children: (0, p.tZ)("img", {
                              src: "/common/language_pulldown_arrow.svg",
                              alt: "",
                              css: (0, r.iv)(
                                "height:10px;",
                                c ? I : k,
                                ";",
                                ""
                              ),
                            }),
                          }),
                        ],
                      }),
                  }),
                }),
                f &&
                  (0, p.tZ)("ul", {
                    css: (0, r.iv)(
                      "position:absolute;top:calc(100%);width:100%;padding:0;margin:0;transform-origin:center top;",
                      c ? O : E,
                      " li:first-of-type{border-top:none;}li:last-of-type{border-bottom:3px solid #000;}",
                      ""
                    ),
                    children: t.map(function (e) {
                      return (0,
                      p.tZ)(U, { item: e, isSelected: e.type === f.type, isChecked: e.type === i, onClick: h }, e.type);
                    }),
                  }),
              ],
            })
          );
        },
        P =
          ((0, l.U)(j, { name: "1d3w5wq", styles: "width:100%" }),
          { name: "17lrmpa", styles: "width:12px" }),
        L = {
          name: "7nlwwt",
          styles:
            "position:absolute;top:0px;right:0px;width:24px;height:24px;display:flex;justify-content:center;align-items:center",
        },
        Z = { name: "x3brzu", styles: "color:#000" },
        R = { name: "m5xep1", styles: "color:#c3c3c3" },
        N = { name: "h9u7nh", styles: "width:100%;cursor:pointer" },
        B = { name: "je8g23", styles: "pointer-events:none" },
        U = function (e) {
          var t = e.item,
            n = e.isSelected,
            i = e.isChecked,
            a = e.onClick,
            s = (0, o.useCallback)(
              function () {
                a(t);
              },
              [t, a]
            );
          return (0, p.tZ)("li", {
            css: (0, r.iv)(
              "list-style:none;background-color:#fff;border-top:1px solid #000;border-right:3px solid #000;border-left:3px solid #000;transition:background-color 0.25s;line-height:24px;",
              n && B,
              "@media ",
              c.r.media.postTablet,
              "{&:hover{background-color:#7f7f7f;}}",
              ""
            ),
            children: (0, p.tZ)("button", {
              css: N,
              onClick: s,
              children: (0, p.BX)("div", {
                css: (0, r.iv)(
                  "position:relative;font-family:",
                  "ja" === t.type
                    ? "fot-udkakugoc80-pro, sans-serif"
                    : "Bebas Neue, sans-serif",
                  ";font-size:12px;line-height:24px;transition:color 0.25s;letter-spacing:",
                  "ja" === t.type ? "0" : "-0.01em",
                  ";",
                  n ? R : Z,
                  "@media ",
                  c.r.media.postTablet,
                  "{&:hover{color:#fff;}}",
                  ""
                ),
                children: [
                  (0, p.tZ)("div", {
                    css: (0, r.iv)(
                      "text-align:left;margin-left:8px;margin-top:",
                      "ja" === t.type ? "0px" : "1px",
                      ";",
                      ""
                    ),
                    children: t.label,
                  }),
                  i &&
                    (0, p.tZ)("div", {
                      css: L,
                      children: (0, p.tZ)("img", {
                        src: "/common/check.png",
                        alt: "",
                        css: P,
                      }),
                    }),
                ],
              }),
            }),
          });
        },
        M = {
          ja: "NARUTO\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u306f\u65e5\u672c\u8a9e\u7248\u3082\u3042\u308a\u307e\u3059\u3002",
          en: "An English version of the NARUTO site is also available.",
          fr: "Le site internet de Naruto est aussi disponible en fran\xe7ais.",
          de: "Die NARUTO-Webseite ist auch auf Deutsch verf\xfcgbar!",
          es: "El sitio web de Naruto tambi\xe9n est\xe1 disponible en espa\xf1ol.",
          it: "Il sito web di Naruto \xe8 disponibile anche in italiano.",
        },
        _ = {
          ja: "\u5909\u66f4",
          en: "Update",
          fr: "Changer",
          de: "Wechseln",
          es: "Cambiar",
          it: "Cambia",
        },
        z = "Choose your preferred language.",
        D = "Update",
        H = [
          { label: "\u65e5\u672c\u8a9e", type: "ja" },
          { label: "English", type: "en" },
          { label: "Espa\xf1ol", type: "es" },
          { label: "Deutsch", type: "de" },
          { label: "Fran\xe7ais", type: "fr" },
          { label: "Italiano", type: "it" },
        ];
    },
    76132: function (e, t, n) {
      "use strict";
      n.d(t, {
        DG: function () {
          return l;
        },
        Gx: function () {
          return f;
        },
        kP: function () {
          return u;
        },
      });
      var r = n(16835),
        i = n(11163),
        o = n(8503),
        a = n(28613),
        s = n(94279),
        c = n(35944),
        u = function (e) {
          var t = e.children,
            n = p();
          return (0, c.tZ)("a", {
            href: "https://x.com/NarutoCoinETH",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t,
          });
        },
        
        l = function (e) {
          var t = e.children,
            n = p();
          return (0, c.tZ)("a", {
            href: "https://t.me/NarutoCoinETH",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t,
          });
        },
        f = function (e) {
          var t = e.children,
            n = p();
          return (0, c.tZ)("a", {
            href: "https://www.dextools.io/app/en/ether/pair-explorer/0xdex",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t,
          });
        },
        p = function () {
          var e = (0, i.useRouter)(),
            t = (0, o.bU)(),
            n = (0, s.r)().anchor.split("."),
            c = (0, r.Z)(n, 1)[0],
            u = e.asPath;
          return (
            e.pathname.endsWith("/about/story") &&
              (u = "".concat((0, a.A)(t), "/about/story/").concat(c)),
            u
          );
        };
    },
    58482: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return g;
        },
      });
      var r = n(16835),
        i = n(70917),
        o = n(11163),
        a = (n(67294), n(55756)),
        s = n(69873),
        c = n(8503),
        u = n(28613),
        l = n(7673),
        f = n(53877),
        p = n(48710),
        d = n(37868),
        h = n(35944),
        m = n(83454);
      var g = function () {
          var e = (0, c.bU)(),
            t = (0, s.W)(),
            n = (0, o.useRouter)(),
            i = "preview" === m.env.NEXT_PUBLIC_MODE,
            p = (0, a.fP)(["_ga"]),
            g = (0, r.Z)(p, 1)[0],
            S = function (e) {
              if ((0, l.B)(e) && !i) {
                var t = (0, l.X)(
                  ""
                    .concat("https://analyze.naruto-official.com")
                    .concat(n.asPath),
                  [
                    { key: "title", value: document.title },
                    { key: "uuid", value: (0, f.p)() },
                    { key: "sessionId", value: (0, f.M)() },
                    { key: "cookie", value: g._ga },
                    { key: "referrer", value: document.referrer },
                    { key: "extlink", value: e },
                  ]
                );
                fetch(t).catch(function (e) {
                  return console.error(e);
                });
              }
            };
          return (0, h.tZ)("div", {
            css: v.footer,
            children: (0, h.BX)("div", {
              css: v.footerContainer,
              children: [
                (0, h.BX)("div", {
                  css: v.rightCopy,
                  children: [
                    (0, h.tZ)("div", {
                      css: v.rightCopyTextsBox,
                      children: y[e].map(function (e) {
                        return (0, h.tZ)("p", { children: e }, e);
                      }),
                    }),
                  ],
                }),
                (0, h.BX)("div", {
                  css: v.linkBox,
                  children: [
                    (0, h.tZ)(d.Z, {
                      href: "https://legal.bandainamcoent.co.jp/terms/?lang=".concat(
                        (0, u.n)(e)
                      ),
                      children: (0, h.tZ)("a", {
                        rel: "noreferrer noopener",
                        target: "_blank",
                        onClick: function () {
                          return S(
                            "https://legal.bandainamcoent.co.jp/terms/?lang=".concat(
                              (0, u.n)(e)
                            )
                          );
                        },
                        children: b[e],
                      }),
                    }),
                    (0, h.tZ)("div", { css: v.linkSeparation }),
                    (0, h.tZ)(d.Z, {
                      href: "/policy",
                      children: (0, h.tZ)("a", { children: x[e] }),
                    }),
                    (0, h.tZ)("div", {
                      css: [v.linkSeparation, v.centerLinkSeparation, "", ""],
                    }),
                    "jp" === t &&
                      (0, h.BX)(h.HY, {
                        children: [
                          (0, h.tZ)(d.Z, {
                            href: "https://legal.bandainamcoent.co.jp/privacy/global_cnsnt",
                            children: (0, h.tZ)("a", {
                              rel: "noreferrer noopener",
                              target: "_blank",
                              onClick: function () {
                                return S(
                                  "https://legal.bandainamcoent.co.jp/privacy/global_cnsnt"
                                );
                              },
                              children:
                                "\u30b0\u30ed\u30fc\u30d0\u30eb\u30b3\u30f3\u30bb\u30f3\u30c8",
                            }),
                          }),
                          (0, h.tZ)("div", { css: v.linkSeparation }),
                        ],
                      }),
                    (0, h.tZ)(d.Z, {
                      href: "/contact",
                      children: (0, h.tZ)("a", { children: w[e] }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        v = {
          footer: { name: "zjik7", styles: "display:flex" },
          footerContainer: (0, i.iv)(
            "position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;padding:40px 46px 30px 38px;background-color:#000;@media ",
            p.r.media.preTablet,
            "{flex-direction:column-reverse;height:361px;padding:38px 0 33px;&:not(:lang(ja)){height:410px;}}",
            ""
          ),
          rightCopy: (0, i.iv)(
            "font-size:10px;color:#fff;@media ",
            p.r.media.preTablet,
            "{margin:0 auto;}",
            ""
          ),
          logosBox: (0, i.iv)(
            "@media ",
            p.r.media.preTablet,
            "{display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:113px;}",
            ""
          ),
          shueishaLogo: { name: "xagbzs", styles: "margin-bottom:6px" },
          bneLogo: (0, i.iv)(
            "margin-left:40px;@media ",
            p.r.media.preTablet,
            "{margin-left:0;}",
            ""
          ),
          rightCopyTextsBox: (0, i.iv)(
            "margin-top:10px;p{line-height:1.8;}@media ",
            p.r.media.preTablet,
            "{display:flex;flex-direction:column;align-items:center;margin-top:30px;}",
            ""
          ),
          rightCopyLowerText: { name: "1gammwy", styles: "margin-top:5px" },
          linkBox: (0, i.iv)(
            "position:absolute;right:47px;display:flex;align-items:center;justify-content:center;margin-top:95px;font-size:10px;color:#fff;@media ",
            p.r.media.preTablet,
            "{position:static;flex-wrap:wrap;width:300px;height:56px;margin-top:0;text-align:center;}a{&:hover{text-decoration:underline;}@media ",
            p.r.media.preTablet,
            "{a{}width:40%;}}",
            ""
          ),
          linkSeparation: (0, i.iv)(
            "width:1px;height:13px;margin:0 14px;background-color:#fff;@media ",
            p.r.media.preTablet,
            "{margin:0 28px;}",
            ""
          ),
          centerLinkSeparation: (0, i.iv)(
            "@media ",
            p.r.media.preTablet,
            "{display:none;margin:0 28px;}",
            ""
          ),
        },
        y = {
          ja: [
            "\xa9\u5cb8\u672c\u6589\u53f2 \u30b9\u30b3\u30c3\u30c8\uff0f\u96c6\u82f1\u793e",
            "\xa9\u5cb8\u672c\u6589\u53f2\u30fb\u6c60\u672c\u5e79\u96c4\uff0f\u96c6\u82f1\u793e",
            "\xa9\u5cb8\u672c\u6589\u53f2 \u30b9\u30b3\u30c3\u30c8\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fb\u3074\u3048\u308d",
          ],
          en: [
            "\xa92025 by NARUTO TEAM.",
          ],
          fr: [
            "\xa92025 by NARUTO TEAM.",
          ],
          de: [
            "\xa92025 by NARUTO TEAM.",
          ],
          es: [
            "\xa92025 by NARUTO TEAM.",
          ],
          it: [
            "\xa92025 by NARUTO TEAM.",
          ],
        },
        b = {
          ja: "\u5229\u7528\u898f\u7d04",
          en: "Terms and Conditions",
          fr: "Conditions g\xe9n\xe9rales",
          de: "Nutzungsbedingungen",
          es: "T\xe9rminos y condiciones",
          it: "Termini e condizioni",
        },
        x = {
          ja: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
          en: "Privacy Policy",
          fr: "Consentement global",
          de: "Datenschutzrichtlinien",
          es: "Pol\xedtica de privacidad",
          it: "Informativa  privacy",
        },
        w = {
          ja: "\u304a\u554f\u3044\u5408\u308f\u305b",
          en: "Contact Us",
          fr: "Nous contacter",
          de: "Kontakt",
          es: "Contacto",
          it: "Contattaci",
        };
    },
    62892: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return o;
        },
      });
      var r = n(70917),
        i = n(35944);
      function o(e) {
        var t = e.className,
          n = e.size,
          o = e.color,
          a = e.left,
          s = (0, r.iv)(
            "width:auto;height:",
            n,
            ";fill:",
            o,
            ";",
            a ? "transform: scale(-1, 1)" : "",
            ";",
            ""
          );
        return (0, i.tZ)("svg", {
          css: s,
          width: "26",
          height: "7",
          viewBox: "0 0 26 7",
          className: t,
          children: (0, i.tZ)("path", {
            d: "M16.172,7,26,3.412,16.213,0l-4,2.66H5.692A2.913,2.913,0,0,0,2.912.527,2.942,2.942,0,0,0,0,3.5,2.942,2.942,0,0,0,2.912,6.473,2.913,2.913,0,0,0,5.692,4.34h6.431ZM2.912,4.792a1.293,1.293,0,0,1,0-2.584,1.293,1.293,0,0,1,0,2.584",
          }),
        });
      }
    },
    35555: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return o;
        },
      });
      var r = n(70917),
        i = n(35944);
      function o(e) {
        var t = e.className,
          n = e.size,
          o = e.color,
          a = (0, r.iv)("width:auto;height:", n, ";fill:", o, ";", "");
        return (0, i.tZ)("svg", {
          className: t,
          css: a,
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 19.858 19.36",
          children: (0, i.BX)("g", {
            transform: "translate(-37 -45.813)",
            children: [
              (0, i.tZ)("path", {
                d: "M-8639,2106.4v-15.56h0l12.172-.031v2.8l-5.46-.007v12.8Z",
                transform: "translate(8676 -2045)",
              }),
              (0, i.tZ)("path", {
                d: "M-8631.313,2094.578h12.172v15.594h-12.172Z",
                transform: "translate(8676 -2045)",
              }),
            ],
          }),
        });
      }
    },
    72427: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return g;
        },
      });
      var r = n(70917),
        i = n(8503),
        o = n(17484),
        a = n(37868),
        s = n(76132),
        c = n(48710),
        u = n(35944);
      var l = function (e) {
          var t = e.className,
            n = e.mainLabelCaption,
            o = e.mainLabel,
            s = e.mainLabelImpactPt,
            c = void 0 === s ? 42 : s,
            l = e.subLabels,
            p = void 0 === l ? [] : l,
            d = e.breakPoint,
            h = void 0 === d ? 1024 : d,
            m = "screen and (max-width: ".concat(h - 1, "px)"),
            g = "screen and (min-width: ".concat(h, "px)"),
            v = (0, i.bU)();
          return (0, u.BX)("div", {
            className: t,
            css: (0, r.iv)(
              "margin-bottom:50px;@media ",
              m,
              "{margin-bottom:13px;}",
              ""
            ),
            children: [
              "ja" === v &&
                (0, u.tZ)("div", { css: f.mainLabelCaption(m), children: n }),
              (0, u.tZ)(a.Z, {
                href: o.href,
                children: (0, u.tZ)("a", {
                  css: f.mainLabel(m, c),
                  children: o.label,
                }),
              }),
              p.map(function (e, t) {
                return (0,
                u.tZ)(a.Z, { href: e.href, children: (0, u.BX)("a", { css: f.subLabelBox(m, g), children: [(0, u.tZ)("div", { css: f.node }), (0, u.BX)("div", { css: f.subLabel, children: [e.label, e.series && (0, u.tZ)("div", { css: f.series, children: e.series })] })] }) }, t);
              }),
            ],
          });
        },
        f = {
          mainLabelCaption: function (e) {
            return (0, r.iv)(
              "margin-left:2px;font-family:var(--impact-font);font-size:14px;line-height:1;color:#fff;@media ",
              e,
              "{display:none;}",
              ""
            );
          },
          mainLabel: function (e, t) {
            return (0, r.iv)(
              "display:inline-block;margin-top:5px;font-family:var(--comic-impact-font);font-size:32px;line-height:1;color:#fff;white-space:nowrap;transition:opacity 0.25s;@media ",
              c.r.media.postTablet,
              "{&:hover{opacity:0.5;}}&:active{opacity:0.5;}&:not(:lang(ja)){font-size:",
              t,
              "px;}@media ",
              e,
              "{font-size:26px;&:not(:lang(ja)){font-size:36px;}&:lang(es){font-size:32px;}}",
              ""
            );
          },
          subLabelBox: function (e, t) {
            return (0, r.iv)(
              "display:flex;align-items:flex-start;margin-top:8px;margin-bottom:3px;margin-left:5px;color:#fff;transition:opacity 0.25s;@media ",
              t,
              "{&:hover{opacity:0.5;}}&:active{opacity:0.5;}@media ",
              e,
              "{display:none;}",
              ""
            );
          },
          node: {
            name: "1iaf1or",
            styles:
              "width:16px;height:16px;border-bottom:1px solid #333;border-left:1px solid #333",
          },
          subLabel: {
            name: "5p4cf0",
            styles:
              "margin-top:4px;margin-left:5px;font-family:var(--comic-impact-font);font-size:20px;line-height:1.2;color:#fff;white-space:pre-wrap;&:not(:lang(ja)){font-size:24px;}",
          },
          series: {
            name: "df7366",
            styles:
              "display:block;font-family:var(--comic-impact-font);font-size:12px;line-height:1.2;color:#fff;white-space:pre-wrap;&:not(:lang(ja)){font-size:16px;}",
          },
        };
      var p = { name: "wfo1ll", styles: "transition:clip-path 0.25s" },
        d = {
          name: "1p2wbv0",
          styles: "pointer-events:none;opacity:0;transition:opacity 0.5s",
        },
        h = { name: "n88f8v", styles: "opacity:1;transition:opacity 0.25s" },
        m = {
          name: "2na8wo",
          styles: "font-family:'Bebas Neue';font-size:20px",
        };
      function g(e) {
        var t = e.open,
          n = e.breakPoint,
          c = void 0 === n ? 1024 : n,
          f = (0, i.bU)(),
          g = "screen and (max-width: ".concat(c - 1, "px)"),
          Z = "screen and (min-width: ".concat(c, "px)"),
          R = (0, u.tZ)(u.HY, {
            children: (0, u.BX)("div", {
              css: v.naviWrap(g),
              children: [
                (0, u.tZ)("div", {
                  css: v.naviGroup,
                  children: (0, u.tZ)(l, {
                    mainLabelCaption: "TOP",
                    mainLabel: { label: "".concat(b[f]), href: "/" },
                    breakPoint: c,
                  }),
                }),
                (0, u.tZ)("div", {
                  css: v.naviGroup,
                  children: (0, u.tZ)(l, {
                    mainLabelCaption: "NEWS",
                    mainLabel: { label: "".concat(x[f]), href: "/news/" },
                    breakPoint: c,
                  }),
                }),
                (0, u.BX)("div", {
                  css: v.naviGroup,
                  children: [
                    (0, u.tZ)(l, {
                      mainLabelCaption: "NARUTO",
                      mainLabel: {
                        label: (0, u.BX)(u.HY, {
                          children: [
                            (0, u.tZ)("span", {
                              css: (0, r.iv)(
                                "font-family:'Bebas Neue';font-size:42px;@media ",
                                g,
                                "{font-size:32px;&:not(:lang(ja)){font-size:36px;}&:lang(es){font-size:32px;}}",
                                ""
                              ),
                              children: w[f],
                            }),
                            (0, u.tZ)("span", {
                              css: (0, r.iv)(
                                "font-size:32px;&:not(:lang(ja)){display:none;}@media ",
                                g,
                                "{font-size:26px;}",
                                ""
                              ),
                              children: "\u3068\u306f",
                            }),
                          ],
                        }),
                        href: "/about/",
                      },
                      subLabels: [
                        { label: "".concat(S[f]), href: "/about/story" },
                      ],
                      breakPoint: c,
                    }),
                    (0, u.tZ)(l, {
                      mainLabelCaption: "COMICS",
                      mainLabel: { label: "".concat(E[f]), href: "/comics/" },
                      subLabels: [
                        { label: "NARUTO", href: "/comics/#naruto" },
                        {
                          label: "BORUTO",
                          series: "-NARUTO NEXT GENERATIONS-",
                          href: "/comics/#boruto1",
                        },
                        {
                          label: "BORUTO",
                          series: "-TWO BLUE VORTEX-",
                          href: "/comics/#boruto2",
                        },
                        { label: "".concat(O[f]), href: "/books" },
                      ],
                      breakPoint: c,
                    }),
                  ],
                }),
                (0, u.BX)("div", {
                  css: v.naviGroup,
                  children: [
                    (0, u.tZ)(l, {
                      mainLabelCaption: "ANIME",
                      mainLabel: { label: "".concat(k[f]), href: "/anime" },
                      subLabels: [
                        {
                          label: "ja" === f ? "\u5c11\u5e74\u7bc7" : "NARUTO",
                          href: "/anime/naruto1",
                        },
                        {
                          label:
                            "ja" === f
                              ? "\u75be\u98a8\u4f1d"
                              : "NARUTO SHIPPUDEN",
                          href: "/anime/naruto2",
                        },
                        {
                          label: (0, u.tZ)("span", {
                            css: m,
                            children: "BORUTO",
                          }),
                          href: "/anime/boruto/",
                        },
                      ],
                      breakPoint: c,
                    }),
                    (0, u.tZ)("div", {
                      css: (0, r.iv)(
                        "display:none;@media ",
                        g,
                        "{display:block;}",
                        ""
                      ),
                      children: (0, u.tZ)(l, {
                        marginBottom: 35,
                        mainLabelCaption: "SPECIAL",
                        mainLabel: {
                          label: "".concat(j[f]),
                          href: "/special/",
                        },
                        breakPoint: c,
                      }),
                    }),
                    (0, u.BX)("div", {
                      css: v.relationGroup(g),
                      children: [
                        (0, u.tZ)("div", {
                          css: v.relationTitle(g),
                          children: (0, u.tZ)("span", { children: I[f] }),
                        }),
                        (0, u.BX)("div", {
                          css: v.relationList(g),
                          children: [
                            (0, u.tZ)(l, {
                              css: (0, r.iv)(
                                "margin-bottom:20px;@media ",
                                g,
                                "{margin-bottom:0;}",
                                ""
                              ),
                              mainLabelCaption: "GOODS",
                              mainLabel: {
                                label: "".concat(A[f]),
                                href: "/goods/",
                              },
                              mainLabelImpactPt:
                                "es" === f || "it" === f ? 40 : 42,
                              breakPoint: c,
                            }),
                            (0, u.tZ)(l, {
                              css: (0, r.iv)(
                                "margin-bottom:20px;@media ",
                                g,
                                "{margin-bottom:0;}",
                                ""
                              ),
                              mainLabelCaption: "EVENT",
                              mainLabel: {
                                label: "".concat(C[f]),
                                href: "/event/",
                              },
                              breakPoint: c,
                            }),
                            (0, u.tZ)(l, {
                              css: (0, r.iv)(
                                "margin-bottom:0;@media ",
                                g,
                                "{margin-bottom:0;}",
                                ""
                              ),
                              mainLabelCaption: "GAME",
                              mainLabel: {
                                label: "".concat(T[f]),
                                href: "/game/",
                              },
                              breakPoint: c,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, u.BX)("div", {
                  css: v.naviGroup,
                  children: [
                    (0, u.tZ)("div", {
                      css: (0, r.iv)("@media ", g, "{display:none;}", ""),
                      children: (0, u.tZ)(l, {
                        marginBottom: 35,
                        mainLabelCaption: "SPECIAL",
                        mainLabel: {
                          label: "".concat(j[f]),
                          href: "/special/",
                        },
                        breakPoint: c,
                      }),
                    }),
                    (0, u.tZ)("div", {
                      css: v.bannerWrap(g),
                      children: (0, u.tZ)(o.j, {
                        href:
                          "ja" === f
                            ? "https://narutomania.naruto-official.com/"
                            : "https://narutomania.naruto-official.com/en/",
                        src:
                          "ja" === f
                            ? "/narutomania/narutomania_ja.png"
                            : "/narutomania/narutomania_en.png",
                        target: "_blank",
                      }),
                    }),
                    (0, u.tZ)("div", {
                      css: v.contactWrap(g),
                      children: (0, u.tZ)(a.Z, {
                        href: "/contact/",
                        children: (0, u.tZ)("a", {
                          css: v.contactLabel(Z),
                          children: P[f],
                        }),
                      }),
                    }),
                    (0, u.BX)("div", {
                      css: v.shareLinkBox(g),
                      children: [
                        (0, u.tZ)("div", {
                          css: v.shareLabel(g),
                          children: L[f],
                        }),
                        (0, u.BX)("div", {
                          css: v.shareIcons(g),
                          children: [
                            (0, u.tZ)(s.kP, {
                              children: (0, u.tZ)(y, {
                                breakPoint: c,
                                children: (0, u.tZ)("img", {
                                  width: 25,
                                  height: 20,
                                  src: "/common/icon/x_icon_white.svg",
                                  alt: "X",
                                }),
                              }),
                            }),
                            (0, u.tZ)(s.DG, {
                              children: (0, u.tZ)(y, {
                                breakPoint: c,
                                children: (0, u.tZ)("img", {
                                  width: 23,
                                  height: 23,
                                  src: "/common/icon/facebook_icon_white.svg",
                                  alt: "facebook",
                                }),
                              }),
                            }),
                            (0, u.tZ)(s.Gx, {
                              children: (0, u.tZ)(y, {
                                breakPoint: c,
                                children: (0, u.tZ)("img", {
                                  width: 24,
                                  height: 23,
                                  src: "/common/icon/line_icon_white.svg",
                                  alt: "line",
                                }),
                              }),
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
        return (0, u.tZ)("div", {
          id: "menu",
          css: (0, r.iv)(
            "position:fixed;top:0;right:0;bottom:0;left:0;z-index:2;overflow:auto;background:rgb(0 0 0 / 70%);",
            t ? h : d,
            ";",
            ""
          ),
          children: (0, u.tZ)("div", {
            css: (0, r.iv)(
              "width:100%;height:100%;clip-path:circle(0 at top right);background:url('/common/header/menu.png') no-repeat top right;@media ",
              g,
              "{background-image:url('/common/header/menu_sp.svg');background-position:top left;background-size:cover;}@media screen and (max-height: 558px){height:auto;}",
              t
                ? (0, r.iv)(
                    "clip-path:circle(200% at top right);transition:clip-path 1s;@media ",
                    g,
                    "{transition:clip-path 0.5s;}",
                    ""
                  )
                : p,
              ";",
              ""
            ),
            children: R,
          }),
        });
      }
      var v = {
          bg: {
            name: "gjtjb3",
            styles: "position:absolute;top:0;right:0;z-index:-1",
          },
          closeBtn: function (e) {
            return (0, r.iv)(
              "position:absolute;top:10px;right:10px;@media ",
              e,
              "{top:0;right:0;}",
              ""
            );
          },
          naviWrap: function (e) {
            return (0, r.iv)(
              "display:flex;justify-content:flex-end;padding:88px 65px 0 0;@media ",
              e,
              "{flex-direction:column;padding:88px 50px 0 0;}",
              ""
            );
          },
          naviGroup: { name: "12j4bns", styles: "margin-left:50px" },
          relationGroup: function (e) {
            return (0, r.iv)(
              "position:relative;display:flex;@media ",
              e,
              "{flex-direction:column;}",
              ""
            );
          },
          relationTitle: function (e) {
            return (0, r.iv)(
              "display:flex;align-items:center;justify-content:center;min-width:16px;margin-right:12px;&::before,&::after{position:absolute;display:block;content:'';}&::before{top:0;left:6px;width:16px;height:100%;background-color:#333;@media ",
              e,
              "{&::before{}top:15px;left:0;width:100%;height:16px;}}&::after{top:1px;left:7px;width:16px;height:calc(100% - 2px);background-color:black;@media ",
              e,
              "{&::after{}top:16px;left:1px;width:calc(100% - 2px);height:16px;}}span{position:relative;z-index:3;display:inline-block;padding:7px 0;margin-left:-2px;font-family:var(--comic-impact-font);font-size:18px;line-height:1em;color:#808080;text-align:center;background:black;writing-mode:vertical-lr;&:not(:lang(ja)){margin-left:-5px;font-size:22px;}@media ",
              e,
              "{span{}padding:7px;writing-mode:horizontal-tb;}}@media ",
              e,
              "{margin-right:0;margin-bottom:10px;}",
              ""
            );
          },
          relationList: function (e) {
            return (0, r.iv)(
              "@media ",
              e,
              "{display:flex;flex-wrap:wrap;justify-content:space-between;width:100%;margin-bottom:20px;}",
              ""
            );
          },
          anniversaryBannerBox: {
            name: "1pjcvja",
            styles: "img{vertical-align:top;}",
          },
          bannerWrap: function (e) {
            return (0, r.iv)(
              "width:300px;margin-bottom:35px;@media ",
              e,
              "{display:none;}",
              ""
            );
          },
          contactLabel: function (e) {
            return (0, r.iv)(
              "font-family:var(--comic-impact-font);font-size:18px;color:white;transition:opacity 0.25s;@media ",
              e,
              "{&:hover{opacity:0.5;}}&:active{opacity:0.5;}&:not(:lang(ja)){font-size:26px;}",
              ""
            );
          },
          contactWrap: function (e) {
            return (0, r.iv)(
              "margin-bottom:35px;line-height:1em;@media ",
              e,
              "{display:none;}",
              ""
            );
          },
          shareLinkBox: function (e) {
            return (0, r.iv)(
              "display:flex;align-items:center;img{display:block;margin:0 17px 0 0;}@media ",
              e,
              "{flex-direction:column;img{margin:0 17px;}}",
              ""
            );
          },
          shareLabel: function (e) {
            return (0, r.iv)(
              "margin-right:20px;font-family:var(--impact-font);font-size:12px;line-height:1;color:white;@media ",
              e,
              "{margin-right:0;&:not(:lang(ja)){font-size:20px;}}",
              ""
            );
          },
          shareIcons: function (e) {
            return (0, r.iv)(
              "display:flex;justify-content:center;@media ",
              e,
              "{margin-top:20px;}",
              ""
            );
          },
        },
        y = function (e) {
          var t = e.children,
            n = e.breakPoint,
            i = "screen and (min-width: ".concat(n, "px)");
          return (0, u.tZ)("div", {
            css: (0, r.iv)(
              "transition:opacity 0.25s;@media ",
              i,
              "{&:hover{opacity:0.5;}}&:active{opacity:0.5;}",
              ""
            ),
            children: t,
          });
        },
        b = {
          ja: "\u30c8\u30c3\u30d7",
          en: "TOP",
          fr: "ACCUEIL",
          de: "TOP",
          es: "INICIO",
          it: "HOME",
        },
        x = {
          ja: "\u30cb\u30e5\u30fc\u30b9",
          en: "NEWS",
          fr: "ACTUALIT\xc9S",
          de: "NEWS",
          es: "NOTICIAS",
          it: "NOVIT\xc0",
        },
        w = {
          ja: "NARUTO",
          en: "ABOUT NARUTO",
          fr: "HISTOIRE",
          de: "\xdcBER NARUTO",
          es: "SOBRE NARUTO",
          it: "COS\u2019\xc8 NARUTO",
        },
        S = {
          ja: "\u30b9\u30c8\u30fc\u30ea\u30fc",
          en: "STORY",
          fr: "R\xc9SUM\xc9",
          de: "DIE STORY",
          es: "LA HISTORIA",
          it: "LA STORIA",
        },
        E = {
          ja: "\u30b3\u30df\u30c3\u30af\u30b9",
          en: "COMICS",
          fr: "MANGA",
          de: "MANGA",
          es: "MANGA",
          it: "MANGA",
        },
        O = {
          ja: "\u95a2\u9023\u66f8\u7c4d",
          en: "RELATED TITLES",
          fr: "PUBLICATIONS LI\xc9ES",
          de: "B\xdcCHER",
          es: "PUBLICACIONES\nRELACIONADAS",
          it: "PUBBLICAZIONI CORRELATE",
        },
        k = {
          ja: "\u30a2\u30cb\u30e1",
          en: "ANIME",
          fr: "ANIM\xc9",
          de: "ANIME",
          es: "ANIME",
          it: "ANIME",
        },
        I = {
          ja: "\u95a2\u9023\u5546\u6750",
          en: "ROADMAP",
          fr: "AUTRES",
          de: "\xc4HNLICHE ARTIKEL",
          es: "OTROS",
          it: "VARIE",
        },
        A = {
          ja: "\u30b0\u30c3\u30ba",
          en: "STAGE 1",
          fr: "GOODIES",
          de: "STAGE 1",
          es: "MERCHANDISING",
          it: "MERCHANDISE",
        },
        C = {
          ja: "\u30a4\u30d9\u30f3\u30c8",
          en: "STAGE 3",
          fr: "\xc9V\xc9NEMENTS",
          de: "STAGE 3",
          es: "EVENTOS",
          it: "EVENTI",
        },
        T = {
          ja: "\u30b2\u30fc\u30e0",
          en: "STAGE 2",
          fr: "JEUX",
          de: "STAGE 2",
          es: "JUEGOS",
          it: "GIOCHI",
        },
        j = {
          ja: "\u30b9\u30da\u30b7\u30e3\u30eb",
          en: "SPECIAL",
          fr: "EXCLUSIVIT\xc9S",
          de: "SPECIAL",
          es: "ESPECIAL",
          it: "ESCLUSIVE",
        },
        P = {
          ja: "\u304a\u554f\u3044\u5408\u308f\u305b",
          en: "CONTACT",
          fr: "NOUS CONTACTER",
          de: "KONTAKT",
          es: "CONTACTO",
          it: "CONTATTACI",
        },
        L = {
          ja: "SHARE",
          en: "SHARE",
          fr: "PARTAGER",
          de: "TEILEN",
          es: "COMPARTIR",
          it: "CONDIVIDI",
        };
    },
    85859: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var r = n(70917),
        i = n(35944);
      function o(e) {
        var t = e.open,
          n = e.breakPoint,
          o = void 0 === n ? 1024 : n,
          a = e.onToggle,
          s = "screen and (max-width: ".concat(o - 1, "px)"),
          c = "screen and (min-width: ".concat(o, "px)");
        return (0, i.tZ)("a", {
          href: "#menu",
          css: [
            (0, r.iv)(
              "display:inline-block;width:68px;height:68px;cursor:pointer;background-image:",
              t
                ? "url(/common/header/menu_btn_close.svg)"
                : "url(/common/header/menu_btn.svg)",
              ";background-size:cover;transition:transform 0.25s,opacity 0.25s;@media ",
              c,
              "{&:hover{transform:scale(1.3);}}@media ",
              s,
              "{width:60px;height:60px;}@media ",
              s,
              "{&:active{opacity:0.5;}}",
              ""
            ),
            "",
            "",
          ],
          onClick: function (e) {
            e.preventDefault(),
              t
                ? document.body.classList.remove("menu")
                : document.body.classList.add("menu"),
              a();
          },
          role: "button",
          children: (0, i.tZ)("span", {
            className: "visually-hidden",
            children: "MENU",
          }),
        });
      }
    },
    4840: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return w;
        },
      });
      n(67294);
      var r = n(58482),
        i = n(73938),
        o = n(95541),
        a = n(70917),
        s = n(48710),
        c = n(77340),
        u = n(18714),
        l = n(35944);
      var f = { name: "1azakc", styles: "text-align:center" },
        p = function (e) {
          var t = e.locale;
          return (0, l.tZ)("main", {
            css: d.main,
            children: (0, l.tZ)(c.W, {
              children: (0, l.BX)("div", {
                css: (0, a.iv)(
                  "margin:91px auto 100px;@media ",
                  s.r.media.preTablet,
                  "{margin:170px auto 40px;&:not(&:lang(ja)){margin-bottom:69px;&:lang(de){margin-bottom:52px;}}}",
                  ""
                ),
                children: [
                  (0, l.BX)("div", {
                    css: d.headerTitle,
                    children: [
                      (0, l.BX)("h1", {
                        css: d.title,
                        children: [
                          "403 Forbidden",
                          (0, l.tZ)("span", {
                            css: (0, a.iv)(
                              "@media ",
                              s.r.media.preTablet,
                              "{display:none;}",
                              ""
                            ),
                            children: "/",
                          }),
                          (0, l.tZ)("br", {
                            css: (0, a.iv)(
                              "display:none;@media ",
                              s.r.media.preTablet,
                              "{display:block;}",
                              ""
                            ),
                          }),
                          "404 Not Found",
                        ],
                      }),
                      (0, l.tZ)("p", {
                        css: (0, a.iv)(
                          "margin-top:15px;font-family:var(--comic-impact-font);font-size:18px;line-height:28px;&:not(&:lang(ja)){margin:0 auto;margin-top:17px;font-size:24px;line-height:28px;white-space:pre-wrap;}@media ",
                          s.r.media.preTablet,
                          "{margin-top:26px;font-size:20px;&:not(&:lang(ja)){margin-top:42px;font-size:20px;}}",
                          ""
                        ),
                        children: h[t],
                      }),
                    ],
                  }),
                  (0, l.BX)("div", {
                    css: (0, a.iv)(
                      "padding:20px;margin-top:45px;font-size:14px;line-height:24px;border:2px solid #000;&:not(&:lang(ja)){margin-top:22px;font-size:16px;line-height:26px;}p:nth-of-type(1){line-height:19px;}@media ",
                      s.r.media.preTablet,
                      "{padding:28px 20px 39px;margin-top:31px;font-size:16px;&:not(&:lang(ja)){padding:23px 20px 25px;margin-top:39px;}}",
                      ""
                    ),
                    children: [
                      (0, l.tZ)("p", { children: m[t] }),
                      (0, l.BX)("ul", {
                        css: d.messageList,
                        children: [
                          (0, l.BX)("li", {
                            children: [
                              g[t].list1,
                              (0, l.tZ)("span", { children: g[t].span }),
                            ],
                          }),
                          (0, l.tZ)("li", { children: g[t].list2 }),
                          (0, l.tZ)("li", { children: g[t].list3 }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.tZ)("p", {
                    css: (0, a.iv)(
                      "margin-top:26px;font-family:var(--comic-impact-font);font-size:16px;line-height:24px;text-align:center;&:not(&:lang(ja)){margin-top:20px;font-size:18px;line-height:28px;}@media ",
                      s.r.media.preTablet,
                      "{margin-top:32px;font-size:18px;&:not(&:lang(ja)){margin-top:14px;&:lang(es){margin-top:45px;}&:lang(it){margin-top:51px;}}}",
                      ""
                    ),
                    children: v[t],
                  }),
                  (0, l.tZ)("div", {
                    css: f,
                    children: (0, l.tZ)(u.f, {
                      css: (0, a.iv)(
                        "width:86px;height:40px;margin-top:46px;font-size:18px;&:lang(en){width:132px;padding:5px 9px;}&:lang(fr){width:168px;padding:8px 11px;}&:lang(de){width:177px;padding:7px 11px;}&:lang(es){width:132px;padding:8px 7px;}&:lang(it){width:158px;padding:8px 10px;}&:not(&:lang(ja)){margin-top:48px;font-size:24px;white-space:nowrap;}@media ",
                        s.r.media.preTablet,
                        "{width:100%;height:48px;margin-top:32px;font-size:20px;&:not(&:lang(ja)){width:100%;margin-top:64px;font-size:22px;&:lang(de){margin-top:39px;}}}",
                        ""
                      ),
                      center: !0,
                      href: "/",
                      children: y[t],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        d = {
          main: {
            name: "1f3izz8",
            styles:
              "position:relative;z-index:0;display:flex;flex-direction:column",
          },
          headerTitle: {
            name: "1rmsz9o",
            styles: "margin:0 auto;text-align:center",
          },
          title: (0, a.iv)(
            "font-family:var(--impact-font);font-size:48px;font-weight:400;line-height:1;letter-spacing:-1px;@media ",
            s.r.media.preTablet,
            "{font-size:44px;}",
            ""
          ),
          messageList: (0, a.iv)(
            "padding-left:12px;list-style:'\u30fb';&:lang(ja){margin-top:10px;}span{display:block;@media ",
            s.r.media.preTablet,
            "{span{}display:inline;}}",
            ""
          ),
        },
        h = {
          ja: "\u304a\u5ba2\u69d8\u304c\u6307\u5b9a\u3055\u308c\u305fURL\uff08\u30a2\u30c9\u30ec\u30b9\uff09\u306b\u306f\u3001\u3054\u89a7\u3044\u305f\u3060\u3051\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3044\u305f\u3057\u307e\u305b\u3093\u3002",
          en: "No page could be found at the URL entered. \nPossible causes of this error are listed below.",
          fr: "La page que vous recherchez semble introuvable. \nLes causes possibles de cette erreur sont list\xe9es ci-dessous.",
          de: "Die von Ihnen angeforderte URL existiert nicht.\nDies kann an folgenden Ursachen liegen:",
          es: "No se pudo encontrar ninguna p\xe1gina con la URL introducida.\nEstas son las posibles causas:",
          it: "Non \xe8 stata trovata nessuna pagina corrispondente allo URL inserito.\nEcco una lista delle possibili cause:",
        },
        m = {
          ja: "\u8003\u3048\u3089\u308c\u308b\u539f\u56e0\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002",
          en: "",
          fr: "",
          de: "",
          es: "",
          it: "",
        },
        g = {
          ja: {
            list1:
              "\u30d5\u30a1\u30a4\u30eb\u304c\u79fb\u52d5\u3001\u540d\u79f0\u306e\u5909\u66f4\u3001\u3082\u3057\u304f\u306f\u524a\u9664\u3055\u308c\u3066\u3044\u308b\uff08\u671f\u9593\u9650\u5b9a\u30b5\u30a4\u30c8\u306a\u3069\u306f\u3001\u671f\u9593\u7d42\u4e86\u5f8c\u306b\u30d5\u30a1\u30a4\u30eb\u306f\u524a\u9664\u3055\u308c\u3066\u3044\u307e\u3059\uff09",
            span: "",
            list2:
              "\u6307\u5b9a\u3055\u308c\u305fURL\u304c\u9593\u9055\u3063\u3066\u3044\u308b",
            list3:
              "\u30a2\u30af\u30bb\u30b9\u5236\u9650\u3055\u308c\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b",
          },
          en: {
            list1: "The page may have been moved, renamed, or deleted.",
            span: "(Pages that are only available for a limited amount of time are deleted afterwards)",
            list2: "The URL entered may be incorrect.",
            list3: "You may not have permission to access this page.",
          },
          fr: {
            list1:
              "La page que vous recherchez a \xe9t\xe9 d\xe9plac\xe9e, renomm\xe9e ou supprim\xe9e.",
            span: "(Les pages \xe9tant accessibles pour une dur\xe9e limit\xe9e sont supprim\xe9es apr\xe8s expiration)",
            list2: "L\u2019URL saisie a \xe9t\xe9 mal orthographi\xe9e.",
            list3:
              "Vous n\u2019avez pas l\u2019autorisation d\u2019acc\xe9der \xe0 cette page.",
          },
          de: {
            list1:
              "Die angeforderte Seite wurde verschoben, umbenannt oder gel\xf6scht.",
            span: "(Seiten, die nur f\xfcr einen bestimmten Zeitraum verf\xfcgbar sind, werden anschlie\xdfend gel\xf6scht.)",
            list2: "Die eingegebene URL ist inkorrekt.",
            list3: "Sie haben keinen Zugriff auf diese Seite.",
          },
          es: {
            list1:
              "La p\xe1gina podr\xeda haber sido movida, renombrada o eliminada.",
            span: "(Las p\xe1ginas que solo est\xe1n disponibles temporalmente se eliminan despu\xe9s de un cierto periodo de tiempo.)",
            list2: "La URL introducida podr\xeda ser incorrecta.",
            list3:
              "Es posible que no tengas permisos para acceder a esta p\xe1gina.",
          },
          it: {
            list1:
              "La pagina potrebbe essere stata spostata, rinominata o rimossa.",
            span: "(Pagine disponibili solo temporaneamente vengono rimosse dopo un certo periodo di tempo)",
            list2: "L\u2019 URL inserito contiene errori.",
            list3: "Non hai il permesso di accedere a questa pagina.",
          },
        },
        v = {
          ja: "\u3054\u4e0d\u4fbf\u3092\u304a\u304b\u3051\u3057\u3066\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002",
          en: "WE APOLOGIZE FOR THE INCONVENIENCE.",
          fr: "VEUILLEZ NOUS EXCUSER POUR LA G\xcaNE OCCASIONN\xc9E. ",
          de: "WIR ENTSCHULDIGEN UNS F\xdcR DIE UNANNEHMLICHKEITEN.",
          es: "PEDIMOS DISCULPAS POR LA INCONVENIENCIA.",
          it: "CI SCUSIAMO PER IL DISAGIO.",
        },
        y = {
          ja: "\u30c8\u30c3\u30d7\u3078",
          en: "Return to Top",
          fr: "RETOUR \xc0 L\u2019ACCUEIL",
          de: "Zur\xfcck zum anfang",
          es: "VOLVER A INICIO",
          it: "TORNA ALLA HOME",
        };
      var b = { name: "82a6rk", styles: "flex:1" },
        x = {
          name: "11pfcjj",
          styles: "display:flex;flex-direction:column;min-height:100vh",
        },
        w = function (e) {
          var t = e.locale;
          return (0, l.tZ)("div", {
            css: x,
            children: (0, l.BX)(o.DY, {
              children: [
                (0, l.tZ)(i.h, {}),
                (0, l.tZ)("div", {
                  css: b,
                  children: (0, l.tZ)(p, { locale: t }),
                }),
                (0, l.tZ)(r.I, {}),
              ],
            }),
          });
        };
    },
    95541: function (e, t, n) {
      "use strict";
      n.d(t, {
        DY: function () {
          return h;
        },
        Q0: function () {
          return u;
        },
        a$: function () {
          return p;
        },
        bQ: function () {
          return l;
        },
        pl: function () {
          return c;
        },
        sS: function () {
          return f;
        },
      });
      var r = n(16835),
        i = n(27812),
        o = n(67294),
        a = n(35944);
      var s = o.createContext({ stack: [], setStack: function () {} });
      function c() {
        var e = o.useContext(s),
          t = e.stack,
          n = e.setStack;
        return function (e) {
          document.body.classList.add("modal"), n(t.concat([e]));
        };
      }
      function u() {
        var e = o.useContext(s),
          t = e.stack,
          n = e.setStack;
        return function (e) {
          document.body.classList.add("modal"), n([e].concat((0, i.Z)(t)));
        };
      }
      function l() {
        var e = o.useContext(s),
          t = e.stack,
          n = e.setStack;
        return function () {
          var e = t.slice();
          e.pop(),
            0 === e.length && document.body.classList.remove("modal"),
            n(e);
        };
      }
      function f() {
        var e = o.useContext(s),
          t = e.stack,
          n = e.setStack;
        return function () {
          var e = t.slice();
          e.shift(),
            0 === e.length && document.body.classList.remove("modal"),
            n(e);
        };
      }
      function p() {
        return o.useContext(s).stack.length;
      }
      var d = {
        name: "1n1khkm",
        styles: "position:fixed;top:0;right:0;bottom:0;left:0;z-index:10",
      };
      function h(e) {
        var t = e.children,
          n = o.useState([]),
          i = (0, r.Z)(n, 2),
          c = i[0],
          u = i[1];
        return (0, a.BX)(s.Provider, {
          value: { stack: c, setStack: u },
          children: [
            t,
            0 !== c.length
              ? (0, a.tZ)("div", {
                  css: d,
                  children:
                    c.length > 1
                      ? c.map(function (e) {
                          return e;
                        })
                      : c[c.length - 1],
                })
              : (0, a.tZ)(o.Fragment, {}),
          ],
        });
      }
    },
    3911: function (e, t, n) {
      "use strict";
      n.d(t, {
        b0: function () {
          return i;
        },
        mH: function () {
          return r;
        },
        u9: function () {
          return o;
        },
      });
      var r = 29,
        i = 14,
        o = {
          "naruto.01": "naruto.01",
          "naruto.02": "naruto.02",
          "naruto.03": "naruto.05",
          "naruto.04": "naruto.13",
          "naruto.05": "naruto.16",
          "naruto.06": "naruto.17",
          "naruto.07": "naruto.20",
          "naruto.08": "naruto.27",
          "naruto.09": "naruto.28",
          "naruto.10": "naruto.32",
          "naruto.11": "naruto.35",
          "naruto.12": "naruto.38",
          "naruto.13": "naruto.39",
          "naruto.14": "naruto.41",
          "naruto.15": "naruto.42",
          "naruto.16": "naruto.44",
          "naruto.17": "naruto.45",
          "naruto.18": "naruto.48",
          "naruto.19": "naruto.51",
          "naruto.20": "naruto.53",
          "naruto.21": "naruto.52",
          "naruto.22": "naruto.55",
          "naruto.23": "naruto.58",
          "naruto.24": "naruto.60",
          "naruto.25": "naruto.63",
          "naruto.26": "naruto.65",
          "naruto.27": "naruto.69",
          "naruto.28": "naruto.71",
          "naruto.29": "naruto.72",
          "boruto.01": "boruto.01",
          "boruto.02": "boruto.02",
          "boruto.03": "boruto.03",
          "boruto.04": "boruto.05",
          "boruto.05": "boruto.06",
          "boruto.06": "boruto.06",
          "boruto.07": "boruto.08",
          "boruto.08": "boruto.09",
          "boruto.09": "boruto.10",
          "boruto.10": "boruto.10",
          "boruto.11": "boruto.12",
          "boruto.12": "boruto.12",
          "boruto.13": "boruto.14",
          "boruto.14": "boruto.16",
        };
    },
    94279: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return d;
        },
        r: function () {
          return u;
        },
      });
      var r = n(16835),
        i = n(27812),
        o = n(67294),
        a = n(3911),
        s = n(35944),
        c = o.createContext({ anchor: "naruto.01", to: function () {} });
      function u() {
        return o.useContext(c);
      }
      var l = function (e, t) {
          return Array.from(Array(t).keys())
            .map(function (e) {
              return e + 1;
            })
            .map(function (t) {
              return "".concat(e, ".").concat("00".concat(t).slice(-2));
            });
        },
        f = [].concat((0, i.Z)(l("naruto", a.mH)), (0, i.Z)(l("boruto", a.b0))),
        p = { naruto: "naruto.01", boruto: "boruto.01" };
      function d(e) {
        var t = e.children,
          n = o.useState(""),
          i = (0, r.Z)(n, 2),
          a = i[0],
          u = i[1],
          l = o.useState(0),
          d = (0, r.Z)(l, 2),
          h = d[0],
          m = d[1],
          g = o.useRef(null),
          v = f[h];
        o.useEffect(function () {
          var e = function () {
            var e,
              t = window.location.hash.slice(1);
            u(null !== (e = p[t]) && void 0 !== e ? e : t);
          };
          return (
            e(),
            window.addEventListener("hashchange", e),
            function () {
              return window.removeEventListener("hashchange", e);
            }
          );
        }, []),
          o.useEffect(
            function () {
              if (a) {
                var e,
                  t = f.indexOf(a);
                if (-1 !== t)
                  null === (e = g.current) || void 0 === e || e.to(t);
              }
            },
            [a]
          );
        var y = {
          anchor: v,
          to: function (e) {
            var t,
              n = f.indexOf(e);
            -1 !== n && (null === (t = g.current) || void 0 === t || t.to(n));
          },
        };
        return (0, s.tZ)(c.Provider, {
          value: y,
          children: t(g, function (e) {
            return m(e);
          }),
        });
      }
    },
    77865: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return f;
        },
        k: function () {
          return d;
        },
      });
      var r = n(16835),
        i = n(59499),
        o = n(67294),
        a = n(35944);
      function s(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var u = { universal: !1, unlockStory: !1 },
        l = o.createContext([u, function () {}]);
      function f() {
        var e = (0, o.useContext)(l),
          t = e[0],
          n = e[1];
        return [
          t,
          {
            switchUniversal: function (e) {
              e
                ? localStorage.setItem("UNIVERSAL", "on")
                : localStorage.removeItem("UNIVERSAL"),
                n({ type: "SWITCH_UNIVERSAL", which: e });
            },
            unlockStory: function () {
              n({ type: "UNLOCK_STORY" }),
                localStorage.setItem("UNLOCK_STORY", "ok");
            },
          },
        ];
      }
      function p(e, t) {
        switch (t.type) {
          case "LOAD":
            return t;
          case "SWITCH_UNIVERSAL":
            return c(c({}, e), {}, { universal: t.which });
          case "UNLOCK_STORY":
            return c(c({}, e), {}, { unlockStory: !0 });
        }
      }
      function d(e) {
        var t = e.children,
          n = o.useReducer(p, u),
          i = (0, r.Z)(n, 2),
          s = i[0],
          c = i[1];
        return (
          o.useEffect(function () {
            c({
              type: "LOAD",
              universal: !1,
              unlockStory: !!localStorage.getItem("UNLOCK_STORY"),
            });
          }, []),
          (0, a.tZ)(l.Provider, { value: [s, c], children: t })
        );
      }
    },
    43077: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
        m: function () {
          return s;
        },
      });
      var r = n(16835),
        i = n(67294),
        o = n(35944),
        a = i.createContext(function () {});
      function s() {
        return i.useContext(a);
      }
      function c(e) {
        var t = e.children,
          n = i.useState(!1),
          s = (0, r.Z)(n, 2),
          c = s[0],
          u = s[1];
        return (
          i.useEffect(
            function () {
              c
                ? document.body.classList.add("freeze")
                : document.body.classList.remove("freeze");
            },
            [c]
          ),
          (0, o.tZ)(a.Provider, { value: u, children: t })
        );
      }
    },
    69873: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return f;
        },
        W: function () {
          return l;
        },
      });
      var r = n(16835),
        i = n(11163),
        o = n(67294),
        a = {
          JP: "jp",
          IN: "asia",
          ID: "asia",
          KH: "asia",
          SG: "asia",
          LK: "asia",
          TH: "asia",
          NP: "asia",
          PK: "asia",
          BD: "asia",
          PH: "asia",
          BT: "asia",
          BN: "asia",
          VN: "asia",
          MO: "asia",
          MY: "asia",
          MM: "asia",
          MV: "asia",
          MN: "asia",
          LA: "asia",
          HK: "asia",
          TW: "asia",
          KR: "asia",
          CN: "asia",
          KP: "asia",
          TL: "asia",
          US: "na",
          CA: "na",
          IS: "eu",
          IE: "eu",
          AZ: "eu",
          AL: "eu",
          AM: "eu",
          AD: "eu",
          IT: "eu",
          UA: "eu",
          UZ: "eu",
          GB: "eu",
          EE: "eu",
          AT: "eu",
          NL: "eu",
          KZ: "eu",
          MK: "eu",
          CY: "eu",
          KG: "eu",
          GR: "eu",
          HR: "eu",
          SM: "eu",
          CH: "eu",
          SE: "eu",
          ES: "eu",
          SK: "eu",
          SI: "eu",
          RS: "eu",
          TJ: "eu",
          CZ: "eu",
          DK: "eu",
          DE: "eu",
          TM: "eu",
          NO: "eu",
          VA: "eu",
          HU: "eu",
          FI: "eu",
          FR: "eu",
          BG: "eu",
          BY: "eu",
          BE: "eu",
          PL: "eu",
          BA: "eu",
          PT: "eu",
          MT: "eu",
          MC: "eu",
          MD: "eu",
          ME: "eu",
          LV: "eu",
          LI: "eu",
          LT: "eu",
          RO: "eu",
          LU: "eu",
          RU: "eu",
          AR: "sa",
          AG: "sa",
          UY: "sa",
          EC: "sa",
          SV: "sa",
          GY: "sa",
          CU: "sa",
          GT: "sa",
          GD: "sa",
          CR: "sa",
          CO: "sa",
          JM: "sa",
          SR: "sa",
          VC: "sa",
          KN: "sa",
          LC: "sa",
          CL: "sa",
          DM: "sa",
          DO: "sa",
          TT: "sa",
          NI: "sa",
          HT: "sa",
          PA: "sa",
          BS: "sa",
          PY: "sa",
          BB: "sa",
          BR: "sa",
          VE: "sa",
          BZ: "sa",
          PE: "sa",
          BO: "sa",
          HN: "sa",
          MX: "sa",
        };
      function s(e) {
        return a[e.toUpperCase()] || "elsewhere";
      }
      var c = n(35944),
        u = o.createContext("unknown");
      function l() {
        return o.useContext(u);
      }
      function f(e) {
        var t = e.children,
          n = (0, i.useRouter)(),
          a = o.useState("unknown"),
          l = (0, r.Z)(a, 2),
          f = l[0],
          p = l[1];
        return (
          o.useEffect(
            function () {
              var e = function () {
                var e = n.query.gt,
                  t = e ? (Array.isArray(e) ? e[0] : e) : "";
                p(s(t));
              };
              fetch("")
                .then(function (t) {
                  var n = t.headers.get("CloudFront-Viewer-Country");
                  if (n) {
                    var r = (function (e) {
                      return "" === e ? "elsewhere" : s(e);
                    })(n);
                    p(r);
                  } else e();
                })
                .catch(function () {
                  e();
                });
            },
            [n]
          ),
          (0, c.tZ)(u.Provider, { value: f, children: t })
        );
      }
    },
    8503: function (e, t, n) {
      "use strict";
      n.d(t, {
        Iw: function () {
          return c;
        },
        b8: function () {
          return o;
        },
        bU: function () {
          return u;
        },
        ut: function () {
          return a;
        },
      });
      var r = n(67294),
        i = n(35944);
      function o(e) {
        return (
          "ja" === e ||
          "en" === e ||
          "fr" === e ||
          "de" === e ||
          "es" === e ||
          "it" === e
        );
      }
      function a(e) {
        var t = e.match(/\/[^/]+/),
          n = t ? t[0].replace(/\//g, "") : "",
          r = "ja";
        return o(n) && (r = n), r;
      }
      var s = r.createContext("ja"),
        c = function (e) {
          var t = e.locale,
            n = e.children;
          return (0, i.tZ)(s.Provider, { value: t, children: n });
        };
      function u() {
        return (0, r.useContext)(s);
      }
    },
    28613: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return i;
        },
        n: function () {
          return r;
        },
      });
      var r = function (e) {
          return "ja" === e ? "jp" : e;
        },
        i = function (e) {
          return "ja" === e ? "" : "/".concat(e);
        };
    },
    7673: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return i;
        },
        X: function () {
          return r;
        },
      });
      var r = function (e, t) {
          var n = e;
          return (
            t.forEach(function (e) {
              var t = n.includes("?") ? "&" : "?";
              n = "".concat(n).concat(t).concat(e.key, "=").concat(e.value);
            }),
            n
          );
        },
        i = function (e) {
          var t;
          return (
            !(
              null !== e &&
              void 0 !== e &&
              e.startsWith(
                null !== (t = "https://naruto-official.com") ? t : ""
              )
            ) && !(null !== e && void 0 !== e && e.startsWith("/"))
          );
        };
    },
    53877: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return i;
        },
        p: function () {
          return r;
        },
      });
      var r = function () {
          var e = localStorage.getItem("uuid");
          if (!e) {
            var t = window.crypto.randomUUID();
            return localStorage.setItem("uuid", t), t;
          }
          return e;
        },
        i = function () {
          var e = sessionStorage.getItem("sessionId");
          if (!e) {
            var t = window.crypto.randomUUID();
            return sessionStorage.setItem("sessionId", t), t;
          }
          return e;
        };
    },
    19891: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return r;
        },
      });
      var r = function () {
        return window.navigator.language.split("-")[0];
      };
    },
    73053: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var r = n(59499),
        i = n(16835),
        o = n(70917),
        a = n(11163),
        s = n(67294),
        c = n(55756),
        u = n(35800),
        l = n(50029),
        f = n(87794),
        p = n.n(f),
        d = n(8503),
        h = n(4840),
        m = n(35944),
        g = n(83454),
        v = n(21876).Buffer,
        y = function (e) {
          var t = e.error,
            n = (0, d.bU)(),
            r = (0, a.useRouter)(),
            i = "preview" === g.env.NEXT_PUBLIC_MODE;
          return (
            s.useEffect(
              function () {
                i ||
                  (0, l.Z)(
                    p().mark(function e() {
                      var n;
                      return p().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = {
                                  unixtime: Math.floor(Date.now() / 1e3),
                                  userId: "0",
                                  level: "ERROR",
                                  page: r.asPath,
                                  message: t.message,
                                }),
                                (e.next = 3),
                                fetch(
                                  ""
                                    .concat(
                                      "https://track.naruto-official.com/",
                                      "?log="
                                    )
                                    .concat(
                                      v
                                        .from(JSON.stringify(n))
                                        .toString("base64")
                                    )
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )().catch(function (e) {
                    return console.error(e);
                  });
              },
              [r.asPath, i, t]
            ),
            (0, m.tZ)(h.u, { locale: n })
          );
        },
        b = n(55519),
        x = n(48710),
        w = (0, o.iv)(
          ":root{--primary-color:",
          x.r.color.primary,
          ";--comic-font:",
          x.r.font.comic,
          ";--comic-impact-font:",
          x.r.font.comic,
          ";--impact-font:",
          x.r.font.impact,
          ";--default-font:",
          x.r.font.gothic,
          ";--ease-in-cubic:cubic-bezier(0.32, 0, 0.67, 0);--ease-in-out-quad:cubic-bezier(0.45, 0, 0.55, 1);--ease-in-out-quart:cubic-bezier(0.76, 0, 0.24, 1);--ease-out-cubic:cubic-bezier(0.33, 1, 0.68, 1);--ease-out-quart:cubic-bezier(0.25, 1, 0.5, 1);--ease-out-circ:cubic-bezier(0, 0.55, 0.45, 1);--ease-out-back:cubic-bezier(0.34, 1.56, 0.64, 1);}:root:not(:lang(ja)){--default-font:",
          x.r.font.default,
          ";--comic-font:",
          x.r.font.default,
          ";--comic-impact-font:",
          x.r.font.impact,
          ";}*,*::before,*::after{box-sizing:border-box;}html{font-family:var(--default-font);font-size:16px;line-height:2;font-display:block;touch-action:manipulation;}@font-face{font-family:'Bebas Neue';src:url('/font/BebasNeue-Regular.woff2') format('woff2'),url('/font/BebasNeue-Regular.woff') format('woff');}@font-face{font-family:'fot-udkakugoc80-pro';src:url('/font/BN_NTUDKakugoC80Pro-B.woff2') format('woff2'),url('/font/BN_NTUDKakugoC80Pro-B.woff') format('woff');}body{margin:0;}body.splash,body.menu,body.modal,body.freeze{overflow:hidden;}a{color:inherit;text-decoration:none;}button{padding:0;margin:0;font-size:inherit;color:inherit;background:transparent;border:none;}figure{margin:0;}p{margin:0;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;}ol,ul{padding:0;margin:0;list-style:none;}dl,dd{margin:0;}.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;appearance:none;}",
          ""
        ),
        S = n(43077),
        E = n(69873),
        O = n(77865),
        k = n(7673),
        I = s.createContext(!1),
        A = function (e) {
          var t = e.value,
            n = e.children;
          return (0, m.tZ)(I.Provider, { value: t, children: n });
        };
      var C = n(81672),
        T = n(83454);
      function j(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var L = function (e) {
        var t = e.Component,
          n = e.pageProps,
          r = (0, a.useRouter)(),
          l = (0, c.fP)(["_ga"]),
          f = (0, i.Z)(l, 1)[0],
          p = (0, d.ut)(r.pathname),
          h = "preview" === T.env.NEXT_PUBLIC_MODE,
          g = (0, s.useState)("init"),
          v = g[0],
          x = g[1],
          I = (0, s.useState)({ loaded: !1, pages: ["init", "init"] }),
          j = I[0],
          L = I[1];
        s.useEffect(
          function () {
            document.body.classList.remove("menu"),
              document.body.classList.remove("modal");
          },
          [r.asPath]
        ),
          s.useEffect(
            function () {
              document.documentElement.lang !== p &&
                (document.documentElement.lang = p);
            },
            [p]
          );
        var Z = (0, s.useMemo)(function () {
            if ("undefined" !== typeof localStorage) {
              if (!localStorage.getItem("uuid")) {
                var e = window.crypto.randomUUID();
                return localStorage.setItem("uuid", e), e;
              }
              return localStorage.getItem("uuid");
            }
            return "";
          }, []),
          R = (0, s.useMemo)(function () {
            if ("undefined" !== typeof sessionStorage) {
              if (!sessionStorage.getItem("sessionId")) {
                var e = window.crypto.randomUUID();
                return sessionStorage.setItem("sessionId", e), e;
              }
              return sessionStorage.getItem("sessionId");
            }
            return "";
          }, []);
        s.useEffect(
          function () {
            if (!h) {
              var e = (0, k.X)(
                ""
                  .concat("https://analyze.naruto-official.com")
                  .concat(r.asPath),
                [
                  { key: "title", value: document.title },
                  { key: "uuid", value: Z },
                  { key: "sessionId", value: R },
                  { key: "cookie", value: f._ga },
                  {
                    key: "referrer",
                    value: "init" === v ? document.referrer : v,
                  },
                ]
              );
              fetch(e).catch(function (e) {
                return console.error(e);
              }),
                x(r.asPath);
            }
          },
          [r.asPath, h, f, Z, R]
        ),
          s.useEffect(
            function () {
              j.loaded &&
                "".concat("https://naruto-official.com").concat(r.asPath) !==
                  j.pages[0] &&
                L({
                  loaded: !1,
                  pages: [
                    "".concat("https://naruto-official.com").concat(r.asPath),
                    j.pages[0],
                  ],
                });
            },
            [r.asPath, j.loaded]
          );
        var N = s.useState(!1),
          B = (0, i.Z)(N, 2)[1];
        return (0, m.BX)(m.HY, {
          children: [
            (0, m.tZ)(o.xB, { styles: w }),
            (0, m.tZ)(d.Iw, {
              locale: p,
              children: (0, m.tZ)(O.k, {
                children: (0, m.tZ)(C.B7, {
                  children: (0, m.tZ)(A, {
                    value: h,
                    children: (0, m.tZ)(b.f, {
                      value: j,
                      setValue: L,
                      children: (0, m.tZ)(u.ErrorBoundary, {
                        FallbackComponent: y,
                        onReset: function () {
                          B(function (e) {
                            return !e;
                          });
                        },
                        resetKeys: [r.asPath],
                        children: (0, m.tZ)(E.h, {
                          children: (0, m.tZ)(S._, {
                            children: (0, m.tZ)(t, P({}, n)),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    48710: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var r = { phone: 768, tablet: 1024, pc: 1280, wide: 1920 },
        i = {
          color: { primary: "#FA9427" },
          font: {
            default: "Helvetica Neue, Helvetica, arial, sans-serif",
            impact: "Bebas Neue, sans-serif",
            comic: "fot-udkakugoc80-pro, sans-serif",
            gothic: "YuGothic, Yu Gothic Medium, Yu Gothic, sans-serif",
          },
          breaks: r,
          media: {
            prePhone: "screen and (max-width: ".concat(r.phone - 1, "px)"),
            preTablet: "screen and (max-width: ".concat(r.tablet - 1, "px)"),
            prePC: "screen and (max-width: ".concat(r.pc - 1, "px)"),
            preWide: "screen and (max-width: ".concat(r.wide - 1, "px)"),
            postPhone: "screen and (min-width: ".concat(r.phone, "px)"),
            postTablet: "screen and (min-width: ".concat(r.tablet, "px)"),
            postPC: "screen and (min-width: ".concat(r.pc, "px)"),
            postWide: "screen and (min-width: ".concat(r.wide, "px)"),
          },
        };
    },
    81672: function (e, t, n) {
      "use strict";
      n.d(t, {
        B7: function () {
          return f;
        },
        dQ: function () {
          return p;
        },
      });
      var r = n(50029),
        i = n(87794),
        o = n.n(i),
        a = n(67294),
        s = n(1183),
        c = (n(83454), n(21876).Buffer, n(62089)),
        u = n(35944),
        l = (0, a.createContext)({
          pending: !1,
          setPending: function () {},
          intervalMs: 0,
          setIntervalMs: function () {},
        }),
        f = function (e) {
          var t = e.children,
            n = (0, a.useMemo)(function () {
              return (0, s.ue)("token");
            }, []),
            r = (0, c.RQ)(n);
          (0, c.hQ)(r);
          var i = (0, a.useState)(0),
            o = i[0],
            f = i[1],
            p = (0, a.useState)(!1),
            d = p[0],
            h = p[1];
          return (0, u.tZ)(l.Provider, {
            value: {
              task: r,
              pending: d,
              setPending: h,
              intervalMs: o,
              setIntervalMs: f,
            },
            children: t,
          });
        },
        p = function () {
          var e,
            t,
            n = (0, a.useContext)(l),
            i = n.task,
            s = n.pending,
            c = n.setPending,
            u = n.intervalMs,
            f = n.setIntervalMs;
          return (
            (0, a.useEffect)(function () {
              var e;
              d(
                null === i ||
                  void 0 === i ||
                  null === (e = i.result) ||
                  void 0 === e
                  ? void 0
                  : e.data
              ) ||
                s ||
                (0, r.Z)(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (i) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (i.started) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 5),
                              null === i || void 0 === i ? void 0 : i.start()
                            );
                          case 5:
                            i.error || f(0);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )().catch(function (e) {
                  c(!0),
                    setTimeout(function () {
                      c(!1);
                    }, u),
                    f(function (e) {
                      return 0 === e ? 1e3 : 2 * e;
                    }),
                    console.error(e);
                });
            }),
            null !==
              (e =
                null === i ||
                void 0 === i ||
                null === (t = i.result) ||
                void 0 === t
                  ? void 0
                  : t.data.token) && void 0 !== e
              ? e
              : null
          );
        },
        d = function (e) {
          var t = new Date().getTime();
          return void 0 !== e && e.limit > t / 1e3;
        };
    },
    83454: function (e, t, n) {
      "use strict";
      var r, i;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" === typeof (null == (i = n.g.process) ? void 0 : i.env)
          ? n.g.process
          : n(77663);
    },
    75492: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(73053);
        },
      ]);
    },
    21876: function (e) {
      !(function () {
        var t = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = c(e),
                  n = t[0],
                  r = t[1];
                return (3 * (n + r)) / 4 - r;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    n,
                    o = c(e),
                    a = o[0],
                    s = o[1],
                    u = new i(
                      (function (e, t, n) {
                        return (3 * (t + n)) / 4 - n;
                      })(0, a, s)
                    ),
                    l = 0,
                    f = s > 0 ? a - 4 : a;
                  for (n = 0; n < f; n += 4)
                    (t =
                      (r[e.charCodeAt(n)] << 18) |
                      (r[e.charCodeAt(n + 1)] << 12) |
                      (r[e.charCodeAt(n + 2)] << 6) |
                      r[e.charCodeAt(n + 3)]),
                      (u[l++] = (t >> 16) & 255),
                      (u[l++] = (t >> 8) & 255),
                      (u[l++] = 255 & t);
                  2 === s &&
                    ((t =
                      (r[e.charCodeAt(n)] << 2) |
                      (r[e.charCodeAt(n + 1)] >> 4)),
                    (u[l++] = 255 & t));
                  1 === s &&
                    ((t =
                      (r[e.charCodeAt(n)] << 10) |
                      (r[e.charCodeAt(n + 1)] << 4) |
                      (r[e.charCodeAt(n + 2)] >> 2)),
                    (u[l++] = (t >> 8) & 255),
                    (u[l++] = 255 & t));
                  return u;
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t,
                      r = e.length,
                      i = r % 3,
                      o = [],
                      a = 16383,
                      s = 0,
                      c = r - i;
                    s < c;
                    s += a
                  )
                    o.push(l(e, s, s + a > c ? c : s + a));
                  1 === i
                    ? ((t = e[r - 1]),
                      o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
                    : 2 === i &&
                      ((t = (e[r - 2] << 8) + e[r - 1]),
                      o.push(
                        n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="
                      ));
                  return o.join("");
                });
              for (
                var n = [],
                  r = [],
                  i = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
                  o =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  a = 0,
                  s = o.length;
                a < s;
                ++a
              )
                (n[a] = o[a]), (r[o.charCodeAt(a)] = a);
              function c(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw new Error(
                    "Invalid string. Length must be a multiple of 4"
                  );
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
              }
              function u(e) {
                return (
                  n[(e >> 18) & 63] +
                  n[(e >> 12) & 63] +
                  n[(e >> 6) & 63] +
                  n[63 & e]
                );
              }
              function l(e, t, n) {
                for (var r, i = [], o = t; o < n; o += 3)
                  (r =
                    ((e[o] << 16) & 16711680) +
                    ((e[o + 1] << 8) & 65280) +
                    (255 & e[o + 2])),
                    i.push(u(r));
                return i.join("");
              }
              (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
            },
            72: function (e, t, n) {
              "use strict";
              var r = n(675),
                i = n(783),
                o =
                  "function" === typeof Symbol &&
                  "function" === typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              (t.Buffer = c),
                (t.SlowBuffer = function (e) {
                  +e != e && (e = 0);
                  return c.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50);
              var a = 2147483647;
              function s(e) {
                if (e > a)
                  throw new RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, c.prototype), t;
              }
              function c(e, t, n) {
                if ("number" === typeof e) {
                  if ("string" === typeof t)
                    throw new TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return f(e);
                }
                return u(e, t, n);
              }
              function u(e, t, n) {
                if ("string" === typeof e)
                  return (function (e, t) {
                    ("string" === typeof t && "" !== t) || (t = "utf8");
                    if (!c.isEncoding(t))
                      throw new TypeError("Unknown encoding: " + t);
                    var n = 0 | m(e, t),
                      r = s(n),
                      i = r.write(e, t);
                    i !== n && (r = r.slice(0, i));
                    return r;
                  })(e, t);
                if (ArrayBuffer.isView(e)) return p(e);
                if (null == e)
                  throw new TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (H(e, ArrayBuffer) || (e && H(e.buffer, ArrayBuffer)))
                  return d(e, t, n);
                if (
                  "undefined" !== typeof SharedArrayBuffer &&
                  (H(e, SharedArrayBuffer) ||
                    (e && H(e.buffer, SharedArrayBuffer)))
                )
                  return d(e, t, n);
                if ("number" === typeof e)
                  throw new TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var r = e.valueOf && e.valueOf();
                if (null != r && r !== e) return c.from(r, t, n);
                var i = (function (e) {
                  if (c.isBuffer(e)) {
                    var t = 0 | h(e.length),
                      n = s(t);
                    return 0 === n.length || e.copy(n, 0, 0, t), n;
                  }
                  if (void 0 !== e.length)
                    return "number" !== typeof e.length || G(e.length)
                      ? s(0)
                      : p(e);
                  if ("Buffer" === e.type && Array.isArray(e.data))
                    return p(e.data);
                })(e);
                if (i) return i;
                if (
                  "undefined" !== typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" === typeof e[Symbol.toPrimitive]
                )
                  return c.from(e[Symbol.toPrimitive]("string"), t, n);
                throw new TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function l(e) {
                if ("number" !== typeof e)
                  throw new TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw new RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function f(e) {
                return l(e), s(e < 0 ? 0 : 0 | h(e));
              }
              function p(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | h(e.length), n = s(t), r = 0;
                  r < t;
                  r += 1
                )
                  n[r] = 255 & e[r];
                return n;
              }
              function d(e, t, n) {
                if (t < 0 || e.byteLength < t)
                  throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (n || 0))
                  throw new RangeError('"length" is outside of buffer bounds');
                var r;
                return (
                  (r =
                    void 0 === t && void 0 === n
                      ? new Uint8Array(e)
                      : void 0 === n
                      ? new Uint8Array(e, t)
                      : new Uint8Array(e, t, n)),
                  Object.setPrototypeOf(r, c.prototype),
                  r
                );
              }
              function h(e) {
                if (e >= a)
                  throw new RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      a.toString(16) +
                      " bytes"
                  );
                return 0 | e;
              }
              function m(e, t) {
                if (c.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || H(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" !== typeof e)
                  throw new TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var n = e.length,
                  r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n) return 0;
                for (var i = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return n;
                    case "utf8":
                    case "utf-8":
                      return _(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * n;
                    case "hex":
                      return n >>> 1;
                    case "base64":
                      return z(e).length;
                    default:
                      if (i) return r ? -1 : _(e).length;
                      (t = ("" + t).toLowerCase()), (i = !0);
                  }
              }
              function g(e, t, n) {
                var r = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === n || n > this.length) && (n = this.length),
                  n <= 0)
                )
                  return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return P(this, t, n);
                    case "utf8":
                    case "utf-8":
                      return A(this, t, n);
                    case "ascii":
                      return T(this, t, n);
                    case "latin1":
                    case "binary":
                      return j(this, t, n);
                    case "base64":
                      return I(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return L(this, t, n);
                    default:
                      if (r) throw new TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (r = !0);
                  }
              }
              function v(e, t, n) {
                var r = e[t];
                (e[t] = e[n]), (e[n] = r);
              }
              function y(e, t, n, r, i) {
                if (0 === e.length) return -1;
                if (
                  ("string" === typeof n
                    ? ((r = n), (n = 0))
                    : n > 2147483647
                    ? (n = 2147483647)
                    : n < -2147483648 && (n = -2147483648),
                  G((n = +n)) && (n = i ? 0 : e.length - 1),
                  n < 0 && (n = e.length + n),
                  n >= e.length)
                ) {
                  if (i) return -1;
                  n = e.length - 1;
                } else if (n < 0) {
                  if (!i) return -1;
                  n = 0;
                }
                if (
                  ("string" === typeof t && (t = c.from(t, r)), c.isBuffer(t))
                )
                  return 0 === t.length ? -1 : b(e, t, n, r, i);
                if ("number" === typeof t)
                  return (
                    (t &= 255),
                    "function" === typeof Uint8Array.prototype.indexOf
                      ? i
                        ? Uint8Array.prototype.indexOf.call(e, t, n)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                      : b(e, [t], n, r, i)
                  );
                throw new TypeError("val must be string, number or Buffer");
              }
              function b(e, t, n, r, i) {
                var o,
                  a = 1,
                  s = e.length,
                  c = t.length;
                if (
                  void 0 !== r &&
                  ("ucs2" === (r = String(r).toLowerCase()) ||
                    "ucs-2" === r ||
                    "utf16le" === r ||
                    "utf-16le" === r)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (a = 2), (s /= 2), (c /= 2), (n /= 2);
                }
                function u(e, t) {
                  return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                if (i) {
                  var l = -1;
                  for (o = n; o < s; o++)
                    if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
                      if ((-1 === l && (l = o), o - l + 1 === c)) return l * a;
                    } else -1 !== l && (o -= o - l), (l = -1);
                } else
                  for (n + c > s && (n = s - c), o = n; o >= 0; o--) {
                    for (var f = !0, p = 0; p < c; p++)
                      if (u(e, o + p) !== u(t, p)) {
                        f = !1;
                        break;
                      }
                    if (f) return o;
                  }
                return -1;
              }
              function x(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n;
                r ? (r = Number(r)) > i && (r = i) : (r = i);
                var o = t.length;
                r > o / 2 && (r = o / 2);
                for (var a = 0; a < r; ++a) {
                  var s = parseInt(t.substr(2 * a, 2), 16);
                  if (G(s)) return a;
                  e[n + a] = s;
                }
                return a;
              }
              function w(e, t, n, r) {
                return D(_(t, e.length - n), e, n, r);
              }
              function S(e, t, n, r) {
                return D(
                  (function (e) {
                    for (var t = [], n = 0; n < e.length; ++n)
                      t.push(255 & e.charCodeAt(n));
                    return t;
                  })(t),
                  e,
                  n,
                  r
                );
              }
              function E(e, t, n, r) {
                return S(e, t, n, r);
              }
              function O(e, t, n, r) {
                return D(z(t), e, n, r);
              }
              function k(e, t, n, r) {
                return D(
                  (function (e, t) {
                    for (
                      var n, r, i, o = [], a = 0;
                      a < e.length && !((t -= 2) < 0);
                      ++a
                    )
                      (r = (n = e.charCodeAt(a)) >> 8),
                        (i = n % 256),
                        o.push(i),
                        o.push(r);
                    return o;
                  })(t, e.length - n),
                  e,
                  n,
                  r
                );
              }
              function I(e, t, n) {
                return 0 === t && n === e.length
                  ? r.fromByteArray(e)
                  : r.fromByteArray(e.slice(t, n));
              }
              function A(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n; ) {
                  var o,
                    a,
                    s,
                    c,
                    u = e[i],
                    l = null,
                    f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + f <= n)
                    switch (f) {
                      case 1:
                        u < 128 && (l = u);
                        break;
                      case 2:
                        128 === (192 & (o = e[i + 1])) &&
                          (c = ((31 & u) << 6) | (63 & o)) > 127 &&
                          (l = c);
                        break;
                      case 3:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          128 === (192 & o) &&
                            128 === (192 & a) &&
                            (c =
                              ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                              2047 &&
                            (c < 55296 || c > 57343) &&
                            (l = c);
                        break;
                      case 4:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          (s = e[i + 3]),
                          128 === (192 & o) &&
                            128 === (192 & a) &&
                            128 === (192 & s) &&
                            (c =
                              ((15 & u) << 18) |
                              ((63 & o) << 12) |
                              ((63 & a) << 6) |
                              (63 & s)) > 65535 &&
                            c < 1114112 &&
                            (l = c);
                    }
                  null === l
                    ? ((l = 65533), (f = 1))
                    : l > 65535 &&
                      ((l -= 65536),
                      r.push(((l >>> 10) & 1023) | 55296),
                      (l = 56320 | (1023 & l))),
                    r.push(l),
                    (i += f);
                }
                return C(r);
              }
              (t.kMaxLength = a),
                (c.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                c.TYPED_ARRAY_SUPPORT ||
                  "undefined" === typeof console ||
                  "function" !== typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(c.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (c.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(c.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (c.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (c.poolSize = 8192),
                (c.from = function (e, t, n) {
                  return u(e, t, n);
                }),
                Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(c, Uint8Array),
                (c.alloc = function (e, t, n) {
                  return (function (e, t, n) {
                    return (
                      l(e),
                      e <= 0
                        ? s(e)
                        : void 0 !== t
                        ? "string" === typeof n
                          ? s(e).fill(t, n)
                          : s(e).fill(t)
                        : s(e)
                    );
                  })(e, t, n);
                }),
                (c.allocUnsafe = function (e) {
                  return f(e);
                }),
                (c.allocUnsafeSlow = function (e) {
                  return f(e);
                }),
                (c.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== c.prototype;
                }),
                (c.compare = function (e, t) {
                  if (
                    (H(e, Uint8Array) &&
                      (e = c.from(e, e.offset, e.byteLength)),
                    H(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)),
                    !c.isBuffer(e) || !c.isBuffer(t))
                  )
                    throw new TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
                    i < o;
                    ++i
                  )
                    if (e[i] !== t[i]) {
                      (n = e[i]), (r = t[i]);
                      break;
                    }
                  return n < r ? -1 : r < n ? 1 : 0;
                }),
                (c.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (c.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return c.alloc(0);
                  var n;
                  if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                  var r = c.allocUnsafe(t),
                    i = 0;
                  for (n = 0; n < e.length; ++n) {
                    var o = e[n];
                    if ((H(o, Uint8Array) && (o = c.from(o)), !c.isBuffer(o)))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(r, i), (i += o.length);
                  }
                  return r;
                }),
                (c.byteLength = m),
                (c.prototype._isBuffer = !0),
                (c.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 !== 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) v(this, t, t + 1);
                  return this;
                }),
                (c.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 !== 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    v(this, t, t + 3), v(this, t + 1, t + 2);
                  return this;
                }),
                (c.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 !== 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    v(this, t, t + 7),
                      v(this, t + 1, t + 6),
                      v(this, t + 2, t + 5),
                      v(this, t + 3, t + 4);
                  return this;
                }),
                (c.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 === arguments.length
                    ? A(this, 0, e)
                    : g.apply(this, arguments);
                }),
                (c.prototype.toLocaleString = c.prototype.toString),
                (c.prototype.equals = function (e) {
                  if (!c.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                  return this === e || 0 === c.compare(this, e);
                }),
                (c.prototype.inspect = function () {
                  var e = "",
                    n = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, n)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > n && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                o && (c.prototype[o] = c.prototype.inspect),
                (c.prototype.compare = function (e, t, n, r, i) {
                  if (
                    (H(e, Uint8Array) &&
                      (e = c.from(e, e.offset, e.byteLength)),
                    !c.isBuffer(e))
                  )
                    throw new TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === n && (n = e ? e.length : 0),
                    void 0 === r && (r = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || n > e.length || r < 0 || i > this.length)
                  )
                    throw new RangeError("out of range index");
                  if (r >= i && t >= n) return 0;
                  if (r >= i) return -1;
                  if (t >= n) return 1;
                  if (this === e) return 0;
                  for (
                    var o = (i >>>= 0) - (r >>>= 0),
                      a = (n >>>= 0) - (t >>>= 0),
                      s = Math.min(o, a),
                      u = this.slice(r, i),
                      l = e.slice(t, n),
                      f = 0;
                    f < s;
                    ++f
                  )
                    if (u[f] !== l[f]) {
                      (o = u[f]), (a = l[f]);
                      break;
                    }
                  return o < a ? -1 : a < o ? 1 : 0;
                }),
                (c.prototype.includes = function (e, t, n) {
                  return -1 !== this.indexOf(e, t, n);
                }),
                (c.prototype.indexOf = function (e, t, n) {
                  return y(this, e, t, n, !0);
                }),
                (c.prototype.lastIndexOf = function (e, t, n) {
                  return y(this, e, t, n, !1);
                }),
                (c.prototype.write = function (e, t, n, r) {
                  if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                  else if (void 0 === n && "string" === typeof t)
                    (r = t), (n = this.length), (t = 0);
                  else {
                    if (!isFinite(t))
                      throw new Error(
                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                      );
                    (t >>>= 0),
                      isFinite(n)
                        ? ((n >>>= 0), void 0 === r && (r = "utf8"))
                        : ((r = n), (n = void 0));
                  }
                  var i = this.length - t;
                  if (
                    ((void 0 === n || n > i) && (n = i),
                    (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
                  )
                    throw new RangeError(
                      "Attempt to write outside buffer bounds"
                    );
                  r || (r = "utf8");
                  for (var o = !1; ; )
                    switch (r) {
                      case "hex":
                        return x(this, e, t, n);
                      case "utf8":
                      case "utf-8":
                        return w(this, e, t, n);
                      case "ascii":
                        return S(this, e, t, n);
                      case "latin1":
                      case "binary":
                        return E(this, e, t, n);
                      case "base64":
                        return O(this, e, t, n);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return k(this, e, t, n);
                      default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        (r = ("" + r).toLowerCase()), (o = !0);
                    }
                }),
                (c.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                });
              function C(e) {
                var t = e.length;
                if (t <= 4096) return String.fromCharCode.apply(String, e);
                for (var n = "", r = 0; r < t; )
                  n += String.fromCharCode.apply(
                    String,
                    e.slice(r, (r += 4096))
                  );
                return n;
              }
              function T(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i)
                  r += String.fromCharCode(127 & e[i]);
                return r;
              }
              function j(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r;
              }
              function P(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", o = t; o < n; ++o) i += $[e[o]];
                return i;
              }
              function L(e, t, n) {
                for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
                  i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i;
              }
              function Z(e, t, n) {
                if (e % 1 !== 0 || e < 0)
                  throw new RangeError("offset is not uint");
                if (e + t > n)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              function R(e, t, n, r, i, o) {
                if (!c.isBuffer(e))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > i || t < o)
                  throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length)
                  throw new RangeError("Index out of range");
              }
              function N(e, t, n, r, i, o) {
                if (n + r > e.length)
                  throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range");
              }
              function B(e, t, n, r, o) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  o || N(e, 0, n, 4),
                  i.write(e, t, n, r, 23, 4),
                  n + 4
                );
              }
              function U(e, t, n, r, o) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  o || N(e, 0, n, 8),
                  i.write(e, t, n, r, 52, 8),
                  n + 8
                );
              }
              (c.prototype.slice = function (e, t) {
                var n = this.length;
                (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                  (t = void 0 === t ? n : ~~t) < 0
                    ? (t += n) < 0 && (t = 0)
                    : t > n && (t = n),
                  t < e && (t = e);
                var r = this.subarray(e, t);
                return Object.setPrototypeOf(r, c.prototype), r;
              }),
                (c.prototype.readUIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || Z(e, t, this.length);
                  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    r += this[e + o] * i;
                  return r;
                }),
                (c.prototype.readUIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || Z(e, t, this.length);
                  for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
                    r += this[e + --t] * i;
                  return r;
                }),
                (c.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || Z(e, 1, this.length), this[e];
                }),
                (c.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (c.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (c.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      16777216 * this[e + 3]
                  );
                }),
                (c.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 4, this.length),
                    16777216 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (c.prototype.readIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || Z(e, t, this.length);
                  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    r += this[e + o] * i;
                  return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (c.prototype.readIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || Z(e, t, this.length);
                  for (
                    var r = t, i = 1, o = this[e + --r];
                    r > 0 && (i *= 256);

                  )
                    o += this[e + --r] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (c.prototype.readInt8 = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 1, this.length),
                    128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                  );
                }),
                (c.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || Z(e, 2, this.length);
                  var n = this[e] | (this[e + 1] << 8);
                  return 32768 & n ? 4294901760 | n : n;
                }),
                (c.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || Z(e, 2, this.length);
                  var n = this[e + 1] | (this[e] << 8);
                  return 32768 & n ? 4294901760 | n : n;
                }),
                (c.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (c.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (c.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 4, this.length),
                    i.read(this, e, !0, 23, 4)
                  );
                }),
                (c.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 4, this.length),
                    i.read(this, e, !1, 23, 4)
                  );
                }),
                (c.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 8, this.length),
                    i.read(this, e, !0, 52, 8)
                  );
                }),
                (c.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || Z(e, 8, this.length),
                    i.read(this, e, !1, 52, 8)
                  );
                }),
                (c.prototype.writeUIntLE = function (e, t, n, r) {
                  ((e = +e), (t >>>= 0), (n >>>= 0), r) ||
                    R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                  var i = 1,
                    o = 0;
                  for (this[t] = 255 & e; ++o < n && (i *= 256); )
                    this[t + o] = (e / i) & 255;
                  return t + n;
                }),
                (c.prototype.writeUIntBE = function (e, t, n, r) {
                  ((e = +e), (t >>>= 0), (n >>>= 0), r) ||
                    R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                  var i = n - 1,
                    o = 1;
                  for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                    this[t + i] = (e / o) & 255;
                  return t + n;
                }),
                (c.prototype.writeUInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (c.prototype.writeUInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (c.prototype.writeUInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (c.prototype.writeUInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 4, 4294967295, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (c.prototype.writeUInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 4, 4294967295, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (c.prototype.writeIntLE = function (e, t, n, r) {
                  if (((e = +e), (t >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n - 1);
                    R(this, e, t, n, i - 1, -i);
                  }
                  var o = 0,
                    a = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++o < n && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + n;
                }),
                (c.prototype.writeIntBE = function (e, t, n, r) {
                  if (((e = +e), (t >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n - 1);
                    R(this, e, t, n, i - 1, -i);
                  }
                  var o = n - 1,
                    a = 1,
                    s = 0;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + n;
                }),
                (c.prototype.writeInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (c.prototype.writeInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (c.prototype.writeInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (c.prototype.writeInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (c.prototype.writeInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || R(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (c.prototype.writeFloatLE = function (e, t, n) {
                  return B(this, e, t, !0, n);
                }),
                (c.prototype.writeFloatBE = function (e, t, n) {
                  return B(this, e, t, !1, n);
                }),
                (c.prototype.writeDoubleLE = function (e, t, n) {
                  return U(this, e, t, !0, n);
                }),
                (c.prototype.writeDoubleBE = function (e, t, n) {
                  return U(this, e, t, !1, n);
                }),
                (c.prototype.copy = function (e, t, n, r) {
                  if (!c.isBuffer(e))
                    throw new TypeError("argument should be a Buffer");
                  if (
                    (n || (n = 0),
                    r || 0 === r || (r = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    r > 0 && r < n && (r = n),
                    r === n)
                  )
                    return 0;
                  if (0 === e.length || 0 === this.length) return 0;
                  if (t < 0) throw new RangeError("targetStart out of bounds");
                  if (n < 0 || n >= this.length)
                    throw new RangeError("Index out of range");
                  if (r < 0) throw new RangeError("sourceEnd out of bounds");
                  r > this.length && (r = this.length),
                    e.length - t < r - n && (r = e.length - t + n);
                  var i = r - n;
                  if (
                    this === e &&
                    "function" === typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, n, r);
                  else if (this === e && n < t && t < r)
                    for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
                  else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
                  return i;
                }),
                (c.prototype.fill = function (e, t, n, r) {
                  if ("string" === typeof e) {
                    if (
                      ("string" === typeof t
                        ? ((r = t), (t = 0), (n = this.length))
                        : "string" === typeof n && ((r = n), (n = this.length)),
                      void 0 !== r && "string" !== typeof r)
                    )
                      throw new TypeError("encoding must be a string");
                    if ("string" === typeof r && !c.isEncoding(r))
                      throw new TypeError("Unknown encoding: " + r);
                    if (1 === e.length) {
                      var i = e.charCodeAt(0);
                      (("utf8" === r && i < 128) || "latin1" === r) && (e = i);
                    }
                  } else
                    "number" === typeof e
                      ? (e &= 255)
                      : "boolean" === typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < n)
                    throw new RangeError("Out of range index");
                  if (n <= t) return this;
                  var o;
                  if (
                    ((t >>>= 0),
                    (n = void 0 === n ? this.length : n >>> 0),
                    e || (e = 0),
                    "number" === typeof e)
                  )
                    for (o = t; o < n; ++o) this[o] = e;
                  else {
                    var a = c.isBuffer(e) ? e : c.from(e, r),
                      s = a.length;
                    if (0 === s)
                      throw new TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
                  }
                  return this;
                });
              var M = /[^+/0-9A-Za-z-_]/g;
              function _(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                  if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                      if (n > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      if (a + 1 === r) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = n;
                      continue;
                    }
                    if (n < 56320) {
                      (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                      continue;
                    }
                    n = 65536 + (((i - 55296) << 10) | (n - 56320));
                  } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), n < 128)) {
                    if ((t -= 1) < 0) break;
                    o.push(n);
                  } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push((n >> 6) | 192, (63 & n) | 128);
                  } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(
                      (n >> 12) | 224,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(
                      (n >> 18) | 240,
                      ((n >> 12) & 63) | 128,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  }
                }
                return o;
              }
              function z(e) {
                return r.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(M, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 !== 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function D(e, t, n, r) {
                for (
                  var i = 0;
                  i < r && !(i + n >= t.length || i >= e.length);
                  ++i
                )
                  t[i + n] = e[i];
                return i;
              }
              function H(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              function G(e) {
                return e !== e;
              }
              var $ = (function () {
                for (
                  var e = "0123456789abcdef", t = new Array(256), n = 0;
                  n < 16;
                  ++n
                )
                  for (var r = 16 * n, i = 0; i < 16; ++i)
                    t[r + i] = e[n] + e[i];
                return t;
              })();
            },
            783: function (e, t) {
              (t.read = function (e, t, n, r, i) {
                var o,
                  a,
                  s = 8 * i - r - 1,
                  c = (1 << s) - 1,
                  u = c >> 1,
                  l = -7,
                  f = n ? i - 1 : 0,
                  p = n ? -1 : 1,
                  d = e[t + f];
                for (
                  f += p, o = d & ((1 << -l) - 1), d >>= -l, l += s;
                  l > 0;
                  o = 256 * o + e[t + f], f += p, l -= 8
                );
                for (
                  a = o & ((1 << -l) - 1), o >>= -l, l += r;
                  l > 0;
                  a = 256 * a + e[t + f], f += p, l -= 8
                );
                if (0 === o) o = 1 - u;
                else {
                  if (o === c) return a ? NaN : (1 / 0) * (d ? -1 : 1);
                  (a += Math.pow(2, r)), (o -= u);
                }
                return (d ? -1 : 1) * a * Math.pow(2, o - r);
              }),
                (t.write = function (e, t, n, r, i, o) {
                  var a,
                    s,
                    c,
                    u = 8 * o - i - 1,
                    l = (1 << u) - 1,
                    f = l >> 1,
                    p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = r ? 0 : o - 1,
                    h = r ? 1 : -1,
                    m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    t = Math.abs(t),
                      isNaN(t) || t === 1 / 0
                        ? ((s = isNaN(t) ? 1 : 0), (a = l))
                        : ((a = Math.floor(Math.log(t) / Math.LN2)),
                          t * (c = Math.pow(2, -a)) < 1 && (a--, (c *= 2)),
                          (t += a + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) *
                            c >=
                            2 && (a++, (c /= 2)),
                          a + f >= l
                            ? ((s = 0), (a = l))
                            : a + f >= 1
                            ? ((s = (t * c - 1) * Math.pow(2, i)), (a += f))
                            : ((s = t * Math.pow(2, f - 1) * Math.pow(2, i)),
                              (a = 0)));
                    i >= 8;
                    e[n + d] = 255 & s, d += h, s /= 256, i -= 8
                  );
                  for (
                    a = (a << i) | s, u += i;
                    u > 0;
                    e[n + d] = 255 & a, d += h, a /= 256, u -= 8
                  );
                  e[n + d - h] |= 128 * m;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var o = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return o.exports;
        }
        r.ab = "//";
        var i = r(72);
        e.exports = i;
      })();
    },
    77663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r = (e.exports = {});
              function i() {
                throw new Error("setTimeout has not been defined");
              }
              function o() {
                throw new Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" === typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  n = "function" === typeof clearTimeout ? clearTimeout : o;
                } catch (e) {
                  n = o;
                }
              })();
              var s,
                c = [],
                u = !1,
                l = -1;
              function f() {
                u &&
                  s &&
                  ((u = !1),
                  s.length ? (c = s.concat(c)) : (l = -1),
                  c.length && p());
              }
              function p() {
                if (!u) {
                  var e = a(f);
                  u = !0;
                  for (var t = c.length; t; ) {
                    for (s = c, c = []; ++l < t; ) s && s[l].run();
                    (l = -1), (t = c.length);
                  }
                  (s = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === o || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function d(e, t) {
                (this.fun = e), (this.array = t);
              }
              function h() {}
              (r.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                c.push(new d(e, t)), 1 !== c.length || u || a(p);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = h),
                (r.addListener = h),
                (r.once = h),
                (r.off = h),
                (r.removeListener = h),
                (r.removeAllListeners = h),
                (r.emit = h),
                (r.prependListener = h),
                (r.prependOnceListener = h),
                (r.listeners = function (e) {
                  return [];
                }),
                (r.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var o = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return o.exports;
        }
        r.ab = "//";
        var i = r(229);
        e.exports = i;
      })();
    },
    41664: function (e, t, n) {
      e.exports = n(7942);
    },
    11163: function (e, t, n) {
      e.exports = n(69898);
    },
    35800: function (e, t, n) {
      !(function (e, t) {
        "use strict";
        function n(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ("default" !== n) {
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        }
                  );
                }
              }),
            (t.default = e),
            Object.freeze(t)
          );
        }
        var r = n(t);
        function i(e, t) {
          return (
            (i =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            i(e, t)
          );
        }
        function o(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            i(e, t);
        }
        var a = function (e, t) {
            return (
              void 0 === e && (e = []),
              void 0 === t && (t = []),
              e.length !== t.length ||
                e.some(function (e, n) {
                  return !Object.is(e, t[n]);
                })
            );
          },
          s = { error: null },
          c = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              return (
                ((t = e.call.apply(e, [this].concat(r)) || this).state = s),
                (t.resetErrorBoundary = function () {
                  for (
                    var e, n = arguments.length, r = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    r[i] = arguments[i];
                  null == t.props.onReset || (e = t.props).onReset.apply(e, r),
                    t.reset();
                }),
                t
              );
            }
            o(t, e),
              (t.getDerivedStateFromError = function (e) {
                return { error: e };
              });
            var n = t.prototype;
            return (
              (n.reset = function () {
                this.setState(s);
              }),
              (n.componentDidCatch = function (e, t) {
                var n, r;
                null == (n = (r = this.props).onError) || n.call(r, e, t);
              }),
              (n.componentDidUpdate = function (e, t) {
                var n,
                  r,
                  i = this.state.error,
                  o = this.props.resetKeys;
                null !== i &&
                  null !== t.error &&
                  a(e.resetKeys, o) &&
                  (null == (n = (r = this.props).onResetKeysChange) ||
                    n.call(r, e.resetKeys, o),
                  this.reset());
              }),
              (n.render = function () {
                var e = this.state.error,
                  t = this.props,
                  n = t.fallbackRender,
                  i = t.FallbackComponent,
                  o = t.fallback;
                if (null !== e) {
                  var a = {
                    error: e,
                    resetErrorBoundary: this.resetErrorBoundary,
                  };
                  if (r.isValidElement(o)) return o;
                  if ("function" === typeof n) return n(a);
                  if (i) return r.createElement(i, a);
                  throw new Error(
                    "react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"
                  );
                }
                return this.props.children;
              }),
              t
            );
          })(r.Component);
        function u(e, t) {
          var n = function (n) {
              return r.createElement(c, t, r.createElement(e, n));
            },
            i = e.displayName || e.name || "Unknown";
          return (n.displayName = "withErrorBoundary(" + i + ")"), n;
        }
        function l(e) {
          var t = r.useState(null),
            n = t[0],
            i = t[1];
          if (null != e) throw e;
          if (null != n) throw n;
          return i;
        }
        (e.ErrorBoundary = c),
          (e.useErrorHandler = l),
          (e.withErrorBoundary = u),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(67294));
    },
    69921: function (e, t) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        d = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      function w(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case f:
                case o:
                case s:
                case a:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case g:
                    case m:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function S(e) {
        return w(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = o),
        (t.Lazy = g),
        (t.Memo = m),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return S(e) || w(e) === l;
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return w(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === p;
        }),
        (t.isFragment = function (e) {
          return w(e) === o;
        }),
        (t.isLazy = function (e) {
          return w(e) === g;
        }),
        (t.isMemo = function (e) {
          return w(e) === m;
        }),
        (t.isPortal = function (e) {
          return w(e) === i;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === f ||
            e === s ||
            e === a ||
            e === d ||
            e === h ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === m ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === y ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = w);
    },
    59864: function (e, t, n) {
      "use strict";
      e.exports = n(69921);
    },
    52587: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    50029: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function i(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var a = e.apply(t, n);
            function s(e) {
              r(a, i, o, s, c, "next", e);
            }
            function c(e) {
              r(a, i, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
    },
    59499: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    16835: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(2937);
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o = [],
                a = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (i = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (s) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          (0, r.Z)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    71383: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    27812: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(52587);
      var i = n(2937);
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, i.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    2937: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(52587);
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
    55756: function (e, t, n) {
      "use strict";
      n.d(t, {
        fP: function () {
          return u;
        },
      });
      var r = n(76489);
      function i(e, t = {}) {
        const n = (function (e) {
          if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
          return e;
        })(e);
        if (!t.doNotParse)
          try {
            return JSON.parse(n);
          } catch (r) {}
        return e;
      }
      var o = n(67294);
      n(8679);
      const a = o.createContext(
          new (class {
            constructor(e, t = {}) {
              (this.changeListeners = []),
                (this.HAS_DOCUMENT_COOKIE = !1),
                (this.update = () => {
                  if (!this.HAS_DOCUMENT_COOKIE) return;
                  const e = this.cookies;
                  (this.cookies = r.Q(document.cookie)), this._checkChanges(e);
                });
              const n = "undefined" === typeof document ? "" : document.cookie;
              (this.cookies = (function (e) {
                return "string" === typeof e
                  ? r.Q(e)
                  : "object" === typeof e && null !== e
                  ? e
                  : {};
              })(e || n)),
                (this.defaultSetOptions = t),
                (this.HAS_DOCUMENT_COOKIE = (function () {
                  const e =
                    "undefined" === typeof global
                      ? void 0
                      : global.TEST_HAS_DOCUMENT_COOKIE;
                  return "boolean" === typeof e
                    ? e
                    : "object" === typeof document &&
                        "string" === typeof document.cookie;
                })());
            }
            _emitChange(e) {
              for (let t = 0; t < this.changeListeners.length; ++t)
                this.changeListeners[t](e);
            }
            _checkChanges(e) {
              new Set(Object.keys(e).concat(Object.keys(this.cookies))).forEach(
                (t) => {
                  e[t] !== this.cookies[t] &&
                    this._emitChange({ name: t, value: i(this.cookies[t]) });
                }
              );
            }
            _startPolling() {
              this.pollingInterval = setInterval(this.update, 300);
            }
            _stopPolling() {
              this.pollingInterval && clearInterval(this.pollingInterval);
            }
            get(e, t = {}) {
              return t.doNotUpdate || this.update(), i(this.cookies[e], t);
            }
            getAll(e = {}) {
              e.doNotUpdate || this.update();
              const t = {};
              for (let n in this.cookies) t[n] = i(this.cookies[n], e);
              return t;
            }
            set(e, t, n) {
              n = n
                ? Object.assign(Object.assign({}, this.defaultSetOptions), n)
                : this.defaultSetOptions;
              const i = "string" === typeof t ? t : JSON.stringify(t);
              (this.cookies = Object.assign(Object.assign({}, this.cookies), {
                [e]: i,
              })),
                this.HAS_DOCUMENT_COOKIE && (document.cookie = r.q(e, i, n)),
                this._emitChange({ name: e, value: t, options: n });
            }
            remove(e, t) {
              const n = (t = Object.assign(
                Object.assign(Object.assign({}, this.defaultSetOptions), t),
                { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }
              ));
              (this.cookies = Object.assign({}, this.cookies)),
                delete this.cookies[e],
                this.HAS_DOCUMENT_COOKIE && (document.cookie = r.q(e, "", n)),
                this._emitChange({ name: e, value: void 0, options: t });
            }
            addChangeListener(e) {
              this.changeListeners.push(e),
                this.HAS_DOCUMENT_COOKIE &&
                  1 === this.changeListeners.length &&
                  ("object" === typeof window && "cookieStore" in window
                    ? window.cookieStore.addEventListener("change", this.update)
                    : this._startPolling());
            }
            removeChangeListener(e) {
              const t = this.changeListeners.indexOf(e);
              t >= 0 && this.changeListeners.splice(t, 1),
                this.HAS_DOCUMENT_COOKIE &&
                  0 === this.changeListeners.length &&
                  ("object" === typeof window && "cookieStore" in window
                    ? window.cookieStore.removeEventListener(
                        "change",
                        this.update
                      )
                    : this._stopPolling());
            }
          })()
        ),
        { Provider: s, Consumer: c } = a;
      o.Component;
      function u(e) {
        const t = (0, o.useContext)(a);
        if (!t) throw new Error("Missing <CookiesProvider>");
        const [n, r] = (0, o.useState)(() => t.getAll());
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement &&
          (0, o.useLayoutEffect)(() => {
            function i() {
              const i = t.getAll({ doNotUpdate: !0 });
              (function (e, t, n) {
                if (!e) return !0;
                for (let r of e) if (t[r] !== n[r]) return !0;
                return !1;
              })(e || null, i, n) && r(i);
            }
            return (
              t.addChangeListener(i),
              () => {
                t.removeChangeListener(i);
              }
            );
          }, [t, n]);
        const i = (0, o.useMemo)(() => t.set.bind(t), [t]),
          s = (0, o.useMemo)(() => t.remove.bind(t), [t]),
          c = (0, o.useMemo)(() => t.update.bind(t), [t]);
        return [n, i, s, c];
      }
      "function" === typeof SuppressedError && SuppressedError;
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [9774, 179], function () {
      return t(75492), t(69898);
    });
    var n = e.O();
    _N_E = n;
  },
]);
