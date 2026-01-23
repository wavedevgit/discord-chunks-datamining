/** Chunk was on web.js **/
/** chunk id: 158358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77468 = require("./77468.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk370480 = require("./370480.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk169869 = require("./169869.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk962173 = require("./962173.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk783419 = require("./783419.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk410280 = require("./410280.js");

function O(e) {
  var t;
  let {
    account: n,
    refreshed: s,
    handleRefresh: l
  } = e, [c, u] = i.useState(false), f = null != (t = n.metadata) ? t : {}, h = (0, a.bG)([_.default], () => _.default.locale), O = i.useCallback(async () => {
    u(true);
    try {
      await l(n)
    } finally {
      u(false)
    }
  }, [n, l]), v = null;
  switch (n.type) {
    case g.fg2.REDDIT:
      v = (0, p.xE)(f, b.Nz);
      break;
    case g.fg2.STEAM:
      v = (0, p.dy)(f, b.Nz);
      break;
    case g.fg2.TWITTER:
      v = (0, p.ED)(f, b.Nz);
      break;
    case g.fg2.EBAY:
      v = (0, p.ub)(f, b.Nz);
      break;
    case g.fg2.PAYPAL:
      v = (0, p.gZ)(f, b.Nz);
      break;
    case g.fg2.TIKTOK:
      v = (0, p.HU)(f, b.Nz)
  }
  let A = (0, d.An)(f[E.pK.CREATED_AT], h),
    I = null,
    S = y.intl.string(y.t.wzzjk9);
  return (null == v || 0 === v.length) && null == A && (I = (0, r.jsx)(o.Text, {
    variant: "text-xs/normal",
    color: "text-default",
    children: y.intl.format(y.t.Up2ni7, {
      helpdeskUrl: m.A.getArticleURL(g.MVz.CONNECTION_DETAILS)
    })
  }, "label"), S = y.intl.string(y.t["LVh3/5"])), s && (S = y.intl.string(y.t.i4jeWR)), (0, r.jsxs)("div", {
    className: b.tJ,
    children: [I, null == v ? true : v.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < v.length - 1 ? (0, r.jsx)("span", {
        className: b.Om
      }) : null]
    })), null != v && v.length > 0 && null != A ? (0, r.jsx)("div", {
      className: b.Om
    }) : null, null != A ? (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: y.intl.format(y.t["9rfonh"], {
        date: A
      })
    }, "member-since") : null, (0, r.jsx)("div", {
      className: b.jy,
      children: (0, r.jsx)(o.Button, {
        size: "sm",
        variant: s ? "active" : "secondary",
        loading: c,
        disabled: s,
        "aria-label": y.intl.string(y.t.sCkLYH),
        onClick: O,
        text: S
      }, "refresh-button")
    })]
  })
}

function v(e) {
  let {
    account: t,
    handleRefresh: n,
    refreshedAccountIds: a
  } = e, [d, p] = i.useState(t.visibility), [_, h] = i.useState(t.metadataVisibility), m = (0, c.Ay)();

  function g(e) {
    let {
      verified: n
    } = t, r = +!!e;
    if (e && !n) {
      p(r), (0, f.A)({
        platformType: t.type,
        location: "User Settings"
      });
      return
    }
    p(r), l.A.setVisibility(t.type, t.id, r)
  }

  function E(e) {
    let {
      verified: n
    } = t, r = +!!e;
    if (e && !n) {
      h(r), (0, f.A)({
        platformType: t.type,
        location: "User Settings"
      });
      return
    }
    h(r), l.A.setMetadataVisibility(t.type, t.id, r)
  }
  i.useEffect(() => {
    p(t.visibility), h(t.metadataVisibility)
  }, [t]);
  let v = u.A.get(t.type),
    A = true === v.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: b.gd,
      children: [(0, r.jsx)("img", {
        alt: v.name,
        className: b.gj,
        src: (0, s.Mw)(m) ? v.icon.darkSVG : v.icon.lightSVG
      }), (0, r.jsxs)("div", {
        className: b.$n,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.dOG, {
            checked: 1 === d,
            onChange: g,
            label: v.name
          }), A && (0, r.jsx)(O, {
            account: t,
            refreshed: a.includes(t.id),
            handleRefresh: n
          })]
        }), A && (0, r.jsx)(o.dOG, {
          disabled: 1 !== d || null == t.metadata,
          checked: 1 === _,
          onChange: E,
          label: y.intl.string(y.t["3l78wo"])
        })]
      })]
    }), (0, r.jsx)(o.cGx, {})]
  })
}

function A() {
  let e = (0, a.bG)([h.A], () => h.A.getAccounts()),
    t = i.useMemo(() => e.filter(e => u.A.isSupported(e.type)), [e]),
    [n, s] = i.useState([]),
    c = i.useCallback(e => l.A.refresh(e.type, e.id).finally(() => {
      s(t => [...t, e.id])
    }), []);
  return 0 === t.length ? null : (0, r.jsx)(o.nVY, {
    className: b.kL,
    label: y.intl.string(y.t.aw0GVS),
    children: t.map(e => (0, r.jsx)(v, {
      account: e,
      handleRefresh: c,
      refreshedAccountIds: n
    }, e.id))
  })
}