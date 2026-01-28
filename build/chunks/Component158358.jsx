/** Chunk was on 5606 **/
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

function x(e) {
  var t;
  let {
    account: n,
    refreshed: s,
    handleRefresh: o
  } = e, [c, d] = i.useState(false), p = null != (t = n.metadata) ? t : {}, g = (0, l.bG)([m.default], () => m.default.locale), x = i.useCallback(async () => {
    d(true);
    try {
      await o(n)
    } finally {
      d(false)
    }
  }, [n, o]), O = null;
  switch (n.type) {
    case b.fg2.REDDIT:
      O = (0, _.xE)(p, E.Nz);
      break;
    case b.fg2.STEAM:
      O = (0, _.dy)(p, E.Nz);
      break;
    case b.fg2.TWITTER:
      O = (0, _.ED)(p, E.Nz);
      break;
    case b.fg2.EBAY:
      O = (0, _.ub)(p, E.Nz);
      break;
    case b.fg2.PAYPAL:
      O = (0, _.gZ)(p, E.Nz);
      break;
    case b.fg2.TIKTOK:
      O = (0, _.HU)(p, E.Nz)
  }
  let C = (0, u.An)(p[h.pK.CREATED_AT], g),
    y = null,
    j = A.intl.string(A.t.wzzjk9);
  return (null == O || 0 === O.length) && null == C && (y = (0, r.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: "text-default",
    children: A.intl.format(A.t.Up2ni7, {
      helpdeskUrl: f.A.getArticleURL(b.MVz.CONNECTION_DETAILS)
    })
  }, "label"), j = A.intl.string(A.t["LVh3/5"])), s && (j = A.intl.string(A.t.i4jeWR)), (0, r.jsxs)("div", {
    className: E.tJ,
    children: [y, null == O ? true : O.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < O.length - 1 ? (0, r.jsx)("span", {
        className: E.Om
      }) : null]
    })), null != O && O.length > 0 && null != C ? (0, r.jsx)("div", {
      className: E.Om
    }) : null, null != C ? (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: A.intl.format(A.t["9rfonh"], {
        date: C
      })
    }, "member-since") : null, (0, r.jsx)("div", {
      className: E.jy,
      children: (0, r.jsx)(a.Button, {
        size: "sm",
        variant: s ? "active" : "secondary",
        loading: c,
        disabled: s,
        "aria-label": A.intl.string(A.t.sCkLYH),
        onClick: x,
        text: j
      }, "refresh-button")
    })]
  })
}

function O(e) {
  let {
    account: t,
    handleRefresh: n,
    refreshedAccountIds: l
  } = e, [u, _] = i.useState(t.visibility), [m, g] = i.useState(t.metadataVisibility), f = (0, c.Ay)();
  i.useEffect(() => {
    _(t.visibility), g(t.metadataVisibility)
  }, [t]);
  let b = d.A.get(t.type),
    h = true === b.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: E.gd,
      children: [(0, r.jsx)("img", {
        alt: b.name,
        className: E.gj,
        src: (0, s.Mw)(f) ? b.icon.darkSVG : b.icon.lightSVG
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
                _(r), (0, p.A)({
                  platformType: t.type,
                  location: "User Settings"
                });
                return
              }
              _(r), o.A.setVisibility(t.type, t.id, r)
            },
            label: b.name
          }), h && (0, r.jsx)(x, {
            account: t,
            refreshed: l.includes(t.id),
            handleRefresh: n
          })]
        }), h && (0, r.jsx)(a.dOG, {
          disabled: 1 !== u || null == t.metadata,
          checked: 1 === m,
          onChange: function(e) {
            let {
              verified: n
            } = t, r = +!!e;
            if (e && !n) {
              g(r), (0, p.A)({
                platformType: t.type,
                location: "User Settings"
              });
              return
            }
            g(r), o.A.setMetadataVisibility(t.type, t.id, r)
          },
          label: A.intl.string(A.t["3l78wo"])
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
    label: A.intl.string(A.t.aw0GVS),
    children: t.map(e => (0, r.jsx)(O, {
      account: e,
      handleRefresh: c,
      refreshedAccountIds: n
    }, e.id))
  })
}