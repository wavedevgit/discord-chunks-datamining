/** Chunk was on 28589 **/
/** chunk id: 797671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk283693 = require("./283693.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk218613 = require("./218613.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk313201 = require("./313201.js"),
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

function B(e) {
  var t, n;
  let {
    guildId: B,
    transitionState: j,
    onSubmit: S,
    onClose: T
  } = e, D = (0, b.Dt)(), E = (0, b.Dt)(), R = (0, b.Dt)(), [k, M] = r.useState(v.Sc2), [H, G] = r.useState(v.d4z.GUILD_TEXT), [A, W] = r.useState(""), [U, O] = r.useState(false), Z = (0, o.e7)([g.Z], () => g.Z.getGuild(B), [B]), V = (0, m.m)(B), P = (0, h.Ui)(Z), z = r.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, r = [{
      icon: s.VL1,
      label: N.intl.string(N.t.pnuRXF),
      value: v.d4z.GUILD_TEXT,
      description: N.intl.string(N.t.Hf5Lb2)
    }, {
      icon: s.gj8,
      label: N.intl.string(N.t.Sx55Oj),
      value: v.d4z.GUILD_VOICE,
      description: N.intl.string(N.t.pqfkoK)
    }];
    return t && r.push({
      icon: s.ewx,
      label: N.intl.string(N.t.pNWst7),
      value: v.d4z.GUILD_STAGE_VOICE,
      description: N.intl.string(N.t.VPAwgo)
    }), r.push({
      icon: s.Mmi,
      label: N.intl.string(N.t.eAVIDw),
      value: v.d4z.GUILD_FORUM,
      description: N.intl.string(N.t.iZ5pgo)
    }), n && r.push({
      icon: s.XBm,
      label: N.intl.string(N.t["6x6fVl"]),
      value: v.d4z.GUILD_MEDIA,
      description: N.intl.string(N.t.JyCrwc),
      isBeta: true
    }), r.map(e => {
      let {
        icon: t,
        label: n,
        value: r,
        description: i,
        isBeta: o
      } = e;
      return {
        name: (0, a.jsxs)("div", {
          className: y.channelOptionWrapper,
          children: [(0, a.jsx)(t, {
            className: y.icon
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(s.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [n, (0, a.jsx)(_.p, {
                isBeta: o
              })]
            }), (0, a.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: i
            })]
          })]
        }),
        value: r,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: V,
    canCreateMediaChannel: P
  }), [V, P]), F = (0, o.e7)([x.Z], () => x.Z.getCategories(B)._categories, [B]), X = r.useMemo(() => F.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [F]), q = null != (n = null == (t = z.find(e => e.value === H)) ? true : t.channelIcon) ? n : C.Vq, J = "" !== A;
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !J) return;
      O(true);
      let t = {
        type: H,
        name: A,
        parent_id: "null" !== k ? k : true,
        permission_overwrites: [{
          id: B,
          type: u.BN.ROLE,
          allow: I.Hn,
          deny: v.Plq.VIEW_CHANNEL
        }]
      };
      L.Z.post({
        url: v.ANM.GUILD_CHANNELS(B),
        body: t,
        oldFormErrors: true,
        trackedActionData: {
          event: i.NetworkActionNames.CHANNEL_CREATE,
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
        p.Z.checkGuildTemplateDirty(B), S(e.body.id), T()
      }, e => {}).finally(() => {
        O(false)
      })
    },
    children: (0, a.jsx)(l.Modal, {
      transitionState: j,
      title: N.intl.string(N.t["fUYU+v"]),
      onClose: T,
      actionBarInput: (0, a.jsx)(s.Avr, {
        text: N.intl.string(N.t["13/7kZ"]),
        onClick: T
      }),
      actions: [{
        variant: "primary",
        text: N.intl.string(N.t.R3BPHx),
        loading: U,
        disabled: !J,
        type: "submit"
      }],
      children: (0, a.jsxs)(s.Kqy, {
        gap: 16,
        children: [(0, a.jsx)(s.xJW, {
          title: N.intl.string(N.t.vHCZws),
          titleId: D,
          children: (0, a.jsx)(s.q4e, {
            placeholder: N.intl.string(N.t["g/Rr2d"]),
            value: k,
            options: X,
            onChange: e => M(e),
            "aria-labelledby": D
          })
        }), (0, a.jsx)(s.xJW, {
          title: N.intl.string(N.t["7ZcXGx"]),
          titleId: E,
          children: (0, a.jsx)(s.FXm, {
            options: z,
            value: H,
            onChange: e => {
              let {
                value: t
              } = e;
              return G(t)
            },
            "aria-labelledby": E
          })
        }), (0, a.jsx)(s.xJW, {
          title: N.intl.string(N.t.PVbHDg),
          titleId: R,
          children: (0, a.jsx)(d.Is, {
            value: A,
            onChange: function(e) {
              (0, f.zi)(H) && (e = (0, w.Nj)(e)), W(e)
            },
            maxLength: v.HN8,
            placeholder: N.intl.string(N.t["bw/b8P"]),
            className: y.inputWrapper,
            inputClassName: y.inputInner,
            prefixElement: (0, a.jsx)(q, {
              className: y.inputPrefix,
              color: "currentColor",
              "aria-hidden": true
            }),
            "aria-labelledby": R,
            autoFocus: true
          })
        })]
      })
    })
  })
}