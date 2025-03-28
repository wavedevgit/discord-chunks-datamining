/** Chunk was on 95477 **/
r.d(t, {
  Z: () => l
}), r(301563);
var n = r(432957);
let o = {
    LATIN12: n.latin12CompactTimeStamp,
    LATIN24: n.latin24CompactTimeStamp,
    ASIAN: n.asianCompactTimeStamp
  },
  i = /(AM|PM)$/;

function l(e) {
  return null != e.match(i) ? o.LATIN24 : e.length <= 5 ? o.LATIN12 : o.ASIAN
}