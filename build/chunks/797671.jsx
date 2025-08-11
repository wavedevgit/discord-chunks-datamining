/** Chunk was on 18494 **/
/** chunk id: 797671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk720848 = require("./720848.js");

function E(e) {
  var t, n;
  let {
    guildId: E,
    transitionState: L,
    onSubmit: B,
    onClose: S
  } = e, w = (0, _.Dt)(), W = (0, _.Dt)(), G = (0, _.Dt)(), [T, A] = a.useState(C.Sc2), [M, U] = a.useState(C.d4z.GUILD_TEXT), [k, H] = a.useState(""), [O, P] = a.useState(false), Z = (0, o.e7)([g.Z], () => g.Z.getGuild(E), [E]), V = (0, f.m)(E), R = (0, h.Ui)(Z), z = a.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, a = [{
      icon: d.VL1,
      label: y.intl.string(y.t.pnuRXF),
      value: C.d4z.GUILD_TEXT,
      description: y.intl.string(y.t.Hf5Lb2)
    }, {
      icon: d.gj8,
      label: y.intl.string(y.t.Sx55Oj),
      value: C.d4z.GUILD_VOICE,
      description: y.intl.string(y.t.pqfkoK)
    }];
    return t && a.push({
      icon: d.ewx,
      label: y.intl.string(y.t.pNWst7),
      value: C.d4z.GUILD_STAGE_VOICE,
      description: y.intl.string(y.t.VPAwgo)
    }), a.push({
      icon: d.Mmi,
      label: y.intl.string(y.t.eAVIDw),
      value: C.d4z.GUILD_FORUM,
      description: y.intl.string(y.t.iZ5pgo)
    }), n && a.push({
      icon: d.XBm,
      label: y.intl.string(y.t["6x6fVl"]),
      value: C.d4z.GUILD_MEDIA,
      description: y.intl.string(y.t.JyCrwc),
      isBeta: true
    }), a.map(e => {
      let {
        icon: t,
        label: n,
        value: a,
        description: r,
        isBeta: o
      } = e;
      return {
        name: <div className={D.channelOptionWrapper}>{<t className={D.icon} />}{<div>{<d.Text variant={"text-md/normal"} color={"header-primary"}>{n}{<p.p isBeta={o} />}</d.Text>}{<d.Text variant={"text-xs/normal"} color={"header-secondary"}>{r}</d.Text>}</div>}</div>,
        value: a,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: V,
    canCreateMediaChannel: R
  }), [V, R]), F = (0, o.e7)([x.Z], () => x.Z.getCategories(E)._categories, [E]), X = a.useMemo(() => F.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [F]), q = null != (n = null == (t = z.find(e => e.value === M)) ? true : t.channelIcon) ? n : j.Vq, J = "" !== k;
  return <form onSubmit={function(e) {
      if (e.preventDefault(), !J) return;
      P(true);
      let t = {
        type: M,
        name: k,
        parent_id: "null" !== T ? T : true,
        permission_overwrites: [{
          id: E,
          type: u.BN.ROLE,
          allow: v.Hn,
          deny: C.Plq.VIEW_CHANNEL
        }]
      };
      N.Z.post({
        url: C.ANM.GUILD_CHANNELS(E),
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
        m.Z.checkGuildTemplateDirty(E), B(e.body.id), S()
      }, e => {}).finally(() => {
        P(false)
      })
    }}><l.Modal transitionState={L} title={y.intl.string(y.t["fUYU+v"])} onClose={S} actionBarInput={(0, i.jsx)(d.Avr, {
        text: y.intl.string(y.t["13/7kZ"]),
        onClick: S
      })} actions={[{
        variant: "primary",
        text: y.intl.string(y.t.R3BPHx),
        loading: O,
        disabled: !J,
        type: "submit"
      }]}><d.Kqy gap={16}>{<d.xJW title={y.intl.string(y.t.vHCZws)} titleId={w}><d.q4e placeholder={y.intl.string(y.t["g/Rr2d"])} value={T} options={X} onChange={e => A(e)} aria-labelledby={w} /></d.xJW>}{<d.xJW title={y.intl.string(y.t["7ZcXGx"])} titleId={W}><d.FXm options={z} value={M} onChange={e => {
              let {
                value: t
              } = e;
              return U(t)
            }} aria-labelledby={W} /></d.xJW>}{<d.xJW title={y.intl.string(y.t.PVbHDg)} titleId={G}><s.Is value={k} onChange={function(e) {
              (0, b.zi)(M) && (e = (0, I.Nj)(e)), H(e)
            }} maxLength={C.HN8} placeholder={y.intl.string(y.t["bw/b8P"])} className={D.inputWrapper} inputClassName={D.inputInner} prefixElement={(0, i.jsx)(q, {
              className: D.inputPrefix,
              color: "currentColor",
              "aria-hidden": true
            })} aria-labelledby={G} autoFocus={true} /></d.xJW>}</d.Kqy></l.Modal></form>
}