import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Tài khoản mới</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1,024</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">So với tháng trước</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Số Phim mới</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">25</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">So với tháng trước</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Lượt xem</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">So với tháng trước</span>
            </div>
        </div>
    );
}
