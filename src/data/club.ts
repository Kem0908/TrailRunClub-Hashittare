import heroAlps from "@/assets/hero-alps-ridge.jpg";
import fieldSatoyama from "@/assets/field-satoyama.jpg";
import fieldSaigawa from "@/assets/field-saigawa-morning.jpg";
import fieldAlps from "@/assets/field-alps.jpg";
import reportIizuna from "@/assets/report-iizuna.jpg";
import reportTogakushi from "@/assets/report-togakushi.jpg";
import reportSoba from "@/assets/report-soba.jpg";

export const images = {
  heroAlps,
  fieldSatoyama,
  fieldSaigawa,
  fieldAlps,
  reportIizuna,
  reportTogakushi,
  reportSoba,
};

export const club = {
  name: "トレランクラブ【走ったれ】",
  nameShort: "走ったれ",
  latin: "Hashittare",
  tagline: "Shinshu / Nagano Trail Running Club",
  fee: "山に対する熱い気持ち（0円）",
  instagram: "https://instagram.com/",
  x: "https://x.com/",
};

export type Level = "初級" | "中級";

export type UpcomingEvent = {
  date: string; // ISO yyyy-mm-dd
  start: string;
  kind: "朝練" | "山行" | "イベント";
  level: Level;
  title: string;
  place: string;
  distance: string;
  note: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    date: "2026-11-22",
    start: "6:00",
    kind: "朝練",
    level: "初級",
    title: "犀川河川敷モーニングラン",
    place: "長野市・犀川河川敷",
    distance: "約8〜12km / フラット",
    note: "ロード用シューズでOK。冷え込むので手袋を。",
  },
  {
    date: "2026-11-29",
    start: "8:00",
    kind: "山行",
    level: "初級",
    title: "地附山〜大峰山 里山周回",
    place: "長野市里山エリア",
    distance: "約12km / D+700m",
    note: "下山後は善光寺門前でおやき休憩。",
  },
  {
    date: "2026-12-06",
    start: "6:00",
    kind: "朝練",
    level: "初級",
    title: "犀川河川敷モーニングラン",
    place: "長野市・犀川河川敷",
    distance: "約8〜12km / フラット",
    note: "初参加の方はこの回がおすすめです。",
  },
  {
    date: "2026-12-13",
    start: "8:30",
    kind: "山行",
    level: "中級",
    title: "葛山 冬の稜線トレイル",
    place: "長野市・葛山周辺",
    distance: "約16km / D+1,000m",
    note: "積雪状況により軽アイゼン必携。",
  },
  {
    date: "2026-12-27",
    start: "9:00",
    kind: "イベント",
    level: "初級",
    title: "走り納め & 温泉忘年会",
    place: "長野市里山〜市内温泉",
    distance: "約8km / ゆっくり",
    note: "一年の振り返りと来年のレース相談。",
  },
];

export const regularSessions = [
  {
    label: "週末朝練",
    when: "毎週 土曜または日曜 6:00〜",
    where: "長野市・犀川河川敷",
    detail: "約8〜12km / フラット・ロード中心。基礎体力づくりと交流の場。",
    level: "初級" as Level,
  },
  {
    label: "里山トレイル",
    when: "月1〜2回（土日祝）",
    where: "地附山・大峰山・葛山など",
    detail: "約12km / 累積標高 約700m。急な登りは無理せず歩いて進みます。",
    level: "初級" as Level,
  },
  {
    label: "山岳トレイル",
    when: "月1〜2回（北信・中信・東信遠征）",
    where: "北アルプス周辺・信州の山域",
    detail: "約18〜25km / 累積標高 1,200m〜。レース完走を目指す方のステップアップに。",
    level: "中級" as Level,
  },
];

export type Report = {
  slug: string;
  date: string;
  title: string;
  area: string;
  stats: string;
  members: number;
  image: string;
  excerpt: string;
  body: string[];
};

export const reports: Report[] = [
  {
    slug: "iizuna-autumn-2026",
    date: "2026-10-18",
    title: "紅葉の飯縄山、山頂で11人の笑顔",
    area: "飯縄山（1,917m）",
    stats: "約14km / D+1,100m",
    members: 11,
    image: reportIizuna,
    excerpt:
      "色づき始めた飯縄山へ。登りはしっかり歩き、下りは落ち葉の上を軽やかに。山頂からは北アルプスまで一望できました。",
    body: [
      "朝7時、一の鳥居苑地に集合。この日は初参加の方を含めて11人。気温は低めでしたが、歩き出してすぐに体が温まりました。",
      "中腹から上は紅葉がちょうど見頃。急登区間はおしゃべりしながらゆっくり歩き、山頂では北アルプスの稜線と善光寺平を眺めながら補給タイム。",
      "下りは落ち葉で滑りやすいので、ペースを落として安全第一。下山後はみんなで温泉に浸かり、次の山の相談で盛り上がりました。",
    ],
  },
  {
    slug: "togakushi-kodo-2026",
    date: "2026-09-21",
    title: "霧の戸隠古道、杉並木を抜けて",
    area: "戸隠・奥社参道〜古道",
    stats: "約16km / D+800m",
    members: 8,
    image: reportTogakushi,
    excerpt:
      "樹齢400年の杉並木から始まる戸隠古道ラン。霧に包まれた森の中、静かな時間を走りました。",
    body: [
      "戸隠神社奥社の参道入口からスタート。朝霧に包まれた杉並木は、何度来ても息をのむ美しさです。",
      "古道は木の根や石段が多く、足さばきの練習にぴったり。経験者がラインの取り方をアドバイスしながら進みました。",
      "ゴール後はもちろん戸隠そば。走ったあとのそばは格別です。",
    ],
  },
  {
    slug: "after-run-soba-2026",
    date: "2026-08-30",
    title: "トレイルグルメ部、下山後のそば屋めぐり",
    area: "長野市里山〜鬼無里",
    stats: "約10km / D+600m",
    members: 6,
    image: reportSoba,
    excerpt:
      "走ったあとのお楽しみ。里山を軽めに走り、地元のそば屋さんへ。走ったれ名物のグルメ回です。",
    body: [
      "この日は「走るのは軽めに、食べるのはしっかり」がテーマ。里山を10kmほど、景色を楽しみながら走りました。",
      "目的地は地元で人気の手打ちそば屋さん。テラス席で山を眺めながらいただくそばは最高でした。",
      "こうした回は初心者の方にもおすすめ。まずは雰囲気を知りたい方はぜひ。",
    ],
  },
  {
    slug: "hakuba-alps-2026",
    date: "2026-07-26",
    title: "残雪の北アルプス、白馬の稜線へ",
    area: "北アルプス・白馬周辺",
    stats: "約22km / D+1,600m",
    members: 7,
    image: fieldAlps,
    excerpt:
      "ステップアップコースとして北アルプスへ遠征。残雪と高山植物の中、雲上の稜線を走りました。",
    body: [
      "中級メンバー中心の遠征回。早朝に長野市を出発し、白馬の登山口へ。",
      "森林限界を超えると、残雪と高山植物が広がる別世界。天候の変化に備えて、レインウェアの着脱を何度も確認しました。",
      "長い一日でしたが、全員無事に下山。秋のレースに向けて大きな自信になりました。",
    ],
  },
];

export type Member = {
  name: string;
  role: string;
  since: string;
  home: string;
  favorite: string;
  comment: string;
};

export const members: Member[] = [
  {
    name: "ケン",
    role: "代表",
    since: "2021",
    home: "長野市",
    favorite: "飯縄山",
    comment: "山を走る楽しさを、仲間と分かち合いたい。初心者の方こそ大歓迎です。",
  },
  {
    name: "ミホ",
    role: "朝練リーダー",
    since: "2022",
    home: "長野市",
    favorite: "犀川河川敷",
    comment: "朝6時の河川敷は空気が最高。ゆっくりペースで一緒に走りましょう。",
  },
  {
    name: "タカ",
    role: "山行リーダー",
    since: "2021",
    home: "千曲市",
    favorite: "北アルプス 白馬三山",
    comment: "安全第一でステップアップ。レース完走のお手伝いをします。",
  },
  {
    name: "ユウ",
    role: "グルメ担当",
    since: "2023",
    home: "須坂市",
    favorite: "戸隠古道",
    comment: "下山後のそばと温泉のために走っています。おすすめ店ならお任せを。",
  },
  {
    name: "アヤ",
    role: "メンバー",
    since: "2024",
    home: "長野市",
    favorite: "地附山",
    comment: "ロード10kmから始めて、今年は初めてトレイルレースを完走しました。",
  },
  {
    name: "シン",
    role: "装備アドバイザー",
    since: "2022",
    home: "小布施町",
    favorite: "葛山",
    comment: "シューズやザック選びで迷ったら気軽に相談してください。",
  },
];

export const fields = [
  {
    name: "長野市里山トレイル",
    area: "地附山・大峰山・葛山など",
    level: "初級" as Level,
    stats: "約12km / D+700m",
    image: fieldSatoyama,
    text: "市街地からすぐの里山。木の根や落ち葉の道で、トレイルの基本を楽しく身につけられます。",
  },
  {
    name: "北アルプス・信州山岳",
    area: "北信・中信・東信の山域",
    level: "中級" as Level,
    stats: "約18〜25km / 絶景＆グルメ",
    image: fieldAlps,
    text: "森林限界を超える稜線、残雪と高山植物。レース完走を目指すステップアップの舞台です。",
  },
  {
    name: "犀川河川敷モーニング",
    area: "長野市・犀川河川敷",
    level: "初級" as Level,
    stats: "土日 朝6:00〜 基礎練",
    image: fieldSaigawa,
    text: "朝霧の川沿いを走る週末の定番練。走力づくりとメンバー同士の交流の場です。",
  },
];

export const gear = [
  { name: "トレランシューズ", note: "不整地・木の根・岩場でもしっかりグリップする専用シューズ" },
  { name: "トレランザック", note: "水分・補給食・レインウェアが無理なく収まるランニングパック" },
  { name: "水分 1L以上", note: "ソフトフラスクやハイドレーション、ペットボトル等で1L以上確保" },
  { name: "レインウェア", note: "山の急な天候変化や稜線の冷え込みに備える必須の防風・防水着" },
  { name: "熊鈴", note: "長野の里山・山岳エリアを安全に走るための重要な安全対策アイテム" },
  { name: "楽しむ気持ち", note: "これが一番大切！自然と仲間との時間を全力で楽しむ熱い気持ち" },
];

export const faqs = [
  {
    q: "トレイルランニング初心者ですが参加できますか？",
    a: "はい、大歓迎です！当クラブは初心者〜中級者が中心で、ロードで10km程度走れる方なら無理なく楽しめる里山コース（約12km・累積標高700m目安）も開催しています。急な登りはみんなで歩いて進みますので安心してご参加ください。",
  },
  {
    q: "参加費は本当に無料ですか？",
    a: "はい、クラブとしての参加費は「山に対する熱い気持ち（0円）」です！ただし、集合場所までの交通費（乗り合い時のガソリン代等）や、下山後の温泉代・トレイルグルメ代などは各自実費となります。",
  },
  {
    q: "土曜・日曜朝6時からの犀川河川敷の練習だけの参加でも大丈夫ですか？",
    a: "もちろん大歓迎です！まずは週末朝の犀川河川敷ランニング練習に顔を出していただき、メンバーと走力や雰囲気を合わせてから里山・山岳トレイルへステップアップされる方もたくさんいます。",
  },
  {
    q: "持ち物・必須装備について教えてください。",
    a: "トレイルラン参加時は「トレランシューズ・ザック・水分1L以上・レインウェア・熊鈴・楽しむ気持ち」が必須装備となります。犀川河川敷のロード練習時は通常のランニングシューズと飲み物でOKです。また、山行時は各自での山岳保険・スポーツ保険への加入を推奨しています。",
  },
];

export const joinSteps = [
  {
    title: "練習・イベントを選ぶ",
    text: "「土曜・日曜朝6時の犀川河川敷ラン」または「月1〜2回の里山・山岳トレイル」から、参加したい回を選びます。",
  },
  {
    title: "装備を整えて参加連絡",
    text: "必須装備（シューズ・ザック・水分1L以上・レインウェア・熊鈴）と「楽しむ気持ち」を用意して、フォームまたはSNSからご連絡ください。",
  },
  {
    title: "集合して一緒に走ったれ！",
    text: "集合場所で挨拶とコース確認をしたらいざスタート！自分のペースを大切に、信州の自然と仲間との時間を満喫しましょう。",
  },
];

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

export function formatDateParts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return {
    year: y,
    month: m,
    day: d,
    weekday: WEEKDAYS[date.getUTCDay()],
    monthLatin: date.toLocaleString("en-US", { month: "short", timeZone: "UTC" }),
  };
}

export function formatDateJa(iso: string) {
  const p = formatDateParts(iso);
  return `${p.year}.${String(p.month).padStart(2, "0")}.${String(p.day).padStart(2, "0")}（${p.weekday}）`;
}
