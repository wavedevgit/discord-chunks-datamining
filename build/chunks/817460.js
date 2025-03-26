/** Chunk was on 99120 **/
n.d(t, {
  JE: () => a,
  ab: () => l,
  iG: () => s,
  lL: () => u,
  rC: () => c
});
var r = n(293810),
  i = n(474936),
  o = n(388032);

function l(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function a(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  return o.NW.format(function(e) {
    switch (e) {
      case i.rV.DAY:
        return o.t["3rUmPT"];
      case i.rV.MONTH:
        return o.t["zuN54+"];
      case i.rV.YEAR:
        return o.t.cuSp8f
    }
  }(t), {
    count: n
  })
}

function s(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  switch (t) {
    case i.rV.DAY:
      if (n > 0 && n % 7 == 0) return o.NW.formatToPlainString(o.t.iVZYys, {
        weeks: n / 7
      });
      return o.NW.formatToPlainString(o.t.jzH70d, {
        days: n
      });
    case i.rV.MONTH:
      return o.NW.formatToPlainString(o.t.erUSmJ, {
        months: n
      });
    case i.rV.YEAR:
      return o.NW.formatToPlainString(o.t.IfYQVF, {
        years: n
      })
  }
}

function c(e) {
  return e.ref_type === r.Qs.CHANNEL
}

function u(e) {
  return e.ref_type === r.Qs.INTANGIBLE
}