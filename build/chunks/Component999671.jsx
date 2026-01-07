/** Chunk was on 67000 **/
/** chunk id: 999671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235820 = require("./235820.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk455199 = require("./455199.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    closePopout: t,
    onSelect: n
  } = e, i = (0, l.e7)([c.Z, u.Z], () => c.Z.getChannel(u.Z.getChannelId())), {
    everyoneFilter: a,
    roleFilter: p,
    guildFilter: g
  } = (0, l.cj)([d.ZP], () => {
    let {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    } = d.ZP;
    return {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    }
  });
  return (0, r.jsxs)(o.v2r, {
    navId: "mentions-filter",
    "aria-label": h.intl.string(h.t.pEasFX),
    onClose: t,
    onSelect: n,
    children: [(0, r.jsx)(o.S89, {
      id: "Everyone",
      label: h.intl.string(h.t.cdyUsV),
      action: function() {
        s.Z.setGuildFilter({
          everyoneFilter: !a
        })
      },
      checked: a
    }), (0, r.jsx)(o.S89, {
      id: "Roles",
      label: h.intl.string(h.t.lZejCq),
      action: function() {
        s.Z.setGuildFilter({
          roleFilter: !p
        })
      },
      checked: p
    }), null == i || i.isPrivate() ? null : (0, r.jsx)(o.S89, {
      id: "All Servers",
      label: h.intl.string(h.t.GWMA6s),
      action: function() {
        s.Z.setGuildFilter({
          guildFilter: g === f.NgX.THIS_SERVER ? f.NgX.ALL_SERVERS : f.NgX.THIS_SERVER
        })
      },
      checked: g === f.NgX.ALL_SERVERS
    })]
  })
}

function g() {
  let e = i.useRef(null);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: e,
    align: "right",
    animation: o.yRy.Animation.NONE,
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(p, {
        closePopout: t
      })
    },
    children: t => {
      let {
        onClick: n
      } = t;
      return (0, r.jsx)(a.u, {
        text: h.intl.string(h.t.pEasFX),
        targetElementRef: e,
        children: (0, r.jsx)(o.hU, {
          size: "sm",
          variant: "secondary",
          "aria-label": h.intl.string(h.t.pEasFX),
          color: o.YX$.TERTIARY,
          icon: o.gXV,
          onClick: n
        })
      })
    }
  })
}