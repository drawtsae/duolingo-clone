const data =[
    {
        question:'1._______ to come over for dinner tonight?',
        options: ['a. Do you want','b. Are you wanting ','c. Have you wanted ','d. Will you want'],
        correct_option:'a. Do you want',
        note:['Giải thích:','Come over= ghé qua','Lời mời: Do you want + to do sth: bạn có muốn (làm gì) không?','Tạm dịch: Bạn có muốn qua ăn tối hôm nay không?','Đáp án: A']
    },
    {
        question:'2.When I _______ home last night, I _______ that Jane _______ a beautiful candlelight dinner.',
        options: ['a. had arrived / discovered / prepared','b. was arriving / had discovered / was preparing','c. have arrived / was discovering / had prepared','d. arrived / discovered / was preparing'],
        correct_option:'d. arrived / discovered / was preparing',
        note:['Giải thích:','Vế câu đầu tiên có “last night” nên ta dùng thì quá khứ đơnS','Vế câu thứ 2 ta dùng thì quá khứ đơn và quá khứ tiếp diễn. Để diễn tả một hành động đang xảy ra trong quá khứ dùng quá khứ tiếp diễn, thì có một hành động khác xen vào dùng quá khứ đơn','Tạm dịch: Khi tôi về đến nhà tối hôm qua, tôi nhận thấy Jane đang chuẩn bị bữa tối tuyệt vời dưới ánh nến.','Đáp án: D']
    },
    {
        question:'3.    In the past the trip _______ very rough and often dangerous, but things _______ a great deal in the last hundred and fifty years.',
        options: ['a. was / have changed ','b. is / change','c. had been / will change','d. has been / changed'],
        correct_option:'a. was / have changed ',
        note:['Giải thích:','Vế trước của câu có xuất hiện cụm từ “In the past” nên động từ cần chia đầu tiên phải được chia ở thì quá khứ đơn để chỉ hành động diễn ra trong quá khứ. Ở vế sau của câu, hành động “change” đã diễn ra trong quá khứ, tiếp tục đến hiện tại nên động từ cần chia phải được chia ở thì hiện tại hoàn thành. In the last hundred and fifty years(dấu hệu thì hiện tại hoàn thành).','Tạm dịch: Trước đây việc di chuyển rất vất vả và nguy hiểm, nhưng mọi thứ đã trở nên rất tuyệt trong vòng 150 năm trở lại đây ', 'Đáp án: A']
    },
    {
        question:'4.    In the last hundred years, traveling _______ much easier and more comfortable.',
        options: ['a. becomes ','b. has become','c. became','d. will become'],
        correct_option:'b. has become',
        note:['Giải thích:','Hiện tại hoàn thành nhấn mạnh kết quả của hành động có dấu hiệu về thời gian “in the last hundred years”.”.','Dịch: Trong vòng 100 năm, du lịch càng ngày càng trở nên dễ dàng và thoải mái.','Đáp án: B']
    },
    {
        question:' -------------- in Rome than he --------------- . ',
        options: ['a. No sooner he had arrived / was being kidnapped','b. No sooner had he arrived / was  kidnapped ','c. Had he no sooner  arrived / kidnapped','d. No sooner was he  arriving / had being kidnapped'],
        correct_option:'b. No sooner had he arrived / was  kidnapped ',
        note:['Giải thích:','Cấu trúc: No sooner + had + S + Ved/V3 than S + Ved/V2','=> No sooner had he arrived in Rome than he was kidnapped','Tạm dịch: Ngay sau khi anh ấy đã đến Rome, anh ta bị bắt cóc.','Đáp án cần chọn là: B']
    },
    {
        question:'6.   I have not met her for three years .   - Means ------------------------.',
        options: ['A. It is three years when I will meet her .','B. I did not meet her three years ago ','C. During three years , I met her once  .','D. The last time I met her was three years ago'],
        correct_option:'D. The last time I met her was three years ago',
        note:['Giải thích:','S + have/ has + not P2 + for + a period of time.: Ai đó đã không làm gì bao lâu rồi','= The last time + S + V_ed was + a period of time + ago.: Lần cuối ai đó làm gì là khi nào','Tạm dịch: Tôi đã không gặp cô ấy trong 3 năm.','A. Đã 3 năm khi tôi sẽ gặp cô ấty. => sai nghĩa','B. Tôi đã không gặp cô ấy 3 năm trước. => sai nghĩa ','C. Trong suốt 3 năm, tôi đã gặp cô ấy 1 lần. => sai nghĩa.','D. Lần cuối tôi gặp cô ấy là 3 năm trước.','Đáp án cần chọn là: D']
    },
    {
        question:'7.   By this tie next summer, you _______ your studies.',
        options: ['A. completes','B. will complete','C. are completing','D. will have completed'],
        correct_option:'D. will have completed',
        note:['Giải thích:','Ta dùng thì tương lai hoàn thành để diễn tả một hành động sẽ xảy ra trong tương lai trước một thời điểm/một hành động nào đó','Dấu hiệu: by + mốc thời gian trong tương lai','Tạm dịch: Đến thời điểm này vào mùa hè tới, bạn sẽ học xong.','Đáp án cần chọn là: D']
    },
    {
        question:'8.When I _______ home last night, I _______ that Jane _______ a beautiful candlelight dinner.',
        options: ['A. had arrived / discovered / prepared','B. was arriving / had discovered / was preparing','C. have arrived / was discovering / had prepared','D. arrived / discovered / was preparing'],
        correct_option:'D. arrived / discovered / was preparing',
        note:['Giải thích:','Vế câu đầu tiên có “last night” nên ta dùng thì quá khứ đơn','Vế câu thứ 2 ta dùng thì quá khứ đơn và quá khứ tiếp diễn để diễn tả một hành động đang xảy ra trong quá khứ thì có một hành động khác xen vào','Tạm dịch: Khi tôi về đến nhà tối hôm qua, tôi nhận thấy Jane đang chuẩn bị bữa tối tuyệt vời dưới ánh nến.','Đáp án cần chọn là: D']
    },
    {
        question:'9.  They _______ for 3 hours when the storm suddenly broke.',
        options: ['A. had been running ','B. have been running','C. are running','D. will be running'],
        correct_option:'A. had been running ',
        note:['Giải thích:','Thì hiện tại hoàn thành tiếp diễn hành động bắt đầu ở quá khứ và còn đang tiếp tục ở hiện tại (nhấn mạnh tính liên tục).','Cấu trúc: S + have/has + been + V.ing','Tạm dịch: Họ đã chạy trong 3 giờ khi cơn bão đột ngột đến','Đáp án cần chọn là: A']
    },
    {
        question:"10.   I (A) [didn’t see] Frank  (B)[since]  (C) [he and his wife]  (D) [moved to] London . Haven’t seen",
        options: ['A','B','C','D'],
        correct_option:'A',
        note:['Giải chi tiết:','Didn’t see => haven’t seen.','Since: dấu hiệu nhận biết của thì hiện tại hoàn thành.']
    },

]























































































































export default data