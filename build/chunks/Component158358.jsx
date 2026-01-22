/** Chunk was on web.js **/
/** chunk id: 158358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
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
  }, [n, l]), A = null;
  switch (n.type) {
    case g.fg2.REDDIT:
      A = (0, p.xE)(f, y.Nz);
      break;
    case g.fg2.STEAM:
      A = (0, p.dy)(f, y.Nz);
      break;
    case g.fg2.TWITTER:
      A = (0, p.ED)(f, y.Nz);
      break;
    case g.fg2.EBAY:
      A = (0, p.ub)(f, y.Nz);
      break;
    case g.fg2.PAYPAL:
      A = (0, p.gZ)(f, y.Nz);
      break;
    case g.fg2.TIKTOK:
      A = (0, p.HU)(f, y.Nz)
  }
  let v = (0, d.An)(f[E.pK.CREATED_AT], h),
    S = null,
    I = b.intl.string(b.t.wzzjk9);
  return (null == A || 0 === A.length) && null == v && (S = (0, r.jsx)(o.Text, {
    variant: "text-xs/normal",
    color: "text-default",
    children: b.intl.format(b.t.Up2ni7, {
      helpdeskUrl: m.A.getArticleURL(g.MVz.CONNECTION_DETAILS)
    })
  }, "label"), I = b.intl.string(b.t["LVh3/5"])), s && (I = b.intl.string(b.t.i4jeWR)), (0, r.jsxs)("div", {
    className: y.tJ,
    children: [S, null == A ? true : A.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < A.length - 1 ? (0, r.jsx)("span", {
        className: y.Om
      }) : null]
    })), null != A && A.length > 0 && null != v ? (0, r.jsx)("div", {
      className: y.Om
    }) : null, null != v ? (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: b.intl.format(b.t["9rfonh"], {
        date: v
      })
    }, "member-since") : null, (0, r.jsx)("div", {
      className: y.jy,
      children: (0, r.jsx)(o.Button, {
        size: "sm",
        variant: s ? "active" : "secondary",
        loading: c,
        disabled: s,
        "aria-label": b.intl.string(b.t.sCkLYH),
        onClick: O,
        text: I
      }, "refresh-button")
    })]
  })
}

function A(e) {
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
  let A = u.A.get(t.type),
    v = true === A.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.gd,
      children: [(0, r.jsx)("img", {
        alt: A.name,
        className: y.gj,
        src: (0, s.Mw)(m) ? A.icon.darkSVG : A.icon.lightSVG
      }), (0, r.jsxs)("div", {
        className: y.$n,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.dOG, {
            checked: 1 === d,
            onChange: g,
            label: A.name
          }), v && (0, r.jsx)(O, {
            account: t,
            refreshed: a.includes(t.id),
            handleRefresh: n
          })]
        }), v && (0, r.jsx)(o.dOG, {
          disabled: 1 !== d || null == t.metadata,
          checked: 1 === _,
          onChange: E,
          label: b.intl.string(b.t["3l78wo"])
        })]
      })]
    }), (0, r.jsx)(o.cGx, {})]
  })
}

function v() {
  let e = (0, a.bG)([h.A], () => h.A.getAccounts()),
    t = i.useMemo(() => e.filter(e => u.A.isSupported(e.type)), [e]),
    [n, s] = i.useState([]),
    c = i.useCallback(e => l.A.refresh(e.type, e.id).finally(() => {
      s(t => [...t, e.id])
    }), []);
  return 0 === t.length ? null : (0, r.jsx)(o.nVY, {
    className: y.kL,
    label: b.intl.string(b.t.aw0GVS),
    children: t.map(e => (0, r.jsx)(A, {
      account: e,
      handleRefresh: c,
      refreshedAccountIds: n
    }, e.id))
  })
}