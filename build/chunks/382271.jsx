/** Chunk was on 86346 **/
/** chunk id: 382271, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  m: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk667202 = require("./667202.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk37234 = require("./37234.js"),
  Chunk518950 = require("./518950.js"),
  Chunk819640 = require("./819640.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk263885 = require("./263885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk404706 = require("./404706.js"),
  Chunk690813 = require("./690813.js");
let S = (e, t) => {
    x.Z.hasLayers() && (0, p.xf)(), m.Z.openPrivateChannel({
      recipientIds: e
    }), t()
  },
  y = e => {
    let {
      recipient: t,
      status: a,
      onClose: i
    } = e, {
      avatarSrc: n,
      eventHandlers: l
    } = (0, f.Z)({
      userId: null == t ? true : t.id,
      size: u.EFr.SIZE_56
    }), o = _.ZP.getName(t), c = a === R.Fz.FAIL;
    return <div className={E.trialRecipientRow}>{<u.qEK{...function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = a[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        imageClassName: s()({
          [E.erroredAvatar]: c
        }),
        src: n,
        "aria-label": o,
        size: u.EFr.SIZE_32
      }, l)} />}{c ? <r.Fragment>{<u.Text className={E.errorDisplayName} variant={"text-md/medium"} color={"text-primary"}>{o}</u.Text>}{<u.Text variant={"text-md/medium"} className={E.userName} color={"text-primary"}>{C.intl.format(C.t.RO3T4O, {
            userName: o
          })}</u.Text>}</r.Fragment> : <u.Text variant={"text-md/medium"} className={E.trialRecipientRowDisplayName} color={"text-primary"}>{o}</u.Text>}{<u.P3F onClick={() => S(t.id, i)} className={E.trialRecipientRowDMContainer}>{<u.kBi width={16} height={16} size={"custom"} />}{<u.Text variant={"text-md/medium"} className={E.trialRecipientRowDMCTA} color={"text-secondary"}>{C.intl.string(C.t["E+yYpq"])}</u.Text>}</u.P3F>}</div>
  },
  w = e => {
    let {
      results: t,
      onClose: a
    } = e, n = (0, l.e7)([j.Z], () => j.Z.getReferralsRemaining());
    b.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: s
    } = i.useContext(d.Sf);
    return null === n ? <u.$jN /> : <c.I graphic={s.enabled, {
        src: N.Z,
        type: "image"
      }} title={(() => {
        let e = C.intl.string(C.t.Pcb7KC),
          a = t.filter(e => e.status === R.Fz.SUCCESS).length;
        return n > 0 && (e = C.intl.formatToPlainString(C.t.iWtOfH, {
          numReferrals: a
        })), 0 === a && (e = C.intl.string(C.t["7VBEub"])), e
      })()} subtitle={C.intl.format(C.t.CZaMHh, {
        days: g.p,
        helpdeskArticle: h.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
      })} onClose={a} transitionState={o.D.ENTERED}><div className={E.trialRecipientContainer}>{t.map(e => (0, r.jsx)(y, {
          recipient: e.recipient,
          status: e.status,
          onClose: a
        }, e.recipient.id))}</div></c.I>
  }