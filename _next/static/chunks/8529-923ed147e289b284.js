(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8529],
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
            o = void 0 !== a && a;
          return n || (r && o);
        });
    },
    72717: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = d),
        (t.default = void 0);
      var i = n(6495).Z,
        r = n(92648).Z,
        a = (0, n(91598).Z)(n(67294)),
        o = r(n(11585)),
        c = n(78e3),
        s = n(15850),
        l = n(9470);
      n(99475);
      function d() {
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
      function h(e, t) {
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
      function u(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(h, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                i = {};
              return function (r) {
                var a = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  var c = r.key.slice(r.key.indexOf("$") + 1);
                  e.has(c) ? (a = !1) : e.add(c);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    t.has(r.type) ? (a = !1) : t.add(r.type);
                    break;
                  case "meta":
                    for (var s = 0, l = p.length; s < l; s++) {
                      var d = p[s];
                      if (r.props.hasOwnProperty(d))
                        if ("charSet" === d) n.has(d) ? (a = !1) : n.add(d);
                        else {
                          var h = r.props[d],
                            u = i[d] || new Set();
                          ("name" === d && o) || !u.has(h)
                            ? (u.add(h), (i[d] = u))
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
              var o = i({}, e.props || {});
              return (
                (o["data-href"] = o.href),
                (o.href = void 0),
                (o["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, o)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      var f = function (e) {
        var t = e.children,
          n = a.useContext(c.AmpStateContext),
          i = a.useContext(s.HeadManagerContext);
        return a.default.createElement(
          o.default,
          {
            reduceComponentsToState: u,
            headManager: i,
            inAmpMode: l.isInAmpMode(n),
          },
          t
        );
      };
      (t.default = f),
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
              var r = i.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(r, e));
            }
          }
          if (r) {
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
      var i = (0, n(91598).Z)(n(67294));
      var r = !1,
        a = r ? function () {} : i.useLayoutEffect,
        o = r ? function () {} : i.useEffect;
    },
    22345: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return f;
        },
      });
      var i = n(16835),
        r = n(70917),
        a = n(11163),
        o = (n(67294), n(55756)),
        c = n(7673),
        s = n(53877),
        l = n(35555),
        d = n(37868),
        h = n(35944),
        p = n(83454);
      var u = { name: "s9xgxd", styles: "margin-left:5px;vertical-align:-2px" },
        f = function (e) {
          var t = e.href,
            n = e.className,
            f = e.color,
            m = e.children,
            g = e.target,
            x = void 0 === g ? "_blank" : g,
            Z = (0, a.useRouter)(),
            v = "preview" === p.env.NEXT_PUBLIC_MODE,
            y = (0, o.fP)(["_ga"]),
            k = (0, i.Z)(y, 1)[0],
            b = "black" === f ? "black" : "#fa9427";
          return (0, h.tZ)(d.Z, {
            href: t,
            children: (0, h.tZ)("a", {
              target: x,
              rel: "_blank" === x ? "noopener noreferrer" : "",
              onClick: function () {
                return (function () {
                  if ((0, c.B)(t) && !v) {
                    var e = (0, c.X)(
                      ""
                        .concat("https://analyze.naruto-official.com")
                        .concat(Z.asPath),
                      [
                        { key: "title", value: document.title },
                        { key: "uuid", value: (0, s.p)() },
                        { key: "sessionId", value: (0, s.M)() },
                        { key: "cookie", value: k._ga },
                        { key: "referrer", value: document.referrer },
                        { key: "extlink", value: t },
                      ]
                    );
                    fetch(e).catch(function (e) {
                      return console.error(e);
                    });
                  }
                })();
              },
              children: (0, h.BX)("p", {
                className: n,
                css: (0, r.iv)(
                  "display:inline-block;font-family:var(--comic-impact-font);color:",
                  b,
                  ";&:hover{text-decoration:underline;}",
                  ""
                ),
                children: [
                  m,
                  (0, h.tZ)(l.x, { css: u, size: "16px", color: b }),
                ],
              }),
            }),
          });
        };
    },
    95225: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return z;
        },
      });
      var i = n(8503),
        r = n(65313),
        a = n(73938),
        o = n(95541),
        c = n(70917),
        s = (n(67294), n(48710)),
        l = n(77340),
        d = n(22345),
        h = n(35944);
      var p = {
          name: "j9no2t",
          styles: "margin:67px auto 0;line-height:1;text-align:center",
        },
        u = {
          name: "1fi8vpb",
          styles: "margin-top:34px;font-size:11px;white-space:pre-wrap",
        },
        f = { name: "18nfthm", styles: "margin-top:-8px;font-size:11px" },
        m = { name: "18nfthm", styles: "margin-top:-8px;font-size:11px" },
        g = { name: "1t89zvq", styles: "font-size:11px" },
        x = function () {
          var e = (0, i.bU)();
          return (0, h.BX)("main", {
            css: Z.main,
            children: [
              (0, h.tZ)(l.W, {
                children: (0, h.tZ)("h1", {
                  css: Z.headerTitle,
                  children: "Contact Us",
                }),
              }),
              (0, h.tZ)("hr", { css: Z.headerHorizon }),
              (0, h.tZ)("div", {
                children: (0, h.tZ)(l.W, {
                  children: (0, h.BX)("div", {
                    css: Z.box,
                    children: [
                      (0, h.tZ)("p", {
                        css: Z.subMessage,
                        children:
                          "If you cannot find the information you are looking for below, please contact us through the support link displayed on each article and catalog page. Please be aware that depending on the nature of your inquiry,\nwe may not be able to provide an answer to your question.",
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "Manga & Books" }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children: "Inquiries for Magazines, Volumes etc.",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://www.shueisha.co.jp/inquiry/",
                            color: "orange",
                            children: "Shueisha",
                          }),
                        ],
                      }),
                      (0, h.tZ)("p", {
                        css: g,
                        children: "*Inquiries in Japanese only.",
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "Toys/Capsule Toys/Snacks/Snack Toys/Miscellaneous Goods/Fashion, etc.",
                      }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children: "Inquiries for Bandai Products",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://www.bandai.co.jp/support/",
                            color: "orange",
                            children: "Bandai Customer Support",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "Plastic Models/Figures/Ichiban Kuji/Prizes, etc.",
                      }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children: "Inquiries for BANDAI SPIRITS Products",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://support.bandai.co.jp/",
                            color: "orange",
                            children: "BANDAI SPIRITS Customer Support",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "Purchase and delivery for products on Premium Bandai (online shop website)",
                      }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "Inquiries for Bandai Premium Products for Hong Kong S.A.R & Macau S.A.R, Taiwan, Singapore, and North America",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://tw-pbandai.zendesk.com/hc/zh-tw",
                            color: "orange",
                            children: "Bandai (Premium Bandai) - Taiwan",
                          }),
                        ],
                      }),
                      (0, h.tZ)("div", {
                        children: (0, h.tZ)(d.h, {
                          css: Z.contactTextLink,
                          href: "https://hk-pbandai.zendesk.com/hc/zh-tw",
                          color: "orange",
                          children:
                            "Bandai (Premium Bandai) - Hong Kong S.A.R & Macau S.A.R",
                        }),
                      }),
                      (0, h.tZ)("div", {
                        children: (0, h.tZ)(d.h, {
                          css: Z.contactTextLink,
                          href: "https://sg-pbandai.zendesk.com/hc/en-us",
                          color: "orange",
                          children: "Bandai (Premium Bandai) - Singapore",
                        }),
                      }),
                      (0, h.tZ)("div", {
                        children: (0, h.tZ)(d.h, {
                          css: Z.contactTextLink,
                          href: "https://pbandai.zendesk.com/hc/en-us",
                          color: "orange",
                          children: "Bandai (Premium Bandai) - USA",
                        }),
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "Console Games (PlayStation 4, Nintendo Switch, etc.)",
                      }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "Inquiries for Console Games Sold in Japan",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://bnfaq.channel.or.jp/ce",
                            color: "orange",
                            children: "Bandai Namco Entertainment",
                          }),
                        ],
                      }),
                      (0, h.tZ)("p", {
                        css: m,
                        children: "*Inquiries in Japanese only.",
                      }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "Inquiries for Console Games Sold in North America",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://support.bandainamcoent.com/hc/en-us",
                            color: "orange",
                            children: "Bandai Namco Entertainment America",
                          }),
                        ],
                      }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "Inquiries for Console Games Sold in Europe",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://service-en.bandainamcoent.eu/",
                            color: "orange",
                            children: "Bandai Namco Entertainment Europe",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "Applications" }),
                      (0, h.BX)("div", {
                        css: Z.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children: "Naruto X Boruto: Ninja Voltage",
                          }),
                          (0, h.tZ)(d.h, {
                            css: Z.contactTextLink,
                            href: "https://bnfaq.channel.or.jp/title/1924",
                            color: "orange",
                            children: "Inquiries for the iOS version",
                          }),
                        ],
                      }),
                      (0, h.tZ)("div", {
                        children: (0, h.tZ)(d.h, {
                          css: Z.contactTextLink,
                          href: "https://bnfaq.channel.or.jp/title/1925",
                          color: "orange",
                          children: "Inquiries for the Android version",
                        }),
                      }),
                      (0, h.tZ)("p", {
                        css: f,
                        children:
                          "*Support is only available in Japanese, English, Chinese (Traditional), and Korean.",
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "Events & Campaigns" }),
                      (0, h.tZ)("div", {
                        css: Z.contactLinkMessageBox,
                        children: (0, h.tZ)("p", {
                          children:
                            "Please refer to the event or campaign website.",
                        }),
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "Articles" }),
                      (0, h.tZ)("div", {
                        css: Z.contactLinkMessageBox,
                        children: (0, h.tZ)("p", {
                          children: "Please refer to the article's page.",
                        }),
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "Other" }),
                      (0, h.tZ)("div", {
                        css: Z.contactLinkMessageBox,
                        children: (0, h.tZ)(d.h, {
                          css: Z.contactTextLink,
                          href: "https://bnfaq.channel.or.jp/title/2986?lang=en",
                          color: "orange",
                          children:
                            "Questions regarding the official Naruto website, and other inquiries",
                        }),
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("p", {
                        css: u,
                        children:
                          "*Project suggestions etc. from customers will not be accepted. Any proposals received from customers will be disregarded and permanently deleted. \n We appreciate your understanding regarding this matter.",
                      }),
                      (0, h.tZ)("div", {
                        css: p,
                        children: (0, h.tZ)("div", {
                          css: (0, c.iv)(
                            "display:inline;padding:7px 14px 4px;font-family:var(--comic-impact-font);font-size:18px;border:2px solid;@media ",
                            s.r.media.preTablet,
                            "{font-size:20px;}",
                            ""
                          ),
                          children: (0, h.tZ)("a", {
                            href: "/",
                            children: v[e],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        Z = {
          main: {
            name: "1f3izz8",
            styles:
              "position:relative;z-index:0;display:flex;flex-direction:column",
          },
          headerTitle: (0, c.iv)(
            "margin:100px auto;font-family:'Bebas Neue';font-size:44px;font-weight:normal;line-height:1;@media ",
            s.r.media.preTablet,
            "{margin:179px auto 85px;font-size:36px;font-weight:normal;line-height:40px;}",
            ""
          ),
          headerHorizon: {
            name: "12uvig6",
            styles: "height:4px;margin:0;background-color:#000;border:none",
          },
          box: (0, c.iv)(
            "padding:72px 0;h2{margin:34px auto 16px;font-family:var(--comic-impact-font);font-size:32px;font-weight:400;line-height:1.5;}hr{margin:43px auto 0;}@media ",
            s.r.media.preTablet,
            "{padding-top:48px;h2{margin:32px auto 12px;font-size:34px;}}",
            ""
          ),
          contactLinkMessageBox: {
            name: "bry1fd",
            styles:
              "font-family:var(--default-font);p{margin:0 auto 12px;line-height:21px;}",
          },
          contactTextLink: {
            name: "xgnqef",
            styles:
              "font-size:18px;color:var(--primary-color);&:not(:lang(ja)){font-size:25px;}",
          },
          subMessage: {
            name: "17yanec",
            styles:
              "font-family:var(--default-font);line-height:1.4;white-space:pre-wrap",
          },
          toTopBtnWrapper: {
            name: "1503087",
            styles: "display:flex;justify-content:center;margin-top:72px",
          },
        },
        v = {
          ja: "",
          en: "RETURN TO TOP",
          fr: "RETOUR \xc0 L\u2019ACCUEIL",
          de: "ZUR\xdcCK ZUM ANFANG",
          es: "VOLVER A INICIO",
          it: "TORNA ALLA HOME",
        };
      var y = {
          name: "1xli72x",
          styles:
            "display:flex;justify-content:center;width:86px;margin:67px auto 0;line-height:40px;border:2px solid",
        },
        k = {
          name: "1wwoego",
          styles: "margin-top:48px;font-size:11px;white-space:pre-wrap",
        },
        b = { name: "18nfthm", styles: "margin-top:-8px;font-size:11px" },
        B = { name: "18nfthm", styles: "margin-top:-8px;font-size:11px" },
        T = { name: "1t89zvq", styles: "font-size:11px" },
        L = function () {
          return (0, h.BX)("main", {
            css: w.main,
            children: [
              (0, h.tZ)(l.W, {
                children: (0, h.tZ)("h1", {
                  css: w.headerTitle,
                  children: "\u304a\u554f\u3044\u5408\u308f\u305b",
                }),
              }),
              (0, h.tZ)("hr", { css: w.headerHorizon }),
              (0, h.tZ)("div", {
                children: (0, h.tZ)(l.W, {
                  children: (0, h.BX)("div", {
                    css: w.box,
                    children: [
                      (0, h.tZ)("p", {
                        css: w.subMessage,
                        children:
                          "\u4e0b\u8a18\u306b\u8a72\u5f53\u3057\u306a\u3044\u3082\u306e\u306b\u95a2\u3057\u3066\u306f\u5404\u8a18\u4e8b\u3001\u30ab\u30bf\u30ed\u30b0\u30da\u30fc\u30b8\u306b\u63b2\u8f09\u3055\u308c\u3066\u3044\u308b\u304a\u554f\u3044\u5408\u308f\u305b\u5148\u3078\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\n\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9\u306b\u3088\u3063\u3066\u306f\u304a\u7b54\u3048\u3044\u305f\u3057\u304b\u306d\u308b\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059\u3002",
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children: "\u30de\u30f3\u30ac\u30fb\u66f8\u7c4d",
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "\u96d1\u8a8c\u3001\u5358\u884c\u672c\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://www.shueisha.co.jp/inquiry/",
                            color: "orange",
                            children: "\u96c6\u82f1\u793e",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children: "\u56fd\u5185\u30e9\u30a4\u30bb\u30f3\u30b9",
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "\u56fd\u5185\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://pierrot.jp/company/info.html",
                            color: "orange",
                            children: "\u3074\u3048\u308d",
                          }),
                        ],
                      }),
                      (0, h.tZ)("p", {
                        css: T,
                        children:
                          "\u203b\u30e9\u30a4\u30bb\u30f3\u30b9\u7a93\u53e3\u306b\u95a2\u3057\u307e\u3057\u3066\u306f\u4e00\u822c\u306e\u304a\u5ba2\u69d8\u304b\u3089\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u304a\u53d7\u3051\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002",
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "\u304a\u3082\u3061\u3083/\u30ab\u30d7\u30bb\u30eb\u30c8\u30a4/\u304a\u83d3\u5b50/\u98df\u73a9/\u751f\u6d3b\u96d1\u8ca8/\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3\u306a\u3069",
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "\u30d0\u30f3\u30c0\u30a4\u88fd\u54c1\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://www.bandai.co.jp/support/top/",
                            color: "orange",
                            children:
                              "\u30d0\u30f3\u30c0\u30a4\u304a\u5ba2\u69d8\u30b5\u30dd\u30fc\u30c8",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "\u30d7\u30e9\u30e2\u30c7\u30eb/\u30d5\u30a3\u30ae\u30e5\u30a2/\u4e00\u756a\u304f\u3058/\u30d7\u30e9\u30a4\u30ba\u306a\u3069",
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "BANDAI SPIRITS \u88fd\u54c1\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://support.bandaispirits.co.jp/s/contact",
                            color: "orange",
                            children:
                              "BANDAI SPIRITS\u304a\u5ba2\u69d8\u30b5\u30dd\u30fc\u30c8",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "\u30d7\u30ec\u30df\u30a2\u30e0\u30d0\u30f3\u30c0\u30a4\uff08\u901a\u8ca9\u30b5\u30a4\u30c8\uff09\u3067\u306e\u5546\u54c1\u8cfc\u5165\u30fb\u914d\u9001\u306a\u3069",
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "\u30d7\u30ec\u30df\u30a2\u30e0\u30d0\u30f3\u30c0\u30a4\u88fd\u54c1\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://faq.p-bandai.jp/",
                            color: "orange",
                            children:
                              "\u30d0\u30f3\u30c0\u30a4\uff08\u30d7\u30ec\u30df\u30a2\u30e0\u30d0\u30f3\u30c0\u30a4\uff09",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "\u5bb6\u5ead\u7528\u30b2\u30fc\u30e0\uff08PlayStation 4 , Nintendo Switch\u306a\u3069\uff09",
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "\u65e5\u672c\u56fd\u5185\u3067\u767a\u58f2\u3057\u3066\u3044\u308b\u5bb6\u5ead\u7528\u30b2\u30fc\u30e0\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://bnfaq.channel.or.jp/ce",
                            color: "orange",
                            children:
                              "\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3\u30a8\u30f3\u30bf\u30fc\u30c6\u30a4\u30f3\u30e1\u30f3\u30c8",
                          }),
                        ],
                      }),
                      (0, h.tZ)("p", {
                        css: B,
                        children:
                          "\u203b\u65e5\u672c\u8a9e\u306e\u307f\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u3044\u305f\u3060\u3051\u307e\u3059\u3002",
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "\u5317\u7c73\u5730\u57df\u3067\u767a\u58f2\u3057\u3066\u3044\u308b\u5bb6\u5ead\u7528\u30b2\u30fc\u30e0\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://support.bandainamcoent.com/hc/en-us",
                            color: "orange",
                            children:
                              "\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3\u30a8\u30f3\u30bf\u30fc\u30c6\u30a4\u30f3\u30e1\u30f3\u30c8\u30a2\u30e1\u30ea\u30ab",
                          }),
                        ],
                      }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children:
                              "\u6b27\u5dde\u5730\u57df\u3067\u767a\u58f2\u3057\u3066\u3044\u308b\u5bb6\u5ead\u7528\u30b2\u30fc\u30e0\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://service-en.bandainamcoent.eu/",
                            color: "orange",
                            children:
                              "\u30d0\u30f3\u30c0\u30a4\u30ca\u30e0\u30b3\u30a8\u30f3\u30bf\u30fc\u30c6\u30a4\u30f3\u30e1\u30f3\u30c8\u30e8\u30fc\u30ed\u30c3\u30d1",
                          }),
                        ],
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "\u30a2\u30d7\u30ea" }),
                      (0, h.BX)("div", {
                        css: w.contactLinkMessageBox,
                        children: [
                          (0, h.tZ)("p", {
                            children: "NARUTO X BORUTO \u5fcd\u8005BORUTAGE",
                          }),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://bnfaq.channel.or.jp/title/1871",
                            color: "orange",
                            children:
                              "iOS\u7248\u306b\u3064\u3044\u3066\u306e\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                          (0, h.tZ)("br", {}),
                          (0, h.tZ)(d.h, {
                            css: w.contactTextLink,
                            href: "https://bnfaq.channel.or.jp/title/1872",
                            color: "orange",
                            children:
                              "Android\u7248\u306b\u3064\u3044\u3066\u306e\u304a\u554f\u3044\u5408\u308f\u305b",
                          }),
                        ],
                      }),
                      (0, h.tZ)("p", {
                        css: b,
                        children:
                          "\u203b\u65e5\u672c\u8a9e\u3001\u82f1\u8a9e\u3001\u7e41\u4f53\u5b57\u3001\u97d3\u56fd\u8a9e\u306b\u3066\u304a\u554f\u3044\u5408\u308f\u305b\u3044\u305f\u3060\u3051\u307e\u3059\u3002",
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", {
                        children:
                          "\u30a4\u30d9\u30f3\u30c8\u30fb\u30ad\u30e3\u30f3\u30da\u30fc\u30f3",
                      }),
                      (0, h.tZ)("div", {
                        css: w.contactLinkMessageBox,
                        children: (0, h.tZ)("p", {
                          children:
                            "\u5404\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u30da\u30fc\u30b8\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",
                        }),
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "\u30b3\u30e9\u30e0" }),
                      (0, h.tZ)("div", {
                        css: w.contactLinkMessageBox,
                        children: (0, h.tZ)("p", {
                          children:
                            "\u5404\u8a18\u4e8b\u30da\u30fc\u30b8\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",
                        }),
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("h2", { children: "\u305d\u306e\u4ed6" }),
                      (0, h.tZ)("div", {
                        css: w.contactLinkMessageBox,
                        children: (0, h.tZ)(d.h, {
                          css: w.contactTextLink,
                          href: "https://bnfaq.channel.or.jp/title/2986",
                          color: "orange",
                          children:
                            "NARUTO\u30aa\u30d5\u30a3\u30b7\u30e3\u30eb\u30b5\u30a4\u30c8\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b\u3001\u305d\u306e\u4ed6\u306e\u304a\u554f\u3044\u5408\u308f\u305b",
                        }),
                      }),
                      (0, h.tZ)("hr", {}),
                      (0, h.tZ)("p", {
                        css: k,
                        children:
                          "\u203b\u304a\u5ba2\u69d8\u304b\u3089\u9001\u3089\u308c\u3066\u304f\u308b\u4f01\u753b\u7b49\u306f\u4e00\u5207\u53d7\u3051\u4ed8\u3051\u3066\u304a\u308a\u307e\u305b\u3093\u3002\n  \u4e07\u304c\u4e00\u3001\u304a\u5ba2\u69d8\u304b\u3089\u4f01\u753b\u66f8\u7b49\u304c\u5bc4\u305b\u3089\u308c\u305f\u5834\u5408\u3001\u5ec3\u68c4\u307e\u305f\u306f\u524a\u9664\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002\n  \u3054\u7406\u89e3\u3001\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u307e\u3059\u3088\u3046\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002",
                      }),
                      (0, h.tZ)("div", {
                        css: y,
                        children: (0, h.tZ)("a", {
                          href: "/",
                          css: M.style,
                          children: M.word,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        w = {
          main: {
            name: "1f3izz8",
            styles:
              "position:relative;z-index:0;display:flex;flex-direction:column",
          },
          headerTitle: (0, c.iv)(
            "margin:96px auto;font-family:var(--comic-font);font-size:34px;line-height:1.5;text-align:center;@media ",
            s.r.media.preTablet,
            "{margin:168px auto 80px;font-size:30px;}",
            ""
          ),
          headerHorizon: {
            name: "12uvig6",
            styles: "height:4px;margin:0;background-color:#000;border:none",
          },
          box: (0, c.iv)(
            "padding:72px 0;h2{margin:48px auto 17px;font-family:var(--comic-impact-font);font-size:24px;font-weight:400;line-height:1.5;}hr{margin:43px auto 0;}@media ",
            s.r.media.preTablet,
            "{padding-top:48px;h2{margin:46px auto 20px;font-size:26px;}}",
            ""
          ),
          contactLinkMessageBox: {
            name: "1c5g454",
            styles:
              "font-family:var(--default-font);p{margin:0 auto 8px;line-height:21px;}",
          },
          contactTextLink: {
            name: "efnqy1",
            styles: "font-size:18px;color:var(--primary-color)",
          },
          subMessage: {
            name: "17yanec",
            styles:
              "font-family:var(--default-font);line-height:1.4;white-space:pre-wrap",
          },
          toTopBtnWrapper: {
            name: "1503087",
            styles: "display:flex;justify-content:center;margin-top:72px",
          },
        },
        M = {
          word: "\u30c8\u30c3\u30d7\u3078",
          style: (0, c.iv)(
            "font-family:var(--comic-impact-font);font-size:18px;@media ",
            s.r.media.preTablet,
            "{font-size:20px;}",
            ""
          ),
        },
        z = function () {
          var e = (0, i.bU)();
          return (0, h.tZ)(h.HY, {
            children: (0, h.BX)(o.DY, {
              children: [
                (0, h.tZ)(a.h, {}),
                "ja" === e ? (0, h.tZ)(L, {}) : (0, h.tZ)(x, {}),
                (0, h.tZ)(r.T, {}),
              ],
            }),
          });
        };
    },
    9008: function (e, t, n) {
      e.exports = n(72717);
    },
  },
]);
