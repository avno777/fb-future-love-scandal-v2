import React, { useState } from 'react'
import { CommentIcon, ShareIcon, ViewIcon } from '../../common/CustomIcon'

const PostHome = () => {
    const [isShowMore, setIsShowMore] = useState(false)
    return (
        <div className='col-span-3 grid grid-rows-2 gap-4'>
            <div className='bg-white rounded-[20px]'>
                <div className='mx-4 my-4'>
                    <img src='https://i.ibb.co/SdXf5B4/15319063-1870502259827840-8901988026005563692-n.jpg' className='w-full h-full rounded-[20px]' />
                </div>
                <div className='flex justify-between'>
                    <div className='flex ml-6 mt-2'>
                        <ViewIcon width={24} height={24} />
                        <p className='font-semibold'>13.2k views</p>
                    </div>
                    <div className='flex mr-6'>
                        <div className='flex'>
                            <div className='flex ml-6'>
                                <p className='font-semibold mr-2'>14</p>
                                <ShareIcon width={24} height={24} />
                            </div>
                            <div className='flex ml-6'>
                                <p className='font-semibold mr-2'>14</p>
                                <CommentIcon width={24} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t-2 border-b-2 border-gray-200 mt-6 mx-20 py-2 flex justify-center items-center gap-20'>
                    <div className='flex'>
                        <CommentIcon width={30} height={30} />
                        <p className='font-semibold mr-2 ml-2'>Comments</p>
                    </div>
                    <div className='flex'>
                        <ShareIcon width={30} height={30} />
                        <p className='font-semibold mr-2 ml-2'>Share</p>
                    </div>
                </div>
                <div className='flex mx-20 my-6'>
                    <img src='https://i.ibb.co/SdXf5B4/15319063-1870502259827840-8901988026005563692-n.jpg' className='w-[50px] h-[50px] rounded-full' />
                    <div className='w-full h-[50px] ml-4 px-5 py-3 rounded-[20px] bg-slate-100 flex'>
                        <input placeholder='Type a public comment' className='bg-slate-100 w-[80%] border-none outline-none' />
                        <div className='flex'>

                        </div>
                    </div>
                </div>
                <div className='mt-6 mx-20 flex'>
                    <img src='https://i.ibb.co/SdXf5B4/15319063-1870502259827840-8901988026005563692-n.jpg' className='w-[50px] h-[50px] rounded-full' />
                    <div className='w-full h-[70px] ml-4 px-5 py-2 rounded-[20px] bg-slate-100'>
                        <h2 className='text-slate-700'>username</h2>
                        <p className='font-bold mt-1'>Takes advantage of people's trust by borrowing and not returning t money.</p>
                    </div>
                </div>
                {isShowMore ? <><div className='mt-6 mx-20 flex'>
                    <img src='https://i.ibb.co/SdXf5B4/15319063-1870502259827840-8901988026005563692-n.jpg' className='w-[50px] h-[50px] rounded-full' />
                    <div className='w-full h-[70px] ml-4 px-5 py-2 rounded-[20px] bg-slate-100'>
                        <h2 className='text-slate-700'>username</h2>
                        <p className='font-bold mt-1'>Takes advantage of people's trust by borrowing and not returning t money.</p>
                    </div>
                </div>
                    <div className='mt-6 mx-20 flex'>
                        <img src='https://i.ibb.co/SdXf5B4/15319063-1870502259827840-8901988026005563692-n.jpg' className='w-[50px] h-[50px] rounded-full' />
                        <div className='w-full h-[70px] ml-4 px-5 py-2 rounded-[20px] bg-slate-100'>
                            <h2 className='text-slate-700'>username</h2>
                            <p className='font-bold mt-1'>Takes advantage of people's trust by borrowing and not returning t money.</p>
                        </div>
                    </div></> : ""}
                <div className='flex justify-center items-center mt-4 mb-4'>
                   {isShowMore? <button className='font-semibold' onClick={()=>setIsShowMore(false)}>View less comments ...</button>: <button onClick={()=>setIsShowMore(true)} className='font-semibold'>View more comments ...</button>}
                </div>
            </div>
        </div>
    )
}

export default PostHome