/** Chunk was on 97161 **/
n.d(t, {
  C: () => i,
  s: () => c
});
var o = n(939639),
  a = n(99815),
  r = n(388032);

function i(e) {
  var t;
  return null != (t = ({
    [a.E.LOL_TOTAL_KILLS]: r.NW.string(r.t.aIbY2N),
    [a.E.LOL_TOTAL_DEATHS]: r.NW.string(r.t.Jec90d),
    [a.E.LOL_TOTAL_ASSISTS]: r.NW.string(r.t["8+lHWV"]),
    [a.E.LOL_TOTAL_DAMAGE_DEALT]: r.NW.string(r.t["XEmO+P"]),
    [a.E.LOL_TOTAL_DAMAGE_TAKEN]: r.NW.string(r.t["TcQ7//"]),
    [a.E.LOL_TOTAL_WINS]: r.NW.string(r.t["/QfLjI"]),
    [a.E.LOL_MAX_CREEP_SCORE]: r.NW.string(r.t.M5pp7e)
  })[e]) ? t : r.NW.string(r.t["IraB/v"])
}

function c(e) {
  let {
    statisticId: t,
    sortDesc: n,
    aggregationType: a
  } = e, c = i(t);
  if (a === o.k.MAX)
    if (n) return r.NW.formatToPlainString(r.t.nJYOFx, {
      statisticName: c
    });
    else return r.NW.formatToPlainString(r.t.SYKIbW, {
      statisticName: c
    });
  return n ? r.NW.formatToPlainString(r.t.M9sOp6, {
    statisticName: c
  }) : r.NW.formatToPlainString(r.t.USfwd3, {
    statisticName: c
  })
}