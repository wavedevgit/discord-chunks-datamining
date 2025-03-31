/** Chunk was on 95477 **/
n.d(t, {
  Z: () => l
}), n(301563);
var r = n(373232);
let o = {
    LATIN12: r.latin12CompactTimeStamp,
    LATIN24: r.latin24CompactTimeStamp,
    ASIAN: r.asianCompactTimeStamp
  },
  i = /(AM|PM)$/;

function l(e) {
  return null != e.match(i) ? o.LATIN24 : e.length <= 5 ? o.LATIN12 : o.ASIAN
}