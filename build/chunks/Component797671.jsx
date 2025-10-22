/** Chunk was on 99229 **/
/** chunk id: 797671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk283693 = require("./283693.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk241865 = require("./241865.jsx"),
  Chunk408987 = require("./408987.js"),
  Chunk312146 = require("./312146.js"),
  Chunk60222 = require("./60222.js"),
  Chunk131704 = require("./131704.js"),
  Chunk324067 = require("./324067.js"),
  Chunk430824 = require("./430824.js"),
  Chunk934415 = require("./934415.js"),
  Chunk700785 = require("./700785.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk17478 = require("./17478.js");

function y(e) {
  var t, n;
  let {
    guildId: y,
    transitionState: T,
    onSubmit: N,
    onClose: B
  } = e, [R, M] = r.useState(E.Sc2), [S, j] = r.useState(E.d4z.GUILD_TEXT), [D, k] = r.useState(""), [G, Z] = r.useState(false), A = (0, a.e7)([f.Z], () => f.Z.getGuild(y), [y]), H = (0, b.m)(y), O = (0, m.Ui)(A), U = r.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, r = [{
      icon: d.VL1,
      label: w.intl.string(w.t.pnuRXC),
      value: E.d4z.GUILD_TEXT,
      description: w.intl.string(w.t["Hf5Lb+"])
    }, {
      icon: d.gj8,
      label: w.intl.string(w.t.Sx55Oh),
      value: E.d4z.GUILD_VOICE,
      description: w.intl.string(w.t.pqfkoF)
    }];
    return t && r.push({
      icon: d.ewx,
      label: w.intl.string(w.t.pNWst0),
      value: E.d4z.GUILD_STAGE_VOICE,
      description: w.intl.string(w.t.VPAwgo)
    }), r.push({
      icon: d.Mmi,
      label: w.intl.string(w.t.eAVID5),
      value: E.d4z.GUILD_FORUM,
      description: w.intl.string(w.t.iZ5pgg)
    }), n && r.push({
      icon: d.XBm,
      label: w.intl.string(w.t["6x6fVg"]),
      value: E.d4z.GUILD_MEDIA,
      description: w.intl.string(w.t.JyCrwS),
      isBeta: true
    }), r.map(e => {
      let {
        icon: t,
        label: n,
        value: r,
        description: l,
        isBeta: o
      } = e;
      return {
        name: (0, i.jsxs)("div", {
          className: I.channelOptionWrapper,
          children: [(0, i.jsx)(t, {
            className: I.icon
          }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(d.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [n, (0, i.jsx)(_.p, {
                isBeta: o
              })]
            }), (0, i.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: l
            })]
          })]
        }),
        value: r,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: H,
    canCreateMediaChannel: O
  }), [H, O]), V = (0, a.e7)([g.Z], () => g.Z.getCategories(y)._categories, [y]), W = r.useMemo(() => V.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [V]), F = null != (n = null == (t = U.find(e => e.value === S)) ? true : t.channelIcon) ? n : L.Vq, q = "" !== D;
  return (0, i.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !q) return;
      Z(true);
      let t = {
        type: S,
        name: D,
        parent_id: "null" !== R ? R : true,
        permission_overwrites: [{
          id: y,
          type: u.BN.ROLE,
          allow: v.Hn,
          deny: E.Plq.VIEW_CHANNEL
        }]
      };
      C.Z.post({
        url: E.ANM.GUILD_CHANNELS(y),
        body: t,
        oldFormErrors: true,
        trackedActionData: {
          event: l.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, n;
            return (0, s.iG)({
              is_private: true,
              channel_id: null == e || null == (t = e.body) ? true : t.id,
              channel_type: null == e || null == (n = e.body) ? true : n.type
            })
          }
        },
        rejectWithError: true
      }).then(e => {
        p.Z.checkGuildTemplateDirty(y), N(e.body.id), B()
      }, e => {}).finally(() => {
        Z(false)
      })
    },
    children: (0, i.jsx)(o.Modal, {
      transitionState: T,
      title: w.intl.string(w.t["fUYU+j"]),
      onClose: B,
      actionBarInput: (0, i.jsx)(d.Avr, {
        text: w.intl.string(w.t["13/7kX"]),
        onClick: B
      }),
      actions: [{
        variant: "primary",
        text: w.intl.string(w.t["R3BPH+"]),
        loading: G,
        disabled: !q,
        type: "submit"
      }],
      children: (0, i.jsxs)(d.Kqy, {
        gap: 16,
        children: [(0, i.jsx)(d.q4e, {
          label: w.intl.string(w.t.vHCZwr),
          placeholder: w.intl.string(w.t["g/Rr2S"]),
          value: R,
          options: W,
          onChange: e => M(e)
        }), (0, i.jsx)(c.Gu, {
          label: w.intl.string(w.t["7ZcXG2"]),
          options: U,
          value: S,
          onChange: e => {
            let {
              value: t
            } = e;
            return j(t)
          }
        }), (0, i.jsx)(d.oil, {
          label: w.intl.string(w.t.PVbHDl),
          value: D,
          onChange: function(e) {
            (0, h.zi)(S) && (e = (0, x.Nj)(e)), k(e)
          },
          maxLength: E.HN8,
          placeholder: w.intl.string(w.t["bw/b8E"]),
          leading: F,
          autoFocus: true
        })]
      })
    })
  })
}