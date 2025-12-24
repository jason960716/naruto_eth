(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4634],
  {
    44355: function (t, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          __N_SSP: function () {
            return _;
          },
        });
      var r = i(11163),
        u = i(92301),
        c = i(62707),
        e = i(8503),
        o = i(17913),
        a = i(28613),
        l = i(35944),
        _ = !0;
      n.default = function (t) {
        var n,
          i = t.articleDto,
          _ = (0, e.bU)(),
          s = (0, r.useRouter)(),
          d = i.meta[(0, a.n)(_)];
        return (0, l.BX)(l.HY, {
          children: [
            (0, l.tZ)(u.p, {
              title: "".concat(
                i.title,
                " | NARUTO & BORUTO SITE"
              ),
              description: "".concat(
                null !==
                  (n = null === d || void 0 === d ? void 0 : d.slice(0, 158)) &&
                  void 0 !== n
                  ? n
                  : ""
              ),
              url: "".concat("https://naruto-official.com").concat(s.asPath),
              imgUrl: (0, o.P)(
                null === i || void 0 === i ? void 0 : i.thumbnail
              ),
              twitterCard: "summary_large_image",
            }),
            (0, l.tZ)(c.P, { articleDto: i }),
          ],
        });
      };
    },
    10943: function (t, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/en/news/[id]",
        function () {
          return i(44355);
        },
      ]);
    },
  },
  function (t) {
    t.O(
      0,
      [
        9941, 5935, 4977, 5313, 6443, 9539, 1105, 5701, 2431, 3960, 9774, 2888,
        179,
      ],
      function () {
        return (n = 10943), t((t.s = n));
        var n;
      }
    );
    var n = t.O();
    _N_E = n;
  },
]);
