(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3635],
  {
    61949: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          __N_SSP: function () {
            return a;
          },
        });
      var c = n(11163),
        o = n(5608),
        u = n(92301),
        e = n(17913),
        r = n(35944),
        a = !0;
      i.default = function (t) {
        var i,
          n,
          a,
          l,
          _ = t.comicDetailDto,
          d = (0, c.useRouter)();
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)(u.p, {
              title: "".concat(
                _.title,
                " | NARUTO & BORUTO SITE"
              ),
              description:
                null !==
                  (i =
                    null === (n = _.comic) ||
                    void 0 === n ||
                    null === (a = n.text) ||
                    void 0 === a
                      ? void 0
                      : a.slice(0, 158)) && void 0 !== i
                  ? i
                  : "",
              url: "".concat("https://naruto-official.com").concat(d.asPath),
              imgUrl: (0, e.P)(
                null === (l = _.comic) || void 0 === l ? void 0 : l.ogp_image
              ),
              twitterCard: "summary_large_image",
            }),
            (0, r.tZ)(o.Z, { comicDetailDto: _ }),
          ],
        });
      };
    },
    24172: function (t, i, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/en/comics/[id]",
        function () {
          return n(61949);
        },
      ]);
    },
  },
  function (t) {
    t.O(
      0,
      [9941, 4977, 5313, 6443, 9539, 1105, 5701, 6513, 1067, 9774, 2888, 179],
      function () {
        return (i = 24172), t((t.s = i));
        var i;
      }
    );
    var i = t.O();
    _N_E = i;
  },
]);
