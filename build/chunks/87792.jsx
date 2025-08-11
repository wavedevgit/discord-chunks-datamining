/** Chunk was on 75708 **/
/** chunk id: 87792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk914788 = require("./914788.js"),
  Chunk546791 = require("./546791.js"),
  Chunk259756 = require("./259756.js"),
  Chunk785681 = require("./785681.js"),
  Chunk985002 = require("./985002.js"),
  Chunk858719 = require("./858719.js"),
  Chunk780985 = require("./780985.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk240351 = require("./240351.js"),
  Chunk792258 = require("./792258.js"),
  Chunk657825 = require("./657825.js"),
  Chunk198952 = require("./198952.js"),
  Chunk329242 = require("./329242.js"),
  Chunk895328 = require("./895328.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.js"),
  Chunk608308 = require("./608308.js"),
  Chunk589608 = require("./589608.js");

function R() {
  let e = Chunk73800.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("66462").then(require.bind(require, 756226));
      return t => <e{...function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, t)} />
    })
  }, []);
  return <Chunk481060.P3F className={Chunk608308.tooltip} onClick={module}><Chunk481060.d3s size={"custom"} color={"currentColor"} className={Chunk608308.icon} width={15} height={15} /></Chunk481060.P3F>
}

function D(e) {
  let {
    displayType: t
  } = e, n = r.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(y.intl.string(N.default.Wu8BKy), o.ToastType.FAILURE))
  }, []), s = (0, x.Z)(), l = (0, f.ws)(t), c = (0, f.C7)(t), {
    loadMore: u,
    isMoreLoading: g
  } = (0, h.G)({
    onError: n
  }), b = T.tx.get(t), [_, j] = r.useState(T.iB), O = (0, p.Xi)({
    location: "family_center_activity_section_web"
  }), v = r.useCallback(() => {
    j(e => e + T.iB), u(t)
  }, [t, u]);
  a()(b, "No text for action type");
  let S = b.sectionHeader(c),
    I = r.useCallback(e => {
      let {
        row: t
      } = e, n = l[t];
      return (0, m.iB)(n) ? <C.Z userId={n.entity_id} timestamp={d.default.extractTimestamp(n.event_id)} timestampFormatter={b.timestampFormatter} /> : (0, m.f0)(n) ? <E.Z guildId={n.entity_id} /> : true
    }, [l, b.timestampFormatter]),
    P = r.useCallback(() => <i.Fragment>{<o.Text className={A.sectionHeader} variant={"eyebrow"} color={"header-secondary"}>{S}</o.Text>}{true !== b.sectionDescription ? <o.Text className={A.sectionDescription} variant={"text-md/medium"} color={"text-muted"}>{b.sectionDescription(null != s && s, O)}</o.Text> : null}</i.Fragment>, [S, b, s, O]);
  if (0 === l.length) return null;
  let R = l.slice(0, _);
  return <div className={A.actionSection}>{P()}{<div className={A.actions} style={{
        maxHeight: 65 * R.length
      }}>{R.map((e, t) => I({
        row: t
      }))}</div>}{R.length !== c ? <o.P3F className={A.loadMoreBar} onClick={v} role={"button"}>{g ? (0, i.jsx)(o.$jN, {
        type: o.$jN.Type.PULSING_ELLIPSIS,
        className: A.spinner
      }) : (0, i.jsx)(o.Text, {
        className: A.loadMore,
        variant: "text-sm/bold",
        children: y.intl.format(N.default["7dMmJS"], {
          pageSize: Math.min(c - R.length, T.iB)
        })
      })}</o.P3F> : null}</div>
}
let Z = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk916723.default["7hqFl5"], {
        activeLinks: exports.length
      }), Chunk388032.intl.string(Chunk916723.default["Q/D/0d"])),
      r = (0, Chunk546791.Qr)(!!module),
      s = (0, Chunk631885.Rd)(Chunk73800);
    return module && exports.length > 1 ? <Chunk481060.Text variant={"eyebrow"}>{Chunk512722}</Chunk481060.Text> : <Chunk255367.Fragment>{module ? null : <Chunk481060.tEF size={"xs"} color={"currentColor"} className={Chunk608308.icon} />}{<Chunk481060.Text variant={"eyebrow"}>{require}</Chunk481060.Text>}</Chunk255367.Fragment>
  },
  w = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: r = o.EFr.SIZE_40
    } = e, s = (0, b.I)(t);
    return true === s ? null : <div className={A.accountRow}>{<O.r user={s} avatarSize={r} />}{<div className={A.headerText}>{<v.Z user={s} />}{true !== n ? <o.Text variant={"text-sm/medium"} color={"text-muted"}>{n}</o.Text> : null}</div>}</div>
  },
  k = () => {
    let e = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      s = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      a = Chunk73800.useCallback(e => <w userId={e.value} avatarSize={o.EFr.SIZE_24} />, []);
    return <Chunk481060.PhF className={Chunk608308.select} renderOptionLabel={a} renderOptionValue={e => {
        let [t] = e;
        return a(t)
      }} serialize={e => e} select={e => {
        n(e), c.default.track(I.rMx.FAMILY_CENTER_ACTION, {
          action: T.YC.SelectTeen
        })
      }} isSelected={e => e === t} options={Chunk512722} />
  },
  L = e => {
    let {
      userId: t
    } = e, n = (0, x.Z)(), r = (0, _.mq)(T.ne.ACTIVE), s = (0, m.Qr)(!!n), a = (0, _.Rd)(s);
    return n && 1 !== r.length ? <k /> : <w userId={t} subText={a} />
  },
  M = e => {
    let {
      user: t
    } = e, n = Array.from(T.tx.entries()), r = (0, f.kE)(), s = (0, m.t3)(), a = (0, _.Rd)(s);
    return <div className={A.container}>{<div className={A.connectedCounter}>{<Z />}{<R />}</div>}{<div className={P.box}>{<div className={A.header}><L userId={t.id} /></div>}{<div className={A.content}>{<div className={A.activityCounterRow}>{n.map(e => {
              let [t, n] = e;
              return (0, i.jsx)(j.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })}</div>}{<div className={A.activityOverview}>{r ? n.map(e => {
              let [t] = e;
              return (0, i.jsx)(D, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, i.jsx)(S.Z, {
              className: A.emptyActivity,
              text: null != a ? a : ""
            })}</div>}</div>}</div>}</div>
  }