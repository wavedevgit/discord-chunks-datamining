/** Chunk was on 75708 **/
/** chunk id: 731934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./953529.js"), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk785681 = require("./785681.js"),
  Chunk485664 = require("./485664.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk895328 = require("./895328.js"),
  Chunk568671 = require("./568671.jsx"),
  Chunk419821 = require("./419821.jsx"),
  Chunk367515 = require("./367515.jsx"),
  Chunk250285 = require("./250285.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk134612 = require("./134612.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk589608 = require("./589608.js"),
  Chunk34997 = require("./34997.js"),
  Chunk20493 = require("./20493.js"),
  Chunk926895 = require("./926895.js");

function y(e) {
  let {
    header: t,
    description: n,
    stepNumber: r
  } = e;
  return <div className={T.step}>{<div className={T.stepNumber}><c.X6q variant={"heading-md/semibold"} color={"text-brand"}><c.y5t>{r}</c.y5t></c.X6q></div>}{<div>{<c.X6q variant={"heading-sm/bold"}><c.y5t>{t}</c.y5t></c.X6q>}{<c.Text variant={"text-sm/medium"} color={"text-muted"}>{n}</c.Text>}</div>}</div>
}

function A() {
  return <div className={a()(Chunk34997.box, Chunk589608.box, Chunk34997.linkingBanner, Chunk34997.linkingBannerParent)}>{<div className={Chunk34997.linkingBannerUpper}>{<div>{<Chunk481060.X6q className={Chunk20493.marginBottom8} variant={"heading-xl/medium"}><Chunk481060.y5t>{Chunk388032.intl.string(Chunk916723.default.pHEnV1)}</Chunk481060.y5t></Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/medium"} color={"text-muted"} className={Chunk20493.marginBottom20}>{Chunk388032.intl.string(Chunk916723.default["1J/gZ2"])}</Chunk481060.Text>}</div>}{<img className={Chunk34997.bannerArt} src={Chunk926895} alt={Chunk388032.intl.string(Chunk916723.default["r+PDmp"])} />}</div>}{<div className={Chunk34997.steps}>{<y header={Chunk388032.intl.string(Chunk916723.default["7xxAnp"])} description={Chunk388032.intl.string(Chunk916723.default["1M9So6"])} stepNumber={1} />}{<y header={Chunk388032.intl.string(Chunk916723.default["AXgx+f"])} description={Chunk388032.intl.string(Chunk916723.default.GzMFnZ)} stepNumber={2} />}{<y header={Chunk388032.intl.string(Chunk916723.default.MZn1tL)} description={Chunk388032.intl.string(Chunk916723.default["8rLBxM"])} stepNumber={3} />}</div>}</div>
}

function P() {
  let e = (0, Chunk631885.VM)();
  return <div className={a()(Chunk34997.box, Chunk589608.box, Chunk34997.linkingBanner)}>{<div>{<Chunk481060.X6q className={Chunk20493.marginBottom8} variant={"heading-xl/medium"}><Chunk481060.y5t>{Chunk388032.intl.string(Chunk916723.default.zUCWEB)}</Chunk481060.y5t></Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/medium"} color={"text-muted"} className={Chunk20493.marginBottom20}>{Chunk388032.intl.format(Chunk916723.default.yMnoDg, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })}</Chunk481060.Text>}{module ? null : <Chunk568671.Z />}</div>}{<img className={Chunk34997.bannerArt} src={Chunk926895} alt={Chunk388032.intl.string(Chunk916723.default["r+PDmp"])} />}</div>
}

function R(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: s
  } = e, a = r.useRef(null), l = "".concat(t, "-list"), m = (0, d.Z)(l), p = r.useCallback(e => {
    let {
      row: n,
      listIndex: r
    } = e, a = s[n], l = r === s.length;
    return null == a ? null : <j.Z userId={a.id} isLast={l}>{() => t === E.ne.ACTIVE ? (0, i.jsx)(x.u, {
        user: a
      }) : (0, i.jsx)(_.B, {
        user: a
      })}</j.Z>
  }, [s, t]), g = r.useCallback(() => <u.Z><c.Text className={I.marginBottom8} variant={"eyebrow"} color={"header-secondary"}>{n}</c.Text></u.Z>, [n]);
  return <div className={T.section}><o.bG navigator={m}><o.SJ>{e => {
          var {
            ref: t,
            role: r
          } = e, o = function(e, t) {
            if (null == e) return {};
            var n, i, r = function(e, t) {
              if (null == e) return {};
              var n, i, r = {},
                s = Object.keys(e);
              for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
          }(e, ["ref", "role"]);
          return (0, i.jsx)(c.aVo, function(e) {
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
          }({
            innerRole: r,
            innerAriaLabel: n,
            ref: e => {
              var n;
              a.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
            },
            sectionHeight: E.zE,
            rowHeight: E.ip,
            renderSection: g,
            renderRow: p,
            sections: [s.length],
            chunkSize: 30,
            fade: true
          }, o), l)
        }}</o.SJ></o.bG></div>
}
let D = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      n = module ? Chunk292352.AG : Chunk292352.i0,
      r = {
        count: exports.length,
        max: require
      },
      s = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk916723.default["+tnO39"], Chunk73800), Chunk388032.intl.formatToPlainString(Chunk916723.default["pu6/U1"], Chunk73800));
    return exports.length > 0 ? <R sectionType={Chunk292352.ne.ACTIVE} sectionTitle={Chunk120356} requests={exports} /> : <div className={Chunk34997.section}>{<Chunk481060.Text className={Chunk20493.marginBottom8} variant={"eyebrow"} color={"header-secondary"}>{Chunk120356}</Chunk481060.Text>}{<div className={Chunk34997.box}><Chunk895328.Z text={Chunk388032.intl.string(Chunk916723.default.C4ScLC)} /></div>}</div>
  },
  Z = () => {
    let e = (0, Chunk631885.VM)(),
      t = (0, Chunk880257.Z)() ? Chunk292352.AG : Chunk292352.i0,
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk916723.default["1/PzIi"], {
        maxConnections: exports
      }), Chunk388032.intl.formatToPlainString(Chunk916723.default.RcTgiI, {
        maxConnections: exports
      }));
    return module ? <div className={Chunk34997.maxConnectionInfo}><Chunk481060.Text variant={"text-xxs/medium"} color={"text-muted"}>{require}</Chunk481060.Text></div> : null
  },
  w = () => {
    let e = (0, Chunk485664.o)(),
      t = (0, Chunk485664.Q)(),
      n = (0, Chunk278074.EQ)({
        helpline: module,
        throughline: exports
      }).with({
        helpline: true
      }, () => Chunk388032.intl.format(Chunk916723.default.KOwsf3, {
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })).with({
        throughline: true
      }, () => Chunk388032.intl.format(Chunk916723.default["6tsC8v"], {
        helpLink: Chunk134612.$l
      })).otherwise(() => null);
    return null == require ? null : <div className={a()(Chunk34997.__invalid_helpLineInfo, Chunk20493.marginTop20)}>{<Chunk481060.X6q className={Chunk34997.supportHeader} variant={"heading-sm/semibold"}><Chunk481060.y5t>{Chunk388032.intl.string(Chunk916723.default["7/tVho"])}</Chunk481060.y5t></Chunk481060.X6q>}{<Chunk481060.Text variant={"text-xs/medium"} color={"text-muted"}>{require}</Chunk481060.Text>}</div>
  },
  k = () => {
    let e = (0, Chunk631885.mq)(Chunk292352.ne.PENDING),
      t = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk916723.default.IkAgkJ, {
        count: module.length
      }), Chunk388032.intl.formatToPlainString(Chunk916723.default.Q8XnAQ, {
        count: module.length
      }));
    return 0 === module.length ? null : <R sectionType={Chunk292352.ne.PENDING} sectionTitle={exports} requests={module} />
  },
  L = () => {
    let e = (0, Chunk880257.Z)();
    return <div className={Chunk34997.container}>{module ? <A /> : <P />}{<D />}{<k />}{<Z />}{<w />}</div>
  }