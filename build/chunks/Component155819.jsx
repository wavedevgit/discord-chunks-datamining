/** Chunk was on web.js **/
/** chunk id: 155819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk902189 = require("./902189.js");
let d = 1048576;

function f(e) {
  switch (e) {
    case s.Eu4.NONE:
    case s.Eu4.TIER_1:
      return s.Eu4.TIER_2;
    case s.Eu4.TIER_2:
    case s.Eu4.TIER_3:
      return s.Eu4.TIER_3;
    default:
      return null
  }
}
let p = [{
  getPerkLabel: () => c.intl.string(c.t.tIiwuj),
  getTier0Value: () => l.HO[s.Eu4.NONE].limits.emoji,
  getTier1Value: () => l.HO[s.Eu4.TIER_1].limits.emoji,
  getTier2Value: () => l.HO[s.Eu4.TIER_2].limits.emoji,
  getTier3Value: () => l.HO[s.Eu4.TIER_3].limits.emoji
}, {
  getPerkLabel: () => c.intl.string(c.t["3iccet"]),
  getTier0Value: () => l.HO[s.Eu4.NONE].limits.stickers,
  getTier1Value: () => l.HO[s.Eu4.TIER_1].limits.stickers,
  getTier2Value: () => l.HO[s.Eu4.TIER_2].limits.stickers,
  getTier3Value: () => l.HO[s.Eu4.TIER_3].limits.stickers
}, {
  getPerkLabel: () => c.intl.string(c.t["+smCv9"]),
  getTier0Value: () => l.HO[s.Eu4.NONE].limits.soundboardSounds,
  getTier1Value: () => l.HO[s.Eu4.TIER_1].limits.soundboardSounds,
  getTier2Value: () => l.HO[s.Eu4.TIER_2].limits.soundboardSounds,
  getTier3Value: () => l.HO[s.Eu4.TIER_3].limits.soundboardSounds
}, {
  getPerkLabel: () => c.intl.string(c.t.SMYauD),
  getTier0Value: () => c.intl.formatToPlainString(c.t.zZ6Rdi, {
    resolution: l.HO[s.Eu4.NONE].limits.screenShareQualityResolution,
    framerate: l.HO[s.Eu4.NONE].limits.screenShareQualityFramerate
  }),
  getTier1Value: () => c.intl.formatToPlainString(c.t.zZ6Rdi, {
    resolution: l.HO[s.Eu4.TIER_1].limits.screenShareQualityResolution,
    framerate: l.HO[s.Eu4.TIER_1].limits.screenShareQualityFramerate
  }),
  getTier2Value: () => c.intl.formatToPlainString(c.t.zZ6Rdi, {
    resolution: l.HO[s.Eu4.TIER_2].limits.screenShareQualityResolution,
    framerate: l.HO[s.Eu4.TIER_2].limits.screenShareQualityFramerate
  }),
  getTier3Value: () => c.intl.formatToPlainString(c.t.zZ6Rdi, {
    resolution: l.HO[s.Eu4.TIER_3].limits.screenShareQualityResolution,
    framerate: l.HO[s.Eu4.TIER_3].limits.screenShareQualityFramerate
  })
}, {
  getPerkLabel: () => c.intl.string(c.t["/79IDj"]),
  getTier0Value: () => c.intl.formatToPlainString(c.t.w1gmLt, {
    bitrate: l.HO[s.Eu4.NONE].limits.bitrate / 1e3
  }),
  getTier1Value: () => c.intl.formatToPlainString(c.t.w1gmLt, {
    bitrate: l.HO[s.Eu4.TIER_1].limits.bitrate / 1e3
  }),
  getTier2Value: () => c.intl.formatToPlainString(c.t.w1gmLt, {
    bitrate: l.HO[s.Eu4.TIER_2].limits.bitrate / 1e3
  }),
  getTier3Value: () => c.intl.formatToPlainString(c.t.w1gmLt, {
    bitrate: l.HO[s.Eu4.TIER_3].limits.bitrate / 1e3
  })
}, {
  getPerkLabel: () => c.intl.string(c.t.R1U2xC),
  getTier0Value: () => c.intl.formatToPlainString(c.t.pIn7Af, {
    size: l.HO[s.Eu4.NONE].limits.fileSize / d
  }),
  getTier1Value: () => c.intl.formatToPlainString(c.t.pIn7Af, {
    size: l.HO[s.Eu4.TIER_1].limits.fileSize / d
  }),
  getTier2Value: () => c.intl.formatToPlainString(c.t.pIn7Af, {
    size: l.HO[s.Eu4.TIER_2].limits.fileSize / d
  }),
  getTier3Value: () => c.intl.formatToPlainString(c.t.pIn7Af, {
    size: l.HO[s.Eu4.TIER_3].limits.fileSize / d
  })
}, {
  getPerkLabel: () => c.intl.string(c.t.f6vfso),
  getTier0Value: () => l.HO[s.Eu4.NONE].limits.stageVideoUsers,
  getTier1Value: () => l.HO[s.Eu4.TIER_1].limits.stageVideoUsers,
  getTier2Value: () => l.HO[s.Eu4.TIER_2].limits.stageVideoUsers,
  getTier3Value: () => l.HO[s.Eu4.TIER_3].limits.stageVideoUsers
}, {
  getPerkLabel: () => c.intl.string(c.t.qDqUME),
  getTier0Value: () => false,
  getTier1Value: () => true,
  getTier2Value: () => true,
  getTier3Value: () => true
}, {
  getPerkLabel: () => c.intl.string(c.t.uwqgbu),
  getTier0Value: () => false,
  getTier1Value: () => true,
  getTier2Value: () => true,
  getTier3Value: () => true
}, {
  getPerkLabel: () => c.intl.string(c.t.zxsDxc),
  getTier0Value: () => false,
  getTier1Value: () => false,
  getTier2Value: () => c.intl.string(c.t["2TNS3n"]),
  getTier3Value: () => c.intl.string(c.t["l+S46U"])
}, {
  getPerkLabel: () => c.intl.string(c.t["bHa+Ee"]),
  getTier0Value: () => false,
  getTier1Value: () => false,
  getTier2Value: () => true,
  getTier3Value: () => true
}, {
  getPerkLabel: () => c.intl.string(c.t.QV6MZQ),
  getTier0Value: () => false,
  getTier1Value: () => false,
  getTier2Value: () => false,
  getTier3Value: () => true
}];

function _(e) {
  let {
    value: t,
    isBoosted: n = false
  } = e;
  return "boolean" == typeof t ? t ? (0, r.jsx)(o.dz2, {
    size: "md",
    color: "currentColor",
    className: u.checkIcon
  }) : (0, r.jsx)(o.Dio, {
    size: "md",
    color: "currentColor",
    className: u.xIcon
  }) : (0, r.jsx)(o.Text, {
    color: n ? "text-strong" : "text-muted",
    variant: n ? "text-md/bold" : "text-md/medium",
    children: t
  })
}

function m(e) {
  let {
    currentTier: t
  } = e, n = f(t);
  return null == n ? null : (0, r.jsx)("div", {
    className: a()(u.recommendedTierHighlight, {
      [u.recommendedTierHighlightTier2]: n === s.Eu4.TIER_2,
      [u.recommendedTierHighlightTier3]: n === s.Eu4.TIER_3
    }),
    children: (0, r.jsx)(o.Text, {
      className: u.recommendedTierHighlightTag,
      color: "always-white",
      variant: "text-xs/bold",
      children: t === s.Eu4.TIER_3 ? c.intl.string(c.t.d849Up) : c.intl.string(c.t.dZeX1z)
    })
  })
}

function h(e) {
  let {
    className: t,
    guild: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(u.wrapper, t),
    children: [(0, r.jsx)(o.Heading, {
      className: u.heading,
      variant: "heading-xxl/semibold",
      children: c.intl.string(c.t["9GGb9k"])
    }), (0, r.jsxs)("div", {
      className: u.tableWrapper,
      children: [null != n && (0, r.jsx)(m, {
        currentTier: n.premiumTier
      }), (0, r.jsxs)("div", {
        className: u.table,
        children: [(0, r.jsxs)("div", {
          className: a()(u.row, u.headerRow),
          children: [(0, r.jsx)("div", {
            className: a()(u.cell, u.perkCell),
            children: (0, r.jsx)(o.Heading, {
              color: "text-default",
              variant: "heading-lg/semibold",
              children: c.intl.string(c.t.F5MY0k)
            })
          }), (0, r.jsxs)("div", {
            className: a()(u.cell, u.tierCell),
            children: [(0, r.jsx)(o.Heading, {
              color: "text-default",
              variant: "heading-lg/semibold",
              children: c.intl.string(c.t.mx8j2m)
            }), (0, r.jsx)(o.Text, {
              color: "text-muted",
              variant: "text-sm/medium",
              children: c.intl.format(c.t["pob/cL"], {
                subscriptions: s.oCV[s.Eu4.NONE]
              })
            })]
          }), (0, r.jsxs)("div", {
            className: a()(u.cell, u.tierCell),
            children: [(0, r.jsx)(o.Heading, {
              color: "text-default",
              variant: "heading-lg/semibold",
              children: c.intl.string(c.t.nzXtaS)
            }), (0, r.jsx)(o.Text, {
              color: "text-muted",
              variant: "text-sm/medium",
              children: c.intl.format(c.t["pob/cL"], {
                subscriptions: s.oCV[s.Eu4.TIER_1]
              })
            })]
          }), (0, r.jsxs)("div", {
            className: a()(u.cell, u.tierCell),
            children: [(0, r.jsx)(o.Heading, {
              color: "text-default",
              variant: "heading-lg/semibold",
              children: c.intl.string(c.t["h33/uW"])
            }), (0, r.jsx)(o.Text, {
              color: "text-muted",
              variant: "text-sm/medium",
              children: c.intl.format(c.t["pob/cL"], {
                subscriptions: s.oCV[s.Eu4.TIER_2]
              })
            })]
          }), (0, r.jsxs)("div", {
            className: a()(u.cell, u.tierCell),
            children: [(0, r.jsx)(o.Heading, {
              color: "text-default",
              variant: "heading-lg/semibold",
              children: c.intl.string(c.t.BfF6ED)
            }), (0, r.jsx)(o.Text, {
              color: "text-muted",
              variant: "text-sm/medium",
              children: c.intl.format(c.t["pob/cL"], {
                subscriptions: s.oCV[s.Eu4.TIER_3]
              })
            })]
          })]
        }), p.map((e, t) => (0, r.jsxs)("div", {
          className: a()(u.row, {
            [u.lastRow]: t === p.length - 1
          }),
          children: [(0, r.jsx)("div", {
            className: a()(u.cell, u.perkCell),
            children: (0, r.jsx)(o.Text, {
              color: "text-muted",
              variant: "text-md/medium",
              children: e.getPerkLabel()
            })
          }), (0, r.jsx)("div", {
            className: a()(u.cell, u.tierCell),
            children: (0, r.jsx)(_, {
              value: e.getTier0Value()
            })
          }), (0, r.jsx)("div", {
            className: a()(u.cell, u.tierCell),
            children: (0, r.jsx)(_, {
              value: e.getTier1Value(),
              isBoosted: true
            })
          }), (0, r.jsx)("div", {
            className: a()(u.cell, u.tierCell),
            children: (0, r.jsx)(_, {
              value: e.getTier2Value(),
              isBoosted: true
            })
          }), (0, r.jsx)("div", {
            className: a()(u.cell, u.tierCell),
            children: (0, r.jsx)(_, {
              value: e.getTier3Value(),
              isBoosted: true
            })
          })]
        }, t))]
      })]
    })]
  })
}