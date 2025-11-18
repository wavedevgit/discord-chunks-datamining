/** Chunk was on 99229 **/
/** chunk id: 797671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function I(e) {
  var t, n;
  let {
    guildId: I,
    transitionState: L,
    onSubmit: R,
    onClose: S
  } = e, [j, N] = i.useState(E.Sc2), [M, k] = i.useState(E.d4z.GUILD_TEXT), [D, Z] = i.useState(""), [A, B] = i.useState(false), G = (0, a.e7)([m.Z], () => m.Z.getGuild(I), [I]), O = (0, g.m)(I), H = (0, h.Ui)(G), U = i.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, i = [{
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
    return t && i.push({
      icon: u.ewx,
      label: y.intl.string(y.t.pNWst0),
      value: E.d4z.GUILD_STAGE_VOICE,
      description: y.intl.string(y.t.VPAwgo)
    }), i.push({
      icon: u.Mmi,
      label: y.intl.string(y.t.eAVID5),
      value: E.d4z.GUILD_FORUM,
      description: y.intl.string(y.t.iZ5pgg)
    }), n && i.push({
      icon: u.XBm,
      label: y.intl.string(y.t["6x6fVg"]),
      value: E.d4z.GUILD_MEDIA,
      description: y.intl.string(y.t.JyCrwS),
      isBeta: true
    }), i.map(e => {
      let {
        icon: t,
        label: n,
        value: i,
        description: r,
        isBeta: o
      } = e;
      return {
        name: (0, l.jsxs)("div", {
          className: T.channelOptionWrapper,
          children: [(0, l.jsx)(t, {
            className: T.icon
          }), (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(u.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [n, (0, l.jsx)(p.p, {
                isBeta: o
              })]
            }), (0, l.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: r
            })]
          })]
        }),
        value: i,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: O,
    canCreateMediaChannel: H
  }), [O, H]), V = (0, a.e7)([b.Z], () => b.Z.getCategories(I)._categories, [I]), W = i.useMemo(() => V.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [V]), q = null != (n = null == (t = U.find(e => e.value === M)) ? true : t.channelIcon) ? n : w.Vq, z = "" !== D;
  return (0, l.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !z) return;
      B(true);
      let t = {
        type: M,
        name: D,
        parent_id: "null" !== j ? j : true,
        permission_overwrites: [{
          id: I,
          type: d.BN.ROLE,
          allow: v.Hn,
          deny: E.Plq.VIEW_CHANNEL
        }]
      };
      C.Z.post({
        url: E.ANM.GUILD_CHANNELS(I),
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
        _.Z.checkGuildTemplateDirty(I), R(e.body.id), S()
      }, e => {}).finally(() => {
        B(false)
      })
    },
    children: (0, l.jsx)(o.Modal, {
      transitionState: L,
      title: y.intl.string(y.t["fUYU+j"]),
      onClose: S,
      actionBarInput: (0, l.jsx)(u.Avr, {
        text: y.intl.string(y.t["13/7kX"]),
        onClick: S
      }),
      actions: [{
        variant: "primary",
        text: y.intl.string(y.t["R3BPH+"]),
        loading: A,
        disabled: !z,
        type: "submit"
      }],
      children: (0, l.jsxs)(u.Kqy, {
        gap: 16,
        children: [(0, l.jsx)(u.q4e, {
          label: y.intl.string(y.t.vHCZwr),
          placeholder: y.intl.string(y.t["g/Rr2S"]),
          value: j,
          options: W,
          onChange: e => N(e)
        }), (0, l.jsx)(s.Gu, {
          label: y.intl.string(y.t["7ZcXG2"]),
          options: U,
          value: M,
          onChange: e => {
            let {
              value: t
            } = e;
            return k(t)
          }
        }), (0, l.jsx)(u.oil, {
          label: y.intl.string(y.t.PVbHDl),
          value: D,
          onChange: function(e) {
            (0, f.zi)(M) && (e = (0, x.Nj)(e)), Z(e)
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