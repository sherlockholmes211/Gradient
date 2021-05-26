import React from 'react'
import Card from './Card'
import { CardItemsWrapper,CardItemsHeader,CardItemsGrid } from './CarditemsElements'
const CardItems = () => {
    return (
        <CardItemsWrapper>
            <CardItemsHeader>Latest at Tangent</CardItemsHeader>
            <CardItemsGrid>
                <Card title="Article" desc="Why you must find your North Star Metric" url={"//images.ctfassets.net/95zc810djopr/3qjSsauO7A0aBch5nXMIQ3/ab38731a60a1e6387d1ad410f8f9cd13/LinkedIn_cover_-_1__2_.png"} />
                <Card title="Article" desc="Creating a new sales platform for a global workforce" url={"//images.ctfassets.net/95zc810djopr/7b9VVKsNw3pDqW3bGQ8MWn/a175019211a3f25aebc549326d644a7b/Desktop_HD_2x.jpg"} />
                <Card title="Article" desc="The Agency Advantage: 5 benefits of an agency treating your site as their own" url={"//images.ctfassets.net/95zc810djopr/g1IGs7ynWI2LxddjXEOfK/c25526635ad85b9cdbb852c5aab3e747/Linkedin__2_.png"} />
                <Card title="Article" desc="Adding the human element to tech-powered hiring" url={"//images.ctfassets.net/95zc810djopr/41ysE1YECoCCg6TujuM3Py/1075990476de4972c97f52cd51a10c6d/hero-image.png"} />
                <Card title="Article" desc="Scale or fail: How to build disaster-proof websites" url={"//images.ctfassets.net/95zc810djopr/4f4vT6GqvRRZcMvJoOn0Ao/f52ae5c1131f89ed57aba26b44196a03/Scale_or_fail_share_LI.png"} />
                <Card title="Article" desc="UK Power Networks - 24/7 Support" url={"//images.ctfassets.net/95zc810djopr/5Dpi6IDJ8QJCecDqZ9KhTR/dbea487783815cf2abce12a9ce7c75f9/UKPN_247_linkedin.jpg"} />
            </CardItemsGrid>
        </CardItemsWrapper>
    )
}

export default CardItems
