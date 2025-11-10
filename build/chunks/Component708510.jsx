/** Chunk was on 64982 **/
/** chunk id: 708510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk863249 = require("./863249.js"),
  Chunk981312 = require("./981312.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk999382 = require("./999382.js"),
  Chunk432774 = require("./432774.js"),
  Chunk682255 = require("./682255.js"),
  Chunk217472 = require("./217472.js"),
  Chunk202905 = require("./202905.jsx"),
  Chunk44867 = require("./44867.jsx"),
  Chunk557359 = require("./557359.jsx"),
  Chunk658666 = require("./658666.js"),
  Chunk307375 = require("./307375.jsx"),
  Chunk384632 = require("./384632.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk912231 = require("./912231.js");

function N(e) {
  let {
    pendingState: t
  } = e, n = i.useRef(false), l = i.useCallback(async e => {
    if (!n.current) try {
      await (0, m.k)(e), (0, p.V)(e), (0, s.le)(), (0, s.aC)(e)
    } finally {
      n.current = true
    }
  }, [n]);
  switch (t.joinType) {
    case v.A.INVITE:
      return (0, r.jsx)(x.A, {
        requireTerms: t.requireTerms,
        rules: t.termRules
      });
    case v.A.APPLY:
      return (0, r.jsx)(h.r, {
        pendingFields: t.pendingVerificationFields
      });
    case v.A.DISCOVERABLE:
      return (0, r.jsx)(b.c, {
        fetchDiscoveryData: l,
        settingsView: t.settingsView,
        requireTerms: t.requireTerms,
        rules: t.termRules
      })
  }
}

function E(e) {
  let {
    guildId: t
  } = e, {
    nsfwLevel: n,
    ownerConfiguredContentLevel: s
  } = (0, l.cj)([d.Z], () => {
    var e, n;
    return {
      nsfwLevel: null == (e = d.Z.getGuild(t)) ? true : e.nsfwLevel,
      ownerConfiguredContentLevel: null == (n = d.Z.getGuild(t)) ? true : n.ownerConfiguredContentLevel
    }
  }), o = (0, l.e7)([j.Z], () => {
    var e;
    return null == (e = j.Z.pendingState) ? true : e.isAgeRestricted
  }), c = i.useCallback(e => {
    f.Z.setIsAgeRestricted(t, e)
  }, [t]), g = n === O.V_K.AGE_RESTRICTED && s !== O.V_K.AGE_RESTRICTED;
  return (0, r.jsx)(a.rsf, {
    label: C.intl.string(C.t.N9xEJF),
    description: C.intl.format(C.t.iyQQ62, {
      helpArticleLink: u.Z.getArticleURL(O.BhN.NSFW_SERVER_AGE_RESTRICTION)
    }),
    checked: o,
    onChange: c,
    disabled: g
  })
}

function I() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild),
    t = (0, Chunk442837.e7)([Chunk658666.Z], () => Chunk658666.Z.pendingState),
    n = (0, Chunk981312.U)();
  Chunk647438.useEffect(() => {
    (null == module ? true : module.id) != null && Chunk863249.ZP.fetchVerificationForm(module.id)
  }, [null == module ? true : module.id]);
  let s = Chunk647438.useCallback(t => {
    (null == e ? true : e.id) != null && f.Z.setSelectedJoinType(e.id, t)
  }, [null == module ? true : module.id]);
  if (null == module || null == exports) return null;
  let {
    joinType: d
  } = exports;
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 32,
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      color: "header-primary",
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.YJlvBM)
    }), (0, Chunk951288.jsx)(Chunk307375.h, {
      onTypePicked: Chunk456268,
      activeType: Chunk430824,
      guild: module
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk912231.divider
    }), !require && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(E, {
        guildId: module.id
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk912231.divider
      })]
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(N, {
        pendingState: exports
      })
    })]
  })
}