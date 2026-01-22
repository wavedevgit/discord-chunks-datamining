/** Chunk was on 59195 **/
/** chunk id: 963765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./321073.js"), require("./228524.js"), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk933681 = require("./933681.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk409200 = require("./409200.jsx"),
  Chunk568185 = require("./568185.js"),
  Chunk219444 = require("./219444.js"),
  Chunk284738 = require("./284738.js"),
  Chunk95701 = require("./95701.js"),
  Chunk769765 = require("./769765.js"),
  Chunk71393 = require("./71393.js"),
  Chunk147036 = require("./147036.js"),
  Chunk488926 = require("./488926.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk205285 = require("./205285.js");

function R(e) {
  var t, n;
  let {
    guildId: R,
    transitionState: C,
    onSubmit: S,
    onClose: G
  } = e, [L, M] = i.useState(E._Ee), [k, w] = i.useState(E.rbe.GUILD_TEXT), [j, D] = i.useState(""), [N, O] = i.useState(false), U = (0, s.bG)([x.A], () => x.A.getGuild(R), [R]), H = (0, g.R)(R), V = (0, f.Vf)(U), B = i.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, i = [{
      icon: d.N$i,
      label: T.intl.string(T.t.pnuRXC),
      value: E.rbe.GUILD_TEXT,
      description: T.intl.string(T.t["Hf5Lb+"])
    }, {
      icon: d.HKD,
      label: T.intl.string(T.t.Sx55Oh),
      value: E.rbe.GUILD_VOICE,
      description: T.intl.string(T.t.pqfkoF)
    }];
    return t && i.push({
      icon: d.qux,
      label: T.intl.string(T.t.pNWst0),
      value: E.rbe.GUILD_STAGE_VOICE,
      description: T.intl.string(T.t.VPAwgo)
    }), i.push({
      icon: d.bSJ,
      label: T.intl.string(T.t.eAVID5),
      value: E.rbe.GUILD_FORUM,
      description: T.intl.string(T.t.iZ5pgg)
    }), n && i.push({
      icon: d.xfq,
      label: T.intl.string(T.t["6x6fVg"]),
      value: E.rbe.GUILD_MEDIA,
      description: T.intl.string(T.t.JyCrwS),
      isBeta: true
    }), i.map(e => {
      let {
        icon: t,
        label: n,
        value: i,
        description: r,
        isBeta: a
      } = e;
      return {
        name: (0, l.jsxs)("div", {
          className: I.OA,
          children: [(0, l.jsx)(t, {
            className: I.Kk
          }), (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(d.Text, {
              variant: "text-md/normal",
              color: "text-strong",
              children: [n, (0, l.jsx)(p.p, {
                isBeta: a
              })]
            }), (0, l.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              children: r
            })]
          })]
        }),
        value: i,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: H,
    canCreateMediaChannel: V
  }), [H, V]), K = (0, s.bG)([_.A], () => _.A.getCategories(R)._categories, [R]), W = i.useMemo(() => K.map(e => {
    let {
      channel: t
    } = e;
    return {
      id: t.id,
      value: t.id,
      label: t.name
    }
  }), [K]), q = null != (t = null == (n = B.find(e => e.value === k)) ? true : n.channelIcon) ? t : y.FX, X = "" !== j;
  return (0, l.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !X) return;
      O(true);
      let t = {
        type: k,
        name: j,
        parent_id: "null" !== L ? L : true,
        permission_overwrites: [{
          id: R,
          type: u.r2.ROLE,
          allow: A.x3,
          deny: E.xBc.VIEW_CHANNEL
        }]
      };
      m.A.post({
        url: E.Rsh.GUILD_CHANNELS(R),
        body: t,
        oldFormErrors: true,
        trackedActionData: {
          event: r.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, n;
            return (0, o.e0)({
              is_private: true,
              channel_id: null == e || null == (t = e.body) ? true : t.id,
              channel_type: null == e || null == (n = e.body) ? true : n.type
            })
          }
        },
        rejectWithError: true
      }).then(e => {
        b.A.checkGuildTemplateDirty(R), S(e.body.id), G()
      }, e => {}).finally(() => {
        O(false)
      })
    },
    children: (0, l.jsx)(a.Modal, {
      transitionState: C,
      title: T.intl.string(T.t["fUYU+j"]),
      onClose: G,
      actionBarInput: (0, l.jsx)(d.QWc, {
        text: T.intl.string(T.t["13/7kX"]),
        onClick: G
      }),
      actions: [{
        variant: "primary",
        text: T.intl.string(T.t["R3BPH+"]),
        loading: N,
        disabled: !X,
        type: "submit"
      }],
      children: (0, l.jsxs)(d.BJc, {
        gap: 16,
        children: [(0, l.jsx)(d.l6P, {
          label: T.intl.string(T.t.vHCZwr),
          placeholder: T.intl.string(T.t["g/Rr2S"]),
          value: L,
          options: W,
          onSelectionChange: M,
          selectionMode: "single",
          fullWidth: true
        }), (0, l.jsx)(c.$d, {
          label: T.intl.string(T.t["7ZcXG2"]),
          options: B,
          value: k,
          onChange: e => {
            let {
              value: t
            } = e;
            return w(t)
          }
        }), (0, l.jsx)(d.ksK, {
          label: T.intl.string(T.t.PVbHDl),
          value: j,
          onChange: function(e) {
            (0, h.ke)(k) && (e = (0, v.an)(e)), D(e)
          },
          maxLength: E.Ign,
          placeholder: T.intl.string(T.t["bw/b8E"]),
          leading: q,
          autoFocus: true
        })]
      })
    })
  })
}