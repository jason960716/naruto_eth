(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4314],
  {
    78e3: function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AmpStateContext = void 0);
      var r = (0, i(92648).Z)(i(67294)).default.createContext({});
      n.AmpStateContext = r;
    },
    9470: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.ampFirst,
            i = void 0 !== n && n,
            r = e.hybrid,
            o = void 0 !== r && r,
            t = e.hasQuery,
            a = void 0 !== t && t;
          return i || (o && a);
        });
    },
    72717: function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.defaultHead = d),
        (n.default = void 0);
      var r = i(6495).Z,
        o = i(92648).Z,
        t = (0, i(91598).Z)(i(67294)),
        a = o(i(11585)),
        s = i(78e3),
        l = i(15850),
        c = i(9470);
      i(99475);
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = [t.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            n.push(
              t.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          n
        );
      }
      function u(e, n) {
        return "string" === typeof n || "number" === typeof n
          ? e
          : n.type === t.default.Fragment
          ? e.concat(
              t.default.Children.toArray(n.props.children).reduce(function (
                e,
                n
              ) {
                return "string" === typeof n || "number" === typeof n
                  ? e
                  : e.concat(n);
              },
              [])
            )
          : e.concat(n);
      }
      var m = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, n) {
        var i = n.inAmpMode;
        return e
          .reduce(u, [])
          .reverse()
          .concat(d(i).reverse())
          .filter(
            (function () {
              var e = new Set(),
                n = new Set(),
                i = new Set(),
                r = {};
              return function (o) {
                var t = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var s = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(s) ? (t = !1) : e.add(s);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    n.has(o.type) ? (t = !1) : n.add(o.type);
                    break;
                  case "meta":
                    for (var l = 0, c = m.length; l < c; l++) {
                      var d = m[l];
                      if (o.props.hasOwnProperty(d))
                        if ("charSet" === d) i.has(d) ? (t = !1) : i.add(d);
                        else {
                          var u = o.props[d],
                            p = r[d] || new Set();
                          ("name" === d && a) || !p.has(u)
                            ? (p.add(u), (r[d] = p))
                            : (t = !1);
                        }
                    }
                }
                return t;
              };
            })()
          )
          .reverse()
          .map(function (e, n) {
            var o = e.key || n;
            if (
              !i &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (n) {
                return e.props.href.startsWith(n);
              })
            ) {
              var a = r({}, e.props || {});
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                t.default.cloneElement(e, a)
              );
            }
            return t.default.cloneElement(e, { key: o });
          });
      }
      var h = function (e) {
        var n = e.children,
          i = t.useContext(s.AmpStateContext),
          r = t.useContext(l.HeadManagerContext);
        return t.default.createElement(
          a.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: c.isInAmpMode(i),
          },
          n
        );
      };
      (n.default = h),
        ("function" === typeof n.default ||
          ("object" === typeof n.default && null !== n.default)) &&
          "undefined" === typeof n.default.__esModule &&
          (Object.defineProperty(n.default, "__esModule", { value: !0 }),
          Object.assign(n.default, n),
          (e.exports = n.default));
    },
    11585: function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function (e) {
          var n = e.headManager,
            i = e.reduceComponentsToState;
          function s() {
            if (n && n.mountedInstances) {
              var o = r.Children.toArray(
                Array.from(n.mountedInstances).filter(Boolean)
              );
              n.updateHead(i(o, e));
            }
          }
          if (o) {
            var l;
            null == n || null == (l = n.mountedInstances) || l.add(e.children),
              s();
          }
          return (
            t(function () {
              var i;
              return (
                null == n ||
                  null == (i = n.mountedInstances) ||
                  i.add(e.children),
                function () {
                  var i;
                  null == n ||
                    null == (i = n.mountedInstances) ||
                    i.delete(e.children);
                }
              );
            }),
            t(function () {
              return (
                n && (n._pendingUpdate = s),
                function () {
                  n && (n._pendingUpdate = s);
                }
              );
            }),
            a(function () {
              return (
                n &&
                  n._pendingUpdate &&
                  (n._pendingUpdate(), (n._pendingUpdate = null)),
                function () {
                  n &&
                    n._pendingUpdate &&
                    (n._pendingUpdate(), (n._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, i(91598).Z)(i(67294));
      var o = !1,
        t = o ? function () {} : r.useLayoutEffect,
        a = o ? function () {} : r.useEffect;
    },
    5328: function (e, n, i) {
      "use strict";
      i.d(n, {
        f: function () {
          return ye;
        },
      });
      var r = i(65313),
        o = i(73938),
        t = i(95541),
        a = i(70917),
        s = (i(67294), i(8503)),
        l = i(48710),
        c = i(77340),
        d = i(18714),
        u = i(35944);
      var m = { name: "1efi8gv", styles: "font-weight:bold" },
        p = { name: "1azpx8r", styles: "margin-bottom:20px" },
        h = function () {
          var e = (0, s.bU)();
          return (0, u.BX)("main", {
            css: g.main,
            children: [
              (0, u.tZ)(c.W, {
                children: (0, u.BX)("div", {
                  css: g.headerTitle,
                  children: [
                    (0, u.tZ)("h1", { children: v[e] }),
                    (0, u.tZ)("h1", { children: b[e] }),
                  ],
                }),
              }),
              (0, u.tZ)("hr", { css: g.headerHorizon }),
              (0, u.tZ)("div", {
                children: (0, u.tZ)(c.W, {
                  children: (0, u.BX)("div", {
                    css: g.box,
                    children: [
                      (0, u.BX)("p", {
                        css: p,
                        children: [
                          (0, u.tZ)("span", { css: m, children: z[e] }),
                          ": ",
                          y[e],
                        ],
                      }),
                      (0, u.tZ)("p", { css: g.subText, children: w[e] }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2160. " }),
                          (0, u.tZ)("h2", { children: I[e][0] }),
                        ],
                      }),
                      (0, u.BX)("div", {
                        css: g.chapterBox,
                        children: [
                          (0, u.tZ)("p", { children: I[e][1] }),
                          (0, u.BX)("div", {
                            css: g.sectionBox,
                            children: [
                              (0, u.BX)("div", {
                                css: g.sectionTitle,
                                children: [
                                  "1. ",
                                  (0, u.tZ)("span", {
                                    css: g.section,
                                    children: S[e][0],
                                  }),
                                ],
                              }),
                              (0, u.tZ)("p", { children: S[e][1] }),
                            ],
                          }),
                          (0, u.BX)("div", {
                            css: g.sectionBox,
                            children: [
                              (0, u.BX)("div", {
                                css: g.sectionTitle,
                                children: [
                                  "2. ",
                                  (0, u.tZ)("span", {
                                    css: g.section,
                                    children: k[e][0],
                                  }),
                                ],
                              }),
                              (0, u.tZ)("p", { children: k[e][1] }),
                              (0, u.BX)("div", {
                                css: g.itemBox,
                                children: [
                                  (0, u.BX)("div", {
                                    css: g.itemDelimiter,
                                    children: [
                                      (0, u.tZ)("p", {
                                        css: g.itemTitle,
                                        children: "a)",
                                      }),
                                      (0, u.BX)("p", {
                                        children: [
                                          (0, u.BX)("span", {
                                            css: g.itemTitle,
                                            children: [q[e][0], ": "],
                                          }),
                                          q[e][1],
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, u.BX)("div", {
                                    css: g.itemDelimiter,
                                    children: [
                                      (0, u.tZ)("p", {
                                        css: g.itemTitle,
                                        children: "b)",
                                      }),
                                      (0, u.BX)("p", {
                                        children: [
                                          (0, u.BX)("span", {
                                            css: g.itemTitle,
                                            children: [D[e][0], ": "],
                                          }),
                                          D[e][1],
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, u.BX)("div", {
                                    css: g.itemDelimiter,
                                    children: [
                                      (0, u.tZ)("p", {
                                        css: g.itemTitle,
                                        children: "c)",
                                      }),
                                      (0, u.BX)("p", {
                                        children: [
                                          (0, u.BX)("span", {
                                            css: g.itemTitle,
                                            children: [B[e][0], ": "],
                                          }),
                                          B[e][1],
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, u.BX)("div", {
                                    css: g.itemDelimiter,
                                    children: [
                                      (0, u.tZ)("p", {
                                        css: g.itemTitle,
                                        children: "d)",
                                      }),
                                      (0, u.BX)("p", {
                                        children: [
                                          (0, u.BX)("span", {
                                            css: g.itemTitle,
                                            children: [j[e][0], ": "],
                                          }),
                                          j[e][1],
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, u.BX)("div", {
                                    css: g.itemDelimiter,
                                    children: [
                                      (0, u.tZ)("p", {
                                        css: g.itemTitle,
                                        children: "e)",
                                      }),
                                      (0, u.BX)("p", {
                                        children: [
                                          (0, u.BX)("span", {
                                            css: g.itemTitle,
                                            children: [x[e][0], ": "],
                                          }),
                                          (0, u.tZ)("span", {
                                            dangerouslySetInnerHTML: {
                                              __html: x[e][1],
                                            },
                                            css: g.innerTextLink,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, u.BX)("div", {
                                    css: g.itemDelimiter,
                                    children: [
                                      (0, u.tZ)("p", {
                                        css: g.itemTitle,
                                        children: "f)",
                                      }),
                                      (0, u.BX)("p", {
                                        children: [
                                          (0, u.BX)("span", {
                                            css: g.itemTitle,
                                            children: [Z[e][0], ": "],
                                          }),
                                          Z[e][1],
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, u.BX)("div", {
                            css: g.sectionBox,
                            children: [
                              (0, u.BX)("div", {
                                css: g.sectionTitle,
                                children: [
                                  "3. ",
                                  (0, u.tZ)("span", {
                                    css: g.section,
                                    children: N[e][0],
                                  }),
                                ],
                              }),
                              (0, u.tZ)("p", {
                                dangerouslySetInnerHTML: { __html: N[e][1] },
                                css: g.innerTextLink,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2161. " }),
                          (0, u.tZ)("h2", { children: A[e][0] }),
                        ],
                      }),
                      (0, u.BX)("div", {
                        css: g.chapterBox,
                        children: [
                          (0, u.tZ)("p", { children: A[e][1] }),
                          (0, u.tZ)("table", {
                            css: g.tableBox,
                            children: (0, u.BX)("tbody", {
                              children: [
                                (0, u.BX)("tr", {
                                  children: [
                                    (0, u.tZ)("td", {
                                      css: g.tableHeaderLeft,
                                      children: E[e][0],
                                    }),
                                    (0, u.tZ)("td", {
                                      css: g.tableHeaderRight,
                                      children: E[e][1],
                                    }),
                                  ],
                                }),
                                (0, u.BX)("tr", {
                                  children: [
                                    (0, u.tZ)("td", {
                                      rowSpan: 6,
                                      css: g.tableLeft,
                                      children: P[e],
                                    }),
                                    (0, u.tZ)("td", {
                                      css: g.tableRight,
                                      children: T[e],
                                    }),
                                  ],
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: U[e],
                                  }),
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: L[e],
                                  }),
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: W[e],
                                  }),
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: _[e],
                                  }),
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: M[e],
                                  }),
                                }),
                                (0, u.BX)("tr", {
                                  children: [
                                    (0, u.tZ)("td", {
                                      rowSpan: "ja" === e ? 5 : 6,
                                      css: g.tableLeft,
                                      children: C[e],
                                    }),
                                    (0, u.tZ)("td", {
                                      css: g.tableRight,
                                      children: R[e],
                                    }),
                                  ],
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: F[e],
                                  }),
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: O[e],
                                  }),
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: V[e],
                                  }),
                                }),
                                (0, u.tZ)("tr", {
                                  children: (0, u.tZ)("td", {
                                    css: g.tableRight,
                                    children: X[e],
                                  }),
                                }),
                                "ja" !== e &&
                                  (0, u.tZ)("tr", {
                                    children: (0, u.tZ)("td", {
                                      css: g.tableRight,
                                      children: G[e],
                                    }),
                                  }),
                                (0, u.BX)("tr", {
                                  children: [
                                    (0, u.tZ)("td", {
                                      rowSpan: K[e].length,
                                      css: g.tableLeft,
                                      children: H[e],
                                    }),
                                    (0, u.tZ)("td", {
                                      css: g.tableRight,
                                      children: K[e][0],
                                    }),
                                  ],
                                }),
                                (function () {
                                  for (var n = [], i = 1; i < K[e].length; i++)
                                    n.push(
                                      (0, u.tZ)(
                                        "tr",
                                        {
                                          children: (0, u.tZ)("td", {
                                            css: g.tableRight,
                                            children: K[e][i],
                                          }),
                                        },
                                        i
                                      )
                                    );
                                  return n;
                                })(),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2162. " }),
                          (0, u.tZ)("h2", { children: Y[e][0] }),
                        ],
                      }),
                      (0, u.BX)("div", {
                        css: g.chapterBox,
                        children: [
                          (0, u.tZ)("p", { children: Y[e][1] }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "a)",
                                }),
                                (0, u.tZ)("p", { children: J[e] }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "b)",
                                }),
                                (0, u.tZ)("p", { children: Q[e] }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "c)",
                                }),
                                (0, u.tZ)("p", { children: $[e] }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "d)",
                                }),
                                (0, u.tZ)("p", { children: ee[e] }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "e)",
                                }),
                                (0, u.tZ)("p", { children: ne[e] }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "f)",
                                }),
                                (0, u.tZ)("p", { children: ie[e] }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2163. " }),
                          (0, u.tZ)("h2", { children: re[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children: (0, u.tZ)("p", {
                          dangerouslySetInnerHTML: { __html: re[e][1] },
                          css: g.innerTextLink,
                        }),
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2164. " }),
                          (0, u.tZ)("h2", { children: oe[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children: (0, u.tZ)("p", { children: oe[e][1] }),
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2165. " }),
                          (0, u.tZ)("h2", { children: te[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children: (0, u.tZ)("p", { children: te[e][1] }),
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2166. " }),
                          (0, u.tZ)("h2", { children: ae[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children: (0, u.tZ)("p", { children: ae[e][1] }),
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2167. " }),
                          (0, u.tZ)("h2", { children: se[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children:
                          "ja" !== e
                            ? (0, u.tZ)("p", { children: se[e][1] })
                            : (0, u.BX)(u.HY, {
                                children: [
                                  (0, u.tZ)("div", {
                                    css: g.sectionBox,
                                    children: (0, u.BX)("div", {
                                      css: g.itemDelimiter,
                                      children: [
                                        (0, u.tZ)("p", {
                                          css: g.itemTitle,
                                          children: "1.",
                                        }),
                                        (0, u.tZ)("p", { children: le[0] }),
                                      ],
                                    }),
                                  }),
                                  (0, u.tZ)("div", {
                                    css: g.sectionBox,
                                    children: (0, u.BX)("div", {
                                      css: g.itemDelimiter,
                                      children: [
                                        (0, u.tZ)("p", {
                                          css: g.itemTitle,
                                          children: "2.",
                                        }),
                                        (0, u.tZ)("p", {
                                          dangerouslySetInnerHTML: {
                                            __html: le[1],
                                          },
                                          css: g.innerTextLink,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2168. " }),
                          (0, u.tZ)("h2", { children: ce[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children: (0, u.tZ)("p", { children: ce[e][1] }),
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u2169. " }),
                          (0, u.tZ)("h2", { children: de[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children: (0, u.tZ)("p", { children: de[e][1] }),
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u216a. " }),
                          (0, u.tZ)("h2", { children: ue[e][0] }),
                        ],
                      }),
                      (0, u.BX)("div", {
                        css: g.chapterBox,
                        children: [
                          (0, u.tZ)("p", { children: ue[e][1] }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "a)",
                                }),
                                (0, u.tZ)("p", {
                                  dangerouslySetInnerHTML: { __html: me[e] },
                                  css: g.innerTextLink,
                                }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "b)",
                                }),
                                (0, u.tZ)("p", {
                                  dangerouslySetInnerHTML: { __html: pe[e] },
                                  css: g.innerTextLink,
                                }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "c)",
                                }),
                                (0, u.tZ)("p", {
                                  dangerouslySetInnerHTML: { __html: he[e] },
                                  css: g.innerTextLink,
                                }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "d)",
                                }),
                                (0, u.tZ)("p", {
                                  dangerouslySetInnerHTML: { __html: ge[e] },
                                  css: g.innerTextLink,
                                }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "e)",
                                }),
                                (0, u.tZ)("p", {
                                  dangerouslySetInnerHTML: { __html: fe[e] },
                                  css: g.innerTextLink,
                                }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "f)",
                                }),
                                (0, u.tZ)("p", {
                                  dangerouslySetInnerHTML: { __html: ve[e] },
                                  css: g.innerTextLink,
                                }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("div", {
                            css: g.sectionBox,
                            children: (0, u.BX)("div", {
                              css: g.itemDelimiter,
                              children: [
                                (0, u.tZ)("p", {
                                  css: g.itemTitle,
                                  children: "g)",
                                }),
                                (0, u.tZ)("p", {
                                  dangerouslySetInnerHTML: { __html: be[e] },
                                  css: g.innerTextLink,
                                }),
                              ],
                            }),
                          }),
                          (0, u.tZ)("p", {
                            dangerouslySetInnerHTML: { __html: ue[e][2] },
                            css: g.innerTextLink,
                          }),
                        ],
                      }),
                      (0, u.tZ)("hr", {}),
                      (0, u.BX)("div", {
                        css: g.chapterDelimiter,
                        children: [
                          (0, u.tZ)("h2", { children: "\u216b. " }),
                          (0, u.tZ)("h2", { children: ze[e][0] }),
                        ],
                      }),
                      (0, u.tZ)("div", {
                        css: g.chapterBox,
                        children: (0, u.tZ)("p", {
                          dangerouslySetInnerHTML: { __html: ze[e][1] },
                          css: g.innerTextLink,
                        }),
                      }),
                      (0, u.tZ)("div", {
                        css: g.toTopBtnWrapper,
                        children: (0, u.tZ)(d.f, {
                          href: "/",
                          center: !0,
                          css: (0, a.iv)(
                            "font-family:var(--comic-impact-font);font-size:18px;&:not(:lang(ja)){font-size:22px;}@media ",
                            l.r.media.preTablet,
                            "{width:100%;height:48px;font-size:20px;&:not(:lang(ja)){font-size:26px;}}",
                            ""
                          ),
                          children: f[e],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        g = {
          main: {
            name: "1f3izz8",
            styles:
              "position:relative;z-index:0;display:flex;flex-direction:column",
          },
          headerTitle: (0, a.iv)(
            "margin:96px auto;font-family:var(--comic-font);font-size:34px;line-height:1.5;text-align:center;&:not(:lang(ja)){margin:100px auto;font-family:var(--impact-font);font-size:44px;font-weight:normal;line-height:1;}@media ",
            l.r.media.preTablet,
            "{margin:168px auto 80px;font-size:30px;&:not(:lang(ja)){margin:179px auto 85px;font-size:36px;font-weight:normal;line-height:40px;}}",
            ""
          ),
          headerHorizon: {
            name: "12uvig6",
            styles: "height:4px;margin:0;background-color:#000;border:none",
          },
          box: (0, a.iv)(
            "padding:72px 0;h2{margin-top:48px;margin-bottom:17px;font-family:var(--comic-impact-font);font-size:24px;font-weight:400;line-height:1.5;&:not(:lang(ja)){margin-top:34px;margin-bottom:16px;font-size:32px;}}hr{margin:43px auto 0;}@media ",
            l.r.media.preTablet,
            "{padding-top:48px;h2{margin-top:46px;margin-bottom:20px;font-size:26px;&:not(:lang(ja)){margin-top:32px;margin-bottom:12px;font-size:30px;}}}",
            ""
          ),
          innerTextLink: {
            name: "jblszj",
            styles:
              "&>a{color:orange;text-decoration:none;word-break:break-all;pointer-events:auto;}",
          },
          chapterBox: (0, a.iv)(
            "margin-bottom:25px;font-family:var(--default-font);p{margin-bottom:8px;line-height:21px;white-space:pre-line;&:not(:lang(ja)){margin-bottom:12px;}}@media ",
            l.r.media.preTablet,
            "{margin-bottom:44px;&:not(:lang(ja)){margin-bottom:36px;}}",
            ""
          ),
          chapterDelimiter: (0, a.iv)(
            "display:inline-flex;&>h2+h2{margin-left:40px;word-break:break-word;@media ",
            l.r.media.preTablet,
            "{&>h2+h2{}margin-left:20px;}}",
            ""
          ),
          sectionBox: { name: "13mwr4w", styles: "margin:0 22px" },
          sectionTitle: { name: "1efi8gv", styles: "font-weight:bold" },
          section: { name: "879ic9", styles: "margin-left:20px" },
          itemDelimiter: {
            name: "1eiwnzn",
            styles: "display:inline-flex;&>p+p{margin-left:10px;}",
          },
          itemBox: { name: "13mwr4w", styles: "margin:0 22px" },
          itemTitle: { name: "1efi8gv", styles: "font-weight:bold" },
          tableBox: {
            name: "1r2u9v8",
            styles:
              "width:100%;word-break:break-all;white-space:pre-line;border-spacing:0;border-collapse:collapse;border:1px solid #bfbfbf",
          },
          tableHeaderLeft: {
            name: "50q5su",
            styles:
              "width:30%;text-align:center;background:#ddd;border:1px solid #bfbfbf",
          },
          tableHeaderRight: {
            name: "i7gf0z",
            styles:
              "width:70%;text-align:center;background:#ddd;border:1px solid #bfbfbf",
          },
          tableLeft: {
            name: "1a8228l",
            styles:
              "width:30%;padding:5px 10px;text-align:center;border:1px solid #bfbfbf",
          },
          tableRight: {
            name: "157oacg",
            styles: "width:70%;padding:5px 10px;border:1px solid #bfbfbf",
          },
          subText: {
            name: "1emru8h",
            styles:
              "font-family:var(--default-font);line-height:1.4;white-space:pre-line",
          },
          toTopBtnWrapper: {
            name: "1503087",
            styles: "display:flex;justify-content:center;margin-top:72px",
          },
          returnToTopBtn: (0, a.iv)(
            "font-size:18px;@media ",
            l.r.media.preTablet,
            "{font-size:20px;}&:not(:lang(ja)){font-size:22px;@media ",
            l.r.media.preTablet,
            "{&:not(:lang(ja)){}font-size:26px;}}",
            ""
          ),
        },
        f = {
          ja: "\u30c8\u30c3\u30d7\u3078",
          en: "RETURN TO TOP",
          fr: "RETOUR \xc0 L\u2019ACCUEIL",
          de: "Zur\xfcck zum anfang",
          es: "VOLVER A INICIO",
          it: "TORNA ALLA HOME",
        },
        v = {
          ja: "NARUTO SITE",
          en: "NARUTO SITE",
          fr: "NARUTO SITE",
          de: "NARUTO SITE",
          es: "NARUTO SITE",
          it: "NARUTO SITE",
        },
        b = {
          ja: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
          en: "PRIVACY POLICY",
          fr: "POLITIQUE DE CONFIDENTIALIT\xc9",
          de: "DATENSCHUTZERKL\xc4RUNG",
          es: "POL\xcdTICA DE PRIVACIDAD",
          it: "INFORMATIVA SULLA PRIVACY",
        },
        z = {
          ja: "\u6700\u7d42\u66f4\u65b0",
          en: "Last Updated",
          fr: "Derni\xe8re mise \xe0 jour",
          de: "Zuletzt aktualisiert",
          es: "\xdaltima actualizaci\xf3n",
          it: "Ultimo aggiornamento",
        },
        y = {
          ja: "2022-04-01",
          en: "2022-05-20",
          fr: "2022-05-20",
          de: "2022-05-20",
          es: "2022-05-20",
          it: "2022-05-20",
        },
        w = {
          ja: "\u672c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u682a\u5f0f\u4f1a\u793e\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3\u30a8\u30f3\u30bf\u30fc\u30c6\u30a4\u30f3\u30e1\u30f3\u30c8\uff08\u4ee5\u4e0b\u300c\u5f53\u793e\u300d\u3068\u3044\u3044\u307e\u3059\uff09\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3001\u30b2\u30fc\u30e0\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u305d\u306e\u4ed6\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u88fd\u54c1\u304a\u3088\u3073\u30b5\u30fc\u30d3\u30b9\uff08\u7dcf\u79f0\u3057\u3066\u4ee5\u4e0b\u300c\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u300d\u3068\u3044\u3044\u307e\u3059\uff09\u3092\u304a\u5ba2\u69d8\u304c\u5229\u7528\u3057\u305f\u5834\u5408\u307e\u305f\u306f\u4ed6\u306e\u4f55\u3089\u304b\u306e\u5f62\u306b\u3066\u304a\u5ba2\u69d8\u3068\u5f53\u793e\u3068\u306e\u9593\u3067\u3084\u308a\u53d6\u308a\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u304a\u3051\u308b\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u306e\u5f53\u793e\u306b\u3088\u308b\u53ce\u96c6\u3001\u4fdd\u7ba1\u3001\u5229\u7528\u304a\u3088\u3073\u958b\u793a\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3001\u8aac\u660e\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u5f53\u793e\u306f\u3001EU\u4e00\u822c\u30c7\u30fc\u30bf\u4fdd\u8b77\u898f\u5247\u306e\u76ee\u7684\u4e0a\u3001\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u306e\u30c7\u30fc\u30bf\u7ba1\u7406\u8005\u3068\u306a\u308a\u307e\u3059\u3002\n\n\u5f53\u793e\u306f\u3001\u672c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3092\u968f\u6642\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u5f53\u793e\u306f\u3001\u4f55\u3089\u304b\u306e\u5909\u66f4\u3092\u52a0\u3048\u305f\u5834\u5408\u306b\u306f\u3001\u672c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306e\u5192\u982d\u306e\u65e5\u4ed8\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u305d\u306e\u65e8\u3092\u304a\u5ba2\u69d8\u306b\u544a\u77e5\u3059\u308b\u3068\u3068\u3082\u306b\u3001\u5834\u5408\u306b\u3088\u308a\u8ffd\u52a0\u7684\u306a\u544a\u77e5\uff08\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u3078\u306e\u544a\u77e5\u6587\u306e\u8ffd\u52a0\u307e\u305f\u306f\u304a\u5ba2\u69d8\u3078\u306e\u901a\u77e5\u306e\u9001\u4ed8\u306a\u3069\u306b\u3088\u308b\u3082\u306e\uff09\u3092\u304a\u5ba2\u69d8\u306b\u5bfe\u3057\u884c\u3046\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u5f53\u793e\u306b\u304a\u3051\u308b\u60c5\u5831\u306e\u53d6\u6271\u65b9\u6cd5\u3001\u304a\u3088\u3073\u3054\u81ea\u8eab\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u4fdd\u8b77\u306b\u8cc7\u3059\u308b\u65b9\u6cd5\u306b\u95a2\u3057\u3001\u6700\u65b0\u60c5\u5831\u3092\u5f97\u3089\u308c\u308b\u3088\u3046\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u305f\u3073\u306b\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3092\u78ba\u8a8d\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",
          en: "This Privacy Policy explains how information about you is collected, used and disclosed by Bandai Namco Entertainment Inc., (\u201cBNEI\u201d, \u201cus\u201d, \u201cwe\u201d or \u201cour\u201d) when you use our websites, games, mobile applications and other online products and services that contain this policy (collectively, the \u201cServices\u201d) or when you otherwise interact with us. BNEI is the data controller of your personal information for purposes of the EU General Data Protection Regulation. Shueisha Inc. (\u201cShueisha\u201d) is responsible for content creation and content contribution of the Services.\n\nFor some data processing activities, we are joint controllers together with Shueisha. You can find out which processing activities are carried out in joint controllership upon contacting us, and we will provide you with the relevant information from the joint controller agreement concluded between BNEI and Shueisha.\n\nWe may change this Privacy Policy from time to time.  If we make changes, we will notify you by revising the date at the top of the Privacy Policy and, in some cases, we may provide you with additional notice (such as by adding a statement to the homepage of our Services or sending you a notification). We encourage you to review the Privacy Policy whenever you access the Services to stay informed about our information practices and the ways you can help protect your privacy.",
          fr: "La pr\xe9sente Politique de confidentialit\xe9 explique la mani\xe8re dont les informations vous concernant sont collect\xe9es, utilis\xe9es et divulgu\xe9es par Bandai Namco Entertainment Inc., (\xab BNEI \xbb, \xab nous \xbb, \xab notre \xbb ou \xab nos \xbb) lorsque vous utilisez nos sites Internet, jeux, applications mobiles et autres produits et services en ligne qui contiennent cette politique (collectivement, les \xab Services \xbb) ou lorsque vous interagissez autrement avec nous. La responsabilit\xe9 du traitement de vos donn\xe9es personnelles, conform\xe9ment au R\xe8glement g\xe9n\xe9ral sur la protection des donn\xe9es de l'Union europ\xe9enne, est d\xe9volue \xe0 BNEI. Shueisha Inc. (\xab Shueisha \xbb) est responsable de la cr\xe9ation du contenu et de la contribution au contenu des Services.  \n\nPour certaines activit\xe9s de traitement des donn\xe9es, nous sommes responsables conjoints avec Shueisha. Veuillez nous contacter si vous souhaitez savoir quelles sont les activit\xe9s mises en \u0153uvre dans le cadre de cette responsabilit\xe9 conjointe. Nous vous fournirons les informations issues du contrat de responsabilit\xe9 conjointe conclu entre BNEI et Shueisha.\n\nBandai Namco Entertainment Inc. se r\xe9serve le droit d'amender la pr\xe9sente Politique de confidentialit\xe9 de temps \xe0 autre. Nous vous aviserons de tout changement en proc\xe9dant \xe0 la modification de la date de mise \xe0 jour ci-dessus et, dans certains cas, en vous adressant des notifications suppl\xe9mentaires (notamment par l'ajout d'une publication sur la page d'accueil de nos Services ou l'envoi d'un message). Nous vous encourageons \xe0 relire la Politique de confidentialit\xe9 chaque fois que vous acc\xe9dez aux Services de fa\xe7on \xe0 vous tenir inform\xe9 de nos pratiques en mati\xe8re de traitement de vos informations et des dispositions visant \xe0 prot\xe9ger votre vie priv\xe9e.",
          de: "Diese Datenschutzerkl\xe4rung gibt Aufschluss dar\xfcber, wie Bandai Namco Entertainment Inc. (\u201eBNEI\u201c, \u201ewir\u201c, \u201euns\u201c, \u201eunser\u201c usw.) Ihre personenbezogenen Daten sammelt, verwendet und weitergibt, wenn Sie unsere Websites, Spiele, mobilen Anwendungen und anderen Online-Produkte und -Dienste (zusammen \u201eDienste\u201c), welche diese Datenschutzerkl\xe4rung nutzen, benutzen oder auf andere Weise mit uns in Verbindung treten. BNEI ist Datenverantwortlicher f\xfcr Ihre personenbezogenen Daten im Sinne der EU-Datenschutz-Grundverordnung. Shueisha Inc. (\u201eShueisha\u201c) ist im Rahmen der Dienste verantwortlich f\xfcr Erstellung und Verbreitung der Inhalte. \n\nBei einigen Datenverarbeitungsaktivit\xe4ten sind wir und Shueisha gemeinschaftliche Datenverantwortliche. Kontaktieren Sie uns bitte, wenn Sie erfahren m\xf6chten, welche Datenverarbeitungsaktivit\xe4ten wir als gemeinschaftliche Datenverantwortliche durchf\xfchren. Wir werden Ihnen die relevanten Informationen \xfcber die Vereinbarung zur gemeinschaftlichen Datenverantwortlichkeit zukommen lassen, die zwischen BNEI und Shueisha abgeschlossen wurde.\n\nWir k\xf6nnen diese Datenschutzerkl\xe4rung von Zeit zu Zeit \xe4ndern. Im Falle von \xc4nderungen teilen wir Ihnen dies durch \xc4nderung des Datums oben auf der Datenschutzerkl\xe4rung mit und weisen Sie in einigen F\xe4llen zus\xe4tzlich (etwa durch Hinzuf\xfcgung einer Erkl\xe4rung auf der Homepage unserer Dienste oder \xdcbersendung einer Mitteilung an Sie) darauf hin. Wir empfehlen Ihnen, diese Datenschutzerkl\xe4rung durchzulesen, wenn Sie auf die Dienste zugreifen, um sich \xfcber unsere Datenschutzpraktiken sowie die Ihnen zum Schutz Ihrer Privatsph\xe4re zur Verf\xfcgung stehenden M\xf6glichkeiten auf dem Laufenden zu halten.",
          es: "La presente Pol\xedtica de privacidad explica c\xf3mo Bandai Namco Entertainment Inc., (\xabBNEI\xbb, \xabnosotros\xbb, \xabnos\xbb o \xabnuestro/a(s)\xbb) recopila, utiliza y revela informaci\xf3n relativa a usted cuando utiliza nuestros sitios web, juegos, aplicaciones m\xf3viles y otros productos y servicios online que contenga esta pol\xedtica (en su conjunto, los \xabServicios\xbb) o cuando interact\xfaa de otra forma con nosotros. BNEI es el responsable del tratamiento de su informaci\xf3n personal en relaci\xf3n con el Reglamento General de Protecci\xf3n de Datos de la UE. Shueisha Inc. (Shueisha\u201d) es responsable de la creaci\xf3n de contenido y su contribuci\xf3n a los Servicios.\n\nEn el caso de determinadas actividades de tratamiento de datos, somos los responsables de dicha gesti\xf3n en colaboraci\xf3n con Shueisha. Puedes ponerte en contacto con nosotros para informarte sobre qu\xe9 actividades de tratamiento se llevan a cabo de forma conjunta. Te facilitaremos la informaci\xf3n relacionada con el acuerdo de control de datos conjunto suscrito entre BNEI y Shueisha.\n\nPodremos modificar esta Pol\xedtica de privacidad en cualquier momento. Si realizamos alguna modificaci\xf3n, se lo notificaremos actualizando la fecha en la parte superior de la misma y, en algunos casos, podremos realizar una notificaci\xf3n adicional (como la incorporaci\xf3n de un aviso en la p\xe1gina de inicio de nuestros Servicios o envi\xe1ndole una notificaci\xf3n).  Le animamos a revisar la Pol\xedtica de privacidad siempre que acceda a los Servicios para mantenerse informado de nuestras pr\xe1cticas relativas a la informaci\xf3n y de c\xf3mo puede ayudar a proteger su privacidad.",
          it: "La presente Informativa sulla privacy illustra le modalit\xe0 con cui Bandai Namco Entertainment Inc. (\u201cBNEI\u201d, \u201cci\u201d, \u201cnoi\u201d o \u201cnostro\u201d) raccoglie, utilizza e divulga le informazioni relative all'Utente quando questi si serve dei nostri siti Web, giochi, applicazioni mobili e altri prodotti e servizi online che includono la presente Informativa (nell'insieme, i \u201cServizi\u201d) o quando interagisce con noi in altro modo. BNEI \xe8 responsabile del trattamento dei dati personali dell\u2019Utente ai sensi del Regolamento generale europeo sulla protezione dei dati. Shueisha Inc. (di seguito \u201cShueisha\u201d) \xe8 responsabile della creazione e contribuzione di contenuti nell'ambito dei Servizi.\n\nLimitatamente a determinate attivit\xe0, BNEI e Shueisha rivestono la qualifica di contitolari del trattamento dei dati. Per conoscere quali attivit\xe0 di trattamento dei dati ricadano nell'ambito di tale contitolarit\xe0 si prega di contattare BNEI, la quale provveder\xe0 a fornire le informazioni pertinenti contenute nell'accordo di contitolarit\xe0 del trattamento dei dati personali stipulato fra BNEI e Shueisha.Abbiamo la facolt\xe0 di apportare di tanto in tanto modifiche alla presente Informativa sulla privacy. In questo caso avviseremo l'Utente cambiando la data all'inizio dell'Informativa sulla privacy e in taluni casi trasmettendogli un ulteriore avviso (ad esempio aggiungendo una dichiarazione alla homepage dei nostri Servizi o inviando una comunicazione).  Invitiamo l'Utente a leggere l'Informativa sulla privacy ogni volta che accede ai Servizi per rimanere aggiornato sulle nostre procedure informative e sulle modalit\xe0 con cui l'Utente pu\xf2 contribuire a proteggere la propria privacy.",
        },
        I = {
          ja: [
            "\u60c5\u5831\u306e\u53ce\u96c6",
            "\u5f53\u793e\u304c\u304a\u5ba2\u69d8\u304b\u3089\u53ce\u96c6\u3059\u308b\u60c5\u5831\u306f\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3054\u3068\u306b\u7570\u306a\u308a\u307e\u3059\u3002 \u5f53\u793e\u306f\u3001\u8b58\u5225\u5b50\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u307e\u305f\u306f\u305d\u306e\u4ed6\u985e\u4f3c\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u6d3b\u52d5\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u5c65\u6b74\u3001\u4f4d\u7f6e\u60c5\u5831\u306a\u3069\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u4ee5\u4e0b\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u53ce\u96c6\u76ee\u7684\u306f\u3001\u300cII. \u60c5\u5831\u306e\u5229\u7528\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
          ],
          en: [
            "Collection of Information",
            "The information we collect from you depends on the context in which you provide it and use our Services. We collect the following categories of information: identifiers, internet or other similar network activity, commercial information, geolocation data, and inferences drawn from other personal information.  More details about these categories of data are provided below, and the business and commercial purposes for which we collect personal information is described in the Use of Information section.",
          ],
          fr: [
            "Collecte d\u2019informations",
            "Les informations que nous collectons aupr\xe8s de vous d\xe9pendent du contexte dans lequel vous les fournissez et utilisez nos Services. Nous collectons les cat\xe9gories d\u2019informations suivantes : identifiants, activit\xe9 sur Internet ou r\xe9seau similaire, informations commerciales, donn\xe9es de g\xe9olocalisation et d\xe9ductions tir\xe9es des autres informations personnelles. Vous trouverez de plus amples d\xe9tails sur ces cat\xe9gories de donn\xe9es ci-dessous, tandis que les fins professionnelles et commerciales pour lesquelles nous collectons des informations personnelles sont d\xe9crites \xe0 la section Utilisation des informations.",
          ],
          de: [
            "Sammlung von Daten",
            "Die Daten, die wir von Ihnen sammeln, h\xe4ngen vom Kontext ab, in dem Sie sie uns zur Verf\xfcgung stellen und unsere Dienste nutzen. Wir sammeln Daten der folgenden Kategorien: Kennungen, Internet- oder vergleichbare Netzwerkaktivit\xe4t, kommerzielle Informationen, Geolokalisierungsinformationen sowie Inferenzen von anderen personenbezogenen Daten. Im Folgenden f\xfchren wir Einzelheiten zu diesen Datenkategorien auf. Die gesch\xe4ftlichen und kommerziellen Zwecke, zu denen wir personenbezogene Daten sammeln, werden im Abschnitt \u201eNutzung der Daten\u201c beschrieben.",
          ],
          es: [
            "Recopilaci\xf3n de informaci\xf3n",
            "La informaci\xf3n que recopilamos sobre usted depende del contexto en el que usted la proporciona y utiliza nuestros Servicios. Recabamos las siguientes categor\xedas de informaci\xf3n: identificadores, actividad en Internet o en otras redes similares, informaci\xf3n comercial, datos de geolocalizaci\xf3n e inferencias extra\xeddas de otra informaci\xf3n personal. A continuaci\xf3n, ofrecemos m\xe1s informaci\xf3n sobre estas categor\xedas de datos, y en el apartado Uso de la informaci\xf3n se describen los fines comerciales y empresariales para los que recopilamos informaci\xf3n personal. ",
          ],
          it: [
            "Raccolta delle informazioni",
            "Le informazioni che raccogliamo dall'Utente dipendono dal contesto in cui lo stesso le fornisce e utilizza i nostri Servizi.  Raccogliamo le seguenti categorie di informazioni: identificatori, attivit\xe0 su Internet o su altre reti simili, informazioni commerciali, dati di geolocalizzazione e deduzioni tratte da altri dati personali.  Maggiori dettagli su queste categorie di dati sono forniti di seguito, e gli scopi commerciali e di business per i quali raccogliamo le informazioni personali sono descritti nella sezione Utilizzo delle informazioni.",
          ],
        },
        S = {
          ja: [
            "\u304a\u5ba2\u69d8\u304b\u3089\u5f53\u793e\u306b\u63d0\u4f9b\u3055\u308c\u308b\u60c5\u5831",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u304b\u3089\u5f53\u793e\u306b\u76f4\u63a5\u63d0\u4f9b\u3055\u308c\u308b\u60c5\u5831\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u3001\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u53d6\u308a\u3001\u5f53\u793e\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u753b\u50cf\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3001\u30ab\u30b9\u30bf\u30de\u30fc\u30b5\u30dd\u30fc\u30c8\u306e\u4f9d\u983c\u3001\u30cb\u30e5\u30fc\u30b9\u30ec\u30bf\u30fc\u306e\u53d7\u4fe1\u767b\u9332\u3001\u30a2\u30f3\u30b1\u30fc\u30c8\u3078\u306e\u53c2\u52a0\u305d\u306e\u4ed6\u306e\u65b9\u6cd5\u3067\u306e\u5f53\u793e\u3068\u306e\u3084\u308a\u53d6\u308a\u304c\u304a\u5ba2\u69d8\u306b\u3088\u308a\u306a\u3055\u308c\u305f\u5834\u5408\u306b\u3001\u5f53\u793e\u306b\u3088\u308b\u60c5\u5831\u53ce\u96c6\u304c\u884c\u308f\u308c\u307e\u3059\u3002\u5f53\u793e\u304c\u53ce\u96c6\u3059\u308b\u3053\u3068\u306e\u3042\u308b\u60c5\u5831\u306e\u7a2e\u985e\u306b\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3001\u96fb\u5b50\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u5199\u771f\u305d\u306e\u4ed6\u304a\u5ba2\u69d8\u304c\u63d0\u4f9b\u3092\u9078\u629e\u3057\u305f\u4e00\u5207\u306e\u60c5\u5831\u304c\u542b\u307e\u308c\u307e\u3059\u3002",
          ],
          en: [
            "Information You Provide to Us",
            "We collect information you provide directly to us. For example, we collect information when you create an account, interact with other users, upload images to our servers, request customer support, sign up to receive newsletters, participate in surveys or otherwise communicate with us. The types of information we may collect include your username, password, email address, photos, and any other information you choose to provide.",
          ],
          fr: [
            "Informations que vous nous fournissez",
            "Nous collectons les informations que vous nous fournissez directement. Par exemple, nous collectons des informations lorsque vous cr\xe9ez un compte, interagissez avec d\u2019autres utilisateurs, t\xe9l\xe9chargez des images sur nos serveurs, demandez une assistance client, souscrivez aux bulletins d\u2019informations, participez \xe0 des sondages ou communiquez d\u2019une autre fa\xe7on avec nous. Les types d\u2019informations que nous pouvons collecter comprennent votre nom d\u2019utilisateur, votre mot de passe, votre adresse e-mail, vos photos et toute autre information que vous choisissez de fournir.",
          ],
          de: [
            "Von Ihnen zur Verf\xfcgung gestellte Daten",
            "Wir sammeln Daten, die Sie uns direkt zur Verf\xfcgung stellen. Wir sammeln z. B. Daten, wenn Sie ein Konto erstellen, mit anderen Benutzern interagieren, Bilder auf unsere Server hochladen, den Kundendienst in Anspruch nehmen, sich f\xfcr den Erhalt von Newslettern registrieren, an Umfragen teilnehmen oder anderweitig mit uns kommunizieren. Zu den von uns gesammelten Daten geh\xf6ren Ihr Benutzername, Ihr Passwort, Ihre E-Mail-Adresse, Fotos und andere von Ihnen zur Verf\xfcgung gestellte Daten.",
          ],
          es: [
            "Informaci\xf3n que usted nos suministra a nosotros",
            "Recopilamos la informaci\xf3n que usted nos suministra directamente a nosotros. Por ejemplo, recopilamos informaci\xf3n cuando crea una cuenta, interact\xfaa con otros usuarios, sube im\xe1genes a nuestros servidores, solicita atenci\xf3n al cliente, se registra para recibir boletines informativos, participa en encuestas o se comunica de otra manera con nosotros. El tipo de datos que podemos recopilar incluye su nombre de usuario, contrase\xf1a, direcci\xf3n de correo electr\xf3nico, fotos y cualquier otra informaci\xf3n que usted nos d\xe9.",
          ],
          it: [
            "Informazioni fornite dall'Utente",
            "Raccogliamo informazioni che l'Utente ci fornisce direttamente, ad esempio quando crea un account, interagisce con altri utenti, carica immagini sui nostri server, si rivolge all'assistenza clienti, sottoscrive una newsletter, partecipa a un nostro sondaggio o comunica con noi in altro modo. Le tipologie di informazioni che possiamo raccogliere comprendono nome utente, password, indirizzo e-mail, foto e qualsiasi altra informazione l'Utente scelga di trasmetterci.",
          ],
        },
        k = {
          ja: [
            "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u304a\u5ba2\u69d8\u306b\u3088\u308b\u5229\u7528\u6642\u306b\u5f53\u793e\u304c\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3059\u308b\u60c5\u5831",
            "\u304a\u5ba2\u69d8\u306b\u3088\u308b\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u307e\u305f\u306f\u305d\u306e\u5229\u7528\u306b\u969b\u3057\u3001\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3057\u307e\u3059\u3002\u305d\u306e\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002",
          ],
          en: [
            "Information We Collect Automatically When You Use the Services",
            "When you access or use our Services, we automatically collect information about you, including:",
          ],
          fr: [
            "Informations que nous collectons automatiquement lorsque vous utilisez les Services",
            "Lorsque vous acc\xe9dez \xe0 ou utilisez nos Services, nous collectons automatiquement des informations vous concernant, y compris :",
          ],
          de: [
            "Bei Ihrer Verwendung der Dienste automatisch gesammelte Daten",
            "Jedes Mal, wenn Sie auf die Dienste zugreifen oder diese verwenden, erfassen wir automatisch Informationen \xfcber Sie. Dazu geh\xf6ren:",
          ],
          es: [
            "Informaci\xf3n que recopilamos autom\xe1ticamente cuando utiliza los Servicios",
            "Cuando accede a los Servicios o los utiliza, autom\xe1ticamente recopilamos informaci\xf3n sobre usted, incluyendo:",
          ],
          it: [
            "Informazioni che raccogliamo automaticamente quando l'Utente usufruisce dei Servizi",
            "Quando l'Utente accede ai nostri Servizi o usufruisce di essi, raccogliamo automaticamente informazioni sul suo conto, tra i quali:",
          ],
        },
        q = {
          ja: [
            "\u5229\u7528\u72b6\u6cc1\u306b\u95a2\u3059\u308b\u60c5\u5831",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306b\u3088\u308b\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u5f53\u793e\u307e\u305f\u306f\u30b2\u30fc\u30e0\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u63d0\u4f9b\u3059\u308b\u4e8b\u696d\u8005\u304c\u30b2\u30fc\u30e0\u958b\u59cb\u6642\u306b\u304a\u5ba2\u69d8\u3078\u81ea\u52d5\u7684\u306b\u4ed8\u4e0e\u3059\u308b\u30b2\u30fc\u30df\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9ID\u3001\u30b3\u30f3\u30d7\u30ea\u30fc\u30c8\u6e08\u307f\u306e\u30ec\u30d9\u30eb\u3001\u30b2\u30fc\u30e0\u30b9\u30b3\u30a2\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u306b\u8cbb\u3084\u3057\u305f\u6642\u9593\u305d\u306e\u4ed6\u306e\u30b2\u30fc\u30e0\u30d7\u30ec\u30a4\u60c5\u5831\u3082\u542b\u307e\u308c\u307e\u3059\u3002",
          ],
          en: [
            "Usage Information",
            "We collect information about your use of our Services, including gaming service ID, levels completed, game scores, time spent using our Services, and other game play information.",
          ],
          fr: [
            "Informations d\u2019utilisation",
            "nous collectons des informations concernant votre utilisation de nos Services, y compris l\u2019ID du service de jeu, les niveaux atteints, les scores r\xe9alis\xe9s, le temps pass\xe9 \xe0 utiliser nos Services et autres informations relatives au jeu.",
          ],
          de: [
            "Nutzungsdaten",
            "Wir sammeln Informationen hinsichtlich Ihrer Verwendung unserer Dienste, wie u.a. Gaming Service-ID, abgeschlossene Level, Spielergebnisse, Verweilzeit bei unseren Diensten sowie andere Informationen zum Spielverlauf.",
          ],
          es: [
            "Informaci\xf3n de uso",
            "recopilamos datos sobre el uso que hace de los Servicios, incluida su ID del servicio de juego, los niveles completados, las puntuaciones obtenidas, el tiempo dedicado al uso de nuestros Servicios y otra informaci\xf3n relativa a los juegos.",
          ],
          it: [
            "Informazioni di utilizzo",
            "Raccogliamo informazioni sull'utilizzo da parte dell'Utente dei nostri Servizi, tra cui l'ID del servizio di gioco, i livelli completati, i punteggi di gioco, il tempo di utilizzo dei nostri Servizi e altre informazioni di gioco.",
          ],
        },
        D = {
          ja: [
            "\u30ed\u30b0\u60c5\u5831",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306b\u3088\u308b\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u30ed\u30b0\u306b\u8a18\u9332\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30d6\u30e9\u30a6\u30b6\u306e\u7a2e\u5225\u304a\u3088\u3073\u8a00\u8a9e\u3001\u30a2\u30af\u30bb\u30b9\u56de\u6570\u3001\u95b2\u89a7\u30da\u30fc\u30b8\u3001\u304a\u5ba2\u69d8\u306eIP\u30a2\u30c9\u30ec\u30b9\u3001\u306a\u3089\u3073\u306b\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u79fb\u52d5\u524d\u306b\u304a\u5ba2\u69d8\u304c\u8a2a\u554f\u3057\u305f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3082\u542b\u307e\u308c\u307e\u3059\u3002",
          ],
          en: [
            "Log Information",
            "We log information about your use of our Services, including your browser type and language, access times, pages viewed, your IP address and the website you visited before navigating to our Services.",
          ],
          fr: [
            "Informations enregistr\xe9es",
            "nous enregistrons des informations sur votre utilisation de nos Services, y compris votre type de navigateur et votre langue, vos heures d\u2019acc\xe8s, les pages que vous avez consult\xe9es, votre adresse IP et le site Internet que vous avez visit\xe9 avant de naviguer vers nos Services.",
          ],
          de: [
            "Log-Informationen",
            "Wir protokollieren Informationen hinsichtlich Ihrer Verwendung unserer Dienste, einschlie\xdflich Browsertyp und Sprache, Zugriffszeiten, aufgerufene Seiten, Ihre IP-Adresse und die Website, von der aus Sie zu unseren Diensten gewechselt sind.",
          ],
          es: [
            "Informaci\xf3n de registro",
            "registramos informaci\xf3n sobre el uso que usted hace de los Servicios, incluido su tipo de navegador e idioma, las horas de acceso, las p\xe1ginas vistas, su direcci\xf3n IP y el sitio web que visit\xf3 antes de dirigirse a nuestros Servicios.",
          ],
          it: [
            "Informazioni di registro",
            "Registriamo informazioni sull'utilizzo da parte dell'Utente dei nostri Servizi, tra cui il tipo di browser e la lingua, gli orari di accesso, le pagine visitate, l'indirizzo IP e il sito Web visitato prima di accedere ai nostri Servizi.",
          ],
        },
        B = {
          ja: [
            "\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u60c5\u5831",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u304c\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u7528\u3044\u305f\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3001\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u305d\u306e\u4ed6\u306e\u30c7\u30d0\u30a4\u30b9\uff08\u4ee5\u4e0b\u300c\u30c7\u30d0\u30a4\u30b9\u300d\u3068\u3044\u3044\u307e\u3059\uff09\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u578b\u756a\u3001\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u304a\u3088\u3073\u30d0\u30fc\u30b8\u30e7\u30f3\u3001\u30d6\u30e9\u30a6\u30b6\u3001\u30e2\u30d0\u30a4\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u60c5\u5831\u3001\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u4ed6\u306e\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\uff08\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff09\u3001MAC\u30a2\u30c9\u30ec\u30b9\u3001IP\u30a2\u30c9\u30ec\u30b9\u3001\u56fd\u969b\u79fb\u52d5\u4f53\u88c5\u7f6e\u8b58\u5225\u756a\u53f7\uff08IMEI\uff09\u305d\u306e\u4ed6\u306e\u4e00\u610f\u30c7\u30d0\u30a4\u30b9\u8b58\u5225\u5b50\u3067\u3042\u3063\u3066\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306b\u3088\u308a\u63d0\u4f9b\u3055\u308c\u308b\u3082\u306e\u3082\u542b\u307e\u308c\u307e\u3059\u3002",
          ],
          en: [
            "Hardware Information",
            "We collect information about the computer or device you use to access our Services, including the hardware model, operating system and version, browser  mobile network information, list of other BNEI mobile applications installed on the device, MAC address, IP address International Mobile Equipment Identity (\u201cIMEI\u201d) number and other unique device identifiers made available by the operating system of your device.",
          ],
          fr: [
            "Informations concernant le mat\xe9riel informatique",
            "nous collectons des informations concernant l\u2019ordinateur ou l\u2019appareil que vous utilisez pour acc\xe9der \xe0 nos Services, y compris le mod\xe8le de mat\xe9riel informatique, le syst\xe8me d\u2019exploitation et la version, le navigateur, des informations sur le r\xe9seau mobile, la liste des autres applications mobiles BNEI install\xe9es sur l\u2019appareil, l\u2019adresse MAC, l\u2019adresse IP, l\u2019identit\xe9 internationale de l\u2019\xe9quipement mobile (\xab IIEM \xbb) et d\u2019autres identificateurs uniques d\u2019appareils mis \xe0 disposition par le syst\xe8me d\u2019exploitation de votre appareil.",
          ],
          de: [
            "Hardware-Informationen",
            "Wir sammeln Informationen zu dem Computer bzw. Ger\xe4t, mit dem Sie auf unsere Dienste zugreifen, einschlie\xdflich Hardware-Modell, Betriebssystem und -version, Browser -Mobilnetzwerk-Informationen, eine Liste anderer auf dem Ger\xe4t installierten mobilen Anwendungen von BNEI, MAC-Adresse, IP-Adresse, International Mobile Equipment Identity (\u201eIMEI\u201c) Nummer und andere vom Betriebssystem Ihres Ger\xe4ts zur Verf\xfcgung gestellte Unique Device Identifier (UDI).",
          ],
          es: [
            "Informaci\xf3n de hardware",
            "podemos recopilar informaci\xf3n acerca del ordenador o dispositivo que utilice para acceder a nuestros Servicios, incluido el modelo, sistema operativo y versi\xf3n, informaci\xf3n sobre la red m\xf3vil del navegador, lista de otras aplicaciones m\xf3viles de BNEI instaladas en el dispositivo, la direcci\xf3n MAC, la direcci\xf3n IP, el n\xfamero de identificaci\xf3n de equipo m\xf3vil internacional (\xabIMEI\xbb, por sus siglas en ingl\xe9s) y otros identificadores de dispositivo \xfanicos que suministre el sistema operativo de su dispositivo.",
          ],
          it: [
            "Informazioni hardware",
            "Raccogliamo informazioni sul computer o dispositivo utilizzato per accedere ai nostri Servizi, ivi compreso il modello di hardware, il sistema operativo e la versione, le informazioni di rete mobile del browser, l'elenco di altre applicazioni mobili BNEI installate sul dispositivo, l'indirizzo MAC, l'indirizzo IP, il codice IMEI (International Mobile Equipment Identity) e altri identificatori univoci di dispositivo messi a disposizione dal sistema operativo del dispositivo.",
          ],
        },
        j = {
          ja: [
            "\u4f4d\u7f6e\u60c5\u5831",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u5730\u7406\u7684\u4f4d\u7f6e\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u304a\u5ba2\u69d8\u306b\u3088\u308b\u5229\u7528\u306e\u90fd\u5ea6\u3001\u307e\u305f\u306f\u304b\u304b\u308b\u60c5\u5831\u306e\u53ce\u96c6\u306b\u3064\u3044\u3066\u4ed6\u306e\u4f55\u3089\u304b\u306e\u65b9\u6cd5\u306b\u3088\u308b\u304a\u5ba2\u69d8\u306e\u540c\u610f\u304c\u3042\u3063\u305f\u90fd\u5ea6\u3001\u53ce\u96c6\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u304a\u5ba2\u69d8\u306f\u3001\u3054\u81ea\u8eab\u306e\u30c7\u30d0\u30a4\u30b9\u4e0a\u306e\u8a2d\u5b9a\u3092\u7528\u3044\u3066\u3001\u3053\u3046\u3057\u305f\u4f4d\u7f6e\u60c5\u5831\u306e\u53ce\u96c6\u306e\u540c\u610f\u3092\u64a4\u56de\uff08\u62d2\u5426\uff09\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u304a\u5ba2\u69d8\u306e\u4f4d\u7f6e\u60c5\u5831\u306f\u3001\u53ce\u96c6\u524d\u306b\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u304a\u3044\u3066\u6307\u5b9a\u3055\u308c\u305f\u671f\u9593\u306b\u308f\u305f\u308a\u3001\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002",
          ],
          en: [
            "Location Information",
            "We may collect information regarding the geographic location of your device each time you use the Services provided on iOS or Android platforms or otherwise consent to the collection of this information. You may withdraw consent for  the collection of platform provided location data using the settings on your device. Your location is stored for the period specified in the Services before collection.",
          ],
          fr: [
            "Informations concernant la localisation",
            "nous pouvons collecter des informations concernant la localisation g\xe9ographique de votre appareil chaque fois que vous utilisez les Services fournis sur des plateformes iOS ou Android, ou consentez autrement \xe0 la collecte desdites informations. Vous pouvez retirer votre consentement \xe0 la collecte de donn\xe9es de localisation fournies par des plateformes en d\xe9finissant les param\xe8tres sur votre appareil. Votre localisation est stock\xe9e pendant la p\xe9riode sp\xe9cifi\xe9e dans les Services avant la collecte.",
          ],
          de: [
            "Standortinformationen",
            " Wir k\xf6nnen Daten zum geografischen Standort Ihres Ger\xe4ts sammeln, wenn Sie unsere Dienste auf einer iOS- oder Android-Plattform benutzen oder anderweitig Ihre Zustimmung zur Sammlung dieser Daten erteilen. Sie k\xf6nnen Ihr Einverst\xe4ndnis zur Sammlung von durch die Plattform bereitgestellten Standortdaten durch die \xc4nderung der Einstellungen Ihres Ger\xe4ts widerrufen. Ihr Standort wird w\xe4hrend des in den Diensten angegebenen Zeitraums vor der Sammlung gespeichert.",
          ],
          es: [
            "Informaci\xf3n de ubicaci\xf3n",
            "podemos recopilar informaci\xf3n acerca de la ubicaci\xf3n geogr\xe1fica de su dispositivo cada vez que utilice los Servicios suministrados en plataformas iOS o Android o autorizar de otra forma la recopilaci\xf3n de esos datos. Puede retirar el consentimiento a la recopilaci\xf3n de los datos de ubicaci\xf3n suministrados por la plataforma a trav\xe9s de la configuraci\xf3n de su dispositivo. Su ubicaci\xf3n se almacenar\xe1 durante el per\xedodo de tiempo especificado en los Servicios antes de su recopilaci\xf3n.",
          ],
          it: [
            "Informazioni sulla posizione",
            "Abbiamo la facolt\xe0 di raccogliere informazioni sulla posizione geografica del dispositivo ogni volta che l'Utente usufruisce dei Servizi forniti su piattaforme iOS o Android o comunque acconsente alla raccolta di queste informazioni. L'Utente ha la facolt\xe0 di ritirare il proprio consenso alla raccolta dei dati sulla posizione forniti dalla piattaforma utilizzando le impostazioni sul proprio dispositivo. La posizione dell'Utente viene memorizzata per il periodo specificato nei Servizi prima della raccolta.",
          ],
        },
        x = {
          ja: [
            "\u30af\u30c3\u30ad\u30fc\uff08Cookie\uff09\u305d\u306e\u4ed6\u306e\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u6280\u8853\u306b\u3088\u308a\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",
            '\u5f53\u793e\u306f\u3001\u69d8\u3005\u306a\u6280\u8853\u3092\u7528\u3044\u3066\u60c5\u5831\uff08\u500b\u4eba\u60c5\u5831\u3082\u542b\u3080\uff09\u3092\u53ce\u96c6\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u4f8b\u3068\u3057\u3066\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30af\u30c3\u30ad\u30fc\u306e\u9001\u4fe1\u3082\u542b\u307e\u308c\u307e\u3059\u3002\u30af\u30c3\u30ad\u30fc\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30cf\u30fc\u30c9\u30c9\u30e9\u30a4\u30d6\u4e0a\u307e\u305f\u306f\u30e1\u30e2\u30ea\u30fc\u5185\u306b\u4fdd\u5b58\u3055\u308c\u308b\u5c0f\u3055\u306a\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u308a\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u304a\u3088\u3073\u304a\u5ba2\u69d8\u306e\u4f53\u9a13\u306e\u5411\u4e0a\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u304a\u3044\u3066\u4eba\u6c17\u306e\u3042\u308b\u9818\u57df\u304a\u3088\u3073\u6a5f\u80fd\u306e\u7279\u5b9a\u3001\u306a\u3089\u3073\u306b\u8a2a\u554f\u6570\u306e\u7b97\u5b9a\u306b\u969b\u3057\u3001\u5f53\u793e\u306e\u52a9\u3051\u3068\u306a\u308b\u3082\u306e\u3067\u3059\u3002\u30af\u30c3\u30ad\u30fc\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u5f53\u793e\u306e<a href="https://legal.bandainamcoent.co.jp/privacy/cookie-jp" target="_blank" rel="noopener noreferrer">\u300c\u30af\u30c3\u30ad\u30fc\uff08Cookie\uff09\u306e\u4f7f\u7528\u306b\u3064\u3044\u3066\u300d</a>\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
          ],
          en: [
            "Information Collected by Cookies and Other Tracking Technologies",
            'We use various technologies to collect information (which may include personal information), and this may include sending cookies to your computer or mobile device. Cookies are small data files stored on your computer hard drive or in device memory that help us to improve our Services and your experience, see which areas and features of our Services are popular and count visits. For more information on cookies, please visit our Cookie Policy at: <a href="https://legal.bandainamcoent.co.jp/privacy/cookies" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/cookies</a>',
          ],
          fr: [
            "Informations collect\xe9es par des cookies et autres technologies de suivi",
            'nous employons diverses technologies pour collecter des informations (y compris des informations personnelles), ce qui peut comprendre l\u2019envoi de cookies sur votre ordinateur ou appareil mobile. Les cookies sont de petits fichiers de donn\xe9es stock\xe9s sur le disque dur de votre ordinateur ou dans la m\xe9moire de votre appareil qui nous aident \xe0 am\xe9liorer nos Services et votre exp\xe9rience, \xe0 savoir quelles rubriques et fonctions de nos Services sont populaires et \xe0 comptabiliser les visites. Pour de plus amples informations sur les cookies, veuillez consulter notre Politique sur les cookies disponible \xe0 l\u2019adresse suivante : <a href="https://legal.bandainamcoent.co.jp/privacy/cookies" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/cookies</a>',
          ],
          de: [
            "Mithilfe von Cookies und anderen Tracking-Technologien gesammelte Informationen",
            'Wir sammeln Daten (darunter k\xf6nnen auch personenbezogene Daten sein) mithilfe verschiedener Techniken, u. a. auch indem wir Cookies an Ihren Computer oder Ihr Mobilger\xe4t senden. Cookies sind kleine Dateien, die auf der Festplatte Ihres Computers oder im Ger\xe4tespeicher abgelegt werden und uns dazu dienen, unsere Dienste und Ihr Nutzungserlebnis zu verbessern, indem wir herausfinden, welche Bereiche und Funktionen unserer Dienste beliebt sind, und Besuche zu z\xe4hlen. F\xfcr weitere Informationen \xfcber Cookies lesen Sie bitte unsere Cookie-Richtlinien unter: <a href="https://legal.bandainamcoent.co.jp/privacy/cookies" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/cookies</a>',
          ],
          es: [
            "Informaci\xf3n recopilada por cookies y otras tecnolog\xedas de seguimiento",
            'utilizamos diferentes tecnolog\xedas para recopilar informaci\xf3n (incluida informaci\xf3n personal), entre las que pueden incluirse el env\xedo de cookies a su ordenador o dispositivo m\xf3vil. Las cookies son peque\xf1os archivos de datos que se almacenan en el disco duro de su ordenador o en la memoria del dispositivo y nos ayudan a mejorar nuestros Servicios y su experiencia, ver qu\xe9 \xe1reas y prestaciones de nuestros Servicios son populares y hacer un recuento de las visitas. Para obtener m\xe1s informaci\xf3n sobre las cookies, visite nuestra Pol\xedtica de cookies en: <a href="https://legal.bandainamcoent.co.jp/privacy/cookies" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/cookies.<a/>',
          ],
          it: [
            "Informazioni raccolte dai cookie e altre tecnologie di rilevamento",
            'Utilizziamo diverse tecnologie per raccogliere informazioni (comprese le informazioni personali), che possono comportare anche l\'invio di cookie al computer o al dispositivo mobile dell\'Utente. I cookie sono piccoli file di dati memorizzati sul disco rigido del computer o nella memoria del dispositivo che ci aiutano a migliorare i nostri Servizi e l\'esperienza utente, a vedere quali aree e funzionalit\xe0 dei nostri Servizi sono maggiormente richieste e a conteggiare le visite. Per ulteriori informazioni sui cookie si consiglia di consultare la nostra Informativa sui cookie all\u2019indirizzo: <a href="https://legal.bandainamcoent.co.jp/privacy/cookies" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/cookies</a> .',
          ],
        },
        Z = {
          ja: [
            "\u304a\u5ba2\u69d8\u306e\u50be\u5411\u5206\u6790\u60c5\u5831",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306e\u55dc\u597d\u3001\u7279\u6027\u3001\u884c\u52d5\u304a\u3088\u3073\u672c\u30b5\u30fc\u30d3\u30b9\u306e\u4f7f\u7528\u5b9f\u7e3e\u306a\u3069\u306e\u60c5\u5831\u306b\u57fa\u3065\u3044\u3066\u50be\u5411\u5206\u6790\u3092\u3057\u3001\u304a\u5ba2\u69d8\u306e\u540c\u610f\u3092\u5f97\u3066\u3001\u305d\u306e\u5206\u6790\u7d50\u679c\u3092\u4ed6\u306e\u60c5\u5831\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u5229\u7528\u3057\u307e\u3059\u3002",
          ],
          en: [
            "Profile Information",
            "We create profiles based upon your preferences, characteristics, behavior and other information from your use of the Services, and with your consent, we combine that information with information from other sources.",
          ],
          fr: [
            "Informations sur le profil",
            "nous cr\xe9ons des profils \xe0 partir de vos pr\xe9f\xe9rences, de vos caract\xe9ristiques, de votre comportement et d\u2019autres informations tir\xe9es de l\u2019utilisation que vous faites des Services et, avec votre consentement, nous combinons ces informations \xe0 celles tir\xe9es d\u2019autres sources.",
          ],
          de: [
            "Profilinformationen",
            "Wir erstellen Profile auf der Grundlage Ihrer Pr\xe4ferenzen, Merkmale, Verhaltensweisen und anderer Informationen aus Ihrer Nutzung der Dienste, und mit Ihrer Zustimmung kombinieren wir diese Informationen mit Informationen aus anderen Quellen.",
          ],
          es: [
            "Informaci\xf3n de perfil",
            "generamos perfiles basados en sus preferencias, caracter\xedsticas, comportamiento y otra informaci\xf3n procedente del uso que hace de los Servicios, y con su consentimiento, combinamos esa informaci\xf3n con la de otras fuentes.",
          ],
          it: [
            "Informazioni sul profilo",
            "creiamo profili sulla base delle preferenze, delle caratteristiche, del comportamento e di altre informazioni dell'Utente derivanti dal suo utilizzo dei Servizi e, previo consenso dell'Utente, combiniamo tali informazioni con quelle provenienti da altre fonti.",
          ],
        },
        N = {
          ja: [
            "\u5f53\u793e\u304c\u7b2c\u4e09\u8005\u304b\u3089\u53ce\u96c6\u3059\u308b\u60c5\u5831",
            '\u5f53\u793e\u306f\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5b9f\u65bd\u306b\u5fc5\u8981\u3067\u3042\u308b\u9650\u308a\u306b\u304a\u3044\u3066\u3001\u7b2c\u4e09\u8005\u304b\u3089\u3082\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u3001\u307e\u305f\u3001\u5f53\u8a72\u60c5\u5831\u540c\u58eb\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u308a\u3001\u5f53\u8a72\u60c5\u5831\u3068\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3092\u901a\u3058\u3066\u53ce\u96c6\u3057\u305f\u60c5\u5831\u3068\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u5f53\u793e\u306f\u3001\u30b2\u30fc\u30e0\u30b3\u30f3\u30bd\u30fc\u30eb\u307e\u305f\u306fiOS\u3082\u3057\u304f\u306fAndroid\u305d\u306e\u4ed6\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u63d0\u4f9b\u3059\u308b\u4e8b\u696d\u8005\uff08\u4ee5\u4e0b\u300c\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30de\u30fc\u300d\u3068\u3044\u3044\u307e\u3059\uff09\u304b\u3089\u3001\u304a\u5ba2\u69d8\u306e\u30b2\u30fc\u30e0\u30e9\u30f3\u30ad\u30f3\u30b0\u304a\u3088\u3073\u9054\u6210\u72b6\u6cc1\u3092\u53ce\u96c6\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u304a\u5ba2\u69d8\u304c\u7b2c\u4e09\u8005\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff08Facebook\u3084Twitter\u306a\u3069\uff09\u3092\u901a\u3058\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u307e\u305f\u306f\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u5834\u5408\u3001\u5f53\u793e\u306f\u3001\u5f53\u8a72\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u304a\u5ba2\u69d8\u304b\u3089\u5f97\u305f\u540c\u610f\u306b\u5f93\u3063\u3066\u3001\u304a\u5ba2\u69d8\u306e\u540d\u524d\u3001\u8a95\u751f\u65e5\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5199\u771f\u306a\u3069\u306e\u7279\u5b9a\u306e\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u304a\u5ba2\u69d8\u304c\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u4e0a\u3067\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u3059\u308b\u611f\u60f3\u3084\u4ed6\u306e\u60c5\u5831\u3092\u516c\u958b\u3057\u305f\u5834\u5408\u3001\u5f53\u793e\u306f\u3001\u5f53\u8a72\u516c\u958b\u60c5\u5831\uff08\u305f\u3060\u3057\u3001\u5f53\u8a72\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u4e0a\u3067\u304a\u5ba2\u69d8\u304c\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u540d\u306f\u542b\u307f\u307e\u305b\u3093\u3002\uff09\u3092\u53ce\u96c6\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u304a\u5ba2\u69d8\u304c\u30a2\u30d7\u30ea\u8cfc\u5165\u3092\u5b8c\u4e86\u3057\u305f\u5834\u5408\u3001\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3092\u63d0\u4f9b\u3059\u308b\u4e8b\u696d\u8005\uff08\u4ee5\u4e0b\u300cOS\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u300d\u3068\u3044\u3044\u307e\u3059\uff09\u304c\u5f53\u793e\u306b\u4ee3\u308f\u3063\u3066\u5f53\u8a72\u8cfc\u5165\u3092\u51e6\u7406\u3059\u308b\u969b\u306b\u3001\u5f53\u8a72OS\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u304b\u3089\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u53ce\u96c6\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u5f53\u793e\u306f\u3001OS\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u304b\u3089\u304a\u5ba2\u69d8\u306e\u652f\u6255\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u53d7\u9818\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\n\u7b2c\u4e09\u8005\u306b\u95a2\u3059\u308b\u8a73\u7d30\u60c5\u5831\u306f<a href="https://legal.bandainamcoent.co.jp/privacy/vender-jp" target="_blank" rel="noopener noreferrer">\u3053\u3061\u3089</a>\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002',
          ],
          en: [
            "Information We Collect From Third Parties",
            'We may also obtain information from other sources as far as it is necessary to perform our Services, and combine that with information we collect through our Services. For instance, we may collect game ranking and achievement status from your console or mobile operating system game center application. We also obtain publicly available information from social media monitoring service platform. If you create or log into your BNEI account through a third-party platform (such as Facebook or Twitter), we will have access to certain information from that platform, such as your name, birthday, and profile picture, in accordance with the authorization you give to such platform. Additionally, when you complete in-app purchases, we may collect information about you from the provider of your device operating system when they process the purchases on our behalf. Please note that we do not receive your payment method information from the operating system providers. In other cases, we will ask you to authorize us to collect, store, and use personal information from third parties.\n\nFor more information about third party sources, please see <a href="https://legal.bandainamcoent.co.jp/privacy/vender-en" target="_blank" rel="noopener noreferrer">here https://legal.bandainamcoent.co.jp/privacy/vender-en.</a>',
          ],
          fr: [
            "Informations que nous collectons aupr\xe8s de tiers",
            'Nous pouvons \xe9galement obtenir des informations aupr\xe8s d\u2019autres sources dans la mesure n\xe9cessaire pour ex\xe9cuter nos Services et les associer aux informations que nous collectons par le biais de nos Services. Par exemple, nous pouvons collecter le classement \xe0 un jeu et le niveau atteint depuis votre console ou l\u2019application centre de jeu du syst\xe8me d\u2019exploitation de votre appareil mobile. Nous obtenons \xe9galement des informations accessibles au public aupr\xe8s de la plateforme de surveillance des m\xe9dias sociaux. Si vous cr\xe9ez votre compte BNEI ou si vous vous y connectez depuis une plateforme tierce (comme Facebook ou Twitter), nous aurons acc\xe8s \xe0 certaines informations \xe0 partir de cette plateforme, notamment votre nom, votre date d\u2019anniversaire et votre photo de profil, conform\xe9ment aux autorisations que vous conf\xe9rez \xe0 cette plateforme. En outre, lorsque vous r\xe9alisez des achats int\xe9gr\xe9s \xab in-app \xbb, nous pouvons collecter des informations vous concernant aupr\xe8s du fournisseur du syst\xe8me d\u2019exploitation de votre appareil lorsqu\u2019il traite les achats pour notre compte. Veuillez noter que nous ne recevons pas d\u2019informations relatives \xe0 votre moyen de paiement de la part des fournisseurs de syst\xe8me d\u2019exploitation. Dans les autres cas, nous solliciterons votre autorisation afin de collecter, stocker et utiliser des informations personnelles provenant de tiers. \n\nPour de plus amples informations concernant les sources tierces, veuillez consulter <a href="https://legal.bandainamcoent.co.jp/privacy/vender-fr" target="_blank" rel="noopener noreferrer">ce lien https://legal.bandainamcoent.co.jp/privacy/vender-fr</a>.',
          ],
          de: [
            "Von Dritten gesammelte Informationen",
            'Wir k\xf6nnen au\xdferdem Daten aus anderen Quellen sammeln, insofern sie zur Bereitstellung unserer Dienste erforderlich sind, und sie mit im Rahmen unserer Dienste gesammelten Informationen kombinieren. So k\xf6nnen wir z. B. Spielrangfolge und Erfolgsstatus von Ihrer Spielanwendung auf Ihrer Konsole oder Ihrem Mobil-Betriebssystem erfassen. Wir erfassen auch \xf6ffentlich zug\xe4ngliche Informationen \xfcber eine Social-Media-Monitoring-Dienstplattform. Wenn Sie Ihr BNEI-Konto \xfcber eine Drittplattform (z. B. Facebook oder Twitter) erstellen oder sich \xfcber eine solche Plattform daran anmelden, erhalten wir, gem\xe4\xdf den Berechtigungen, die Sie dieser Plattform erteilt haben, Zugriff auf bestimmte Informationen von dieser Plattform, darunter Ihren Namen, Ihr Geburtsdatum und Ihr Profilbild. Wenn Sie In-App-K\xe4ufe vornehmen, k\xf6nnen wir zus\xe4tzlich Informationen \xfcber Sie vom Provider des Betriebssystems Ihres Ger\xe4tes einholen, wenn dieser die K\xe4ufe f\xfcr Sie bearbeitet. Wir weisen Sie darauf hin, dass uns die Betriebssystemanbieter keine Angaben zu Ihrer Zahlungsmethode zur Verf\xfcgung stellen. In anderen F\xe4llen werden wir Ihre Genehmigung einholen, um personenbezogene Daten von Dritten zu sammeln, zu speichern und zu verwenden.\n\nWeitere Informationen zu Drittquellen finden Sie <a href="https://legal.bandainamcoent.co.jp/privacy/vender-de" target="_blank" rel="noopener noreferrer">hier https://legal.bandainamcoent.co.jp/privacy/vender-de</a>.',
          ],
          es: [
            "Informaci\xf3n que recopilamos de terceros",
            'Tambi\xe9n podemos obtener informaci\xf3n de otras fuentes en la medida en que sea preciso para prestar nuestros Servicios y combinarla con informaci\xf3n recopilada a trav\xe9s de estos. Por ejemplo, podemos recopilar la clasificaci\xf3n de los juegos y el estatus de logros desde la aplicaci\xf3n del centro de juegos del sistema operativo de su consola o tel\xe9fono m\xf3vil. Tambi\xe9n obtenemos informaci\xf3n disponible p\xfablicamente de la plataforma de servicios de supervisi\xf3n de redes sociales. Si crea o inicia sesi\xf3n en su cuenta de BNEI a trav\xe9s de una plataforma externa (como Facebook o Twitter), tendremos acceso a determinada informaci\xf3n de dicha plataforma, como su nombre, cumplea\xf1os y foto de perfil, de acuerdo con la autorizaci\xf3n que d\xe9 a dicha plataforma. Adem\xe1s, cuando complete compras desde las aplicaciones, podremos recopilar informaci\xf3n acerca de usted del proveedor del sistema operativo de su dispositivo cuando este procese las compras en su nombre. Tenga en cuenta que no recibiremos los datos acerca de su forma de pago de los proveedores de sistemas operativos. En otros casos, le pediremos que nos autorice para recopilar, almacenar y utilizar datos personales de terceros.\n\nPara m\xe1s informaci\xf3n sobre las fuentes de terceros, consulte <a href="https://legal.bandainamcoent.co.jp/privacy/vender-es" target="_blank" rel="noopener noreferrer">aqu\xed. https://legal.bandainamcoent.co.jp/privacy/vender-es</a>',
          ],
          it: [
            "Informazioni che raccogliamo da soggetti terzi",
            "Possiamo ottenere informazioni anche da  soggetti terzi, nella misura in cui ci\xf2 si renda necessario per poter fornire i nostri Servizi, e possiamo combinare tali dati con quelli che raccogliamo attraverso i nostri Servizi. Potremmo ad esempio raccogliere informazioni sulle posizioni in classifica del gioco e lo stato di completamento degli obiettivi dall'applicazione game center del sistema operativo della console o del cellulare. Otteniamo anche informazioni disponibili pubblicamente dalla piattaforma di servizi di monitoraggio dei social media. Quando l'Utente crea un account BNEI o vi accede attraverso una piattaforma di terzi (come Facebook o Twitter), avremo accesso a determinate informazioni di tale piattaforma, come il nome, la data di nascita e l'immagine del profilo, a seconda delle autorizzazioni concesse a tale piattaforma da parte dell'Utente. Potremmo inoltre, quando l'Utente effettua acquisti in-app, raccogliere informazioni sull'Utente dal provider del sistema operativo del dispositivo nel momento in cui elabora gli acquisti per nostro conto. Si prega di notare che non riceviamo informazioni sul metodo di pagamento dell'Utente da parte dei provider del sistema operativo. Negli altri casi chiediamo all'Utente di autorizzarci a raccogliere, archiviare e utilizzare le informazioni personali provenienti da terzi.\n\nPer ulteriori informazioni riguardo alle fonti di soggetti terzi, si veda <a href=\"https://legal.bandainamcoent.co.jp/privacy/vender-it\" target=\"_blank\" rel=\"noopener noreferrer\">qui https://legal.bandainamcoent.co.jp/privacy/vender-it</a>.",
          ],
        },
        A = {
          ja: [
            "\u60c5\u5831\u306e\u5229\u7528",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306e\u540c\u610f\u304c\u3042\u308b\u5834\u5408\u3001\u307e\u305f\u306f\u6b21\u306e\u3044\u305a\u308c\u304b\u306b\u3068\u3063\u3066\u5fc5\u8981\u306a\u7bc4\u56f2\u3067\u3042\u308b\u5834\u5408\u306b\u9650\u308a\u3001\u304a\u5ba2\u69d8\u306e\u60c5\u5831\u306e\u53ce\u96c6\u3001\u4fdd\u7ba1\u304a\u3088\u3073\u5229\u7528\u3092\u884c\u3044\u307e\u3059\u3002(i) \u304a\u5ba2\u69d8\u3068\u5f53\u793e\u3068\u306e\u9593\u306e\u5951\u7d04\u3092\u5c65\u884c\u3059\u308b\u305f\u3081\u3001(ii) \u5f53\u793e\u306e\u6cd5\u7684\u7fa9\u52d9\u3092\u9075\u5b88\u3059\u308b\u305f\u3081\u3001\u307e\u305f\u306f (iii) \u5f53\u793e\u306e\u6b63\u5f53\u306a\u5229\u76ca\uff08\u5f53\u793e\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u4e8b\u696d\u306e\u904b\u55b6\u3001\u8a55\u4fa1\u304a\u3088\u3073\u6539\u5584\u3082\u542b\u3080\uff09\u306e\u305f\u3081\u3002\u5f53\u793e\u306f\u3001\u5f53\u793e\u306e\u6b63\u5f53\u306a\u4e8b\u696d\u4e0a\u306e\u5229\u76ca\u3068\u304a\u5ba2\u69d8\u306e\u4fdd\u8b77\u6cd5\u76ca\u3068\u306e\u8861\u91cf\u3092\u614e\u91cd\u306b\u884c\u3063\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u5229\u76ca\u8861\u91cf\u306b\u95a2\u3057\u3066\u3054\u4e0d\u660e\u306a\u70b9\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001\u5f8c\u8ff0\u306e\u554f\u3044\u5408\u308f\u305b\u5148\u5b9b\u3066\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\n\n\u7279\u306b\u3001\u5f53\u793e\uff08\u307e\u305f\u306f\u5f53\u793e\u306e\u59d4\u8a17\u5148\uff09\u306f\u3001\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u4ee5\u4e0b\u306e\u76ee\u7684\u306e\u305f\u3081\u3001\u5f53\u8a72\u76ee\u7684\u306e\u9054\u6210\u306b\u5fc5\u8981\u3068\u3055\u308c\u308b\u671f\u9593\u306b\u308f\u305f\u308a\u3001\u53ce\u96c6\u3001\u4fdd\u7ba1\u304a\u3088\u3073\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",
          ],
          en: [
            "Use of Information",
            "We only collect, store and use your information if you have consented to it or, to the extent that it is necessary (i) for the performance of your agreement with us; (ii) to comply with our legal obligations; or (iii) for the purpose of our legitimate interests, including operating, evaluating and improving our global business. We have carefully balanced our legitimate business interests against your interests. Please contact us using the contact details provided below if you have questions on this balancing of interests. \n\nWe (or a third party data processor on our behalf) may collect, store and use information about you for the following purposes for the periods necessary to achieve such purposes:",
          ],
          fr: [
            "Utilisation des informations",
            "Nous ne collectons, stockons et utilisons vos informations qu'avec votre consentement ou dans la mesure o\xf9 celles-ci sont n\xe9cessaires (i) \xe0 l'ex\xe9cution de l'accord qui nous lie ; (ii) pour nous conformer \xe0 nos obligations l\xe9gales ; ou (iii) pour servir nos int\xe9r\xeats l\xe9gitimes, comme l'exploitation, l'\xe9valuation et l'am\xe9lioration de l'ensemble de nos activit\xe9s. La d\xe9finition de ces int\xe9r\xeats commerciaux l\xe9gitimes a fait l'objet d'une r\xe9flexion approfondie afin de garantir vos droits. Merci de nous contacter en utilisant les coordonn\xe9es fournies ci-dessous pour toute question \xe0 ce sujet. \n\nBNEI (ou tout tiers charg\xe9 du traitement des donn\xe9es en notre nom) se r\xe9serve le droit de collecter, stocker et utiliser des informations vous concernant aux fins suivantes et pendant toute la dur\xe9e n\xe9cessaire \xe0 leur r\xe9alisation :",
          ],
          de: [
            "Nutzung der Daten",
            "Wir sammeln, speichern und verwenden Ihre Daten nur, wenn Sie dieser Nutzung zugestimmt haben, oder, soweit erforderlich, (i) f\xfcr die Erf\xfcllung Ihres Vertrages mit uns; (ii) zur Erf\xfcllung rechtlicher Anforderungen; oder (iii) zur Verfolgung berechtigter Interessen, einschlie\xdflich Betrieb, Evaluation und Verbesserung unseres weltweiten Unternehmens. Wir haben unsere berechtigten Interessen sorgf\xe4ltig gegen\xfcber Ihren Interessen abgewogen. Bitte nehmen Sie \xfcber die unten angegebenen Kontaktm\xf6glichkeiten mit uns Kontakt auf, wenn Sie Fragen zu diesem Abwiegen der Interessen haben.\n\nWir (oder ein f\xfcr uns t\xe4tiger Datenverarbeiter) k\xf6nnen Informationen \xfcber Sie jeweils zu den folgenden Zwecken und \xfcber den zur Erreichung dieser Zwecke erforderlichen Zeitraum sammeln, speichern und verwerten:",
          ],
          es: [
            "Uso de la informaci\xf3n",
            "Solo recopilamos, almacenamos y usamos su informaci\xf3n si usted ha dado su consentimiento o, en la medida en que sea necesario i) para el cumplimiento de su contrato con nosotros; ii) para cumplir con nuestras obligaciones legales; o iii) para nuestros intereses leg\xedtimos, incluido el funcionamiento, evaluaci\xf3n y mejora de nuestro negocio global. Hemos equilibrado cuidadosamente nuestros intereses comerciales leg\xedtimos frente a sus intereses. Si tiene preguntas sobre este equilibrio de intereses, p\xf3ngase en contacto con nosotros a trav\xe9s de los datos de contacto indicados m\xe1s adelante.\n\nNosotros (o un encargado externo del tratamiento de datos en nuestro nombre) podremos recopilar, almacenar y utilizar datos sobre usted para los siguientes fines durante los per\xedodos de tiempo necesarios para su consecuci\xf3n:",
          ],
          it: [
            "Utilizzo delle informazioni",
            "Raccogliamo, archiviamo e utilizziamo le informazioni personali dell\u2019Utente solo se questi ha espresso il suo consenso in merito o nella misura in cui ci\xf2 sia necessario (i) per dare esecuzione all\u2019accordo stipulato tra noi e l\u2019Utente, (ii) per adempiere ai nostri obblighi legali o (iii) per perseguire i nostri interessi legittimi, tra cui la gestione, l\u2019analisi e il miglioramento delle nostre attivit\xe0 globali. Abbiamo bilanciato attentamente i nostri legittimi interessi commerciali con gli interessi dell\u2019Utente. In caso di domande su tale bilanciamento di interessi invitiamo gli utenti a contattarci utilizzando i dati di contatto forniti di seguito.\n\nNoi (o un responsabile del trattamento dei dati terzo agente per nostro conto) abbiamo la facolt\xe0 di raccogliere, archiviare e utilizzare le informazioni sull'Utente al fine di perseguire i seguenti scopi e per tutto il periodo necessario a raggiungerli:",
          ],
        },
        E = {
          ja: ["", "\u5229\u7528\u76ee\u7684\u6982\u8981"],
          en: ["Legal Basis", "How We Use Your Information"],
          fr: [
            "Fondement juridique",
            "Fa\xe7on dont nous utilisons vos informations",
          ],
          de: ["Rechtsgrundlage", "Wie wir Ihre Daten nutzen"],
          es: ["Base legal", "Fines para los que utilizamos su informaci\xf3n"],
          it: [
            "Base giuridica",
            "Come utilizziamo le informazioni dell'Utente",
          ],
        },
        P = {
          ja: "\u304a\u5ba2\u69d8\u3068\u5f53\u793e\u3068\u306e\u9593\u306e\u5951\u7d04\u3092\u5c65\u884c\u3059\u308b\u305f\u3081",
          en: "Performance of Your Agreement with Us",
          fr: "Ex\xe9cution de votre contrat avec nous",
          de: "Erf\xfcllung Ihrer Vereinbarung mit uns",
          es: "Cumplimiento de su acuerdo con nosotros",
          it: "Esecuzione del Contratto stipulato con l'Utente",
        },
        T = {
          ja: "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u63d0\u4f9b\u306e\u305f\u3081\u3002",
          en: "Provide our Services",
          fr: "Fournir nos Services.",
          de: "Bereitstellung unserer Dienste",
          es: "Prestar nuestros Servicios",
          it: "Fornire i nostri Servizi",
        },
        U = {
          ja: "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u3059\u308b\u304a\u5ba2\u69d8\u304b\u3089\u306e\u30b3\u30e1\u30f3\u30c8\u3001\u554f\u3044\u5408\u308f\u305b\u304a\u3088\u3073\u4f9d\u983c\u306b\u5bfe\u5fdc\u3057\u3001\u95a2\u9023\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3002",
          en: "Provide and deliver the products and services you request, process transactions and send you related information",
          fr: "Fournir et livrer les produits et services que vous demandez, traiter des transactions et vous envoyer des informations apparent\xe9es.",
          de: "Bereitstellung und Lieferung der von Ihnen angeforderten Produkte und Dienste, Bearbeitung von Transaktionen und \xdcbermittlung damit verbundener Informationen an Sie",
          es: "Suministrarle y prestarle los productos y servicios que solicite, tramitar las transacciones y enviarle informaci\xf3n relacionada",
          it: "Fornire e consegnare i prodotti e servizi richiesti dall'Utente, elaborare le transazioni e inviare le relative informazioni all'Utente",
        },
        L = {
          ja: "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u304a\u3044\u3066\u304a\u5ba2\u69d8\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u3092\u884c\u3046\u3068\u3068\u3082\u306b\u3001\u304a\u5ba2\u69d8\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u7ba1\u7406\u3092\u652f\u63f4\u3059\u308b\u305f\u3081\u3002",
          en: "Register you for an account on our Services and assist in the management of your account",
          fr: "Cr\xe9er votre compte sur nos Services et vous accompagner dans la gestion de votre compte.",
          de: "Ihre Registrierung f\xfcr ein Konto f\xfcr unsere Dienste und Unterst\xfctzung bei der Verwaltung Ihres Kontos",
          es: "Registrarle para una cuenta en nuestros Servicios y ayudarle en la gesti\xf3n de esta",
          it: "Registrare un account per l'Utente per l'accesso ai nostri Servizi e supportare l'Utente nella gestione dello stesso",
        },
        W = {
          ja: "\u305d\u306e\u4ed6\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u9650\u3089\u305a\u304a\u5ba2\u69d8\u304b\u3089\u306e\u30b3\u30e1\u30f3\u30c8\u3001\u554f\u3044\u5408\u308f\u305b\u304a\u3088\u3073\u4f9d\u983c\u306b\u5bfe\u5fdc\u3057\u3001\u30ab\u30b9\u30bf\u30de\u30fc\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3002",
          en: "Respond to your comments, questions and requests and provide customer service",
          fr: "R\xe9pondre \xe0 vos commentaires, questions et demandes et offrir un service clients.",
          de: "Beantwortung Ihrer Kommentare, Fragen und Anforderungen sowie Kundendienstbereitstellung",
          es: "Responder a sus comentarios, preguntas y solicitudes y prestarle servicios de atenci\xf3n al cliente",
          it: "Rispondere a commenti, domande e richieste dell'Utente e fornire un servizio di assistenza clienti",
        },
        _ = {
          ja: "\u6280\u8853\u4e0a\u306e\u544a\u77e5\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a2\u30e9\u30fc\u30c8\u304a\u3088\u3073\u30b5\u30dd\u30fc\u30c8\u306e\u307b\u304b\u3001\u4e8b\u52d9\u624b\u7d9a\u4e0a\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u304a\u5ba2\u69d8\u306b\u9001\u4fe1\u3059\u308b\u305f\u3081\u3002",
          en: "Send you technical notices, updates, security alerts and support and administrative messages",
          fr: "Vous envoyer des notifications techniques, des mises \xe0 jour, des alertes de s\xe9curit\xe9 et des messages d\u2019aide et de gestion.",
          de: "Versendung von technischen Mitteilungen, Updates, Sicherheitswarnungen und Support- und verwaltungstechnischen Nachrichten an Sie",
          es: "Enviarle notificaciones t\xe9cnicas, actualizaciones, alertas de seguridad y mensajes de soporte y administrativos",
          it: "Inviare all'Utente avvisi tecnici, aggiornamenti, avvisi di sicurezza e messaggi di assistenza e amministrativi",
        },
        M = {
          ja: "\u5f53\u793e\u306e\u4e3b\u50ac\u3059\u308b\u30b3\u30f3\u30c6\u30b9\u30c8\u3078\u306e\u53c2\u52a0\u306e\u51e6\u7406\u304a\u3088\u3073\u305d\u306e\u61f8\u8cde\u91d1\u306e\u63d0\u4f9b\u306e\u305f\u3081\u3002",
          en: "Process and deliver contest entries and rewards promoted by BNEI",
          fr: "Traiter et remettre les bulletins de participation \xe0 des jeux-concours dont BNEI assure la promotion, ainsi que les r\xe9compenses.",
          de: "Bearbeitung und Lieferung von Wettbewerbsbeitr\xe4gen und Preisen aus BNEI-Verkaufsf\xf6rderungsaktionen",
          es: "Procesar la participaci\xf3n y hacer entrega de las recompensas en los concursos promovidos por BNEI",
          it: "Elaborare e trasmettere partecipazioni a concorsi e ricompense promosse da BNEI",
        },
        C = {
          ja: "\u5f53\u793e\u306e\u6b63\u5f53\u306a\u5229\u76ca\uff08\u5f53\u793e\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u4e8b\u696d\u306e\u904b\u55b6\u3001\u8a55\u4fa1\u304a\u3088\u3073\u6539\u5584\u3082\u542b\u3080\uff09\u306e\u305f\u3081",
          en: "Legitimate Interest",
          fr: "Int\xe9r\xeat l\xe9gitime",
          de: "Berechtigtes Interesse",
          es: "Inter\xe9s leg\xedtimo",
          it: "Interesse legittimo",
        },
        R = {
          ja: "\u5f53\u793e\u306e\u6cd5\u5f8b\u4e0a\u304a\u3088\u3073\u898f\u5236\u4e0a\u306e\u7fa9\u52d9\u3092\u9075\u5b88\u3059\u308b\u305f\u3081\u306b\u5f53\u793e\u306b\u5fc5\u8981\u3067\u3042\u308b\u307e\u305f\u306f\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b\u4ed6\u306e\u4e00\u5207\u306e\u76ee\u7684\u306e\u305f\u3081\u3002",
          en: "For any purpose required or authorized for us to comply with our legal and regulatory obligations",
          fr: "\xc0 toute fin n\xe9cessaire ou autoris\xe9e afin de nous conformer \xe0 nos obligations juridiques et r\xe9glementaires.",
          de: "Zu s\xe4mtlichen sonstigen Zwecken, die f\xfcr uns erforderlich oder zul\xe4ssig sind, um unsere rechtlichen und beh\xf6rdlichen Auflagen zu erf\xfcllen",
          es: "Para cualquier prop\xf3sito requerido o autorizado con el objeto de que podamos cumplir con nuestras obligaciones legales y reglamentarias",
          it: "Per qualunque altro scopo richiesto o concesso che ci permetta di assolvere ai nostri doveri di natura legale o normativa",
        },
        F = {
          ja: "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u9023\u3059\u308b\u50be\u5411\u3001\u5229\u7528\u72b6\u6cc1\u304a\u3088\u3073\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3068\u5206\u6790\u306e\u305f\u3081\u3002",
          en: "Monitor and analyze trends, usage and activities in connection with our Services",
          fr: "Surveiller et analyser les tendances, l\u2019utilisation et les activit\xe9s en relation avec nos Services.",
          de: "Beobachtung und Analyse von Trends, Nutzung und Aktivit\xe4ten im Zusammenhang mit unseren Diensten",
          es: "Hacer un seguimiento y analizar tendencias, usos y actividades en relaci\xf3n con nuestros Servicios",
          it: "Monitorare e analizzare tendenze, utilizzi e attivit\xe0 in relazione ai nostri Servizi",
        },
        O = {
          ja: "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u9023\u3059\u308b\u8a50\u6b3a\u7684\u3001\u4e0d\u6b63\u307e\u305f\u306f\u9055\u6cd5\u306a\u6d3b\u52d5\u3092\u691c\u51fa\u3057\u3001\u8abf\u67fb\u3057\u304b\u3064/\u307e\u305f\u306f\u9632\u6b62\u3059\u308b\u305f\u3081\u3002",
          en: "Detect, investigate and/or prevent fraudulent, unauthorized or illegal activity",
          fr: "D\xe9tecter, enqu\xeater sur et/ou pr\xe9venir toute activit\xe9 frauduleuse, illicite ou ill\xe9gale.",
          de: "Aufdeckung, Ermittlung und/oder Verh\xfctung betr\xfcgerischer, unbefugter oder rechtswidriger Aktivit\xe4ten",
          es: "Detectar, investigar y/o evitar actividades fraudulentas, no autorizadas o ilegales",
          it: "Individuare, indagare su e/o prevenire attivit\xe0 fraudolente, non autorizzate o illegali",
        },
        V = {
          ja: "\u6cd5\u5b9a\u4ee3\u7406\u4eba\u306e\u8a31\u53ef\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u3002",
          en: "Obtain parent or legal guardian verification",
          fr: "Obtenir la v\xe9rification d\u2019un parent ou repr\xe9sentant l\xe9gal.",
          de: "Einholung des Nachweises \xfcber Eltern oder Erziehungsberechtigte",
          es: "Obtener la confirmaci\xf3n de los progenitores o tutores legales",
          it: "Ottenere la conferma del genitore o tutore legale di un utente minorenne",
        },
        X = {
          ja: "\u30b5\u30fc\u30d3\u30b9\u5185\u306b\u304a\u3044\u3066\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5e83\u544a\uff08\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u5e83\u544a\u3092\u9664\u304f\uff09\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3002",
          en: "Provide contextual in-Service advertisement",
          fr: "Fournir des publicit\xe9s contextuelles dans le cadre du Service.",
          de: "Zurverf\xfcgungstellung von kontextbezogener dienstinterner Werbung",
          es: "Proporcionar publicidad contextual dentro del Servicio",
          it: "Fornire annunci pubblicitari contestuali all'interno dei Servizi",
        },
        G = {
          ja: "",
          en: "Monitor, analyze and develop our brands on social media by using social media monitoring services",
          fr: "Surveiller, analyser et d\xe9velopper nos marques sur les m\xe9dias sociaux en utilisant des services de surveillance de ceux-ci.",
          de: "\xdcberwachung, Analyse und Entwicklung unserer Marken in Sozialen Medien durch den Einsatz von Social-Media-Monitoring-Diensten",
          es: "Supervisar, analizar y desarrollar nuestras marcas en las redes sociales mediante el uso de servicios de supervisi\xf3n de redes sociales",
          it: "Monitorare, analizzare e sviluppare i nostri brand sui social media utilizzando servizi di monitoraggio dei social media",
        },
        H = {
          ja: "\u540c\u610f\u304c\u3042\u308b\u5834\u5408",
          en: "Consent",
          fr: "Consentement",
          de: "Zustimmung",
          es: "Consentimiento",
          it: "Consenso",
        },
        K = {
          ja: [
            "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u9023\u3059\u308b\u50be\u5411\u3001\u5229\u7528\u72b6\u6cc1\u304a\u3088\u3073\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30fb\u5206\u6790\u3057\u3001\u304a\u5ba2\u69d8\u306e\u30cb\u30fc\u30ba\u3092\u628a\u63e1\u3057\u3066\u512a\u308c\u305f\u30b5\u30fc\u30d3\u30b9\u3092\u304a\u5ba2\u69d8\u306b\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3002\u305f\u3068\u3048\u3070\u3001\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u304c\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u4e0a\u3067\u516c\u958b\u3057\u305f\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u3059\u308b\u611f\u60f3\u3084\u4ed6\u306e\u60c5\u5831\u3092\u3001\u7b2c\u4e09\u8005\u304c\u63d0\u4f9b\u3059\u308b\u5206\u6790\u30c4\u30fc\u30eb\u3092\u7528\u3044\u3066\u5358\u72ec\u3067\u3001\u307e\u305f\u306f\u30b2\u30fc\u30e0\u30d7\u30ec\u30a4\u60c5\u5831\u306a\u3069\u306e\u4ed6\u306e\u60c5\u5831\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u5206\u6790\u3057\u3001\u304a\u5ba2\u69d8\u306e\u30cb\u30fc\u30ba\u3092\u628a\u63e1\u3057\u3066\u65b0\u305f\u306a\u30b5\u30fc\u30d3\u30b9\u306e\u63d0\u4f9b\u306b\u5f79\u7acb\u3066\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",
            "\u5f53\u793e\u307e\u305f\u306f\u5f53\u793e\u306e\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\u3082\u3057\u304f\u306f\u53d6\u5f15\u5148\u306b\u3088\u308a\u63d0\u4f9b\u3055\u308c\u308b\u88fd\u54c1\u3001\u30b5\u30fc\u30d3\u30b9\u3001\u63d0\u6848\u3001\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u3001\u5831\u5968\u304a\u3088\u3073\u30a4\u30d9\u30f3\u30c8\u30fb\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u306a\u3069\u306b\u95a2\u3057\u3066\u304a\u5ba2\u69d8\u306b\u544a\u77e5\u3084\u901a\u77e5\uff08\u30a4\u30d9\u30f3\u30c8\u30fb\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u306a\u3069\u306e\u5f53\u9078\u901a\u77e5\u3092\u542b\u307f\u307e\u3059\uff09\u3092\u884c\u3046\u305f\u3081\u3002\u307e\u305f\u3001\u304a\u5ba2\u69d8\u306e\u8208\u5473\u95a2\u5fc3\u306b\u5408\u3046\u3068\u5f53\u793e\u304c\u5224\u65ad\u3059\u308b\u5e83\u544a\u3001\u30cb\u30e5\u30fc\u30b9\u3001\u60c5\u5831\u305d\u306e\u4ed6\u306e\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u8cc7\u6599\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3002",
            "\u5f53\u793e\u304c\u7b2c\u4e09\u8005\u304b\u3089\u53d6\u5f97\u3057\u305f\u60c5\u5831\u3092\u9023\u643a\u307e\u305f\u306f\u7d44\u307f\u5408\u308f\u305b\u305f\u308a\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u5404\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3054\u3068\u306e\u53ce\u76ca\u50be\u5411\u306e\u5206\u6790\u3001\u304a\u5ba2\u69d8\u306e\u5c5e\u6027\u5225\u7d71\u8a08\u30c7\u30fc\u30bf\u306e\u4f5c\u6210\u3001\u65b0\u3057\u3044\u30b2\u30fc\u30e0\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u5275\u51fa\u3001\u305d\u306e\u4ed6\u306e\u5206\u6790\u3092\u884c\u3046\u305f\u3081\u3002",
            "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u5185\u306e\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u5e83\u544a\u51fa\u7a3f\u306e\u305f\u3081\uff08\u4ee5\u4e0b\u3092\u542b\u3080\uff09\u3002\n\u30fb\u304a\u5ba2\u69d8\u306e\u95a2\u5fc3\u306e\u9ad8\u3044\u5e83\u544a\u306e\u63d0\u4f9b\n\u30fb\u5e83\u544a\u304a\u3088\u3073\u5f53\u793e\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u9023\u3059\u308b\u304a\u5ba2\u69d8\u306e\u50be\u5411\u3001\u5229\u7528\u72b6\u6cc1\u306a\u3069\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u304a\u3088\u3073\u5206\u6790\n\u30fb\u4ed6\u306e\u304a\u5ba2\u69d8\u304b\u3089\u53ce\u96c6\u3057\u305f\u60c5\u5831\u3068\u30ea\u30f3\u30af\u307e\u305f\u306f\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u304a\u5ba2\u69d8\u306e\u30cb\u30fc\u30ba\u3092\u7406\u89e3\u3057\u305f\u3046\u3048\u3067\u3001\u3088\u308a\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30ba\u3055\u308c\u305f\u5e83\u544a\u306e\u63d0\u4f9b\n\u30fb\u7b2c\u4e09\u8005\u306e\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u304b\u3089\u63d0\u4f9b\u3055\u308c\u308b\u60c5\u5831\u3068\u304a\u5ba2\u69d8\u304b\u3089\u53ce\u96c6\u3059\u308b\u60c5\u5831\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u306b\u3088\u308b\u3001\u672c\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u30ab\u30c6\u30b4\u30ea\u30fc\u5225\u50be\u5411\u5206\u6790\n\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u5916\u306e\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u5e83\u544a\u51fa\u7a3f\u306e\u305f\u3081\uff08\u4ee5\u4e0b\u3092\u542b\u3080\uff09\u3002\n\u30fb\u304a\u5ba2\u69d8\u306e\u60c5\u5831\u3092\u5f53\u793e\u304c\u63d0\u643a\u3059\u308b\u5e83\u544a\u4f1a\u793e\u306e\u60c5\u5831\u3068\u7d44\u307f\u5408\u308f\u305b\u3001\u304a\u5ba2\u69d8\u306e\u5c5e\u6027\u5225\u7d71\u8a08\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\n\u30fb\u5f53\u793e\uff08\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\u542b\u3080\uff09\u306e\u30b2\u30fc\u30e0\u30fb\u30b5\u30fc\u30d3\u30b9\u306e\u5e83\u544a\u3092\u3054\u6848\u5185\u3059\u308b\u305f\u3081\u3001\u304a\u5ba2\u69d8\u306e\u60c5\u5831\u3092\u5f53\u793e\u306e\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\u3001\u5e83\u544a\u4ee3\u7406\u5e97\u304a\u3088\u3073\u914d\u4fe1\u5e83\u544a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3078\u5e83\u544a\u51fa\u7a3f\u304a\u3088\u3073\u5206\u6790\u3092\u76ee\u7684\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u3053\u3068\n\u30fb\u305d\u306e\u4ed6\u306e\u5e83\u544a\u5206\u6790\u3084\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6e2c\u5b9a\u3092\u5b9f\u65bd\u3059\u308b\u3053\u3068\n",
          ],
          en: [
            "Communicate with you about products, services, offers, promotions, rewards, and events offered by BNEI and others, and provide news, information and other marketing materials that we think will be of interest to you",
            "Link or combine your data with other Services and with information we get from other sources to analyze service and monetization trends, create profiles of categories of users, create new games and services, and perform other analytics",
            "Link or combine with information we get from our advertising partners to help understand your needs and provide you with better in-Service personalized ads; serve in-Service advertisements that might be of interest to you; monitor and analyze trends, usage and activities in connection with the advertisements and our Services; creating profiles of types of Service users by combining your data with information from advertising partners",
            "Creating profiles of types of users by combining your data with information from our advertising partners, providing the data to our group companies, ad agencies and ad platforms to target advertisements of our (and our group company) games and services to you outside of this service, and otherwise performing advertising analytics and performance metrics",
            "For any other purpose for which you provided the information",
          ],
          fr: [
            "Communiquer avec vous au sujet de produits, de services, d\u2019offres, de promotions, de r\xe9compenses et d\u2019\xe9v\xe9nements propos\xe9s par BNEI et d\u2019autres soci\xe9t\xe9s, et vous fournir des actualit\xe9s, des informations et d\u2019autres supports marketing que nous pensons susceptibles de vous int\xe9resser.",
            "Lier ou combiner vos donn\xe9es avec d\u2019autres Services ainsi qu\u2019avec les informations que nous collectons aupr\xe8s d\u2019autres sources afin d\u2019analyser les tendances en mati\xe8re de service et de mon\xe9tisation, de cr\xe9er des profils des cat\xe9gories d\u2019utilisateurs, de cr\xe9er de nouveaux jeux et services et de proc\xe9der \xe0 d\u2019autres analyses.",
            "Faire des liens ou des combinaisons avec les informations que nous collectons aupr\xe8s de nos partenaires publicitaires, afin de comprendre vos besoins et de vous fournir des publicit\xe9s int\xe9gr\xe9es plus personnalis\xe9es ; vous fournir des publicit\xe9s int\xe9gr\xe9es susceptibles de vous int\xe9resser ; surveiller et analyser les tendances, l\u2019utilisation ainsi que les activit\xe9s en lien avec les publicit\xe9s et nos Services ; cr\xe9er des profils des types d\u2019utilisateurs du Service en combinant vos donn\xe9es aux informations fournies par nos partenaires publicitaires.",
            "Cr\xe9er des profils des types d\u2019utilisateurs en combinant vos donn\xe9es aux informations fournies par nos partenaires publicitaires, en fournissant les donn\xe9es aux soci\xe9t\xe9s de notre groupe, \xe0 nos agences et plateformes publicitaires afin de cibler les publicit\xe9s de nos jeux et services (et de ceux des soci\xe9t\xe9s de notre groupe) qui vous sont adress\xe9es en dehors de ce service, et de proc\xe9der autrement \xe0 des analyses et \xe0 des mesures de la performance de notre outil publicitaire.",
            "\xc0 toute autre fin pour laquelle vous avez renseign\xe9 ces informations.",
          ],
          de: [
            "Kommunikation mit Ihnen \xfcber Produkte, Dienste, Angebote, Aktionen, Belohnungen und Events von BNEI und anderen sowie \xdcbermittlung von Nachrichten, Informationen und anderen Marketingmaterialien, von denen wir glauben, dass sie f\xfcr Sie von Interesse sind",
            "Verkn\xfcpfung oder Kombination Ihrer Daten mit anderen Diensten sowie mit Informationen, die wir aus anderen Quellen beziehen, zur Analyse von Dienst- und Monetarisierungstrends, Erstellung von Profilen von Nutzerkategorien, Erstellung neuer Spiele und Dienste und Durchf\xfchrung anderer Analysen",
            "Verkn\xfcpfung oder Kombination mit Informationen, die wir von unseren Werbepartnern erhalten, um Ihre Bed\xfcrfnisse besser zu verstehen und Ihnen bessere dienstinterne personalisierte Werbung anzuzeigen; \xdcberwachung und Analyse von Trends, Nutzung und Aktivit\xe4ten in Verbindung mit der Werbung und unseren Diensten; Erstellung von Profilen von Dienstnutzertypen durch Kombination Ihrer Daten mit Informationen von Werbepartnern.",
            "Erstellung von Profilen von Nutzertypen durch Kombination Ihrer Daten mit Informationen von Werbepartnern, Weitergabe der Daten an unsere Konzernunternehmen, Werbeagenturen und Werbeplattformen, um Ihnen au\xdferhalb dieses Dienstes gezielt Werbung zu unseren Spielen und Diensten (und denen unserer Konzernunternehmen) anzuzeigen, und sonstige Durchf\xfchrung von Werbeanalysen und Leistungskennzahlen.",
            "Zu s\xe4mtlichen sonstigen Zwecken, zu denen Sie die Informationen vorgelegt haben.",
          ],
          es: [
            "Informarle acerca de productos, servicios, ofertas, promociones, recompensas y eventos ofrecidos por BNEI y otros, adem\xe1s de proporcionarle noticias e informaci\xf3n y cualquier otro material comercial que creamos que puede interesarle",
            "Vincular o combinar sus datos con otros Servicios y con la informaci\xf3n que obtenemos de otras fuentes para analizar las tendencias de servicio y monetizaci\xf3n, generar perfiles de categor\xedas de usuarios, crear nuevos juegos y servicios y llevar a cabo otros an\xe1lisis",
            "Vincular o combinar con la informaci\xf3n que obtenemos de nuestros colaboradores publicitarios para ayudarnos a entender sus necesidades y ofrecerle mejores anuncios personalizados dentro del Servicio; proporcionarle anuncios en el Servicio que puedan ser de su inter\xe9s; supervisar y analizar las tendencias, el uso y las actividades en relaci\xf3n con los anuncios y nuestros Servicios; generar perfiles de tipos de usuarios del Servicio combinando sus datos con la informaci\xf3n de los colaboradores publicitarios",
            "Generar perfiles de tipos de usuarios combinando sus datos con la informaci\xf3n de nuestros colaboradores publicitarios, proporcionando los datos a las empresas de nuestro grupo, a las agencias de publicidad y a las plataformas publicitarias para enviarle anuncios personalizados de nuestros juegos y servicios (y los de las empresas de nuestro grupo) fuera de este servicio y llevar a cabo an\xe1lisis publicitarios y m\xe9tricas de rendimiento.",
            "Para cualquier otro fin para el que usted proporcion\xf3 la informaci\xf3n",
          ],
          it: [
            "Comunicare con l'Utente in merito a prodotti, servizi, offerte, promozioni, premi ed eventi offerti da BNEI e altri, nonch\xe9 trasmettere notizie, informazioni e altre comunicazioni di marketing che riteniamo possano essere di interesse per l'Utente",
            "Collegare o integrare i dati dell'Utente con altri Servizi e con le informazioni che otteniamo da altre fonti per analizzare i trend di servizio e dei ricavi, creare profili di categorie di utenti, creare nuovi giochi e servizi, nonch\xe9 svolgere altri tipi di analisi",
            "Collegare o integrare i dati dell'Utente con le informazioni che otteniamo da soggetti terzi per aiutarci a comprendere le esigenze dell'Utente e proporgli annunci pubblicitari personalizzati all'interno dei Servizi; monitorare e analizzare le tendenze, l'utilizzo e le attivit\xe0 dell'Utente in relazione agli annunci pubblicitari e ai nostri Servizi; creare profili di tipi di utenti dei Servizi, combinando i  dati dell'Utente con le informazioni ottenute dai nostri partner pubblicitari.",
            "Creare profili di tipi di utenti combinando i dati dell'Utente con le informazioni fornite dai nostri partner pubblicitari, fornendo i dati alle societ\xe0 del nostro gruppo, alle agenzie pubblicitarie e alle piattaforme di pubblicit\xe0 per indirizzare gli annunci promozionali dei nostri giochi e servizi (e della nostra societ\xe0 del gruppo) all'Utente al di fuori di questo servizio, e in altro modo svolgere attivit\xe0 di analisi sulla pubblicit\xe0 e di misurazione delle prestazioni.",
            "Per qualunque altro scopo in vista del quale l\u2019Utente ha messo a disposizione determinate informazioni.",
          ],
        },
        Y = {
          ja: [
            "\u60c5\u5831\u306e\u5171\u6709",
            "\u5f53\u793e\u306f\u3001\u7b2c\u4e09\u8005\uff08\u56fd\u5185\u5916\u306e\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\u3092\u542b\u3080\u5f53\u793e\u306e\u59d4\u8a17\u5148\u3092\u9664\u304d\u307e\u3059\uff09\u3068\u306e\u9593\u306b\u304a\u3044\u3066\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u306e\u5171\u6709\u3001\u8ee2\u9001\u304a\u3088\u3073\u4ea4\u63db\u3092\u884c\u3044\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u3001\u6cd5\u5f8b\u306b\u3088\u308a\u8a31\u5bb9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u307e\u305f\u306f\u304a\u5ba2\u69d8\u304b\u3089\u5f53\u793e\u3078\u306e\u540c\u610f\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u9650\u308a\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u305d\u306e\u5834\u5408\u3067\u3082\u3001\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u7b2c\u4e09\u8005\u306b\u8ca9\u58f2\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u4ee5\u4e0a\u3092\u9075\u5b88\u3057\u305f\u3046\u3048\u3067\u3001\u5f53\u793e\u306f\u3001\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3001\u307e\u305f\u306f\u672c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306e\u4ed6\u306e\u898f\u5b9a\u306b\u57fa\u3065\u3044\u3066\u3001\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u500b\u4eba\u60c5\u5831\u306b\u5f53\u305f\u3089\u306a\u3044\u60c5\u5831\uff08\u5f53\u793e\u5185\u3067\u304a\u5ba2\u69d8\u3092\u8b58\u5225\u3067\u304d\u306a\u3044\u60c5\u5831\uff09\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",
          ],
          en: [
            "Sharing of Information",
            "We do not share, transfer or otherwise exchange your personal information with third parties, unless required for the provision of our products or services, otherwise as permitted or required by law, or if you have given us express consent. We do not sell your personal information to third parties. \n\nIn compliance with the aforementioned, we may share information about you as follows or as otherwise described in this Privacy Policy:",
          ],
          fr: [
            "Partage des informations",
            "Nous nous engageons \xe0 ne pas partager, transf\xe9rer ou \xe9changer vos donn\xe9es personnelles avec des tiers, sauf en cas de n\xe9cessit\xe9 pour fournir nos produits ou services, conform\xe9ment \xe0 une autorisation ou obligation l\xe9gale ou \xe0 moins que vous nous en ayez donn\xe9 l'autorisation expresse. Nous ne vendons pas vos donn\xe9es personnelles \xe0 des tiers. \n\nNous pouvons \xeatre amen\xe9s \xe0 partager les informations vous concernant de la fa\xe7on suivante en accord avec les dispositions qui pr\xe9c\xe8dent :",
          ],
          de: [
            "Informationsaustausch",
            "Wir werden Ihre personenbezogenen Daten nicht an Dritte weitergeben, \xfcbertragen oder auf andere Weise austauschen, sofern dies nicht f\xfcr die Bereitstellung unserer Produkte und Dienstleistungen notwendig ist, anderweitig gesetzlich zul\xe4ssig oder erforderlich ist oder sofern Sie dem nicht ausdr\xfccklich zugestimmt haben. Wir verkaufen Ihre personenbezogenen Daten nicht an Dritte.\n\nIn \xdcbereinstimmung mit dem Vorstehenden k\xf6nnen wir Ihre Daten wie folgt oder wie an anderer Stelle in dieser Datenschutzerkl\xe4rung beschrieben weitergeben:",
          ],
          es: [
            "Intercambio de informaci\xf3n",
            "Nos abstendremos de compartir, transferir o intercambiar de otra forma sus datos personales con terceros a menos que sea necesario para el suministro de nuestros productos o servicios, salvo en la medida en que  la legislaci\xf3n nos lo permita o exija o si nos ha autorizado para ello. No vendemos informaci\xf3n personal a terceros. \n\nEn cumplimiento de lo anterior, podremos compartir informaci\xf3n acerca de usted de la siguiente manera o tal y como se describa de otra forma en la presente Pol\xedtica de privacidad:",
          ],
          it: [
            "Condivisione di informazioni",
            "Non condividiamo, cediamo n\xe9 altrimenti scambiamo informazioni personali dell'Utente con soggetti terzi, salvo laddove richiesto per fornire i nostri prodotti e servizi, sempre  secondo quanto consentito o previsto dalla legge, oppure qualora l'Utente ci abbia fornito il proprio consenso esplicito. Non vendiamo le informazioni personali dell'Utente a soggetti terzi. In conformit\xe0 con quanto sopra potremmo condividere informazioni sull'Utente come descritto di seguito o come altrimenti illustrato nella presente Informativa sulla privacy:",
          ],
        },
        J = {
          ja: "\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u9593\u3067\u306e\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u304a\u3051\u308b\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u5f62\u5f0f\u306e\u9818\u57df\uff08\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u30e4\u30fc\u3001\u30c1\u30e3\u30c3\u30c8\u307e\u305f\u306f\u5171\u6709\u6a5f\u80fd\u306a\u3069\uff09\u3078\u306e\u53c2\u52a0\u3092\u304a\u5ba2\u69d8\u304c\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u3001\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u9593\u3067\u5171\u6709\u3059\u308b\u5834\u5408\u3002\u5c1a\u3001\u500b\u4eba\u3092\u8b58\u5225\u3067\u304d\u308b\u30c7\u30fc\u30bf\uff08\u304a\u5ba2\u69d8\u306e\u6c0f\u540d\u306a\u3069\uff09\u3092\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u304a\u3051\u308b\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3001\u7981\u6b62\u3057\u307e\u3059\u3002",
          en: "With other users if you choose to participate in the interactive areas of our Services, such as multiplayer, chat, or sharing features (the use of personally identifiable data (such as your full name) as a username in our Services is strictly prohibited);",
          fr: "Avec d'autres utilisateurs, si vous choisissez d'utiliser les fonctionnalit\xe9s interactives de nos Services, comme le jeu multijoueur, les conversations en ligne ou le partage de contenu (le choix d'un nom d'utilisateur comportant des donn\xe9es identifiables, comme votre nom complet, est strictement interdit) ;",
          de: "An andere Benutzer, falls Sie sich f\xfcr die Teilnahme an den interaktiven Bereichen unserer Dienste wie Mehrspieler-, Chat- oder Teilen-Funktionen entscheiden (wobei die Verwendung personenbezogener Daten (wie Ihrem vollst\xe4ndigen Vor- und Nachnamen) als Benutzername in unseren Diensten streng untersagt ist);",
          es: "con otros usuarios si decide participar en las \xe1reas interactivas de nuestros Servicios, como el multijugador, chat u opciones para compartir (est\xe1 estrictamente prohibido utilizar datos de car\xe1cter personal (por ejemplo, su nombre completo) como nombre de usuario en nuestros servicios);",
          it: "con altri utenti, se l'Utente sceglie di usufruire delle aree interattive dei nostri Servizi, come le funzioni multigiocatore, chat o di condivisione (nei nostri Servizi \xe8 severamente vietato utilizzare dati riconducibili alla persona (ad esempio il nome completo) come nome utente);",
        },
        Q = {
          ja: "\u5f53\u793e\u306e\u5f93\u696d\u54e1\u3001\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\u3001\u30d9\u30f3\u30c0\u30fc\u3001\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8\u3001\u305d\u306e\u4ed6\u306e\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3067\u3042\u3063\u3066\u5f53\u793e\u306e\u305f\u3081\u306e\u696d\u52d9\u9042\u884c\u306b\u969b\u3057\u5f53\u8a72\u60c5\u5831\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5fc5\u8981\u3068\u3059\u308b\u3082\u306e\uff08\u305f\u3068\u3048\u3070\u3001\u958b\u767a\u8005\u3001\u652f\u6255\u51e6\u7406\u696d\u8005\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u696d\u8005\u3001\u307e\u305f\u306f\u60c5\u5831\u30b9\u30c8\u30ec\u30fc\u30b8\u304a\u3088\u3073\u51e6\u7406\u30b5\u30fc\u30d3\u30b9\u696d\u8005\u3082\u542b\u307f\u307e\u3059\uff09\u3068\u306e\u9593\u3067\u3001\u5fc5\u8981\u306a\u9650\u5ea6\u3067\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u5171\u6709\u3059\u308b\u5834\u5408\u3002",
          en: "With our employees, affiliates, related companies, vendors, consultants and other third party service providers who need access to such information to carry out work on our behalf (including, for example, developers, payment processors, website hosting services, or information storage and processing service providers);",
          fr: "Avec nos employ\xe9s, affili\xe9s, soci\xe9t\xe9s apparent\xe9es, sous-traitants, consultants et autres fournisseurs de services tiers ayant besoin d'acc\xe9der \xe0 ces informations pour mener \xe0 bien leurs activit\xe9s en notre nom (exemple : d\xe9veloppeurs, services d'h\xe9bergement de sites Internet ou fournisseurs de solutions de stockage et de traitement de informations) ;",
          de: "An unsere Mitarbeiter, Partner, verbundene Unternehmen, Anbieter, Berater und Serviceprovider, die Zugang zu solchen Daten ben\xf6tigen, um in unserem Auftrag Arbeiten auszuf\xfchren (darunter z. B. Entwickler, Zahlungsabwickler, Webhosting-Dienste oder Anbieter von Diensten f\xfcr die Speicherung und Verarbeitung von Informationen);",
          es: "con nuestros empleados, afiliados, empresas asociadas, proveedores, asesores y otros proveedores de servicios que necesiten acceder a dicha informaci\xf3n para llevar a cabo un trabajo en nuestro nombre (incluidos, por ejemplo, desarrolladores, procesadores de pagos, servicios de alojamiento de sitios web o proveedores de servicios de almacenamiento y tratamiento de informaci\xf3n);",
          it: "con i nostri impiegati, affiliati, aziende connesse, fornitori, consulenti e altri provider di servizi di terze parti che hanno la necessit\xe0 di accedere a tali informazioni al fine di prestare servizi per nostro conto (tra questi, ad esempio, gli sviluppatori, i provider di servizi di pagamento, i fornitori di hosting di siti Web e quelli di servizi di raccolta ed elaborazione di informazioni);",
        },
        $ = {
          ja: "\u6cd5\u7684\u624b\u7d9a\u307e\u305f\u306f\u60c5\u5831\u63d0\u4f9b\u8981\u8acb\u3078\u306e\u5fdc\u7b54\u306b\u969b\u3057\u3001\u305d\u306e\u958b\u793a\u304c\u3001\u9069\u7528\u306e\u3042\u308b\u6cd5\u5f8b\u3001\u898f\u5247\u3082\u3057\u304f\u306f\u898f\u5236\uff08\u305f\u3068 \u3048\u3070\u3001\u653f\u5e9c\u5f53\u5c40\u3001\u898f\u5236\u6a5f\u95a2\u307e\u305f\u306f\u53f8\u6cd5\u88c1\u5224\u6240\u3082\u542b\u307f\u307e\u3059\uff09\u306b\u5f93\u3063\u305f\u3082\u306e\u3067\u3042\u308b\u304b\u307e\u305f\u306f\u4ed6\u306e\u4f55\u3089\u304b\u306e\u614b\u69d8\u3067\u304b\u304b\u308b\u6cd5\u5f8b\u3001\u898f\u5247\u3082\u3057\u304f\u306f\u898f\u5236\u306b\u3088\u308a\u7fa9\u52d9\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u5834\u5408\u3002",
          en: "In response to legal process or a request for information if disclosure is in accordance with, or as otherwise required by applicable law, rule, or regulation (including, for example government or regulatory bodies, law enforcement, or courts of law);",
          fr: "En r\xe9ponse \xe0 une proc\xe9dure judiciaire ou une demande d'informations, pourvu qu\u2019elle soit conforme \xe0 la loi, aux r\xe9glementations en vigueur ou aux r\xe8glements applicables (provenant par exemple d'un gouvernement, d'une instance de r\xe9gulation, des forces de l'ordre ou d'une cour de justice) ;",
          de: "Im Rahmen eines gerichtlichen Verfahrens oder auf eine Informationsanfrage hin, sofern die Angabe solcher Informationen mit den geltenden Gesetzen, Verordnungen und Vorschriften vereinbar bzw. von diesen vorgeschrieben ist (darunter z. B. Regierungs- oder Regulierungsbeh\xf6rden, Strafverfolgungsbeh\xf6rden oder Gerichte);",
          es: "en respuesta a un procedimiento legal o solicitud de informaci\xf3n si la revelaci\xf3n se produce de acuerdo con una ley, norma o reglamento aplicable o tal y como se exija en los mismos (incluidos, por ejemplo, los organismos gubernamentales o reguladores, las fuerzas del orden o los tribunales);",
          it: "in risposta a un procedimento legale o a una richiesta di informazioni, qualora la divulgazione avvenga nel rispetto di, o come altrimenti previsto da una legge, una norma o un regolamento (inclusi, ad esempio, da enti governativi o normativi, forze dell'ordine e tribunali);",
        },
        ee = {
          ja: "\u304a\u5ba2\u69d8\u306e\u4fdd\u8b77\u6cd5\u76ca\u3068\u5f53\u793e\u306e\u6b63\u5f53\u306a\u5229\u76ca\u3092\u6bd4\u8f03\u8861\u91cf\u3057\u305f\u3046\u3048\u3067\u3001\u304a\u5ba2\u69d8\u306e\u884c\u70ba\u304c\u5f53\u793e\u306e\u30e6\u30fc\u30b6\u30fc\u5951\u7d04\u3082\u3057\u304f\u306f\u30dd\u30ea\u30b7\u30fc\u306b\u53cd\u3057\u3066\u3044\u308b\u3068\u8a8d\u3081\u308b\u306b\u8db3\u308b\u3001\u307e\u305f\u306f\u5f53\u793e\u3001\u5f53\u793e\u30e6\u30fc\u30b6\u30fc\u3082\u3057\u304f\u306f\u4ed6\u8005\u306e\u6a29\u5229\u3001\u8ca1\u7523\u304a\u3088\u3073\u5b89\u5168\u3092\u4fdd\u8b77\u3059\u308b\u306b\u8db3\u308b\u5408\u7406\u7684\u6839\u62e0\u304c\u3042\u308b\u5834\u5408\u3002",
          en: "If we have reasonable grounds to believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property and safety of BNEI, our users or others and we consider our legitimate interests in disclosing your personal information to third parties (such as courts or attorneys) to weigh your interests in the specific case;",
          fr: "Si nous avons de bonnes raisons de croire que vos agissements contreviennent \xe0 nos contrats d'utilisation ou nos politiques, ou pour prot\xe9ger les droits, la propri\xe9t\xe9 et la s\xe9curit\xe9 de BNEI, de nos utilisateurs ou de tiers et si nous consid\xe9rons qu\u2019il est dans notre int\xe9r\xeat l\xe9gitime de divulguer vos informations personnelles \xe0 des tiers (tels que des tribunaux ou des avocats) afin de prendre en compte vos int\xe9r\xeats dans un cas pr\xe9cis ;",
          de: "Falls wir hinreichenden Grund zu der Annahme haben, dass Ihre Handlungen unserem Benutzervertrag bzw. unseren Richtlinien widersprechen, oder um die Rechte, das Eigentum und die Sicherheit von BNEI, unseren Benutzern oder anderen zu sch\xfctzen, und wir davon \xfcberzeugt sind, dass unsere berechtigten Interessen an der Weitergabe Ihrer Daten an Dritte (wie Gerichte oder Anw\xe4lte) Ihre Interessen in diesem konkreten Fall \xfcberwiegen;",
          es: "si tenemos motivos fundados para creer que sus acciones no son acordes con nuestros acuerdos o pol\xedticas de usuario, o para proteger los derechos, propiedad y seguridad de BNEI, nuestros usuarios u otros, y consideramos que nuestros intereses leg\xedtimos al revelar su informaci\xf3n personal a terceros (como tribunales o abogados) compensan sus intereses en ese caso en concreto;",
          it: "se abbiamo fondati motivi di ritenere che le azioni dell'Utente siano incompatibili con i nostri accordi con gli utenti o le nostre politiche, o per tutelare i diritti, le propriet\xe0 e la sicurezza di BNEI, dei nostri utenti o di altri soggetti; se riteniamo che i nostri legittimi interessi nella divulgazione delle informazioni personali dell'Utente a soggetti terzi (come tribunali o avvocati) siano tali da prevalere sui suoi interessi nel caso specifico;",
        },
        ne = {
          ja: "\u5f53\u793e\u4e8b\u696d\u306e\u5168\u90e8\u3082\u3057\u304f\u306f\u4e00\u90e8\u306e\u5408\u4f75\u3001\u4f1a\u793e\u8cc7\u7523\u306e\u58f2\u5374\u3001\u8cc7\u91d1\u8abf\u9054\u3001\u307e\u305f\u306f\u4ed6\u306e\u4f1a\u793e\u306b\u3088\u308b\u8cb7\u53ce\u306b\u95a2\u9023\u3057\u3066\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u5171\u6709\u3059\u308b\u6cd5\u7684\u6839\u62e0\u304c\u3042\u308b\u5834\u5408\u3002",
          en: "In connection with any merger, sale of company assets, financing or acquisition of all or a portion of our business to another company (provided we have a legal basis); and",
          fr: "Dans le cas d'une fusion, d'une vente d'actifs de la soci\xe9t\xe9, du financement ou de la cession de tout ou partie de nos activit\xe9s \xe0 une autre soci\xe9t\xe9 (sous r\xe9serve que nous disposions d\u2019une base juridique) ; et",
          de: "Im Zusammenhang mit einem Unternehmenszusammenschluss, einem Verkauf von Verm\xf6genswerten, der Finanzierung oder dem Erwerb der Gesamtheit oder eines Teils unseres Unternehmens an ein anderes Unternehmen (eine bestehende Rechtsgrundlage vorausgesetzt); und",
          es: "en relaci\xf3n con cualquier fusi\xf3n, venta de activos empresariales, financiaci\xf3n o adquisici\xf3n de la totalidad o parte de nuestro negocio a otra empresa (siempre y cuando tengamos una base jur\xeddica para ello); y",
          it: "in relazione a qualsivoglia fusione, vendita di beni aziendali, finanziamento o acquisizione di tutta o una parte della nostra attivit\xe0 a un'altra societ\xe0 (purch\xe9 disponiamo di una base giuridica) e",
        },
        ie = {
          ja: "\u304a\u5ba2\u69d8\u306e\u540c\u610f\u307e\u305f\u306f\u6307\u793a\u306b\u57fa\u3065\u304f\u5834\u5408\u3002",
          en: "With your consent or at your direction.",
          fr: "Avec votre consentement ou selon vos instructions.",
          de: "Mit Ihrem Einverst\xe4ndnis bzw. auf Ihre Weisung hin.",
          es: "con su autorizaci\xf3n o de acuerdo con sus indicaciones.",
          it: "con il consenso dell'Utente o a sua discrezione.",
        },
        re = {
          ja: [
            "\u7b2c\u4e09\u8005\u306b\u3088\u308a\u63d0\u4f9b\u3055\u308c\u308b\u5e83\u544a\u30fb\u5206\u6790\u30b5\u30fc\u30d3\u30b9",
            '\u5f53\u793e\u306f\u3001\u7b2c\u4e09\u8005\u306b\u3088\u308b\u5206\u6790\u30b5\u30fc\u30d3\u30b9\u306e\u63d0\u4f9b\u304a\u3088\u3073\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u5185\u3067\u306e\u5e83\u544a\u306e\u914d\u4fe1\u3092\u8a31\u53ef\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u8005\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u304a\u3088\u3073\u304a\u5ba2\u69d8\u306b\u3088\u308b\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3059\u308b\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3092\u7528\u3044\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u304b\u304b\u308b\u60c5\u5831\u306b\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u3001\u30c7\u30d0\u30a4\u30b9\u8b58\u5225\u5b50\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u5185\u306e\u30da\u30fc\u30b8\u3067\u306e\u6ede\u5728\u6642\u9593\u3001\u304a\u3088\u3073\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u5185\u3067\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u30ea\u30f3\u30af\u3082\u542b\u307e\u308c\u307e\u3059\u3002\u304b\u304b\u308b\u60c5\u5831\u306f\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u6a5f\u80fd\u306e\u7dad\u6301\u3001\u6539\u5584\u304a\u3088\u3073\u5206\u6790\u306a\u3069\u3001\u306a\u3089\u3073\u306b\u304a\u5ba2\u69d8\u306e\u8208\u5473\u95a2\u5fc3\u306b\u5408\u3046\u53ef\u80fd\u6027\u306e\u3042\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5e83\u544a\u304a\u3088\u3073\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u5e83\u544a\u306e\u914d\u4fe1\u306a\u3069\u306e\u305f\u3081\u306b\u3001\u5f53\u793e\u304a\u3088\u3073\u5f53\u8a72\u7b2c\u4e09\u8005\u306b\u3088\u308a\u5229\u7528\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u304b\u304b\u308b\u7b2c\u4e09\u8005\u306b\u3088\u308b\u304a\u5ba2\u69d8\u306e\u60c5\u5831\u306e\u5229\u7528\u306b\u306f\u3001\u5f53\u8a72\u7b2c\u4e09\u8005\u5404\u81ea\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u304c\u9069\u7528\u3055\u308c\u308b\u3053\u3068\u3068\u306a\u308a\u3001\u5f53\u793e\u306f\u3001\u7b2c\u4e09\u8005\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306b\u3064\u3044\u3066\u7ba1\u7406\u6a29\u3092\u6709\u3057\u306a\u3044\u3068\u3068\u3082\u306b\u8cac\u4efb\u3092\u8ca0\u3044\u307e\u305b\u3093\u3002\n\n\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u3063\u3066\u306f\u3001\u30b2\u30fc\u30e0\u304a\u3088\u3073\u53ce\u76ca\u5316\u306e\u50be\u5411\u5206\u6790\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30ab\u30c6\u30b4\u30ea\u30fc\u5225\u306e\u50be\u5411\u5206\u6790\u3001\u65b0\u305f\u306a\u30b2\u30fc\u30e0\u304a\u3088\u3073\u30b5\u30fc\u30d3\u30b9\u306e\u4f5c\u6210\u3001\u305d\u306e\u4ed6\u89e3\u6790\u306e\u5b9f\u65bd\u306e\u305f\u3081\u306b\u3001\u304a\u5ba2\u69d8\u306e\u4e8b\u524d\u540c\u610f\u3092\u5f97\u305f\u3046\u3048\u3067\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u72b6\u6cc1\u306b\u95a2\u3059\u308b\u60c5\u5831\u3068\u3001\u5f53\u793e\u306e\u4ed6\u306e\u30b2\u30fc\u30e0\u304b\u3089\u53ce\u96c6\u3055\u308c\u305f\u60c5\u5831\u3001\u5f53\u793e\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\u306e\u30b2\u30fc\u30e0\u304b\u3089\u53ce\u96c6\u3055\u308c\u305f\u60c5\u5831\u305d\u306e\u4ed6\u7b2c\u4e09\u8005\u304b\u3089\u53ce\u96c6\u3055\u308c\u305f\u60c5\u5831\u3068\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u5f53\u793e\u306f\u3001 \u304a\u5ba2\u69d8\u306e\u540c\u610f\u307e\u305f\u306f\u6307\u793a\u306b\u57fa\u3065\u304f\u5834\u5408\u3001\u5f53\u793e\u306e\u30b2\u30fc\u30e0\u3092\u901a\u3058\u3066\u305d\u306e\u30b2\u30fc\u30e0\u5916\u3067\u914d\u4fe1\u3059\u308b\u5e83\u544a\u306e\u305f\u3081\u306b\u4e00\u5b9a\u306e\u60c5\u5831\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3068\u5f53\u793e\u306e\u5e83\u544a\u30d1\u30fc\u30c8\u30ca\u30fc\u304b\u3089\u53d6\u5f97\u3057\u305f\u60c5\u5831\u3068\u306e\u7d44\u307f\u5408\u308f\u305b\u306b\u3088\u308a\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30ab\u30c6\u30b4\u30ea\u30fc\u5225\u306e\u50be\u5411\u5206\u6790\u3092\u884c\u3046\u3053\u3068\u3001\u5f53\u793e\uff08\u304a\u3088\u3073\u5f53\u793e\u306e\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\uff09\u306e\u30b2\u30fc\u30e0\u304a\u3088\u3073\u30b5\u30fc\u30d3\u30b9\u306b\u3064\u3044\u3066\u306e\u5f53\u8a72\u30b2\u30fc\u30e0\u5916\u3067\u306e\u5e83\u544a\u914d\u4fe1\u306e\u305f\u3081\u306b\u3001\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u5f53\u793e\u306e\u5e83\u544a\u4ee3\u7406\u5e97\u304a\u3088\u3073\u5e83\u544a\u914d\u4fe1\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3001\u306a\u3089\u3073\u306b\u4ed6\u306e\u4f55\u3089\u304b\u306e\u65b9\u6cd5\u3067\u5e83\u544a\u89e3\u6790\u304a\u3088\u3073\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u89e3\u6790\u3092\u5b9f\u65bd\u3059\u308b\u3053\u3068\u3082\u542b\u307e\u308c\u307e\u3059\u3002\n\n\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u5229\u7528\u3057\u305f\u5e83\u544a\u306e\u8a73\u7d30\u3001\u307e\u305f\u306f\u304a\u5ba2\u69d8\u306e\u30a6\u30a7\u30d6\u95b2\u89a7\u60c5\u5831\u304c\u884c\u52d5\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u5e83\u544a\u306e\u76ee\u7684\u3067\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u306e\u30aa\u30d7\u30c8\u30a2\u30a6\u30c8\u306f\u3001\u4ee5\u4e0b\u3044\u305a\u308c\u304b\u306eURL\u304b\u3089\u3054\u5229\u7528\u3067\u304d\u307e\u3059\uff1a\n<a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a>\n<a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a>\n\n\u30e8\u30fc\u30ed\u30c3\u30d1\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u4ee5\u4e0bURL\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30bf\u30fc\u30b2\u30c3\u30c8\u5e83\u544a\u306e\u53d7\u4fe1\u3092\u30aa\u30d7\u30c8\u30a2\u30a6\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a\n<a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu/</a>\n\u5f53\u793e\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u5404\u30c7\u30d0\u30a4\u30b9\u304a\u3088\u3073\u30d6\u30e9\u30a6\u30b6\u3067\u9078\u629e\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\n\u5f53\u793e\u306e\u89e3\u6790\u304a\u3088\u3073\u5e83\u544a\u306e\u5b9f\u52d9\u6163\u884c\u304a\u3088\u3073\u30d1\u30fc\u30c8\u30ca\u30fc\u3001\u306a\u3089\u3073\u306b\u30aa\u30d7\u30c8\u30a2\u30a6\u30c8\u306e\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001<a href="https://legal.bandainamcoent.co.jp/privacy/opt-out-jp" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/opt-out-jp</a>\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
          ],
          en: [
            "Advertising and Analytics Services Provided by Others",
            'We may allow others to provide analytics services on our behalf and to serve advertisements within our Services.  These entities may use technologies to automatically collect information about your device and your use of our Services, including IP address, device ID, time spent on pages within our Services, and links clicked within our Services.  This information may be used by us and others to, among other things, maintain, improve, and analyze the functioning of our Services and deliver contextual or targeted advertising that may be of interest to you. The use of your information by these third parties is covered by their respective privacy policies, and we do not control and are not responsible for the privacy practices of third parties. \n\nSome of our Services will, with your prior consent, combine game play and analytic information with information collected from other Bandai Namco Entertainment games, games from our group companies, and other third party sources to analyze game and monetization trends, create profiles of categories of players, create new games and services, and perform other analytics. With your consent or at your direction, we also use certain information collected through our games for advertisement targeting outside of the game. This includes creating profiles of types of players by combining your data with information from our advertising partners, providing the data to our ad agencies and ad platforms to target advertisements of our (and our group company) games and services to you outside of this game, and otherwise performing advertising analytics and performance metrics.\n\nFor more information about Internet-based ads, or to opt out of having your web browsing information used for behavioral advertising purposes, please visit <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a> and <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a>. European users may opt of receiving targeted advertising by visiting <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu/</a>. Please note that you need to renew this choice on each device and browser you use to access our Services.\n\nFor more information on our analytic and advertisement practices and partners, and how to opt-out, please visit: <a href="https://legal.bandainamcoent.co.jp/privacy/opt-out" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/opt-out.</a>',
          ],
          fr: [
            "Publicit\xe9s et services analytiques fournis par des tiers",
            'Nous pouvons autoriser des tiers \xe0 fournir des services analytiques pour notre compte et \xe0 pr\xe9senter des publicit\xe9s au sein de nos Services. Lesdites entit\xe9s peuvent employer des technologies pour collecter automatiquement des informations concernant votre appareil et votre utilisation de nos Services, y compris adresse IP, identifiant de l\'appareil, temps pass\xe9 sur des pages au sein de nos Services et liens ayant fait l\u2019objet de clics au sein de nos Services. Lesdites informations peuvent \xeatre utilis\xe9es par BNEI et d\u2019autres personnes pour, entre autres, administrer, am\xe9liorer et analyser le fonctionnement de nos Services et proposer des publicit\xe9s contextuelles ou cibl\xe9es susceptibles de vous int\xe9resser. L\u2019utilisation de vos informations par ces tiers est r\xe9gie par leurs politiques de confidentialit\xe9 respectives. Nous n\u2019exer\xe7ons aucun contr\xf4le sur les pratiques de confidentialit\xe9 mises en \u0153uvre par ces tiers, et notre responsabilit\xe9 ne saurait \xeatre engag\xe9e \xe0 cet \xe9gard. \n\nSous r\xe9serve de votre autorisation pr\xe9alable, certains de nos Services associeront la jouabilit\xe9 et des informations analytiques avec des informations collect\xe9es depuis d\u2019autres jeux Bandai Namco Entertainment, des jeux de soci\xe9t\xe9s de notre groupe ainsi que d\u2019autres sources tierces afin d\u2019analyser les tendances en mati\xe8re de jeux et de mon\xe9tisation, cr\xe9er des profils des cat\xe9gories de joueurs, cr\xe9er des nouveaux jeux et services et proc\xe9der \xe0 d\u2019autres analyses. Avec votre autorisation ou \xe0 notre discr\xe9tion, nous utilisons \xe9galement les informations collect\xe9es \xe0 travers nos jeux dans le cadre d\u2019un ciblage publicitaire en dehors du jeu. Cela comprend la cr\xe9ation de profils de types de joueurs en associant vos donn\xe9es avec les informations de nos partenaires publicitaires, la transmission de ces donn\xe9es \xe0 nos agences et plateformes commerciales afin de vous proposer en dehors du jeu des publicit\xe9s cibl\xe9es consacr\xe9es \xe0 nos jeux et services (ainsi que ceux des soci\xe9t\xe9s du groupe) et enfin l\u2019analyse des performances publicitaires ainsi que des indicateurs de performance. \n\nPour obtenir de plus amples informations sur les publicit\xe9s bas\xe9es sur Internet ou conna\xeetre le moyen de vous opposer \xe0 ce que vos donn\xe9es de navigation sur le Web soient utilis\xe9es \xe0 des fins de publicit\xe9 comportementale, veuillez consulter les sites <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a> et <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a>. Les utilisateurs europ\xe9ens peuvent choisir s\u2019ils souhaitent recevoir des publicit\xe9s cibl\xe9es en se rendant sur le site <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu/</a>. Veuillez noter que vous devez renouveler ce choix pour chaque appareil et chaque navigateur que vous utilisez pour acc\xe9der \xe0 nos Services.\n\nPour de plus amples informations sur nos pratiques analytiques et publicitaires ainsi que sur nos partenaires, et comment vous pouvez vous y opposer, veuillez vous rendre \xe0 l\u2019adresse suivante : <a href="https://legal.bandainamcoent.co.jp/privacy/opt-out" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/opt-out</a>.',
          ],
          de: [
            "Von Dritten bereitgestellte Werbe- und Analysedienste",
            'Wir k\xf6nnen anderen gestatten, Analysedienste f\xfcr uns zu erbringen und Werbung im Rahmen unserer Dienste zu platzieren. Diese Drittorganisationen k\xf6nnen Technologien zur automatischen Erfassung von Informationen bez\xfcglich Ihres Ger\xe4ts und Ihrer Nutzung unserer Dienste einsetzen, wie z. B. IP-Adresse, Ger\xe4te-ID, Verweildauer auf den Seiten innerhalb unserer Dienste und von unseren Diensten aus angeklickte Links. Diese Informationen k\xf6nnen von uns und anderen verwendet werden, um u.a. die Funktionsweise unserer Dienste zu gew\xe4hrleisten, zu verbessern und zu analysieren und kontextbezogene oder gezielte Werbung einzublenden, die f\xfcr Sie von Interesse sein k\xf6nnte. Die Nutzung Ihrer Daten seitens dieser Dritten wird von deren jeweiligen Datenschutzrichtlinien abgedeckt, und wir kontrollieren die Datenschutzpraktiken Dritter nicht und sind nicht daf\xfcr verantwortlich.\n\nEinige unserer Dienste werden, mit Ihrer vorherigen Zustimmung, Spielinhalte und Analyseinformationen mit Daten kombinieren, die von anderen Spielen von Bandai Namco Entertainment, Spielen unserer Konzernunternehmen oder anderen dritten Quellen gesammelt wurden, um Trends in Spielen und Monetisierung zu analysieren, Profile von Spielerkategorien zu erstellen, neue Spiele und Dienste zu entwickeln und andere Analysen vorzunehmen. Mit Ihrem Einverst\xe4ndnis oder auf Ihre Weisung hin nutzen wir auch bestimmte in unseren Spielen gesammelte Daten f\xfcr Werbung au\xdferhalb dieser Spiele. Hierzu geh\xf6rt die Erstellung von Profilen von Spielertypen durch Kombination Ihrer Daten mit Daten unserer Werbepartner, Bereitstellen der Daten f\xfcr unsere Werbeagenturen und Werbeplattformen f\xfcr gezielte Werbung unserer Spiele und Dienste (sowie der unserer Konzernunternehmen) Ihnen gegen\xfcber au\xdferhalb der Spiele selbst und andere Analysen zu Werbezwecken und Bestimmung von Leistungskennzahlen.\n\nWeitere Informationen zu Internet-Werbung oder zum Widerruf Ihrer Zustimmung zur Verwendung Ihrer Internet-Browser-Daten zu verhaltensbasierten Werbezwecken finden Sie unter <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a> und <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a>. Europ\xe4ische Nutzer k\xf6nnen ihre Zustimmung zum Empfang gezielter Werbung widerrufen, indem Sie <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu/</a> besuchen. Bitte beachten Sie, dass Sie diese Wahl auf jedem Ger\xe4t und f\xfcr jeden Browser, mit dem Sie auf unsere Dienste zugreifen, wiederholen m\xfcssen.\n\nWeitere Informationen \xfcber unsere Analyse- und Werbepraktiken und -partner sowie dar\xfcber, wie Sie Ihre Zustimmung widerrufen k\xf6nnen, finden Sie unter <a href="https://legal.bandainamcoent.co.jp/privacy/opt-out" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/opt-out</a>.',
          ],
          es: [
            "Servicios de publicidad y anal\xedticas prestados por terceros",
            'Podremos permitir a terceros prestar servicios de anal\xedticas en nuestro nombre y ofrecer publicidad dentro de nuestros Servicios. Esas entidades podr\xe1n utilizar tecnolog\xedas para recopilar de manera autom\xe1tica informaci\xf3n acerca de su dispositivo y el uso que usted hace de nuestros Servicios, incluida la direcci\xf3n IP, la ID del dispositivo, el tiempo que se ha pasado en las p\xe1ginas dentro de nuestros Servicios y los enlaces en los que se ha hecho clic dentro de nuestros Servicios. Esta informaci\xf3n podr\xe1 ser utilizada por nosotros u otros para, entre otras cosas, mantener, mejorar y analizar el funcionamiento de nuestros Servicios y ofrecer publicidad contextual o publicidad dirigida que puede ser de inter\xe9s para usted. El uso de su informaci\xf3n por estos terceros est\xe1 protegido por sus respectivas pol\xedticas de privacidad y no tenemos control ni somos responsables de las pr\xe1cticas de privacidad de terceros. \n\nAlgunos de nuestros Servicios, con su consentimiento previo, combinar\xe1n el juego y la informaci\xf3n anal\xedtica con la informaci\xf3n recopilada en otros juegos de Bandai Namco Entertainment, juegos de las empresas de nuestro grupo y otras fuentes externas para analizar tendencias de juegos y monetizaci\xf3n, crear perfiles de categor\xedas de jugadores, crear nuevos juegos y servicios y realizar otros an\xe1lisis. Con su consentimiento o de acuerdo con sus instrucciones, tambi\xe9n usamos cierta informaci\xf3n recopilada a trav\xe9s de nuestros juegos para realizar publicidad segmentada fuera del juego. Esto incluye crear perfiles de tipos de jugadores combinando sus datos con la informaci\xf3n de nuestros colaboradores publicitarios, proporcionando los datos a nuestras agencias y plataformas publicitarias para realizar publicidad segmentada de nuestros juegos y servicios (y de los de las empresas de nuestro grupo) fuera de este juego, as\xed como realizar anal\xedtica publicitaria y m\xe9tricas de rendimiento.\n\nPara obtener m\xe1s informaci\xf3n sobre la publicidad en Internet o confirmar que no se utilice su informaci\xf3n de navegaci\xf3n web con fines de publicidad conductual, visite los sitios web <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a> y <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a>. Los usuarios europeos pueden optar por no recibir publicidad dirigida visitando <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu/</a>. Tenga en cuenta que tiene que renovar esta opci\xf3n en cada dispositivo y navegador que utilice para acceder a nuestros Servicios.\n\nPara obtener m\xe1s informaci\xf3n sobre nuestras pr\xe1cticas y colaboradores anal\xedticos y de publicidad y c\xf3mo ejercer su derecho de exclusi\xf3n voluntaria, visite: <a href="https://legal.bandainamcoent.co.jp/privacy/opt-out" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/opt-out</a>.',
          ],
          it: [
            "Servizi pubblicitari e analitici forniti da altri",
            'Potremmo consentire ad altri soggetti di fornire servizi analitici per nostro conto e di trasmettere pubblicit\xe0 all\'interno dei nostri Servizi. Questi soggetti potrebbero impiegare tecnologie per raccogliere automaticamente informazioni sul dispositivo e l\'utilizzo dei nostri Servizi da parte dell\'Utente, compreso l\'indirizzo IP, l\'ID del dispositivo, il tempo trascorso a visitare le pagine all\'interno dei nostri Servizi e link selezionati all\'interno dei nostri Servizi. Queste informazioni potrebbero essere utilizzate da noi e da altri soggetti, tra l\u2019altro, per mantenere, migliorare e analizzare il funzionamento dei nostri Servizi e trasmettere pubblicit\xe0 contestuale o mirata che possa essere d\u2019interesse per l\u2019Utente. L\u2019uso di informazioni riguardanti l\u2019Utente ad opera di queste terze parti sottost\xe0 alle loro Informative sulla Privacy, mentre noi non abbiamo controllo n\xe9 responsabilit\xe0 alcuna per la gestione della privacy dell\u2019Utente da parte di soggetti terzi.\n\nAlcuni dei nostri Servizi combinano, previo consenso dell\u2019Utente, l\u2019esperienza di gioco e le informazioni analitiche con i dati raccolti da altri giochi di Bandai Namco Entertainment, da giochi di societ\xe0 del nostro gruppo e da altre fonti di terze parti al fine di analizzare le tendenze di gioco e di spesa, creare profili di categorie di giocatori, sviluppare nuovi giochi e servizi e condurre altri tipi di analisi. Inoltre, con il consenso dell\'Utente o su indicazione, utilizziamo alcune informazioni raccolte attraverso i nostri giochi per personalizzare le pubblicit\xe0 al di fuori del gioco. Questa attivit\xe0 comprende la creazione di profili di categorie di giocatori, ottenuti combinando i dati dell\u2019Utente con quelli forniti dai nostri partner pubblicitari, la trasmissione di tali dati alle nostre agenzie e piattaforme pubblicitarie al fine di sviluppare annunci mirati relativi ai nostri giochi e servizi (e a quelli delle societ\xe0 del nostro gruppo) da inviare all\u2019utente al di fuori di questo gioco, nonch\xe9 la conduzione di analisi pubblicitarie e misurazioni prestazionali.\n\nPer ulteriori informazioni in merito agli annunci pubblicitari basati su Internet, o per ritirare il consenso all\'utilizzo delle informazioni sulla sua navigazione sul web per scopi di pubblicit\xe0 comportamentale, preghiamo l\'Utente di visitare le pagine <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a> e <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a>. Gli utenti europei possono scegliere se ricevere annunci pubblicitari mirati visitando il sito <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu/</a>.  Ricordiamo che \xe8 necessario riconfermare la propria preferenza su ciascun dispositivo e browser utilizzato dall\'Utente per accedere ai nostri Servizi.\n\nPer ricevere ulteriori informazioni sulle nostre pratiche analitiche e pubblicitarie e sui partner che offrono tali servizi e per scoprire come cancellare la propria iscrizione, si consiglia di visitare la pagina: <a href="https://legal.bandainamcoent.co.jp/privacy/opt-out" target="_blank" rel="noopener noreferrer">https://legal.bandainamcoent.co.jp/privacy/opt-out</a>.',
          ],
        },
        oe = {
          ja: [
            "\u30bd\u30fc\u30b7\u30e3\u30eb\u5171\u6709\u6a5f\u80fd",
            "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u308a\u3001\u304a\u5ba2\u69d8\u306b\u304a\u3051\u308b\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u3068\u306e\u9593\u3067\u306e\u6d3b\u52d5\u306e\u5171\u6709\u307e\u305f\u306f\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u30ea\u30f3\u30af\u3092\u53ef\u80fd\u3068\u3059\u308b\u30bd\u30fc\u30b7\u30e3\u30eb\u5171\u6709\u6a5f\u80fd\u305d\u306e\u4ed6\u306e\u30c4\u30fc\u30eb\u304c\u63d0\u4f9b\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u304b\u304b\u308b\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u304a\u3051\u308b\u304a\u5ba2\u69d8\u306e\u8a2d\u5b9a\u5185\u5bb9\u306b\u5fdc\u3058\u3066\u3001\u304a\u5ba2\u69d8\u306e\u53cb\u3060\u3061\u307e\u305f\u306f\u516c\u8846\u3068\u306e\u60c5\u5831\u5171\u6709\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002\u30bd\u30fc\u30b7\u30e3\u30eb\u5171\u6709\u6a5f\u80fd\u306b\u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u306e\u53ce\u96c6\u304a\u3088\u3073\u51e6\u7406\u306e\u76ee\u7684\u306a\u3089\u3073\u306b\u7bc4\u56f2\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u5f53\u8a72\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",
          ],
          en: [
            "Social Sharing Feature",
            "The Services may offer social sharing features or other tools, which let you share actions or link the Services with social media.  The use of such features enables the sharing of information with your friends or the public, depending on the settings you establish with the social media platform.  For more information about the purpose and scope of data collection and processing in connection with social sharing features, please visit the privacy policies of the social media platforms.",
          ],
          fr: [
            "Fonction de partage social",
            "Les Services peuvent proposer des fonctions de partage social ou autres outils, qui vous permettent de partager des actions ou lier les Services avec des m\xe9dias sociaux. L\u2019utilisation desdites fonctions permet le partage d\u2019informations avec vos amis ou en public, en fonction des param\xe8tres que vous d\xe9finissez avec la plateforme de m\xe9dia social. Pour obtenir de plus amples informations au sujet de l\u2019objet et de la port\xe9e de la collecte et du traitement de donn\xe9es en relation avec des fonctions de partage social, veuillez consulter les politiques de confidentialit\xe9 des plateformes de m\xe9dias sociaux.",
          ],
          de: [
            "Social-Sharing-Funktion",
            "Die Dienste k\xf6nnen Social-Sharing-Funktionen oder andere Tools umfassen, mit deren Hilfe Sie vorgenommene Handlungen mit sozialen Medien teilen oder die Dienste dort verlinken k\xf6nnen. Die Verwendung dieser Funktionen erlaubt es Ihnen, Informationen mit Ihren Freunden oder der \xd6ffentlichkeit zu teilen, je nachdem, welche Einstellungen Sie bei der Social-Media-Plattform gew\xe4hlt haben. Weitere Informationen zum Zweck und Umfang der Datensammlung und -bearbeitung im Zusammenhang mit Social-Sharing-Funktionen entnehmen Sie bitte den Datenschutzrichtlinien der Social-Media-Plattform.",
          ],
          es: [
            "Funciones de intercambio en redes sociales",
            "Los Servicios pueden ofrecer funciones de intercambio en redes sociales u otras herramientas que le permitir\xe1n dar a conocer las acciones o vincular los Servicios con otras redes sociales. El uso de esas funciones permite intercambiar informaci\xf3n con sus amigos o de forma p\xfablica, en funci\xf3n de la configuraci\xf3n que establezca con la plataforma de redes sociales. Para obtener m\xe1s informaci\xf3n acerca de la finalidad y el alcance de la recopilaci\xf3n y el tratamiento de informaci\xf3n en relaci\xf3n con las funciones de intercambio en redes sociales, visite la pol\xedtica de privacidad de las plataformas de redes sociales.",
          ],
          it: [
            "Funzione di condivisione social",
            "I Servizi possono offrire funzioni di condivisione social o altri strumenti atti a condividere azioni o a collegare i Servizi a social media. L'utilizzo di tali funzionalit\xe0 consente di condividere informazioni con amici o con il pubblico, a seconda delle impostazioni definite nella piattaforma di social media. Per ulteriori informazioni sullo scopo e la portata della raccolta e l\u2019elaborazione dei dati in relazione a funzioni di condivisione social, si invita a consultare le Informative sulla Privacy delle piattaforme di social media.",
          ],
        },
        te = {
          ja: [
            "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306b\u95a2\u3059\u308b\u60c5\u5831\u306e\u6d88\u5931\u3001\u76d7\u96e3\u3001\u4e0d\u6b63\u306a\u30a2\u30af\u30bb\u30b9\u3001\u958b\u793a\u3001\u6539\u5909\u306a\u3089\u3073\u306b\u7834\u640d\u304b\u3089\u306e\u4fdd\u8b77\u306b\u8cc7\u3059\u308b\u6280\u8853\u4e0a\u304a\u3088\u3073\u7d44\u7e54\u4e0a\u306e\u5408\u7406\u7684\u63aa\u7f6e\u3092\u8b1b\u3058\u3066\u3044\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u306e\u4f1d\u9001\u306e\u3044\u305a\u308c\u3082\u3001\u30bb\u30ad\u30e5\u30a2\u3067\u3042\u308b\u65e8\u3092\u4fdd\u8a3c\u3067\u304d\u308b\u3082\u306e\u3067\u306f\u306a\u304f\u3001\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u304b\u3089\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u3067\u5f53\u793e\u306b\u4f1d\u9001\u3055\u308c\u308b\u3044\u304b\u306a\u308b\u500b\u4eba\u60c5\u5831\u306b\u3064\u3044\u3066\u3082\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u4fdd\u8a3c\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
          ],
          en: [
            "Security",
            "We take reasonable technical and organizational measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no transmission over the internet can ever be guaranteed secure so we cannot guarantee the security of any personal information that you transfer over the internet to us.",
          ],
          fr: [
            "S\xe9curit\xe9",
            "Nous prenons des mesures techniques et organisationnelles raisonnables pour prot\xe9ger les informations vous concernant contre tout vol, perte ou utilisation frauduleuse et emp\xeacher tout acc\xe8s, divulgation, modification ou destruction non autoris\xe9s. Toutefois, aucune transmission par Internet ne pouvant \xeatre totalement s\xfbre, nous sommes dans l'impossibilit\xe9 de garantir la s\xe9curit\xe9 de vos donn\xe9es personnelles lors de leur transit.",
          ],
          de: [
            "Sicherheit",
            "Wir ergreifen angemessene technische und organisatorische Vorkehrungen, um f\xfcr den Schutz der auf Sie bezogenen Daten vor Verlust, Diebstahl, Missbrauch und unbefugtem Zugriff, Weitergabe, Ver\xe4nderung und Vernichtung zu sorgen. Da jedoch die Sicherheit von Internet\xfcbermittlungen nicht gew\xe4hrleistet werden kann, k\xf6nnen wir die Sicherheit von personenbezogenen Daten, die Sie \xfcber das Internet an uns \xfcbertragen, nicht gew\xe4hrleisten.",
          ],
          es: [
            "Seguridad",
            "Tomamos medidas t\xe9cnicas y organizativas razonables para ayudar a proteger su informaci\xf3n de las p\xe9rdidas, robos, usos indebidos y accesos, revelaciones, modificaciones y destrucciones sin autorizaci\xf3n. Sin embargo, no puede garantizarse la seguridad de ninguna transmisi\xf3n en Internet, por lo que no podemos garantizar la seguridad de ning\xfan dato personal que usted nos haga llegar a trav\xe9s de Internet.",
          ],
          it: [
            "Sicurezza",
            "Adottiamo tutti i provvedimenti tecnici e organizzativi ragionevolmente necessari per proteggere le informazioni dell'Utente da perdita, furto, utilizzo improprio e accesso non autorizzato, divulgazione, alterazione e distruzione. Poich\xe9 tuttavia non possiamo essere certi che le trasmissioni via Internet siano sicure al 100%, non possiamo garantire la sicurezza delle informazioni personali che l'Utente ci trasmette via Internet.",
          ],
        },
        ae = {
          ja: [
            "\u30c7\u30fc\u30bf\u306e\u4fdd\u7ba1\u304a\u3088\u3073\u524a\u9664",
            "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u3092\u901a\u3058\u3066\u53ce\u96c6\u3055\u308c\u305f\u500b\u4eba\u60c5\u5831\u305d\u306e\u4ed6\u306e\u30c7\u30fc\u30bf\u306f\u3001\u3044\u305a\u308c\u3082\u3001\u4e0a\u8a18II.\u306e\u76ee\u7684\u306b\u3068\u3063\u3066\u5fc5\u8981\u304c\u306a\u304f\u306a\u3063\u305f\u5834\u5408\u306b\u306f\u3001\u8b58\u5225\u4e0d\u80fd\u5316\u307e\u305f\u306f\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u3055\u3089\u306a\u308b\u4fdd\u6301\u304c\u6cd5\u5f8b\u306b\u3088\u308a\u7fa9\u52d9\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u9650\u308a\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002",
          ],
          en: [
            "Storing and deleting data",
            "Personal information collected through the Services is being stored and deleted in compliance with privacy requirements. All data will be de-identified or deleted if no longer required for the purposes mentioned above, unless further retention is required by law.",
          ],
          fr: [
            "Stockage et suppression de donn\xe9es",
            "Les donn\xe9es personnelles collect\xe9es par le biais des Services sont stock\xe9es et supprim\xe9es conform\xe9ment aux exigences en mati\xe8re de vie priv\xe9e. Toutes les donn\xe9es recueillies seront rendues anonymes ou effac\xe9es lorsqu'elles ne seront plus n\xe9cessaires aux fins mentionn\xe9es dans les pr\xe9sentes, \xe0 moins que leur stockage ne fasse l'objet d'une obligation l\xe9gale.",
          ],
          de: [
            "Speicherung und L\xf6schung von Daten",
            "Durch die Dienste gesammelte personenbezogene Daten werden unter Einhaltung der Datenschutzbestimmungen gespeichert und gel\xf6scht. Alle Daten, die nicht mehr f\xfcr die oben genannten Zwecke ben\xf6tigt werden, werden anonymisiert oder gel\xf6scht, sofern ihre weitere Aufbewahrung nicht gesetzlich vorgeschrieben ist.",
          ],
          es: [
            "Almacenamiento y eliminaci\xf3n de los datos",
            "La informaci\xf3n recopilada a trav\xe9s de los Servicios se almacena y elimina de acuerdo con exigencias de privacidad. Todos los datos dejar\xe1n de estar identificados o se eliminar\xe1n cuando dejen de ser necesarios para los fines anteriormente mencionados, a menos que la ley nos obligue a conservarlos durante m\xe1s tiempo. ",
          ],
          it: [
            "Archiviazione ed eliminazione dei dati",
            "Le informazioni personali raccolte attraverso i Servizi vengono archiviate ed eliminate in conformit\xe0 ai requisiti della privacy. Tutti i dati vengono privati dell\u2019identificazione ed eliminati se non sono pi\xf9 necessari per le finalit\xe0 di cui sopra, a meno che la legge non imponga di conservarli ulteriormente.",
          ],
        },
        se = {
          ja: ["\u56fd\u5916\u3078\u306e\u8ee2\u9001", ""],
          en: [
            "International Transfers",
            "Personal information that we collect from you is usually transferred, stored and processed in Japan. Please be aware that we may transfer your personal information to locations outside of Japan that offer the same level of data protection as Japanese laws (and GDPR for EU users) and outside of your country which may not offer the same level of data protection as your country\u2019s laws. In addition, we may store your personal information on a server installed outside Japan by us (and our group companies) or by our business partners. However we do disclose your personal information to third parties located overseas  after reviewing the privacy regulations in the country or region where your personal information is stored or handled, we take such steps as are required  in the circumstances to ensure it is used in accordance with applicable laws.",
          ],
          fr: [
            "Transferts internationaux",
            "Les donn\xe9es personnelles que nous collectons \xe0 votre sujet sont g\xe9n\xe9ralement transf\xe9r\xe9es, stock\xe9es et trait\xe9es au Japon. Veuillez noter que nous sommes susceptibles de transf\xe9rer ces informations vers des sites situ\xe9s hors du Japon qui offrent le m\xeame niveau de protection des donn\xe9es que les lois japonaises (et le RGPD pour les utilisateurs europ\xe9ens), ainsi que vers des sites situ\xe9s hors de votre pays susceptibles de ne pas offrir le m\xeame niveau de protection des donn\xe9es que les lois de votre pays de r\xe9sidence. Nous pouvons en outre stocker vos donn\xe9es personnelles sur un serveur install\xe9 hors du Japon par nos soins (et ceux des soci\xe9t\xe9s de notre groupe) ou par nos partenaires commerciaux. Cependant, nous divulguons vos donn\xe9es personnelles \xe0 des tiers situ\xe9s \xe0 l'\xe9tranger apr\xe8s avoir pris en compte la r\xe9glementation relative \xe0 la protection des renseignements personnels du pays ou de la r\xe9gion o\xf9 vos informations personnelles sont stock\xe9es ou trait\xe9es, et nous prenons toutes les mesures n\xe9cessaires pour nous assurer qu'elles sont utilis\xe9es conform\xe9ment au droit en vigueur.",
          ],
          de: [
            "Internationale \xdcbermittlungen",
            "Von uns gesammelte, Sie betreffende personenbezogene Daten werden in der Regel nach Japan \xfcbertragen, dort gespeichert und verarbeitet. Wir weisen Sie darauf hin, dass eine \xdcbermittlung an Standorte au\xdferhalb Japans, die dasselbe Datenschutzniveau wie die Gesetze Japans (und die DSGVO f\xfcr Nutzer in der EU) bieten, sowie an Standorte au\xdferhalb Ihres Landes, die u. U. nicht das gleiche Datenschutzniveau wie die Gesetze Ihres Landes bieten, stattfinden kann. Au\xdferdem speichern wir Ihre personenbezogenen Daten gegebenenfalls auf einem von uns (und unseren Konzernunternehmen) oder von unseren Gesch\xe4ftspartnern au\xdferhalb von Japan installierten Server. Wir werden Ihre personenbezogenen Daten jedoch an im Ausland ans\xe4ssige Dritte \xfcbermitteln, nachdem wir die Datenschutzvorschriften des Landes oder der Region \xfcberpr\xfcft haben, in dem bzw. in der Ihre Daten gespeichert oder verarbeitet werden, und ergreifen die unter den Umst\xe4nden erforderlichen Schritte, um sicherzustellen, dass diese in \xdcbereinstimmung mit den anwendbaren Gesetzen verwendet werden.",
          ],
          es: [
            "Transferencias internacionales",
            "Los datos personales que recopilamos sobre usted suelen transferirse, almacenarse y tratarse en Jap\xf3n. Tenga en cuenta que podemos transferir su informaci\xf3n personal a lugares fuera de Jap\xf3n que ofrezcan el mismo nivel de protecci\xf3n de datos que las leyes de Jap\xf3n (y que el RGDP para usuarios de la Uni\xf3n Europea) y tambi\xe9n fuera de su pa\xeds, donde no se ofrezca el mismo nivel de protecci\xf3n de datos que en su pa\xeds. Adem\xe1s, podemos almacenar su informaci\xf3n personal en un servidor que nosotros (o las empresas de nuestro grupo) o nuestros colaboradores comerciales hayamos instalado fuera de Jap\xf3n. Sin embargo, en caso de que revelemos su informaci\xf3n personal a terceros ubicados en el extranjero tras revisar la normativa sobre privacidad del pa\xeds o regi\xf3n donde se almacenen o traten sus datos personales, tomaremos las medidas necesarias en las correspondientes circunstancias para asegurar que sus datos se utilicen de acuerdo con la legislaci\xf3n aplicable.",
          ],
          it: [
            "Trasferimenti internazionali",
            "Le informazioni personali da noi raccolte vengono normalmente trasferite, archiviate e trattate in Giappone.\n\nSi prega l\u2019Utente di tenere presente che alcune informazioni personali potrebbero essere trasferite al di fuori del Giappone, in sedi che offrono lo stesso livello di protezione dei dati previsto dalle leggi giapponesi (e dal RGPD per gli utenti residenti nell'UE) e al di fuori del proprio Paese, in sedi che talvolta non offrono lo stesso livello di tutela garantito dalle leggi del proprio Paese. Inoltre, potremmo archiviare i dati personali dell'Utente su un server installato fuori dal Giappone da noi (e dalle societ\xe0 del nostro gruppo) o dai nostri partner commerciali. Ciononostante, nel caso di comunicazione dei dati personali dell'Utente a soggetti terzi all\u2019estero, dopo aver esaminato le norme sulla privacy nel Paese o nella regione in cui esse saranno conservate o gestite, saranno presi tutti i provvedimenti ragionevolmente necessari, in considerazione delle circostanze, per garantire che i dati vengano utilizzati in accordo con le leggi applicabili.",
          ],
        },
        le = [
          "\u5f53\u793e\u304c\u304a\u5ba2\u69d8\u304b\u3089\u53ce\u96c6\u3059\u308b\u500b\u4eba\u60c5\u5831\u306e\u8ee2\u9001\u3001\u4fdd\u5b58\u304a\u3088\u3073\u51e6\u7406\u306f\u3001\u901a\u5e38\u306e\u5834\u5408\u3001\u65e5\u672c\u56fd\u5185\u3067\u884c\u308f\u308c\u307e\u3059\u304c\u3001\u5834\u5408\u306b\u3088\u308a\u3001\u5f53\u793e\u306f\u3001\u65e5\u672c\u307e\u305f\u306fGDPR\u3068\u540c\u7b49\u306e\u30ec\u30d9\u30eb\u306e\u500b\u4eba\u60c5\u5831\u4fdd\u8b77\u5236\u5ea6\u3092\u6709\u3059\u308b\u5916\u56fd\u3084\u3001\u305d\u306e\u4ed6\u304a\u5ba2\u69d8\u306e\u56fd\u306e\u6cd5\u5f8b\u3068\u540c\u4e00\u30ec\u30d9\u30eb\u3067\u306e\u30c7\u30fc\u30bf\u4fdd\u8b77\u3092\u63d0\u4f9b\u3067\u304d\u306a\u3044\u5916\u56fd\u306e\u7b2c\u4e09\u8005\u306b\u3001\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u958b\u793a\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u3001\u5f53\u793e\uff08\u304a\u3088\u3073\u5f53\u793e\u306e\u30b0\u30eb\u30fc\u30d7\u4f1a\u793e\uff09\u307e\u305f\u306f\u5916\u90e8\u4e8b\u696d\u8005\u304c\u65e5\u672c\u56fd\u5916\u306b\u8a2d\u7f6e\u3057\u305f\u30b5\u30fc\u30d0\u3067\u4fdd\u5b58\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u5f53\u793e\u306f\u3001\u56fd\u5916\u3092\u6240\u5728\u5730\u3068\u3059\u308b\u7b2c\u4e09\u8005\u306b\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u958b\u793a\u3057\u305f\u308a\u3001\u56fd\u5916\u3067\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u305f\u308a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u304c\u4fdd\u5b58\u3055\u308c\u3001\u307e\u305f\u306f\u53d6\u308a\u6271\u308f\u308c\u308b\u56fd\u307e\u305f\u306f\u5730\u57df\u306b\u304a\u3051\u308b\u500b\u4eba\u60c5\u5831\u306e\u4fdd\u8b77\u306b\u95a2\u3059\u308b\u5236\u5ea6\u3092\u628a\u63e1\u3057\u305f\u4e0a\u3067\u3001\u5f53\u8a72\u60c5\u5831\u306e\u5229\u7528\u304c\u5404\u5730\u57df\u306e\u6cd5\u5f8b\u306b\u5f93\u3063\u305f\u3082\u306e\u3068\u306a\u308b\u72b6\u6cc1\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306e\u5408\u7406\u7684\u63aa\u7f6e\u3092\u8b1b\u3058\u307e\u3059\u3002",
          '\u5f53\u793e\u306f\u3001<a href="https://legal.bandainamcoent.co.jp/privacy/global_cnsnt_ctry" target="_blank" rel="noopener noreferrer">\u3053\u308c\u3089\u306e\u56fd\u30fb\u5730\u57df</a>\u306e\u3044\u305a\u308c\u304b\u306b\u6240\u5728\u3059\u308b\u7b2c\u4e09\u8005\u306b\u304a\u5ba2\u69d8\u306e\u60c5\u5831\u3092\u958b\u793a\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u5404\u56fd\u30fb\u5730\u57df\u306b\u304a\u3051\u308b\u500b\u4eba\u60c5\u5831\u306e\u4fdd\u8b77\u306b\u95a2\u3059\u308b\u5236\u5ea6\u306e\u6982\u8981\u306f\u3001<a href="https://legal.bandainamcoent.co.jp/privacy/ppc_survey-jp" target="_blank" rel="noopener noreferrer">\u3053\u3061\u3089\u306e\u30ea\u30f3\u30af\u5148</a>\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002',
        ],
        ce = {
          ja: [
            "\u7b2c\u4e09\u8005\u306e\u30b5\u30a4\u30c8",
            "\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306b\u306f\u3001\u7b2c\u4e09\u8005\u306b\u3088\u308a\u904b\u55b6\u3055\u308c\u3066\u3044\u308b\u4ed6\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u307e\u305f\u306f\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30ea\u30f3\u30af\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u672c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306f\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u307f\u306b\u9069\u7528\u3055\u308c\u308b\u3082\u306e\u3067\u3042\u308a\u3001\u7b2c\u4e09\u8005\u304c\u305d\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u901a\u3058\u3066\u53ce\u96c6\u3001\u4fdd\u7ba1\u304a\u3088\u3073\u5229\u7528\u3059\u308b\u3053\u3068\u306e\u3042\u308b\u500b\u4eba\u60c5\u5831\u306b\u3064\u3044\u3066\u5f53\u793e\u304c\u8cac\u4efb\u3092\u8ca0\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u305d\u306e\u65e8\u3054\u7559\u610f\u304f\u3060\u3055\u3044\u3002\u304a\u5ba2\u69d8\u306b\u304a\u3044\u3066\u3001\u8a2a\u554f\u5148\u306e\u5404\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306b\u5fc5\u305a\u76ee\u3092\u901a\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",
          ],
          en: [
            "Third Party Sites",
            "Our Services may contain links to other websites  or services operated by third parties.  Please note that this Privacy Policy applies only to our Services and we cannot be responsible for personal information that third parties may collect, store and use through their website.  You should always read the privacy policy of each website you visit carefully.",
          ],
          fr: [
            "Sites tiers",
            "Nos Services sont susceptibles de contenir des liens vers des sites Internet ou des services g\xe9r\xe9s par des tiers. Veuillez noter que cette Politique de confidentialit\xe9 ne s'applique qu'\xe0 notre seul Jeu et que nous ne saurions \xeatre tenus responsables de la collecte, du stockage ou de l'utilisation de donn\xe9es personnelles par un site Internet externe. Veillez \xe0 lire attentivement la Politique de confidentialit\xe9 de tous les sites Internet que vous visitez.",
          ],
          de: [
            "Websites Dritter",
            "Unsere Dienste k\xf6nnen Links zu anderen, von Dritten betriebenen Websites und Diensten enthalten. Wir weisen Sie darauf hin, dass diese Datenschutzerkl\xe4rung nur f\xfcr unsere Dienste gilt und dass wir keine Haftung f\xfcr personenbezogene Daten \xfcbernehmen, die Dritte u.U. \xfcber ihre Websites sammeln, speichern und nutzen. Sie sollten die Datenschutzrichtlinien der Websites, die Sie besuchen, immer sorgf\xe4ltig zu Kenntnis nehmen.",
          ],
          es: [
            "Sitios de terceros",
            "Nuestros Servicios pueden contener enlaces a otros sitios web o servicios operados por terceros. Tenga en cuenta que la presente Pol\xedtica de privacidad solamente se aplicar\xe1 a nuestros Servicios y que no podemos hacernos responsables de los datos personales que puedan ser recopilados, almacenados y utilizados por terceros a trav\xe9s de sus propios sitios web. Le recomendamos que lea siempre la pol\xedtica de privacidad de cada sitio web con suma atenci\xf3n.",
          ],
          it: [
            "Siti di terzi",
            "I nostri Servizi possono contenere link che rimandano ad altri siti web o servizi gestiti da terzi. Si prega di tenere presente che la presente Informativa sulla privacy si applica esclusivamente ai nostri Servizi e che non possiamo essere ritenuti responsabili delle informazioni personali eventualmente raccolte, archiviate e utilizzate da soggetti terzi attraverso il loro sito web. Invitiamo l'Utente a leggere sempre attentamente l'Informativa sulla privacy di ogni sito web che visita.",
          ],
        },
        de = {
          ja: [
            "\u30d7\u30c3\u30b7\u30e5\u901a\u77e5/\u30a2\u30e9\u30fc\u30c8",
            "\u5f53\u793e\u306f\u3001\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u307e\u305f\u306f\u30a2\u30e9\u30fc\u30c8\u3092\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u304a\u5ba2\u69d8\u306f\u3001\u3054\u81ea\u8eab\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u901a\u77e5\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u304b\u304b\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u3092\u3044\u3064\u3067\u3082\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u7528\u30b3\u30f3\u30c6\u30f3\u30c4\u4ed8\u304d\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u307e\u305f\u306f\u30a2\u30e9\u30fc\u30c8\u304c\u5f53\u793e\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u306e\u306f\u3001\u5f53\u8a72\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d7\u9818\u306b\u3064\u3044\u3066\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u304a\u3051\u308b\u304a\u5ba2\u69d8\u306b\u3088\u308b\u4e8b\u524d\u30aa\u30d7\u30c8\u30a4\u30f3\u304c\u3042\u3063\u305f\u5f8c\u306b\u9650\u3089\u308c\u307e\u3059\u3002",
          ],
          en: [
            "Push Notifications/Alerts",
            "BNEI may send push notifications or alerts to your device. You can deactivate these messages at any time by changing the notification settings on your device. BNEI will send push notifications or alerts with promotional content only after your prior opt-in to receiving such messages on your device.",
          ],
          fr: [
            "Notifications Push/Alertes",
            "BNEI peut envoyer des notifications Push ou des alertes sur votre appareil. Vous pouvez d\xe9sactiver lesdits messages \xe0 tout moment en modifiant les param\xe8tres de notification sur votre appareil. BNEI enverra des notifications Push ou des alertes avec un contenu promotionnel uniquement apr\xe8s avoir obtenu votre consentement pr\xe9alable \xe0 la r\xe9ception desdits messages sur votre appareil.",
          ],
          de: [
            "Push-Benachrichtigungen/Meldungen",
            "BNEI kann Push-Benachrichtigungen oder Meldungen an Ihr Ger\xe4t schicken. Diese Mitteilungen k\xf6nnen Sie jederzeit durch \xc4nderung der Benachrichtigungseinstellungen auf Ihrem Ger\xe4t deaktivieren. BNEI sendet Push-Benachrichtigungen oder Meldungen mit verkaufsf\xf6rderndem Inhalt nur, wenn Sie vorher Ihre Einwilligung zum Erhalt solcher Mitteilungen auf Ihrem Ger\xe4t gegeben haben.",
          ],
          es: [
            "Alertas/notificaciones autom\xe1ticas",
            "BNEI podr\xe1 enviarle alertas o notificaciones autom\xe1ticas a su dispositivo. Puede desactivar esos mensajes en cualquier momento modificando la configuraci\xf3n de las notificaciones en su dispositivo. BNEI le enviar\xe1 alertas y notificaciones autom\xe1ticas con contenido promocional solamente con su autorizaci\xf3n para recibir dichos mensajes en su dispositivo.",
          ],
          it: [
            "Notifiche/Avvisi push",
            "BNEI pu\xf2 inviare notifiche o avvisi push al dispositivo dell'Utente. Quest\u2019ultimo ha la facolt\xe0 di disattivare tali messaggi in qualsiasi momento modificando le impostazioni di notifica sul proprio dispositivo. BNEI invier\xe0 notifiche o avvisi push con contenuto promozionale solo dopo avere ricevuto il consenso dell'Utente a ricevere tali messaggi sul proprio dispositivo.",
          ],
        },
        ue = {
          ja: [
            "\u30c7\u30fc\u30bf\u4fdd\u8b77\u306e\u6a29\u5229",
            "\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\uff08\u304a\u5ba2\u69d8\u304c\u672a\u6210\u5e74\u306e\u5834\u5408\u306b\u304a\u3044\u3066\u306f\u304a\u5ba2\u69d8\u306e\u6cd5\u5b9a\u4ee3\u7406\u4eba\u3082\u540c\u69d8\u3067\u3059\uff09\u304b\u3089\u8acb\u6c42\u304c\u3042\u3063\u305f\u3068\u304d\u306b\u306f\u3001\u6cd5\u4ee4\u306b\u5f93\u3044\u3001\u9069\u5207\u306b\u5bfe\u5fdc\u3044\u305f\u3057\u307e\u3059\u3002\u9069\u7528\u6cd5\u4e0a\u306e\u304a\u5ba2\u69d8\u306e\u6a29\u5229\u306b\u542b\u307e\u308c\u5f97\u308b\u3082\u306e\u306e\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002",
            '\u3053\u308c\u3089\u306e\u8acb\u6c42\u3092\u884c\u3046\u306b\u306f\u3001\u4e0b\u8a18XII.\u306e\u5f53\u793e\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u306b\u3066\u3001\u3054\u672c\u4eba\u78ba\u8a8d\u306e\u305f\u3081\u306e\u5f53\u793e\u304b\u3089\u306e\u3054\u8cea\u554f\u306b\u3054\u56de\u7b54\u3044\u305f\u3060\u3044\u305f\u3046\u3048\u3067\u7533\u8acb\u3044\u305f\u3060\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u306a\u304a\u3001\u6cd5\u5b9a\u4ee3\u7406\u4eba\u305d\u306e\u4ed6\u306e\u4ee3\u7406\u4eba\u306b\u3088\u308b\u8acb\u6c42\u306e\u5834\u5408\u3001\u5225\u9014\u5f53\u793e\u306e\u6307\u5b9a\u3059\u308b\u4ee3\u7406\u6a29\u3092\u8a3c\u3059\u308b\u8cc7\u6599\u3092\u90f5\u9001\u307e\u305f\u306f\u9001\u4fe1\u3044\u305f\u3060\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\n\u304a\u5ba2\u69d8\u306b\u5bfe\u3059\u308b\u500b\u4eba\u60c5\u5831\u306e\u5229\u7528\u76ee\u7684\u306e\u901a\u77e5\u304a\u3088\u3073\u500b\u4eba\u60c5\u5831\u307e\u305f\u306f\u305d\u306e\u7b2c\u4e09\u8005\u3078\u306e\u63d0\u4f9b\u306e\u8a18\u9332\u306e\u958b\u793a\u306e\u8acb\u6c42\u306b\u3064\u304d\u307e\u3057\u3066\u306f\u3001\u5225\u9014\u5f53\u793e\u7a93\u53e3\u3088\u308a\u3054\u6848\u5185\u3059\u308b\u91d1\u984d\u306e\u624b\u6570\u6599\u3092\u3044\u305f\u3060\u304d\u307e\u3059\u3002\n\n\u304a\u5ba2\u69d8\u306f\u3001\u304a\u5ba2\u69d8\u304b\u3089\u306e\u4f9d\u983c\u306b\u5bfe\u3059\u308b\u5f53\u793e\u306e\u5bfe\u5fdc\u65b9\u6cd5\u304c\u304a\u5ba2\u69d8\u306b\u3068\u3063\u3066\u6e80\u8db3\u306e\u3044\u304f\u3082\u306e\u3067\u306f\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u306f\u3001\u304a\u5ba2\u69d8\u306e\u5c45\u4f4f\u56fd\u306b\u4e0d\u670d\u3092\u7533\u3057\u7acb\u3066\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u76e3\u7763\u5f53\u5c40\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u5f53\u8a72\u76e3\u7763\u5f53\u5c40\u306b\u4e0d\u670d\u3092\u7533\u3057\u7acb\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5f53\u793e\u306f\u3001\u304b\u304b\u308b\u6a29\u5229\u304c\u304a\u5ba2\u69d8\u306b\u3088\u308a\u884c\u4f7f\u3055\u308c\u305f\u5834\u5408\u306b\u304a\u3044\u3066\u3082\u3001\u7570\u306a\u308b\u30ec\u30d9\u30eb\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u3001\u304a\u5ba2\u69d8\u306f\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u9069\u5207\u306a\u6a5f\u80fd\u306e\u78ba\u4fdd\u306b\u3068\u3063\u3066\u5fc5\u8981\u3068\u306a\u308b\u60c5\u5831\u306e\u53ce\u96c6\u306e\u524a\u9664\u307e\u305f\u306f\u53ce\u96c6\u505c\u6b62\u3092\u4f9d\u983c\u3057\u305f\u5834\u5408\u306b\u306f\u3001\u5bfe\u8c61\u30b5\u30fc\u30d3\u30b9\u306e\u5168\u90e8\u307e\u305f\u306f\u4e00\u90e8\u306e\u5229\u7528\u304c\u3067\u304d\u306a\u304f\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\n\u304a\u5ba2\u69d8\u304c\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3ID\u3092\u6709\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u304a\u3044\u3066\u3054\u81ea\u8eab\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u95b2\u89a7\u307e\u305f\u306f\u524a\u9664\u3092\u5e0c\u671b\u3059\u308b\u3068\u304d\u306f\u3001\u3054\u81ea\u8eab\u306e\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3ID\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u305f\u3046\u3048\u3067\u3001<a href="https://www.bandainamcoid.com/portal/resign" target="_blank" rel="noopener noreferrer">https://www.bandainamcoid.com/portal/resign</a>\u306e\u8aac\u660e\u5185\u5bb9\u306b\u6cbf\u3063\u3066\u624b\u7d9a\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002\u304a\u5ba2\u69d8\u304c\u3054\u81ea\u8eab\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u524a\u9664\u3057\u305f\u5f8c\u306b\u304a\u3044\u3066\u306f\u3001\u304a\u5ba2\u69d8\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u95a2\u4fc2\u3059\u308b\u4e00\u5207\u306e\u500b\u4eba\u60c5\u5831\u304c\u524a\u9664\u3055\u308c\u3001\u304a\u5ba2\u69d8\u306f\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3ID\u30b5\u30fc\u30d3\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002',
          ],
          en: [
            "Data Protection Rights",
            "You, and your legal guardian if you are a minor, have certain data protection rights under applicable law. Your rights under applicable law may include:",
            'To exercise these rights, you should make a request using our contact details set out below. If you are not satisfied with the way we handle your request, and your country of residence has a supervisory authority, you may lodge a complaint with such supervisory authority in your country of residence. We do not provide different levels of service if you exercise these rights. However, if you request that we delete or cease collecting information which is necessary to ensure adequate functioning of the Services, you may not be able to use all or some parts of our Services.\n\nIf you have a BANDAI NAMCO ID, and wish view or to delete your account, sign into your BANDAI NAMCO ID and follow the instructions on <a href="https://www.bandainamcoid.com/portal/resign" target="_blank" rel="noopener noreferrer">https://www.bandainamcoid.com/portal/resign</a>. Once you delete your account, all personal information related to your account will be deleted, but you will no longer be able to access the BANDAI NAMCO ID services.',
          ],
          fr: [
            "Droits en mati\xe8re de protection des donn\xe9es ",
            "Vous et votre tuteur l\xe9gal, si vous \xeates mineur, disposez de certains droits en mati\xe8re de protection des donn\xe9es conform\xe9ment aux lois applicables. Ces droits peuvent inclure :",
            'Afin d\u2019exercer ces droits, vous devez pr\xe9senter une requ\xeate en utilisant les coordonn\xe9es indiqu\xe9es ci-apr\xe8s. Si la mani\xe8re dont nous traitons votre requ\xeate ne vous satisfait pas, et si votre pays de r\xe9sidence dispose d\u2019une autorit\xe9 de supervision, vous pourrez pr\xe9senter une r\xe9clamation aupr\xe8s de l\u2019autorit\xe9 de supervision de votre pays de r\xe9sidence. Notre prestation de services ne sera pas amoindrie si vous d\xe9cidez d\u2019exercer ces droits. N\xe9anmoins, si vous demandez que nous supprimions ou que nous cessions de recueillir les donn\xe9es n\xe9cessaires \xe0 la bonne ex\xe9cution des Services, vous risquez de ne plus pouvoir utiliser tout ou partie des Services.\n\nSi vous avez un BANDAI NAMCO ID, et souhaitez consulter ou supprimer votre compte, connectez-vous avec votre BANDAI NAMCO ID et suivez les instructions figurant \xe0 l\'adresse : <a href="https://www.bandainamcoid.com/portal/resign" target="_blank" rel="noopener noreferrer">https://www.bandainamcoid.com/portal/resign</a>. Une fois que vous aurez supprim\xe9 votre compte, l\u2019ensemble des informations personnelles relatives \xe0 votre compte sera supprim\xe9 mais vous ne serez plus en mesure d\u2019acc\xe9der aux services BANDAI NAMCO ID.',
          ],
          de: [
            "Datenschutzrechte",
            "Sie und Ihr gesetzlicher Vormund, falls Sie minderj\xe4hrig sind, haben bestimmte Datenschutzrechte gem\xe4\xdf geltendem Recht. Zu Ihren Rechten unter geltendem Recht k\xf6nnen z\xe4hlen:",
            'Um diese Rechte in Anspruch zu nehmen, stellen Sie einen entsprechenden Antrag \xfcber die unten angegebenen Kontaktdaten. Wenn Sie mit der Art, wie Ihr Antrag behandelt wird, nicht zufrieden sind und Ihr Wohnsitzland eine Aufsichtsbeh\xf6rde hat, k\xf6nnen Sie eine Beschwerde bei dieser Aufsichtsbeh\xf6rde Ihres Wohnsitzlandes einreichen. Wenn Sie die oben genannten Rechte in Anspruch nehmen, bieten wir Ihnen nach wie vor dieselben Dienste in gleichem Umfang an. Wenn Sie uns jedoch darum bitten, Daten zu l\xf6schen oder deren Erhebung einzustellen, die f\xfcr die ordnungsgem\xe4\xdfe Funktion unserer Dienste ben\xf6tigt werden, k\xf6nnen Sie unsere Dienste oder Teile davon eventuell nicht mehr nutzen.\n\nFalls Sie eine BANDAI NAMCO ID haben und Ihr Konto aufrufen oder l\xf6schen m\xf6chten, melden Sie sich bei Ihrer BANDAI NAMCO ID an und folgen Sie den Anweisungen auf <a href="https://www.bandainamcoid.com/portal/resign" target="_blank" rel="noopener noreferrer">https://www.bandainamcoid.com/portal/resign</a>. Sobald Ihr Konto gel\xf6scht ist, werden alle personenbezogenen Daten mit Verbindung zu Ihrem Konto gel\xf6scht werden, Sie k\xf6nnen dann jedoch auf die BANDAI NAMCO ID-Services nicht mehr zugreifen.',
          ],
          es: [
            "Derechos de protecci\xf3n de datos",
            "Usted, y su tutor legal si es menor, ejercen determinados derechos de protecci\xf3n de datos seg\xfan la legislaci\xf3n aplicable. Entre otros, sus derechos de conformidad con la legislaci\xf3n aplicable pueden ser:",
            'Para ejercer estos derechos, debe realizar una solicitud a trav\xe9s de nuestros datos de contacto que se indican m\xe1s adelante. Si no queda satisfecho con la forma en que gestionamos su solicitud, y el pa\xeds en el que reside dispone de una autoridad de control, puede presentar una reclamaci\xf3n ante dicha autoridad de control \u200b\u200bde su pa\xeds de residencia. Si ejerce estos derechos, no proporcionamos un determinado nivel de Servicios. Sin embargo, si solicita que eliminemos o dejemos de recopilar informaci\xf3n necesaria para garantizar un funcionamiento adecuado de los Servicios, puede que deje de poder utilizar la totalidad o parte de nuestros Servicios.\n\nSi tiene una BANDAI NAMCO ID y desea ver o eliminar su cuenta, reg\xedstrese con su BANDAI NAMCO ID y siga las instrucciones en <a href="https://www.bandainamcoid.com/portal/resign" target="_blank" rel="noopener noreferrer">https://www.bandainamcoid.com/portal/resign</a>. Cuando elimine su cuenta, se eliminar\xe1 toda la informaci\xf3n personal relacionada con su cuenta, pero ya no podr\xe1 acceder a los servicios de la BANDAI NAMCO ID.',
          ],
          it: [
            "Diritti di tutela dei dati",
            "L'Utente e il proprio tutore legale, qualora l'Utente fosse minorenne, godono determinati diritti di tutela dei dati in base alle leggi applicabili, quali:",
            'Per esercitare tali diritti l\u2019Utente deve inviare una richiesta utilizzando i dati di contatto forniti di seguito. Se non \xe8 soddisfatto del modo in cui trattiamo la sua richiesta, e nel suo Paese di residenza \xe8 presente un\'autorit\xe0 di vigilanza, pu\xf2 presentare un reclamo a tale autorit\xe0 di vigilanza del suo Paese di residenza. Se l\'Utente esercita tali diritti non gli forniamo livelli di servizio diversi. Tuttavia, se egli ci richiede la cancellazione o la sospensione della raccolta di informazioni necessarie per garantire un adeguato funzionamento dei Servizi, potrebbe non essere in grado di utilizzare tutti o parte dei nostri Servizi.\n\nSe l\u2019Utente detiene un BANDAI NAMCO ID e desidera visualizzare o eliminare il suo account, deve accedere al suo BANDAI NAMCO ID e seguire le istruzioni riportate in <a href="https://www.bandainamcoid.com/portal/resign" target="_blank" rel="noopener noreferrer">https://www.bandainamcoid.com/portal/resign</a>. L\u2019eliminazione dell\u2019account comporta la cancellazione di tutti i dati ad esso associati. In questo caso l\u2019Utente non potr\xe0 pi\xf9 accedere ai servizi BANDAI NAMCO ID.',
          ],
        },
        me = {
          ja: "\u304a\u5ba2\u69d8\u306b\u304a\u3044\u3066\u3001\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u307e\u305f\u306f\u5f53\u793e\u306b\u3088\u308b\u305d\u306e\u7b2c\u4e09\u8005\u3078\u306e\u63d0\u4f9b\u306e<strong>\u8a18\u9332\u306e\u958b\u793a</strong>\u3092\u5f53\u793e\u306b\u6c42\u3081\u308b\u5834\u5408\u3002",
          en: "<strong>Access</strong> to the personal information we process about you as well as the right to <strong>data portability</strong>, ",
          fr: "Le droit d'<strong>acc\xe8</strong> aux donn\xe9es personnelles vous concernant que nous traitons, ainsi que le droit \xe0 la <strong>portabilit\xe9 des donn\xe9es</strong> ;",
          de: "Das Recht auf <strong>Zugriff</strong> auf Ihre personenbezogenen Daten, die wir verarbeiten, sowie das Recht auf <strong>Daten\xfcbertragbarkeit</strong>;",
          es: "el <strong>acceso</strong> a la informaci\xf3n personal que tratemos sobre usted, as\xed como el derecho a la <strong>portabilidad de datos</strong>;",
          it: "il diritto di <strong>accesso</strong> alle informazioni personali da noi trattate sul suo conto, come pure il diritto alla <strong>portabilit\xe0 dei dati</strong>,",
        },
        pe = {
          ja: "\u5f53\u793e\u304c\u4fdd\u6709\u3059\u308b\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u304c\u4e8b\u5b9f\u3067\u306a\u3044\u305f\u3081\u306b\u3001\u304a\u5ba2\u69d8\u306b\u304a\u3044\u3066\u5f53\u793e\u306b\u305d\u306e<strong>\u8a02\u6b63</strong>\u3001<strong>\u8ffd\u52a0</strong>\u307e\u305f\u306f<strong>\u524a\u9664</strong>\u3092\u6c42\u3081\u308b\u5834\u5408\u3002",
          en: "The right to have personal information <strong>corrected</strong> or <strong>erased</strong>,",
          fr: "Le droit de faire <strong>corriger</strong> ou <strong>supprimer</strong> vos donn\xe9es personnelles ;",
          de: "Das Recht, personenbezogene Daten <strong>berichtigen oder l\xf6schen</strong> zu lassen;",
          es: "el derecho a <strong>rectificar o suprimir</strong> su informaci\xf3n personal;",
          it: "il diritto di richiedere la <strong>correzione</strong> o l\u2019<strong>eliminazione</strong> delle proprie informazioni personali,",
        },
        he = {
          ja: "\u5f53\u793e\u304c\u9055\u6cd5\u306b\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u5229\u7528\u3057\u3001\u307e\u305f\u306f\u7b2c\u4e09\u8005\u306b\u63d0\u4f9b\u3057\u3066\u3044\u308b\u3068\u3057\u3066\u3001\u304a\u5ba2\u69d8\u306b\u304a\u3044\u3066\u5f53\u793e\u306b\u305d\u306e\u5229\u7528\u3082\u3057\u304f\u306f\u7b2c\u4e09\u8005\u3078\u306e<strong>\u63d0\u4f9b\u306e\u505c\u6b62</strong>\u307e\u305f\u306f<strong>\u6d88\u53bb</strong>\u3092\u6c42\u3081\u308b\u5834\u5408\u3002",
          en: "The right to <strong>restrict the processing</strong> of your personal information",
          fr: "Le droit de <strong>limiter le traitement</strong> de vos donn\xe9es personnelles ;",
          de: "Das Recht, die <strong>Verarbeitung</strong> Ihrer personenbezogenen Daten <strong>einschr\xe4nken</strong> zu lassen;",
          es: "el derecho a <strong>restringir el tratamiento</strong> de su informaci\xf3n personal;",
          it: "il diritto di <strong>limitare il trattamento</strong> delle proprie informazioni personali,",
        },
        ge = {
          ja: "\u5f53\u793e\u306b\u304a\u3044\u3066\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u5229\u7528\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u3063\u305f\u3001\u307e\u305f\u306f\u5f53\u793e\u304c\u4fdd\u6709\u3059\u308b\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u306b\u3064\u3044\u3066\u6f0f\u3048\u3044\u30fb\u6ec5\u5931\u30fb\u6bc0\u640d\u306a\u3069\u304c\u751f\u3058\u305f\u3001\u305d\u306e\u4ed6\u5f53\u793e\u306b\u3088\u308b\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u306e\u53d6\u6271\u3044\u306b\u3088\u3063\u3066\u304a\u5ba2\u69d8\u306e\u6a29\u5229\u307e\u305f\u306f\u6b63\u5f53\u306a\u5229\u76ca\u304c\u5bb3\u3055\u308c\u308b\u304a\u305d\u308c\u304c\u3042\u308b\u306a\u3069\u306e\u7406\u7531\u306b\u3088\u308a\u3001\u304a\u5ba2\u69d8\u306b\u304a\u3044\u3066\u5f53\u793e\u306b\u500b\u4eba\u60c5\u5831\u306e\u5229\u7528\u3082\u3057\u304f\u306f\u7b2c\u4e09\u8005\u3078\u306e<strong>\u63d0\u4f9b\u306e\u505c\u6b62</strong>\u307e\u305f\u306f<strong>\u6d88\u53bb</strong>\u3092\u6c42\u3081\u308b\u5834\u5408\u3002",
          en: "The right to <strong>withdraw your consent</strong> at any time for consent we have obtained from you, although this will not affect the lawfulness of the processing prior to the withdrawal.",
          fr: "Le droit de <strong>retirer \xe0 tout moment le consentement</strong> que vous nous avez accord\xe9, sans que cela n\u2019affecte la l\xe9galit\xe9 du traitement de vos donn\xe9es personnelles effectu\xe9 avant ce retrait ;",
          de: "Das Recht, Ihre <strong>Zustimmung zu widerrufen</strong>, zu einem jeglichen Zeitpunkt, f\xfcr Einwilligungen, die wir von Ihnen erhalten haben, wobei dies nicht die Rechtm\xe4\xdfigkeit der Verarbeitung vor dem Widerruf beeinflusst.",
          es: "el derecho a <strong>retirar el consentimiento</strong> que hayamos recibido de usted en cualquier momento, aunque ello no afectar\xe1 a la legitimidad del tratamiento que haya autorizado antes de retirar su consentimiento;",
          it: "il diritto di <strong>revocare</strong> in qualunque momento <strong>il consenso</strong> accordatoci, sebbene tale revoca non pregiudichi la legittimit\xe0 del trattamento precedente alla revoca.",
        },
        fe = {
          ja: '\u307e\u305f\u3001\u304a\u5ba2\u69d8\u306f\u3001BNEI\u306e\u6b63\u5f53\u306a\u5229\u76ca\u306b\u57fa\u3065\u304f\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u306e\u51e6\u7406\u306b\u3064\u3044\u3066\u3001\u3044\u3064\u3067\u3082<strong style="background: rgb(217, 217, 217);">\u7570\u8b70\u7533\u7acb\u3066\u306e\u6a29\u5229</strong>\u3092\u6709\u3057\u307e\u3059\u3002',
          en: 'You also have the <strong style="background: rgb(217, 217, 217);">right to object</strong>, at any time, to the processing of your personal information which is based on BNEI\u2019s legitimate interests.',
          fr: 'Le droit de vous <strong style="background: rgb(217, 217, 217);">opposer</strong> \xe0 tout moment au traitement de vos donn\xe9es personnelles dans le cadre des int\xe9r\xeats l\xe9gitimes de BNEI ;',
          de: 'Sie haben auch das Recht, zu einem jeglichen Zeitpunkt der Verarbeitung Ihrer personenbezogenen Daten basierend auf berechtigtem Interesse von BNEI zu <strong style="background: rgb(217, 217, 217);">widersprechen.</strong>',
          es: 'tambi\xe9n tiene <strong style="background: rgb(217, 217, 217);">derecho a oponerse</strong>, en todo momento, al tratamiento de su informaci\xf3n personal que se base en los intereses leg\xedtimos de BNEI.',
          it: 'L\u2019Utente ha diritto di <strong style="background: rgb(217, 217, 217);">opporsi</strong> in qualsiasi momento al trattamento dei propri dati personali anche quando tale trattamento avvenga nel rispetto degli interessi legittimi di BNEI.',
        },
        ve = {
          ja: '\u5f53\u793e\u304c\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u30c0\u30a4\u30ec\u30af\u30c8\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306e\u76ee\u7684\u3067\u51e6\u7406\u3059\u308b\u5834\u5408\u3001\u304a\u5ba2\u69d8\u306f\u3001\u3044\u3064\u3067\u3082\u5f53\u8a72\u51e6\u7406\u306b\u3064\u3044\u3066<strong style="background: rgb(217, 217, 217);">\u7570\u8b70\u7533\u7acb\u3066\u306e\u6a29\u5229</strong>\u3092\u6709\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u30c0\u30a4\u30ec\u30af\u30c8\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306b\u95a2\u4fc2\u3059\u308b\u9650\u308a\u306b\u304a\u3044\u3066\u306f\u304a\u5ba2\u69d8\u306e\u30ab\u30c6\u30b4\u30ea\u30fc\u306e\u50be\u5411\u5206\u6790\u76ee\u7684\u3082\u542b\u307f\u307e\u3059\u3002\u304a\u5ba2\u69d8\u304c\u30c0\u30a4\u30ec\u30af\u30c8\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u76ee\u7684\u3067\u306e\u51e6\u7406\u306b\u7570\u8b70\u3092\u7533\u3057\u7acb\u3066\u305f\u5834\u5408\u3001\u305d\u306e\u5f8c\u3001\u5f53\u793e\u306f\u3001\u5f53\u8a72\u76ee\u7684\u3067\u306e\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u306e\u51e6\u7406\u3092\u884c\u3044\u307e\u305b\u3093\u3002\u3053\u306e\u5834\u5408\u306b\u304a\u3044\u3066\u3082\u3001\u5f53\u793e\u306f\u3001\u4e21\u8005\u9593\u3067\u7d99\u7d9a\u4e2d\u306e\u53d6\u5f15\u95a2\u4fc2\u306b\u95a2\u3059\u308b\u9650\u308a\u306b\u304a\u3044\u3066\u3001\u53d6\u5f15\u4e0a\u307e\u305f\u306f\u95a2\u4fc2\u4e0a\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5f15\u304d\u7d9a\u304d\u304a\u5ba2\u69d8\u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002',
          en: 'Where we process your personal information for direct marketing purposes, you have the <strong style="background: rgb(217, 217, 217);">right to object</strong> at any time to such processing, including for profiling purposes to the extent that it is related to direct marketing. If you object to processing for direct marketing purposes, we will no longer process your personal information for such purposes. In that case we may still send you transactional or relationship messages, but only about our ongoing business relations.',
          fr: "Le droit de vous <strong style=\"background: rgb(217, 217, 217);\">opposer</strong> \xe0 tout moment au traitement de vos donn\xe9es personnelles \xe0 des fins de marketing direct et notamment \xe0 votre profilage. En cas d'opposition de votre part, nous cesserons tout traitement de vos donn\xe9es personnelles aux fins susmentionn\xe9es. Nous pourrons cependant continuer \xe0 vous adresser des messages d'information ou relatifs \xe0 vos transactions dans le cadre exclusif de nos relations commerciales en cours.",
          de: 'Wenn wir Ihre personenbezogenen Daten f\xfcr Zwecke des Direktmarketings verwenden, haben Sie das Recht, dieser Verarbeitung, einschlie\xdflich zu Zwecken der Profilerstellung in einem Sinne, der mit dem Direktmarketing in Verbindung steht, zu einem jeglichen Zeitpunkt zu <strong style="background: rgb(217, 217, 217);">widersprechen</strong>. Wenn Sie der Bearbeitung f\xfcr Zwecke des Direktmarketings widersprechen, werden wir Ihre personenbezogenen Daten nicht weiter f\xfcr diese Zwecke verarbeiten. In diesem Fall k\xf6nnen wir Ihnen weiterhin Nachrichten zum Zwecke von Transaktionen oder zu anderen Belangen senden, dies jedoch ausschlie\xdflich zu laufenden Gesch\xe4ftsbeziehungen.',
          es: 'Si tratamos su informaci\xf3n personal con fines de marketing directo, tiene <strong style="background: rgb(217, 217, 217);">derecho a oponerse</strong> en todo momento a dicho tratamiento, incluso con fines de generaci\xf3n de perfiles en la medida en que esto est\xe9 relacionado con el marketing directo. Si se opone al tratamiento con fines de marketing directo, ya no trataremos su informaci\xf3n personal para tal fin. En ese caso, podremos seguir envi\xe1ndole mensajes sobre transacciones o nuestra relaci\xf3n comercial, pero solo basados en nuestras relaciones comerciales que est\xe9n en curso.',
          it: 'Quando trattiamo i dati personali dell\u2019Utente per finalit\xe0 di marketing, l\u2019Utente ha diritto di <strong style="background: rgb(217, 217, 217);">opporsi</strong> in qualsiasi momento a tale trattamento (incluso il caso di elaborazione a scopo di profilazione) in misura consona alle finalit\xe0 di marketing. Se l\u2019Utente si oppone al trattamento per finalit\xe0 di marketing, i suoi dati personali non saranno pi\xf9 trattati a tali scopi. Potremmo comunque inviargli dei messaggi relativi a eventuali transazioni o a relazioni commerciali in corso.',
        },
        be = {
          ja: "\u304a\u5ba2\u69d8\u306f\u3053\u308c\u3089\u306e\u6a29\u5229\u3092\u884c\u4f7f\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u5f53\u793e\u304b\u3089\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u533a\u5225\u304a\u3088\u3073<strong>\u5dee\u5225\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093</strong>\u3002",
          en: "The right <strong>to not be discriminated</strong> against for exercising these rights.",
          fr: "Le droit de <strong>ne pas subir de discrimination</strong> du fait de l\u2019exercice de ces droits.",
          de: "Das Recht auf <strong>Nicht-Diskriminierung</strong> wegen Inanspruchnahme dieser Rechte.",
          es: "El <strong>derecho a no ser discriminado</strong> por ejercer estos derechos.",
          it: "<strong>Il diritto a non essere discriminati</strong> per l'esercizio di questi diritti.",
        },
        ze = {
          ja: [
            "\u554f\u3044\u5408\u308f\u305b\u5148",
            '\u672c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u307e\u305f\u306f\u5f53\u793e\u306e\u65b9\u91dd\u306b\u95a2\u3057\u3066\u3054\u4e0d\u660e\u306a\u70b9\u306a\u3069\u304c\u3054\u3056\u3044\u307e\u3057\u305f\u3089\u3001\u4ee5\u4e0b\u306e\u5f53\u793e\u7a93\u53e3\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\n\n\u682a\u5f0f\u4f1a\u793e\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3\u30a8\u30f3\u30bf\u30fc\u30c6\u30a4\u30f3\u30e1\u30f3\u30c8\n\u62c5\u5f53\u90e8\u7f72\uff1a\u500b\u4eba\u60c5\u5831\u5bfe\u5916\u7a93\u53e3\n\u3012108-0014 \u6771\u4eac\u90fd\u6e2f\u533a\u829d5-37-8\n<a href="https://bnfaq-support.channel.or.jp/inquiry/privacycontact_jp" target="_blank" rel="noopener noreferrer">https://bnfaq-support.channel.or.jp/inquiry/privacycontact_jp</a>\n\n\u304a\u5ba2\u69d8\u304c\u6b27\u5dde\u9023\u5408\u5185\u306b\u6240\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u4ee5\u4e0b\u306b\u304a\u3044\u3066\u3082\u5f53\u793e\u3078\u306e\u554f\u3044\u5408\u308f\u305b\u304c\u53ef\u80fd\u3067\u3059\u3002\nBANDAI NAMCO  Europe S.A.S.\n15 rue F\xe9lix Mangini \u2013 \n69009 LYON \nFrance\n<a href="mailto:dpo@bandainamcoent.eu" target="_blank" rel="noopener noreferrer">dpo@bandainamcoent.eu</a>',
          ],
          en: [
            "Contact",
            'If you have any questions about this Privacy Policy or our practices, please contact us at: \n\n Bandai Namco Entertainment Inc.\nAttn: Contact for Personal Information Matter\n5-37-8 Shiba\nMinato-ku, Tokyo 108-0014\nJapan\n<a href="https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent" target="_blank" rel="noopener noreferrer">https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent</a>\n\nIf you are located in the European Union, you can also contact us at: \nBandai Namco Europe S.A.S.\n15 rue F\xe9lix Mangini  \n69009 LYON \nFrance  \n<a href="mailto:dpo@bandainamcoent.eu" target="_blank" rel="noopener noreferrer">dpo@bandainamcoent.eu</a>',
          ],
          fr: [
            "Nous contacter",
            'Si vous avez des questions au sujet de la pr\xe9sente Politique de confidentialit\xe9 ou de nos pratiques, veuillez nous contacter \xe0 l\u2019adresse :\n\nBandai Namco Entertainment Inc.\nAttn: Contact for Personal Information Matter\n5-37-8 Shiba\nMinato-ku, Tokyo 108-0014\nJapon\n+81-3-6744-6112 (t\xe9l\xe9phone)\n<a href="https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent" target="_blank" rel="noopener noreferrer">https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent</a>\n\nSi vous r\xe9sidez au sein de l\u2019Union europ\xe9enne, vous pouvez \xe9galement nous contacter \xe0 l\u2019adresse suivante : \nBandai Namco Europe S.A.S.\n15 rue F\xe9lix Mangini \u2013 \n69009 LYON \nFrance  \n<a href="mailto:dpo@bandainamcoent.eu" target="_blank" rel="noopener noreferrer">dpo@bandainamcoent.eu</a>',
          ],
          de: [
            "Kontakt",
            'Falls Sie Fragen bez\xfcglich dieser Datenschutzerkl\xe4rung haben, kontaktieren Sie uns unter:\n\nBandai Namco Entertainment Inc.\nAttn: Contact for Personal Information Matter\n5-37-8 Shiba\nMinato-ku, Tokyo 108-0014\nJapan\n+81-3-6744-6112 (Telefon)\n<a href="https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent" target="_blank" rel="noopener noreferrer">https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent</a>\n\nWenn Sie Ihren Wohnsitz in der Europ\xe4ischen Union haben, k\xf6nnen Sie uns auch \xfcber folgenden Weg kontaktieren:\nBandai Namco Europe S.A.S.\n15 rue F\xe9lix Mangini \u2013 \n69009 LYON \nFrance\n<a href="mailto:dpo@bandainamcoent.eu" target="_blank" rel="noopener noreferrer">dpo@bandainamcoent.eu</a>',
          ],
          es: [
            "Contacto",
            'Si tiene alguna pregunta relativa a la presente Pol\xedtica de privacidad, p\xf3ngase en contacto con nosotros en:\n\nBandai Namco Entertainment Inc.\nAttn: Contact for Personal Information Matter\n5-37-8 Shiba\nMinato-ku, Tokyo 108-0014\nJapan\n<a href="https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent" target="_blank" rel="noopener noreferrer">https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent</a>\n\nSi reside en la Uni\xf3n Europea, tambi\xe9n puede ponerse en contacto con nosotros a trav\xe9s de:\nBandai Namco Europe S.A.S.\n15 rue F\xe9lix Mangini \u2013 \n69009 LYON \nFrance  \n<a href="mailto:dpo@bandainamcoent.eu" target="_blank" rel="noopener noreferrer">dpo@bandainamcoent.eu</a>',
          ],
          it: [
            "Contatti",
            'In caso di domande sulla nostra Informativa sulla privacy o sulle nostre prassi, si prega di contattarci all\'indirizzo:\n\nBandai Namco Entertainment Inc.\nAttn: Contact for Personal Information Matter\n5-37-8 Shiba\nMinato-ku, Tokyo 108-0014\nJapan\n+81-3-6744-6112 (telefono)\n<a href="https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent" target="_blank" rel="noopener noreferrer">https://bnfaq-support.channel.or.jp/inquiry/privacycontact_bandainamcoent</a>\n\nSe l\u2019Utente risiede nell\u2019Unione europea, pu\xf2 contattarci anche all\u2019indirizzo: \nBandai Namco Europe S.A.S.\n15 rue F\xe9lix Mangini \u2013 \n69009 LYON \nFrance  \n<a href="mailto:dpo@bandainamcoent.eu" target="_blank" rel="noopener noreferrer">dpo@bandainamcoent.eu</a>',
          ],
        },
        ye = function () {
          return (0, u.tZ)(u.HY, {
            children: (0, u.BX)(t.DY, {
              children: [
                (0, u.tZ)(o.h, {}),
                (0, u.tZ)(h, {}),
                (0, u.tZ)(r.T, {}),
              ],
            }),
          });
        };
    },
    9008: function (e, n, i) {
      e.exports = i(72717);
    },
  },
]);
