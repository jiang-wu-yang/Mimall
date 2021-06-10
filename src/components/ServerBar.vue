<template>
    <div class="server">
        <div class="container">
            <ul>
                <li>
                    <span class="icon-setting"></span>预约维修
                </li>
                <li>
                    <span class="icon-7day"></span>预约维修
                </li>
                <li>
                    <span class="icon-15day"></span>预约维修
                </li>
                <li>
                    <span class="icon-post"></span>150包邮
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'server-bar'
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
.server{
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    li{
        display: inline-block;
        width: 24.9%;
        text-align: center;
        border-right: 1px solid #e5e5e5;
        span{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: center;
            margin-right: 8px;
        }
        .icon-setting{
            @include bgimg(20px,20px,'/imgs/icon-setting.png');
        }
        .icon-7day{
            @include bgimg(20px,20px,'/imgs/icon-7day.png');
        }
        .icon-15day{
            @include bgimg(20px,20px,'/imgs/icon-15day.png');
        }
        .icon-post{
            @include bgimg(20px,20px,'/imgs/icon-post.png');
        }
    }
}
</style>

