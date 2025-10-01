/** Chunk was on 31288 **/
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
  Chunk218613 = require("./218613.jsx"),
  Chunk911969 = require("./911969.js"),
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
  Chunk920454 = require("./920454.js");

function y(e) {
  var t, n;
  let {
    guildId: y,
    transitionState: T,
    onSubmit: N,
    onClose: B
  } = e, [R, M] = a.useState(C.Sc2), [j, D] = a.useState(C.d4z.GUILD_TEXT), [S, k] = a.useState(""), [Z, G] = a.useState(false), A = (0, o.e7)([f.Z], () => f.Z.getGuild(y), [y]), H = (0, m.m)(y), O = (0, h.Ui)(A), U = a.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, a = [{
      icon: d.VL1,
      label: I.intl.string(I.t.pnuRXF),
      value: C.d4z.GUILD_TEXT,
      description: I.intl.string(I.t.Hf5Lb2)
    }, {
      icon: d.gj8,
      label: I.intl.string(I.t.Sx55Oj),
      value: C.d4z.GUILD_VOICE,
      description: I.intl.string(I.t.pqfkoK)
    }];
    return t && a.push({
      icon: d.ewx,
      label: I.intl.string(I.t.pNWst7),
      value: C.d4z.GUILD_STAGE_VOICE,
      description: I.intl.string(I.t.VPAwgo)
    }), a.push({
      icon: d.Mmi,
      label: I.intl.string(I.t.eAVIDw),
      value: C.d4z.GUILD_FORUM,
      description: I.intl.string(I.t.iZ5pgo)
    }), n && a.push({
      icon: d.XBm,
      label: I.intl.string(I.t["6x6fVl"]),
      value: C.d4z.GUILD_MEDIA,
      description: I.intl.string(I.t.JyCrwc),
      isBeta: true
    }), a.map(e => {
      let {
        icon: t,
        label: n,
        value: a,
        description: r,
        isBeta: l
      } = e;
      return {
        name: (0, i.jsxs)("div", {
          className: L.channelOptionWrapper,
          children: [(0, i.jsx)(t, {
            className: L.icon
          }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(d.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [n, (0, i.jsx)(u.p, {
                isBeta: l
              })]
            }), (0, i.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: r
            })]
          })]
        }),
        value: a,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: H,
    canCreateMediaChannel: O
  }), [H, O]), V = (0, o.e7)([g.Z], () => g.Z.getCategories(y)._categories, [y]), W = a.useMemo(() => V.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [V]), F = null != (n = null == (t = U.find(e => e.value === j)) ? true : t.channelIcon) ? n : E.Vq, q = "" !== S;
  return (0, i.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !q) return;
      G(true);
      let t = {
        type: j,
        name: S,
        parent_id: "null" !== R ? R : true,
        permission_overwrites: [{
          id: y,
          type: p.BN.ROLE,
          allow: v.Hn,
          deny: C.Plq.VIEW_CHANNEL
        }]
      };
      w.Z.post({
        url: C.ANM.GUILD_CHANNELS(y),
        body: t,
        oldFormErrors: true,
        trackedActionData: {
          event: r.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, n;
            return (0, c.iG)({
              is_private: true,
              channel_id: null == e || null == (t = e.body) ? true : t.id,
              channel_type: null == e || null == (n = e.body) ? true : n.type
            })
          }
        },
        rejectWithError: true
      }).then(e => {
        _.Z.checkGuildTemplateDirty(y), N(e.body.id), B()
      }, e => {}).finally(() => {
        G(false)
      })
    },
    children: (0, i.jsx)(l.Modal, {
      transitionState: T,
      title: I.intl.string(I.t["fUYU+v"]),
      onClose: B,
      actionBarInput: (0, i.jsx)(d.Avr, {
        text: I.intl.string(I.t["13/7kZ"]),
        onClick: B
      }),
      actions: [{
        variant: "primary",
        text: I.intl.string(I.t.R3BPHx),
        loading: Z,
        disabled: !q,
        type: "submit"
      }],
      children: (0, i.jsxs)(d.Kqy, {
        gap: 16,
        children: [(0, i.jsx)(d.q4e, {
          label: I.intl.string(I.t.vHCZws),
          placeholder: I.intl.string(I.t["g/Rr2d"]),
          value: R,
          options: W,
          onChange: e => M(e)
        }), (0, i.jsx)(s.Gu, {
          label: I.intl.string(I.t["7ZcXGx"]),
          options: U,
          value: j,
          onChange: e => {
            let {
              value: t
            } = e;
            return D(t)
          }
        }), (0, i.jsx)(d.oil, {
          label: I.intl.string(I.t.PVbHDg),
          value: S,
          onChange: function(e) {
            (0, b.zi)(j) && (e = (0, x.Nj)(e)), k(e)
          },
          maxLength: C.HN8,
          placeholder: I.intl.string(I.t["bw/b8P"]),
          leading: F,
          autoFocus: true
        })]
      })
    })
  })
}