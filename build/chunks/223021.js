/** Chunk was on 95477 **/
r.d(t, {
  Z: () => o
}), r(301563);
var n = r(432957);
let i = {
    LATIN12: n.latin12CompactTimeStamp,
    LATIN24: n.latin24CompactTimeStamp,
    ASIAN: n.asianCompactTimeStamp
  },
  a = /(AM|PM)$/;

function o(e) {
  return null != e.match(a) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
}