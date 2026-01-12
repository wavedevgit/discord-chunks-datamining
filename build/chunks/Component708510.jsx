/** Chunk was on 9536 **/
/** chunk id: 708510, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  O: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk955120 = require("./955120.js");

function E(e) {
  let {
    pendingState: t
  } = e, n = i.useRef(false), l = i.useCallback(async e => {
    if (!n.current) try {
      await (0, m.k)(e), (0, f.V)(e), (0, s.le)(), (0, s.aC)(e)
    } finally {
      n.current = true
    }
  }, [n]);
  switch (t.joinType) {
    case O.A.INVITE:
      return (0, r.jsx)(x.A, {
        requireTerms: t.requireTerms,
        rules: t.termRules
      });
    case O.A.APPLY:
      return (0, r.jsx)(p.r, {
        pendingFields: t.pendingVerificationFields
      });
    case O.A.DISCOVERABLE:
      return (0, r.jsx)(h.c, {
        fetchDiscoveryData: l,
        settingsView: t.settingsView,
        requireTerms: t.requireTerms,
        rules: t.termRules
      })
  }
}

function I(e) {
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
    b.Z.setIsAgeRestricted(t, e)
  }, [t]), g = n === y.V_K.AGE_RESTRICTED && s !== y.V_K.AGE_RESTRICTED;
  return (0, r.jsx)(a.rsf, {
    label: C.intl.string(C.t.N9xEJF),
    description: C.intl.format(C.t.iyQQ62, {
      helpArticleLink: u.Z.getArticleURL(y.BhN.NSFW_SERVER_AGE_RESTRICTION)
    }),
    checked: o,
    onChange: c,
    disabled: g
  })
}

function S() {
  let e = (0, l.e7)([g.Z], () => g.Z.getProps().guild),
    t = (0, l.e7)([j.Z], () => j.Z.pendingState),
    n = (0, c.U)();
  i.useEffect(() => {
    (null == e ? true : e.id) != null && o.ZP.fetchVerificationForm(e.id)
  }, [null == e ? true : e.id]);
  let s = i.useCallback(t => {
    (null == e ? true : e.id) != null && b.Z.setSelectedJoinType(e.id, t)
  }, [null == e ? true : e.id]);
  if (null == e || null == t) return null;
  let {
    joinType: d
  } = t;
  return (0, r.jsxs)(a.Kqy, {
    gap: 32,
    children: [(0, r.jsx)(a.Heading, {
      color: "text-strong",
      variant: "heading-lg/semibold",
      children: C.intl.string(C.t.YJlvBM)
    }), (0, r.jsx)(v.h, {
      onTypePicked: s,
      activeType: d,
      guild: e
    }), (0, r.jsx)("div", {
      className: N.divider
    }), !n && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(I, {
        guildId: e.id
      }), (0, r.jsx)("div", {
        className: N.divider
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(E, {
        pendingState: t
      })
    })]
  })
}