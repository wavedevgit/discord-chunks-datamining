/** Chunk was on 39048 **/
/** chunk id: 933137, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk460760 = require("./460760.js"),
  Chunk408213 = require("./408213.js"),
  Chunk840387 = require("./840387.js"),
  Chunk71393 = require("./71393.js"),
  Chunk975571 = require("./975571.js"),
  Chunk555337 = require("./555337.js"),
  Chunk523386 = require("./523386.js"),
  Chunk818191 = require("./818191.js"),
  Chunk564864 = require("./564864.js"),
  Chunk915417 = require("./915417.jsx"),
  Chunk147988 = require("./147988.jsx"),
  Chunk366846 = require("./366846.jsx"),
  Chunk306846 = require("./306846.js"),
  Chunk493781 = require("./493781.jsx"),
  Chunk894222 = require("./894222.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk771661 = require("./771661.js");

function E(e) {
  let {
    pendingState: t
  } = e, n = i.useRef(false), l = i.useCallback(async e => {
    if (!n.current) try {
      await (0, m.$)(e), (0, p.i)(e), (0, a.Mu)(), (0, a.mo)(e)
    } finally {
      n.current = true
    }
  }, [n]);
  switch (t.joinType) {
    case O.J.INVITE:
      return (0, r.jsx)(x.D, {
        requireTerms: t.requireTerms,
        rules: t.termRules
      });
    case O.J.APPLY:
      return (0, r.jsx)(h.g, {
        pendingFields: t.pendingVerificationFields
      });
    case O.J.DISCOVERABLE:
      return (0, r.jsx)(b.t, {
        fetchDiscoveryData: l,
        settingsView: t.settingsView,
        requireTerms: t.requireTerms,
        rules: t.termRules
      })
  }
}

function N(e) {
  let {
    guildId: t
  } = e, {
    nsfwLevel: n,
    ownerConfiguredContentLevel: a
  } = (0, l.cf)([d.A], () => {
    var e, n;
    return {
      nsfwLevel: null == (e = d.A.getGuild(t)) ? true : e.nsfwLevel,
      ownerConfiguredContentLevel: null == (n = d.A.getGuild(t)) ? true : n.ownerConfiguredContentLevel
    }
  }), o = (0, l.bG)([j.A], () => {
    var e;
    return null == (e = j.A.pendingState) ? true : e.isAgeRestricted
  }), c = i.useCallback(e => {
    f.A.setIsAgeRestricted(t, e)
  }, [t]), g = n === v.ftr.AGE_RESTRICTED && a !== v.ftr.AGE_RESTRICTED;
  return (0, r.jsx)(s.dOG, {
    label: y.intl.string(y.t.N9xEJF),
    description: y.intl.format(y.t.iyQQ62, {
      helpArticleLink: u.A.getArticleURL(v.MVz.NSFW_SERVER_AGE_RESTRICTION)
    }),
    checked: o,
    onChange: c,
    disabled: g
  })
}

function S() {
  let e = (0, l.bG)([g.A], () => g.A.getProps().guild),
    t = (0, l.bG)([j.A], () => j.A.pendingState),
    n = (0, c.Z)();
  i.useEffect(() => {
    (null == e ? true : e.id) != null && o.Ay.fetchVerificationForm(e.id)
  }, [null == e ? true : e.id]);
  let a = i.useCallback(t => {
    (null == e ? true : e.id) != null && f.A.setSelectedJoinType(e.id, t)
  }, [null == e ? true : e.id]);
  if (null == e || null == t) return null;
  let {
    joinType: d
  } = t;
  return (0, r.jsxs)(s.BJc, {
    gap: 32,
    children: [(0, r.jsx)(s.Heading, {
      color: "text-strong",
      variant: "heading-lg/semibold",
      children: y.intl.string(y.t.YJlvBM)
    }), (0, r.jsx)(_.G, {
      onTypePicked: a,
      activeType: d,
      guild: e
    }), (0, r.jsx)("div", {
      className: A.y
    }), !n && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N, {
        guildId: e.id
      }), (0, r.jsx)("div", {
        className: A.y
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(E, {
        pendingState: t
      })
    })]
  })
}