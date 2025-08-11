/** Chunk was on 86872 **/
/** chunk id: 588705, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => S,
  Z: () => A
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk686546 = require("./686546.js"),
  Chunk925329 = require("./925329.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk44609 = require("./44609.js"),
  Chunk47343 = require("./47343.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk888592 = require("./888592.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782770 = require("./782770.js");
let S = () => <Chunk73800.Fragment>{<Chunk388905.qE src={null} size={Chunk481060.EFr.DEPRECATED_SIZE_100} className={Chunk782770.avatar} />}{<Chunk388905.DK>{Chunk388032.intl.string(Chunk388032.t["3rE1Pz"])}</Chunk388905.DK>}{<Chunk388905.Dx className={Chunk782770.inviteResolvingGuildName}>{Chunk388032.intl.string(Chunk388032.t.ZTNur6)}</Chunk388905.Dx>}</Chunk73800.Fragment>,
  C = e => {
    let {
      guild: n,
      user: t,
      application: l,
      compact: a
    } = e;
    return null != l ? <c.Z className={j.appIcon} game={l} size={j.appIconSize} /> : null != t ? <s.qE src={null != t ? t.getAvatarURL(true, 80) : null} size={r.EFr.SIZE_80} className={a ? j.compactAvatar : j.avatar} /> : null != n ? <o.ZP mask={o.ZP.Masks.SQUIRCLE} width={64} height={64} className={j.guildIcon}><s.Vj guild={n} size={s.Vj.Sizes.LARGER} animate={true} /></o.ZP> : null
  },
  A = e => {
    var n;
    let t, l, o, {
        invite: c,
        disableUser: S = false,
        error: A,
        flatActivityCount: T = false,
        isRegister: L = false,
        inUnclaimedFlow: P = false
      } = e,
      {
        currentUser: b
      } = (0, a.cj)([g.default], () => ({
        currentUser: g.default.getCurrentUser()
      })),
      R = (0, d.WR)({
        location: "invite"
      }) && null != b;
    if (null == c) return null;
    let Z = null != c.guild ? N.lM(c.guild) ? c.guild : N.Qs(c.guild) : null,
      z = null != c.channel ? (0, p.jD)(c.channel) : null,
      M = null != c.target_application ? new _.ZP(c.target_application) : null,
      D = S || null == c.inviter ? null : new x.Z(c.inviter),
      k = !(null != c.approximate_member_count && c.approximate_member_count > 100 || null != Z && Z.features.has(E.oNc.COMMUNITY)) && null != D,
      O = null,
      U = false;
    if (null != Z) O = null == D ? f.intl.string(f.t["3rE1Pz"]) : f.intl.formatToPlainString(f.t["5u47vb"], {
      username: h.ZP.getFormattedName(D)
    }), c.target_type === v.Iq.STREAM && null != c.target_user && (O = f.intl.formatToPlainString(f.t.x2L32d, {
      username: h.ZP.getFormattedName(c.target_user)
    })), c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (O = null != D ? f.intl.formatToPlainString(f.t.UW1Cam, {
      username: h.ZP.getFormattedName(D)
    }) : f.intl.string(f.t.ENSuNz)), k && null == M && (t = <s.Vj className={j.icon} guild={Z} size={s.Vj.Sizes.SMALL} />), l = Z.name, null != M && (l = M.name, o = <div>{<s.DK className={j.appIn}>{f.intl.string(f.t["3gg9fH"])}</s.DK>}{<div className={j.guildContainer}>{<s.Vj guild={Z} size={s.Vj.Sizes.SMALL} />}{<r.Text tag={"span"} variant={"text-lg/normal"} color={"header-primary"} className={j.appGuildName}>{Z.name}</r.Text>}</div>}</div>);
    else if (null != z) {
      if (null == D) throw Error("no inviter in group DM invite");
      let e = h.ZP.getFormattedName(D);
      null != z.name && "" !== z.name ? (O = f.intl.formatToPlainString(f.t["5u47vb"], {
        username: e
      }), l = z.name, null != z.icon && (t = <s.MC channel={z} size={r.EFr.SIZE_32} />)) : (O = f.intl.string(f.t.OsdY8P), l = e)
    } else if (null != D) {
      let e = h.ZP.getFormattedName(D, true);
      l = f.intl.formatToPlainString(f.t["4aF92d"], {
        username: e
      }), U = true, o = null != A ? null : <s.DK className={j.directInviteSubTitle}>{L ? f.intl.format(f.t["6r4JiY"], {
          username: e
        }) : f.intl.format(f.t.Quj7HR, {
          username: e
        })}</s.DK>
    }
    return <div className={j.container}>{<C application={M} guild={Z} user={k ? D : null} compact={U} />}{null != A ? <i.Fragment>{<s.DK>{f.intl.string(f.t.mDFGFh)}</s.DK>}{<s.Dx>{A}</s.Dx>}</i.Fragment> : <i.Fragment>{<s.DK>{O}</s.DK>}{<s.Dx className={j.title}>{null != Z ? <u.Z guild={Z} className={j.guildBadge} tooltipPosition={"left"} /> : null}{t}{l}</s.Dx>}</i.Fragment>}{o}{null != M || U || (null == c || null == (n = c.guild) ? true : n.id) === I.fQ ? null : <s.EJ className={j.activityCount} online={c.approximate_presence_count} total={c.approximate_member_count} flat={T} />}{!P && R ? <m.R /> : <s.jQ user={b} />}</div>
  }