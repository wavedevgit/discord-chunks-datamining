/** Chunk was on 18824 **/
/** chunk id: 811085, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk531441 = require("./531441.js"),
  Chunk451284 = require("./451284.js"),
  Chunk959562 = require("./959562.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk627577 = require("./627577.js");

function j() {
  let t = (0, Chunk451284.P)(),
    e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [n, j] = Chunk73800.useState(36),
    p = Chunk73800.useRef({
      [Chunk531441.Sn.ALL_GOOD]: null,
      [Chunk531441.Sn.LIMITED]: null,
      [Chunk531441.Sn.VERY_LIMITED]: null,
      [Chunk531441.Sn.AT_RISK]: null,
      [Chunk531441.Sn.SUSPENDED]: null
    }),
    f = Chunk73800.useCallback(() => {
      j(Math.max(Math.max(...Object.values(p.current).map(t => {
        var e;
        return null != (e = null == t ? true : t.getBoundingClientRect().height) ? e : 36
      })), 36))
    }, []);
  Chunk73800.useEffect(() => {
    f();
    let t = (0, Chunk392711.debounce)(f, 100);
    window.addEventListener("resize", module)
  }, [f]);
  let v = {
      [Chunk531441.Sn.ALL_GOOD]: {
        title: Chunk388032.t.uaKrRk,
        description: Chunk388032.intl.format(Chunk388032.t.pEdBDw, {
          termsOfService: Chunk800530.sQ.TOS_LINK,
          communityGuidelines: Chunk800530.sQ.COMMUNITY_GUIDELINES
        }),
        status: Chunk388032.t["/Idfam"],
        Icon: Chunk481060.owK,
        color: Chunk692547.Z.colors.STATUS_POSITIVE
      },
      [Chunk531441.Sn.LIMITED]: {
        title: Chunk388032.t.epkcmZ,
        description: Chunk388032.intl.string(Chunk388032.t["774jub"]),
        status: Chunk388032.t.umleq6,
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.colors.STATUS_WARNING
      },
      [Chunk531441.Sn.VERY_LIMITED]: {
        title: Chunk388032.t.crzE2d,
        description: Chunk388032.intl.string(Chunk388032.t["T/Ufh4"]),
        status: Chunk388032.t.WBtMHR,
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.unsafe_rawColors.ORANGE_345
      },
      [Chunk531441.Sn.AT_RISK]: {
        title: Chunk388032.t.XRNVzM,
        description: Chunk388032.intl.string(Chunk388032.t["hbH+9f"]),
        status: Chunk388032.t["7f+4Li"],
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.colors.STATUS_DANGER
      },
      [Chunk531441.Sn.SUSPENDED]: {
        title: Chunk388032.t.MExFk5,
        description: Chunk388032.intl.string(Chunk388032.t["2liUvr"]),
        status: Chunk388032.t["0OONGB"],
        Icon: Chunk481060.k$p,
        color: Chunk692547.Z.colors.ICON_MUTED
      }
    },
    {
      title: N,
      description: S,
      color: b,
      Icon: E
    } = v[module.state],
    T = Object.keys(v).length;
  return <Chunk481060.Zbd className={Chunk627577.container} outline={false}>{<div className={Chunk627577.profile}><Chunk959562.Z user={exports} size={Chunk481060.EFr.SIZE_80} /></div>}{<div className={Chunk627577.status}>{<div className={Chunk627577.title}>{<Chunk481060.X6q color={"header-primary"} variant={"heading-lg/normal"}>{Chunk388032.intl.format(N, {
            hook: t => (0, s.jsx)(c.Text, {
              style: {
                color: b.css
              },
              variant: "heading-lg/bold",
              tag: "span",
              children: t
            })
          })}</Chunk481060.X6q>}{<Chunk481060.Text color={"text-default"} variant={"text-sm/normal"}>{S}</Chunk481060.Text>}</div>}{<div className={Chunk627577.health} style={{
          height: require
        }}>{<div className={Chunk627577.line} />}{Object.entries(v).map((e, n) => {
          let [i, a] = e, r = parseInt(i) === t.state;
          return <div className={g.statusOption} ref={t => {
              p.current[parseInt(i)] = t
            }}>{r ? <E className={g.marker} color={a.color} /> : <div className={g.marker} style={{
                marginLeft: 0 === n ? false : 0,
                marginRight: n === T - 1 ? false : 0
              }}><div className={g.empty} /></div>}{x.intl.format(a.status, {
              hook: t => <c.Text color={"text-default"} variant={"text-sm/normal"} className={g.statusLabel}>{t}</c.Text>
            })}</div>
        })}</div>}</div>}</Chunk481060.Zbd>
}