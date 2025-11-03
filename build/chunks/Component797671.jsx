/** Chunk was on 17474 **/
/** chunk id: 797671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk920454 = require("./920454.js");

function T(e) {
  var t, n;
  let {
    guildId: T,
    transitionState: I,
    onSubmit: N,
    onClose: R
  } = e, [B, S] = r.useState(E.Sc2), [j, D] = r.useState(E.d4z.GUILD_TEXT), [M, k] = r.useState(""), [Z, A] = r.useState(false), G = (0, o.e7)([m.Z], () => m.Z.getGuild(T), [T]), O = (0, g.m)(T), H = (0, h.Ui)(G), U = r.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, r = [{
      icon: u.VL1,
      label: y.intl.string(y.t.pnuRXC),
      value: E.d4z.GUILD_TEXT,
      description: y.intl.string(y.t["Hf5Lb+"])
    }, {
      icon: u.gj8,
      label: y.intl.string(y.t.Sx55Oh),
      value: E.d4z.GUILD_VOICE,
      description: y.intl.string(y.t.pqfkoF)
    }];
    return t && r.push({
      icon: u.ewx,
      label: y.intl.string(y.t.pNWst0),
      value: E.d4z.GUILD_STAGE_VOICE,
      description: y.intl.string(y.t.VPAwgo)
    }), r.push({
      icon: u.Mmi,
      label: y.intl.string(y.t.eAVID5),
      value: E.d4z.GUILD_FORUM,
      description: y.intl.string(y.t.iZ5pgg)
    }), n && r.push({
      icon: u.XBm,
      label: y.intl.string(y.t["6x6fVg"]),
      value: E.d4z.GUILD_MEDIA,
      description: y.intl.string(y.t.JyCrwS),
      isBeta: true
    }), r.map(e => {
      let {
        icon: t,
        label: n,
        value: r,
        description: l,
        isBeta: a
      } = e;
      return {
        name: (0, i.jsxs)("div", {
          className: L.channelOptionWrapper,
          children: [(0, i.jsx)(t, {
            className: L.icon
          }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(u.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [n, (0, i.jsx)(_.p, {
                isBeta: a
              })]
            }), (0, i.jsx)(u.Text, {
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
    canCreateStageChannel: O,
    canCreateMediaChannel: H
  }), [O, H]), V = (0, o.e7)([f.Z], () => f.Z.getCategories(T)._categories, [T]), W = r.useMemo(() => V.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [V]), q = null != (n = null == (t = U.find(e => e.value === j)) ? true : t.channelIcon) ? n : w.Vq, z = "" !== M;
  return (0, i.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !z) return;
      A(true);
      let t = {
        type: j,
        name: M,
        parent_id: "null" !== B ? B : true,
        permission_overwrites: [{
          id: T,
          type: d.BN.ROLE,
          allow: v.Hn,
          deny: E.Plq.VIEW_CHANNEL
        }]
      };
      C.Z.post({
        url: E.ANM.GUILD_CHANNELS(T),
        body: t,
        oldFormErrors: true,
        trackedActionData: {
          event: l.NetworkActionNames.CHANNEL_CREATE,
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
        p.Z.checkGuildTemplateDirty(T), N(e.body.id), R()
      }, e => {}).finally(() => {
        A(false)
      })
    },
    children: (0, i.jsx)(a.Modal, {
      transitionState: I,
      title: y.intl.string(y.t["fUYU+j"]),
      onClose: R,
      actionBarInput: (0, i.jsx)(u.Avr, {
        text: y.intl.string(y.t["13/7kX"]),
        onClick: R
      }),
      actions: [{
        variant: "primary",
        text: y.intl.string(y.t["R3BPH+"]),
        loading: Z,
        disabled: !z,
        type: "submit"
      }],
      children: (0, i.jsxs)(u.Kqy, {
        gap: 16,
        children: [(0, i.jsx)(u.q4e, {
          label: y.intl.string(y.t.vHCZwr),
          placeholder: y.intl.string(y.t["g/Rr2S"]),
          value: B,
          options: W,
          onChange: e => S(e)
        }), (0, i.jsx)(s.Gu, {
          label: y.intl.string(y.t["7ZcXG2"]),
          options: U,
          value: j,
          onChange: e => {
            let {
              value: t
            } = e;
            return D(t)
          }
        }), (0, i.jsx)(u.oil, {
          label: y.intl.string(y.t.PVbHDl),
          value: M,
          onChange: function(e) {
            (0, b.zi)(j) && (e = (0, x.Nj)(e)), k(e)
          },
          maxLength: E.HN8,
          placeholder: y.intl.string(y.t["bw/b8E"]),
          leading: q,
          autoFocus: true
        })]
      })
    })
  })
}