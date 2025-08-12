/** Chunk was on 43889 **/
/** chunk id: 279875, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GuildSubscriptionSelectionModal: () => m
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk270144 = require("./270144.js"),
  Chunk689011 = require("./689011.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk813545 = require("./813545.js");

function m(e) {
  let {
    transitionState: t,
    onClose: n,
    sku: m,
    onSelect: p,
    currentGuildId: h
  } = e, [j, _] = s.useState(), {
    guilds: b,
    isFetching: g
  } = (0, d.CR)(m.applicationId, m.id, true), f = s.useMemo(() => {
    if (!g && null != h) return b.findIndex(e => {
      let {
        id: t
      } = e;
      return t === h
    }) >= 0
  }, [h, b, g]);
  s.useLayoutEffect(() => {
    f && _(h)
  }, [h, f]);
  let v = s.useMemo(() => {
    let e = [];
    for (let t of b) {
      let n = {
        value: t.id,
        label: t.name
      };
      f && t.id === h ? e.unshift(n) : e.push(n)
    }
    return e
  }, [h, b, f]);
  return (0, i.jsxs)(r.Y0X, {
    transitionState: t,
    size: r.CgR.SMALL,
    className: x.modal,
    parentComponent: "GuildSubscriptionSelectionModal",
    children: [(0, i.jsx)(c.t, {
      onClose: n
    }), (0, i.jsxs)(r.hzk, {
      className: x.content,
      children: [(0, i.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: x.breadCrumb,
        children: u.intl.string(u.t["xgtI/P"])
      }), (0, i.jsxs)("div", {
        className: x.selectionBody,
        children: [(0, i.jsx)(r.Text, {
          variant: "text-md/medium",
          children: u.intl.string(u.t.rAXXxM)
        }), (0, i.jsx)(r.Text, {
          variant: "eyebrow",
          children: u.intl.string(u.t["5qyruL"])
        }), g ? (0, i.jsx)(r.$jN, {
          type: r.$jN.Type.PULSING_ELLIPSIS,
          className: x.spinner
        }) : v.length > 0 ? (0, i.jsx)(r.VcW, {
          options: v,
          value: j,
          onChange: _,
          renderOptionPrefix: e => {
            let t = null == e ? true : e.value,
              n = null != t ? o.Z.getGuild(t) : null;
            return null == n ? null : (0, i.jsx)(a.Z, {
              guild: n,
              size: a.Z.Sizes.MINI
            })
          },
          renderOptionLabel: e => {
            let {
              label: t,
              value: n
            } = e;
            return (0, i.jsxs)("div", {
              children: [(0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                children: t
              }), n === h && (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: u.intl.string(u.t.RjtuAA)
              })]
            })
          }
        }) : (0, i.jsx)(r.Wn, {
          messageType: r.QYI.WARNING,
          children: (0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: u.intl.string(u.t.M2TbbG)
          })
        })]
      })]
    }), (0, i.jsxs)(r.mzw, {
      className: x.footer,
      children: [(0, i.jsx)(l.zx, {
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.MIN,
        className: x.closeBtn,
        onClick: n,
        children: u.intl.string(u.t.cpT0Cg)
      }), (0, i.jsx)(r.zxk, {
        variant: "primary",
        size: "sm",
        text: u.intl.string(u.t["cY+Ooa"]),
        disabled: null == j,
        onClick: function() {
          null != j && (p(j), n())
        }
      })]
    })]
  })
}