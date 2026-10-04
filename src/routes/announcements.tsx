import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { AnnouncementCard, EmptyState, CategoryFilter } from '@/components/campus/cards';
import { PageHeader } from '@/components/campus/layout';
import { pageHead } from '@/components/campus/seo';
import { announcements } from '@/data/campus';
export const Route=createFileRoute('/announcements')({head:()=>pageHead('Campus Announcements','Read the latest academic, examination and campus announcements.','/announcements'),component:AnnouncementsPage});
function AnnouncementsPage(){const [category,setCategory]=useState('All');const filtered=announcements.filter(a=>category==='All'||a.category===category);return <><PageHeader eyebrow="Campus bulletin" title="Stay in the know." description="The updates that matter, from exams and academics to opportunities and campus life."/><main className="page-wrap py-10"><CategoryFilter categories={['Academic','Examination','Events','Administration','Placement']} active={category} onChange={setCategory}/><p className="my-6 text-sm text-muted-foreground">{filtered.length} announcements found</p>{filtered.length?<div className="grid gap-4 md:grid-cols-2">{filtered.map(item=><AnnouncementCard key={item.id} item={item}/>)}</div>:<EmptyState/>}</main></>}
