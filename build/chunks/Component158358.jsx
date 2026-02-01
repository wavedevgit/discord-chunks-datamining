/** Chunk was on 9207 **/
/** chunk id: 158358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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
    handleRefresh: o
  } = e, [c, d] = i.useState(false), _ = null != (t = n.metadata) ? t : {}, g = (0, l.bG)([m.default], () => m.default.locale), O = i.useCallback(async () => {
    d(true);
    try {
      await o(n)
    } finally {
      d(false)
    }
  }, [n, o]), x = null;
  switch (n.type) {
    case f.fg2.REDDIT:
      x = (0, p.xE)(_, E.Nz);
      break;
    case f.fg2.STEAM:
      x = (0, p.dy)(_, E.Nz);
      break;
    case f.fg2.TWITTER:
      x = (0, p.ED)(_, E.Nz);
      break;
    case f.fg2.EBAY:
      x = (0, p.ub)(_, E.Nz);
      break;
    case f.fg2.PAYPAL:
      x = (0, p.gZ)(_, E.Nz);
      break;
    case f.fg2.TIKTOK:
      x = (0, p.HU)(_, E.Nz)
  }
  let C = (0, u.An)(_[b.pK.CREATED_AT], g),
    S = null,
    T = h.intl.string(h.t.wzzjk9);
  return (null == x || 0 === x.length) && null == C && (S = (0, r.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: "text-default",
    children: h.intl.format(h.t.Up2ni7, {
      helpdeskUrl: A.A.getArticleURL(f.MVz.CONNECTION_DETAILS)
    })
  }, "label"), T = h.intl.string(h.t["LVh3/5"])), s && (T = h.intl.string(h.t.i4jeWR)), (0, r.jsxs)("div", {
    className: E.tJ,
    children: [S, null == x ? true : x.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < x.length - 1 ? (0, r.jsx)("span", {
        className: E.Om
      }) : null]
    })), null != x && x.length > 0 && null != C ? (0, r.jsx)("div", {
      className: E.Om
    }) : null, null != C ? (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: h.intl.format(h.t["9rfonh"], {
        date: C
      })
    }, "member-since") : null, (0, r.jsx)("div", {
      className: E.jy,
      children: (0, r.jsx)(a.Button, {
        size: "sm",
        variant: s ? "active" : "secondary",
        loading: c,
        disabled: s,
        "aria-label": h.intl.string(h.t.sCkLYH),
        onClick: O,
        text: T
      }, "refresh-button")
    })]
  })
}

function x(e) {
  let {
    account: t,
    handleRefresh: n,
    refreshedAccountIds: l
  } = e, [u, p] = i.useState(t.visibility), [m, g] = i.useState(t.metadataVisibility), A = (0, c.Ay)();
  i.useEffect(() => {
    p(t.visibility), g(t.metadataVisibility)
  }, [t]);
  let f = d.A.get(t.type),
    b = true === f.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: E.gd,
      children: [(0, r.jsx)("img", {
        alt: f.name,
        className: E.gj,
        src: (0, s.Mw)(A) ? f.icon.darkSVG : f.icon.lightSVG
      }), (0, r.jsxs)("div", {
        className: E.$n,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.dOG, {
            checked: 1 === u,
            onChange: function(e) {
              let {
                verified: n
              } = t, r = +!!e;
              if (e && !n) {
                p(r), (0, _.A)({
                  platformType: t.type,
                  location: "User Settings"
                });
                return
              }
              p(r), o.A.setVisibility(t.type, t.id, r)
            },
            label: f.name
          }), b && (0, r.jsx)(O, {
            account: t,
            refreshed: l.includes(t.id),
            handleRefresh: n
          })]
        }), b && (0, r.jsx)(a.dOG, {
          disabled: 1 !== u || null == t.metadata,
          checked: 1 === m,
          onChange: function(e) {
            let {
              verified: n
            } = t, r = +!!e;
            if (e && !n) {
              g(r), (0, _.A)({
                platformType: t.type,
                location: "User Settings"
              });
              return
            }
            g(r), o.A.setMetadataVisibility(t.type, t.id, r)
          },
          label: h.intl.string(h.t["3l78wo"])
        })]
      })]
    }), (0, r.jsx)(a.cGx, {})]
  })
}

function C() {
  let e = (0, l.bG)([g.A], () => g.A.getAccounts()),
    t = i.useMemo(() => e.filter(e => d.A.isSupported(e.type)), [e]),
    [n, s] = i.useState([]),
    c = i.useCallback(e => o.A.refresh(e.type, e.id).finally(() => {
      s(t => [...t, e.id])
    }), []);
  return 0 === t.length ? null : (0, r.jsx)(a.nVY, {
    className: E.kL,
    label: h.intl.string(h.t.aw0GVS),
    children: t.map(e => (0, r.jsx)(x, {
      account: e,
      handleRefresh: c,
      refreshedAccountIds: n
    }, e.id))
  })
}