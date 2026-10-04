import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ClubCard, EmptyState, CategoryFilter } from '@/components/campus/cards';
import { PageHeader } from '@/components/campus/layout';
import { pageHead } from '@/components/campus/seo';
import { clubs } from '@/data/campus';
export const Route=createFileRoute('/clubs')({head:()=>pageHead('Student Clubs','Discover student communities and clubs on CampusFlow.','/clubs'),component:ClubsPage});
function ClubsPage(){const [category,setCategory]=useState('All');const filtered=clubs.filter(c=>category==='All'||c.category===category);return <><PageHeader eyebrow="Find your people" title="There’s a club for that." description="Try something new, meet like-minded people and find your place outside the classroom."/><main className="page-wrap py-10"><CategoryFilter categories={['Coding','Robotics','Cultural','Sports','Literary','Entrepreneurship']} active={category} onChange={setCategory}/><p className="my-6 text-sm text-muted-foreground">{filtered.length} clubs found</p>{filtered.length?<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(item=><ClubCard key={item.id} item={item}/>)}</div>:<EmptyState/>}</main></>}
